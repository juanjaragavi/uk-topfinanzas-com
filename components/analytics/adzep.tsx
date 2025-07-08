"use client";

import Script from "next/script";
import { useEffect } from "react";

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
              "adzep-loaded"
            );
          }
        }}
        onError={(error) => {
          // Handle script loading errors
          console.warn("AdZep script failed to load:", error);
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
    if (typeof window !== "undefined" && window.activateAds) {
      try {
        window.activateAds();
      } catch (error) {
        console.warn("Error activating AdZep ads:", error);
      }
    }
  };

  return { activateAds };
}

/**
 * AdZep Link Click Handler Component
 * - Automatically calls window.activateAds() on link clicks
 * - Handles both internal and external links
 */
export function AdZepLinkHandler() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    const handleLinkClick = (event: Event) => {
      // Check if the clicked element is a link or inside a link
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (link && window.activateAds) {
        try {
          window.activateAds();
        } catch (error) {
          console.warn("Error activating AdZep ads on link click:", error);
        }
      }
    };

    // Add event listener for link clicks
    document.addEventListener("click", handleLinkClick);

    // Initial activation on page load
    if (window.activateAds) {
      try {
        window.activateAds();
      } catch (error) {
        console.warn("Error activating AdZep ads on page load:", error);
      }
    }

    // Cleanup
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
}

/**
 * AdZep Navigation Handler
 * - Integrates with Next.js navigation to call activateAds on route changes
 * - Works with the existing UTM tracking system
 */
export function AdZepNavigationHandler() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Call activateAds on initial page load
    const activateOnLoad = () => {
      if (window.activateAds) {
        try {
          window.activateAds();
        } catch (error) {
          console.warn("Error activating AdZep ads on navigation:", error);
        }
      }
    };

    // Activate immediately if script is already loaded
    if (window.activateAds) {
      activateOnLoad();
    } else {
      // Wait for script to load if not available yet
      const checkAndActivate = () => {
        if (window.activateAds) {
          activateOnLoad();
        } else {
          setTimeout(checkAndActivate, 100); // Check every 100ms
        }
      };
      checkAndActivate();
    }

    // Listen for navigation events (works with Next.js router)
    const handleNavigation = () => {
      // Small delay to ensure page content is loaded
      setTimeout(() => {
        if (window.activateAds) {
          try {
            window.activateAds();
          } catch (error) {
            console.warn("Error activating AdZep ads on navigation:", error);
          }
        }
      }, 100);
    };

    // Listen for popstate (back/forward navigation)
    window.addEventListener("popstate", handleNavigation);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return null;
}

// Type declaration for window.activateAds
declare global {
  interface Window {
    activateAds?: () => void;
  }
}
