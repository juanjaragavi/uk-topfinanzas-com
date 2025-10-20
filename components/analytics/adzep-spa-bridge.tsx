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
import { showOverlay, hideOverlay } from "@/lib/ads/overlay";

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
  const overlayTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Helper to clear any pending retry
    const clearPending = () => {
      if (pendingRetryTimeout.current) {
        window.clearTimeout(pendingRetryTimeout.current);
        pendingRetryTimeout.current = null;
      }
      if (overlayTimeout.current) {
        window.clearTimeout(overlayTimeout.current);
        overlayTimeout.current = null;
      }
    };

    // Step 1: on route change start, show overlay if target likely has ads
    const handleRouteStart = () => {
      clearPending();
      // Don't show overlay on excluded paths (quiz pages, registration flows)
      if (isExcludedPath(pathname || "")) {
        hideOverlay();
        return;
      }
      // DISABLED: Overlay causes unsolicited blur blocking content
      // Keeping AdZep activation but removing visual overlay
      // if (isArticlePath(pathname || "") || pageHasAdUnits()) {
      //   showOverlay();
      // }
    };

    // Step 2: on route complete, wait for containers then activate
    const handleRouteComplete = async () => {
      clearPending();

      // CRITICAL: Skip ad activation entirely on excluded paths (quiz, registration, etc.)
      if (isExcludedPath(pathname || "")) {
        hideOverlay(); // Ensure no overlay is shown
        return; // Exit early - no ad activation
      }

      const waitMs = firstLoadRef.current
        ? adZepConfig.initialContainerWaitMs
        : adZepConfig.navigationContainerWaitMs;

      // DISABLED: Overlay causes unsolicited blur blocking content on blog/article pages
      // Keeping AdZep activation logic but removing visual overlay
      // if (isArticlePath(pathname || "")) {
      //   showOverlay();
      //   overlayTimeout.current = window.setTimeout(() => {
      //     hideOverlay();
      //     if (process.env.NODE_ENV === "development") {
      //       console.log("[AdZep SPA Bridge] Overlay hidden by timeout (3s)");
      //     }
      //   }, 3000);
      // }

      // If no known ad containers appear within wait window, drop quickly
      const containersPresent = await waitForContainers(waitMs);

      // Decide activation parameters with longer timeout for initial load
      const activationTimeout = firstLoadRef.current
        ? Math.max(adZepConfig.defaultActivationTimeoutMs, 12000) // Increased from 8000
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
            // Overlay disabled - just log for debugging
            if (process.env.NODE_ENV === "development") {
              console.log(
                "[AdZep SPA Bridge] Creatives detected (overlay disabled)",
              );
            }
            return;
          }
          if (tries >= adZepConfig.verifyRetries) {
            // Overlay disabled - just log for debugging
            if (process.env.NODE_ENV === "development") {
              console.log(
                "[AdZep SPA Bridge] Max retries reached (overlay disabled)",
              );
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
      } else {
        // No containers, nothing to do
        // Overlay disabled - no action needed
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
