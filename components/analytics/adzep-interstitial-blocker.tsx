"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * AdZep Interstitial Blocker
 * 
 * This component actively monitors and removes interstitial ad overlays
 * created by AdZep on blog/article pages where they block content.
 * 
 * It uses MutationObserver to detect when AdZep creates interstitial
 * elements and immediately removes them.
 */
export default function AdZepInterstitialBlocker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only block on article/blog pages
    const isArticlePage =
      pathname?.startsWith("/blog/") ||
      pathname?.startsWith("/personal-finance/") ||
      pathname?.startsWith("/financial-solutions/");

    if (!isArticlePage) return;

    let observer: MutationObserver | null = null;

    // Function to find and remove interstitial overlays
    const removeInterstitials = () => {
      // Target elements that look like interstitial overlays
      const selectors = [
        '[id*="interstitial"]',
        '[class*="interstitial"]',
        '[id*="Interstitial"]',
        '[class*="Interstitial"]',
        '[data-ad-type="interstitial"]',
        '[data-adzep-interstitial]',
        // Target fixed position elements with high z-index that look like overlays
        'div[style*="position: fixed"][style*="z-index"]',
        'div[style*="position:fixed"][style*="z-index"]',
      ];

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          
          // Check if this looks like an overlay (high z-index, covers screen)
          const style = window.getComputedStyle(htmlEl);
          const zIndex = parseInt(style.zIndex || "0", 10);
          const position = style.position;
          
          // If it's a high z-index fixed/absolute element, it's likely an overlay
          if (
            (position === "fixed" || position === "absolute") &&
            zIndex > 1000 &&
            !htmlEl.id.includes("uk_topfinanzas_") // Don't remove actual ad containers
          ) {
            if (process.env.NODE_ENV === "development") {
              console.log(
                "[AdZep Interstitial Blocker] Removing overlay element:",
                htmlEl.id || htmlEl.className
              );
            }
            htmlEl.remove();
          }
        });
      });
    };

    // Initial cleanup
    removeInterstitials();

    // Set up MutationObserver to watch for new interstitials being added
    observer = new MutationObserver((mutations) => {
      let needsCleanup = false;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            
            // Check if the added element is or contains an interstitial
            if (
              el.id?.toLowerCase().includes("interstitial") ||
              el.className?.toLowerCase().includes("interstitial") ||
              el.getAttribute("data-ad-type") === "interstitial"
            ) {
              needsCleanup = true;
            }
          }
        });
      });

      if (needsCleanup) {
        // Small delay to let the element fully render before removing
        setTimeout(removeInterstitials, 100);
      }
    });

    // Observe the entire document for changes
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    // Also run cleanup periodically as a safety measure
    const interval = setInterval(removeInterstitials, 1000);

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
      clearInterval(interval);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
