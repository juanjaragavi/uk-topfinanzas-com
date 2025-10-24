"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * AdZep Backdrop Cleaner
 *
 * Monitors and removes orphaned backdrop/overlay elements that appear when
 * AdZep interstitial ads fail to render but leave their backdrop elements behind.
 *
 * Problem:
 * - AdZep creates backdrop elements when initializing interstitial ads
 * - If the ad fails to render (due to ad rules, blockers, or network issues),
 *   the backdrop remains, creating an empty blur overlay
 * - Console shows "isDisplay: false" but backdrop is still visible
 *
 * Solution:
 * - Continuously monitors for backdrop elements
 * - Checks if they contain actual ad content
 * - Removes orphaned backdrops that don't have associated ad units
 * - Ensures body overflow is restored when backdrops are removed
 */
export default function AdZepBackdropCleaner() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    let cleanupInterval: number | null = null;
    let mutationObserver: MutationObserver | null = null;

    /**
     * Check if an element is a valid ad container with actual content
     */
    const hasAdContent = (element: Element): boolean => {
      // Check for iframes (common in ad units)
      if (element.querySelector("iframe")) {
        return true;
      }

      // Check for AdZep-specific ad unit containers
      if (element.querySelector('[id^="uk_topfinanzas_"]')) {
        const adUnit = element.querySelector('[id^="uk_topfinanzas_"]');
        if (adUnit && adUnit.children.length > 0) {
          return true;
        }
      }

      // Check for Google Ad Manager containers
      if (element.querySelector('[id^="google_ads_iframe"]')) {
        return true;
      }

      // Check for any non-empty child elements with meaningful content
      const children = Array.from(element.children);
      for (const child of children) {
        const htmlChild = child as HTMLElement;
        // Skip if it's just another backdrop or overlay
        if (
          htmlChild.className?.includes("backdrop") ||
          htmlChild.className?.includes("overlay") ||
          htmlChild.id?.includes("backdrop") ||
          htmlChild.id?.includes("overlay")
        ) {
          continue;
        }

        // Check if element has actual size
        const rect = htmlChild.getBoundingClientRect();
        if (rect.width > 100 && rect.height > 100) {
          // Element has meaningful size, might be ad content
          return true;
        }
      }

      return false;
    };

    /**
     * Check if element is likely a backdrop/overlay
     */
    const isBackdropElement = (element: Element): boolean => {
      const htmlElement = element as HTMLElement;
      const style = window.getComputedStyle(htmlElement);

      // Check for backdrop characteristics
      const isFixed = style.position === "fixed";
      const coversViewport =
        style.inset === "0px" ||
        (style.top === "0px" &&
          style.left === "0px" &&
          style.right === "0px" &&
          style.bottom === "0px");
      const hasHighZIndex = parseInt(style.zIndex, 10) > 1000;
      const hasBackdropFilter =
        style.backdropFilter !== "none" || style.filter !== "none";

      // Check for backdrop-related class names or IDs
      const hasBackdropName =
        htmlElement.className?.toLowerCase().includes("backdrop") ||
        htmlElement.className?.toLowerCase().includes("overlay") ||
        htmlElement.id?.toLowerCase().includes("backdrop") ||
        htmlElement.id?.toLowerCase().includes("overlay");

      return (
        isFixed &&
        coversViewport &&
        (hasHighZIndex || hasBackdropFilter || hasBackdropName)
      );
    };

    /**
     * Clean up orphaned backdrop elements
     */
    const cleanBackdrops = () => {
      // Find all direct children of body that might be backdrops
      const bodyChildren = Array.from(document.body.children);

      let removedCount = 0;

      for (const child of bodyChildren) {
        // Skip known legitimate elements
        if (
          child.id === "__next" ||
          child.tagName === "SCRIPT" ||
          child.tagName === "NOSCRIPT" ||
          child.id?.startsWith("google_") ||
          child.hasAttribute("data-gtm")
        ) {
          continue;
        }

        // Check if it's a backdrop element
        if (isBackdropElement(child)) {
          // Check if it has actual ad content
          if (!hasAdContent(child)) {
            // This is an orphaned backdrop - remove it
            if (process.env.NODE_ENV === "development") {
              console.log(
                "[AdZep Backdrop Cleaner] Removing orphaned backdrop:",
                {
                  id: child.id,
                  className: child.className,
                  tagName: child.tagName,
                }
              );
            }

            child.remove();
            removedCount++;
          }
        }
      }

      // Restore body overflow if we removed backdrops
      if (removedCount > 0) {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.height = "";
        document.documentElement.style.overflow = "";
        document.documentElement.style.position = "";
        document.documentElement.style.height = "";

        // Remove any aria-hidden attributes that might have been added
        document.body.removeAttribute("aria-hidden");

        if (process.env.NODE_ENV === "development") {
          console.log(
            `[AdZep Backdrop Cleaner] Cleaned up ${removedCount} orphaned backdrop(s) and restored body overflow`
          );
        }
      }
    };

    /**
     * Set up mutation observer to watch for backdrop elements being added
     */
    const setupMutationObserver = () => {
      mutationObserver = new MutationObserver((mutations) => {
        let shouldClean = false;

        for (const mutation of mutations) {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            // Check if any added nodes are potential backdrops
            for (const node of Array.from(mutation.addedNodes)) {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (isBackdropElement(element)) {
                  shouldClean = true;
                  break;
                }
              }
            }
          }

          if (shouldClean) break;
        }

        if (shouldClean) {
          // Delay cleanup slightly to allow ad content to load
          setTimeout(cleanBackdrops, 500);
        }
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: false, // Only watch direct children of body
      });
    };

    // Initial cleanup on mount
    cleanBackdrops();

    // Set up mutation observer
    setupMutationObserver();

    // Set up periodic cleanup (every 2 seconds)
    cleanupInterval = window.setInterval(cleanBackdrops, 2000);

    // Cleanup on unmount
    return () => {
      if (cleanupInterval) {
        window.clearInterval(cleanupInterval);
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
