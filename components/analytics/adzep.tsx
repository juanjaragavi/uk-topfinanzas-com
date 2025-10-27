"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { adzepLogger } from "@/lib/logger";

/**
 * AdZep Analytics Script Component
 * - Loads the AdZep script with proper Next.js script optimization
 * - Handles script loading with error handling and performance monitoring
 * - Integrates with the project's analytics infrastructure
 */
export default function AdZep() {
  useEffect(() => {
    // Mark AdZep script execution for performance monitoring
    if (typeof window !== "undefined") {
      window.performance?.mark("adzep-start");
    }
  }, []);

  return (
    <>
      {/* AdZep Script */}
      <Script
        id="adzep-script"
        src="https://autozep.adzep.io/paid/uk.topfinanzas.js"
        strategy="afterInteractive" // Load after page is interactive
        data-cfasync="false" // Preserve the original data-cfasync attribute
        onLoad={() => {
          // Mark AdZep script loaded for performance monitoring
          if (typeof window !== "undefined") {
            window.performance?.mark("adzep-loaded");
            window.performance?.measure(
              "adzep-execution",
              "adzep-start",
              "adzep-loaded",
            );
          }
        }}
        onError={(error) => {
          // Handle script loading errors
          adzepLogger.warn("Script failed to load", { error });
        }}
      />
    </>
  );
}

/**
 * AdZep Activation Hook
 * - Provides a function to activate ads programmatically
 * - Can be used in components or event handlers
 */
export function useAdZep() {
  const activateAds = () => {
    if (typeof window !== "undefined" && window.AdZepActivateAds) {
      try {
        window.AdZepActivateAds();
      } catch (error) {
        adzepLogger.warn("Error activating ads", { error });
      }
    }
  };

  return { activateAds };
}

/**
 * AdZep Link Click Handler Component
 * - Simplified version that only handles link click tracking
 * - Does NOT call window.AdZepActivateAds() (handled by centralized handler)
 * - Kept for potential future link-specific analytics
 */
export function AdZepLinkHandler() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    const handleLinkClick = (event: Event) => {
      // Check if the clicked element is a link or inside a link
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (link && process.env.NODE_ENV === "development") {
        adzepLogger.debug("Link click detected", {
          href: link.href,
          text: link.textContent?.trim(),
        });
      }
    };

    // Add event listener for link clicks (passive tracking only)
    document.addEventListener("click", handleLinkClick);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
}

/**
 * AdZep Navigation Handler
 * - Simplified version that only handles navigation tracking
 * - Does NOT call window.AdZepActivateAds() (handled by centralized handler)
 * - Kept for potential future navigation-specific analytics
 */
export function AdZepNavigationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    if (process.env.NODE_ENV === "development") {
      adzepLogger.debug("Navigation detected", { pathname });
    }
  }, [pathname]);

  return null;
}

/**
 * AdZep Centralized Handler
 * - Single centralized component for AdZep activation
 * - Integrates with navigation to call window.AdZepActivateAds() once per event
 * - Eliminates redundant calls and multiple invocation points
 * - Designed to be used in the Header component for consistent activation
 * - Includes debouncing to prevent rapid successive calls
 */
export function AdZepCentralizedHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Debounce mechanism to prevent rapid successive calls
    let lastActivationTime = 0;
    const DEBOUNCE_DELAY = 500; // 500ms debounce

    // Single activation function with proper error handling and debouncing
    const activateAds = () => {
      const now = Date.now();

      // Check if we're within the debounce period
      if (now - lastActivationTime < DEBOUNCE_DELAY) {
        if (process.env.NODE_ENV === "development") {
          adzepLogger.debug("Activation skipped due to debounce");
        }
        return;
      }

      if (window.AdZepActivateAds) {
        try {
          window.AdZepActivateAds();
          lastActivationTime = now;

          if (process.env.NODE_ENV === "development") {
            adzepLogger.info("Centralized activation successful", {
              pathname,
              timestamp: new Date().toISOString(),
            });
          }
        } catch (error) {
          adzepLogger.warn("Error during centralized activation", { error });
        }
      } else {
        if (process.env.NODE_ENV === "development") {
          adzepLogger.warn("window.AdZepActivateAds not available");
        }
      }
    };

    // Activate immediately if script is already loaded
    if (window.AdZepActivateAds) {
      activateAds();
    } else {
      // Single timeout to wait for script loading
      const timeoutId = setTimeout(() => {
        activateAds();
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    // Listen for browser navigation (back/forward)
    const handleBrowserNavigation = () => {
      // Use a shorter delay for browser navigation but still debounced
      setTimeout(() => {
        activateAds();
      }, 100);
    };

    // Add browser navigation listener
    window.addEventListener("popstate", handleBrowserNavigation);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handleBrowserNavigation);
    };
  }, [pathname]); // Trigger on pathname changes for Next.js navigation

  return null;
}
