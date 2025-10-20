"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * AdZep Interstitial Blocker
 * 
 * This component actively monitors and removes ALL blocking overlays
 * created by AdZep, including interstitials, rewardful ads, and any
 * transparent overlays that freeze navigation.
 * 
 * It uses MutationObserver to detect when AdZep creates blocking
 * elements and immediately removes them.
 */
export default function AdZepInterstitialBlocker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Block on article/blog pages AND financial solutions pages
    const isArticlePage =
      pathname?.startsWith("/blog/") ||
      pathname?.startsWith("/personal-finance/") ||
      pathname?.startsWith("/financial-solutions/");

    if (!isArticlePage) return;

    let observer: MutationObserver | null = null;
    let frameId: number | null = null;

    // Function to restore body scroll and pointer events
    const restoreBodyInteraction = () => {
      if (document.body) {
        // Remove any styles that might block scrolling
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.height = "";
        document.body.style.pointerEvents = "";
        
        // Also check documentElement
        if (document.documentElement) {
          document.documentElement.style.overflow = "";
          document.documentElement.style.position = "";
          document.documentElement.style.height = "";
          document.documentElement.style.pointerEvents = "";
        }
      }
    };

    // Function to find and remove ALL blocking overlays
    const removeBlockingElements = () => {
      // Target ALL elements that could be blocking overlays
      const selectors = [
        // Interstitial patterns
        '[id*="interstitial"]',
        '[class*="interstitial"]',
        '[id*="Interstitial"]',
        '[class*="Interstitial"]',
        // Rewardful patterns (the one causing issues)
        '[id*="rewardful"]',
        '[class*="rewardful"]',
        '[id*="Rewardful"]',
        '[class*="Rewardful"]',
        '[id*="reward"]',
        '[class*="reward"]',
        // Generic overlay patterns
        '[id*="overlay"]',
        '[class*="overlay"]',
        '[id*="Overlay"]',
        '[class*="Overlay"]',
        // Ad-specific patterns
        '[data-ad-type="interstitial"]',
        '[data-adzep-interstitial]',
        '[data-ad-overlay]',
        // Fixed position elements with high z-index
        'div[style*="position: fixed"][style*="z-index"]',
        'div[style*="position:fixed"][style*="z-index"]',
      ];

      let removedCount = 0;

      selectors.forEach((selector) => {
        try {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            
            // Check if this looks like a blocking overlay
            const style = window.getComputedStyle(htmlEl);
            const zIndex = parseInt(style.zIndex || "0", 10);
            const position = style.position;
            const width = htmlEl.offsetWidth;
            const height = htmlEl.offsetHeight;
            
            // If it's a high z-index fixed/absolute element, it's likely blocking
            if (
              (position === "fixed" || position === "absolute") &&
              zIndex > 100 && // Lower threshold to catch more elements
              !htmlEl.id.includes("uk_topfinanzas_") && // Don't remove actual ad containers
              !htmlEl.id.includes("adzep-test") && // Don't remove dev tools
              !htmlEl.classList.contains("navigation-provider") // Don't remove navigation
            ) {
              // Additional check: if it's covering a large portion of the screen
              if (width > window.innerWidth * 0.5 || height > window.innerHeight * 0.5) {
                if (process.env.NODE_ENV === "development") {
                  console.log(
                    "[AdZep Blocker] Removing blocking element:",
                    htmlEl.id || htmlEl.className,
                    "z-index:", zIndex,
                    "position:", position
                  );
                }
                htmlEl.remove();
                removedCount++;
              }
            }
          });
        } catch (error) {
          // Silently catch selector errors
          if (process.env.NODE_ENV === "development") {
            console.warn("[AdZep Blocker] Selector error:", selector, error);
          }
        }
      });

      // Restore body interaction after removing elements
      if (removedCount > 0) {
        restoreBodyInteraction();
      }

      return removedCount;
    };

    // Aggressive cleanup function using requestAnimationFrame
    const aggressiveCleanup = () => {
      removeBlockingElements();
      restoreBodyInteraction();
      
      // Continue monitoring
      frameId = requestAnimationFrame(aggressiveCleanup);
    };

    // Initial cleanup
    removeBlockingElements();
    restoreBodyInteraction();

    // Start aggressive monitoring
    aggressiveCleanup();

    // Set up MutationObserver to watch for new blocking elements
    observer = new MutationObserver((mutations) => {
      let needsCleanup = false;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            
            // Check if the added element is potentially blocking
            if (
              el.id?.toLowerCase().includes("interstitial") ||
              el.id?.toLowerCase().includes("rewardful") ||
              el.id?.toLowerCase().includes("reward") ||
              el.id?.toLowerCase().includes("overlay") ||
              el.className?.toLowerCase().includes("interstitial") ||
              el.className?.toLowerCase().includes("rewardful") ||
              el.className?.toLowerCase().includes("reward") ||
              el.className?.toLowerCase().includes("overlay") ||
              el.getAttribute("data-ad-type") === "interstitial"
            ) {
              needsCleanup = true;
            }
          }
        });
      });

      if (needsCleanup) {
        // Immediate cleanup
        removeBlockingElements();
        restoreBodyInteraction();
      }
    });

    // Observe the entire document for changes
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true, // Also watch for attribute changes
      attributeFilter: ["style", "class"], // Monitor style and class changes
    });

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
