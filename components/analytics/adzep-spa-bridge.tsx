"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  activateAdZep,
  hasRenderedCreative,
  pageHasAdUnits,
  waitForContainers,
} from "@/lib/ads/activate-adzep";
import { adZepConfig, isArticlePath, isExcludedPath } from "@/lib/ads/config";

// Probe a handful of containers for creative render
function anyContainerHasCreative(): boolean {
  if (typeof document === "undefined") return false;
  for (const sel of adZepConfig.containerSelectors) {
    const node = document.querySelector(sel);
    if (node && hasRenderedCreative(node)) return true;
  }
  return false;
}

export default function AdZepSPABridge() {
  const pathname = usePathname();
  const firstLoadRef = useRef(true);
  const pendingRetryTimeout = useRef<number | null>(null);
  const debounceGuard = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Helper to clear any pending retry
    const clearPending = () => {
      if (pendingRetryTimeout.current) {
        window.clearTimeout(pendingRetryTimeout.current);
        pendingRetryTimeout.current = null;
      }
    };

    // Step 1: on route change start - no overlay logic
    const handleRouteStart = () => {
      clearPending();
      // Just clear pending operations, no overlay
    };

    // Step 2: on route complete, wait for containers then activate
    const handleRouteComplete = async () => {
      clearPending();

      // CRITICAL: Skip ad activation entirely on excluded paths (quiz, registration, etc.)
      if (isExcludedPath(pathname || "")) {
        return; // Exit early - no ad activation
      }

      const waitMs = firstLoadRef.current
        ? adZepConfig.initialContainerWaitMs
        : adZepConfig.navigationContainerWaitMs;

      // No overlay logic - just wait for containers and activate
      const containersPresent = await waitForContainers(waitMs);

      // Decide activation parameters with longer timeout for initial load
      const activationTimeout = firstLoadRef.current
        ? Math.max(adZepConfig.defaultActivationTimeoutMs, 12000)
        : adZepConfig.defaultActivationTimeoutMs;

      // If there are containers or the path is article-like, attempt activation
      if (containersPresent || isArticlePath(pathname || "")) {
        // Log activation attempt for debugging
        if (process.env.NODE_ENV === "development") {
          console.log("[AdZep SPA Bridge] Attempting activation", {
            containersPresent,
            activationTimeout,
            firstLoad: firstLoadRef.current,
          });
        }

        await activateAdZep({ timeout: activationTimeout });

        // Post-activation verification and possible retries
        let tries = 0;
        const verify = () => {
          if (anyContainerHasCreative()) {
            // Just log for debugging - no overlay logic
            if (process.env.NODE_ENV === "development") {
              console.log("[AdZep SPA Bridge] Creatives detected");
            }
            return;
          }
          if (tries >= adZepConfig.verifyRetries) {
            // Only log error if we're on a page that should have ads
            if (process.env.NODE_ENV === "development") {
              const shouldHaveAds = isArticlePath(pathname || "");
              if (shouldHaveAds) {
                console.warn(
                  "[AdZep SPA Bridge] Max retries reached on article page",
                );
              } else {
                console.log(
                  "[AdZep SPA Bridge] No ad units expected on this page",
                );
              }
            }
            return;
          }
          tries += 1;
          pendingRetryTimeout.current = window.setTimeout(async () => {
            await activateAdZep({
              timeout: activationTimeout,
              retryAttempts: 1,
            });
            verify();
          }, adZepConfig.verifyDelayMs);
        };

        verify();
      }

      firstLoadRef.current = false;
    };

    // Next.js 14 App Router: use popstate as a fallback for browser nav
    const handlePopState = () => {
      handleRouteStart();
      // small debounce to allow DOM mount
      window.setTimeout(handleRouteComplete, 120);
    };

    window.addEventListener("popstate", handlePopState);

    // Trigger for the current mount as a "complete" event
    // Debounce multiple quick pathname changes
    const now = Date.now();
    if (now - debounceGuard.current > 250) {
      debounceGuard.current = now;
      handleRouteComplete();
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      clearPending();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
