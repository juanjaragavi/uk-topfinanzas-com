"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  activateAdZep,
  hasRenderedCreative,
  pageHasAdUnits,
  waitForContainers,
} from "@/lib/ads/activate-adzep";
import { adZepConfig, isArticlePath } from "@/lib/ads/config";
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Helper to clear any pending retry
    const clearPending = () => {
      if (pendingRetryTimeout.current) {
        window.clearTimeout(pendingRetryTimeout.current);
        pendingRetryTimeout.current = null;
      }
    };

    // Step 1: on route change start, show overlay if target likely has ads
    const handleRouteStart = () => {
      clearPending();
      if (isArticlePath(pathname || "") || pageHasAdUnits()) {
        // Show overlay very briefly to guard layout flashes
        showOverlay();
      }
    };

    // Step 2: on route complete, wait for containers then activate
    const handleRouteComplete = async () => {
      clearPending();

      const waitMs = firstLoadRef.current
        ? adZepConfig.initialContainerWaitMs
        : adZepConfig.navigationContainerWaitMs;

      // On SPA navs, proactively show overlay for article-like destinations
      if (isArticlePath(pathname || "")) {
        showOverlay();
      }

      // If no known ad containers appear within wait window, drop quickly
      const containersPresent = await waitForContainers(waitMs);

      // Decide activation parameters
      const activationTimeout = firstLoadRef.current
        ? Math.max(adZepConfig.defaultActivationTimeoutMs, 8000)
        : adZepConfig.defaultActivationTimeoutMs;

      // If there are containers or the path is article-like, attempt activation
      if (containersPresent || isArticlePath(pathname || "")) {
        await activateAdZep({ timeout: activationTimeout });

        // Post-activation verification and possible retries
        let tries = 0;
        const verify = () => {
          if (anyContainerHasCreative()) {
            hideOverlay();
            return;
          }
          if (tries >= adZepConfig.verifyRetries) {
            hideOverlay();
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
        // Keep overlay at most for a small grace period to avoid flicker
        window.setTimeout(() => hideOverlay(), adZepConfig.overlayGraceMs);
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
