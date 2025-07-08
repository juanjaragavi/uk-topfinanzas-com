"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
    if (typeof window !== "undefined" && window.AdZepActivateAds) {
      try {
        window.AdZepActivateAds();
      } catch (error) {
        console.warn("Error activating AdZep ads:", error);
      }
    }
  };

  return { activateAds };
}

/**
 * AdZep Link Click Handler Component
 * - Automatically calls window.AdZepActivateAds() on link clicks
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

      if (link && window.AdZepActivateAds) {
        try {
          window.AdZepActivateAds();
        } catch (error) {
          console.warn("Error activating AdZep ads on link click:", error);
        }
      }
    };

    // Add event listener for link clicks
    document.addEventListener("click", handleLinkClick);

    // Initial activation on page load
    if (window.AdZepActivateAds) {
      try {
        window.AdZepActivateAds();
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
 * - Properly handles both internal navigation and browser back/forward
 */
export function AdZepNavigationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Call activateAds on initial page load
    const activateOnLoad = () => {
      if (window.AdZepActivateAds) {
        try {
          window.AdZepActivateAds();
          
          if (process.env.NODE_ENV === "development") {
            console.log("AdZep: Navigation handler activated ads on page load");
          }
        } catch (error) {
          console.warn("Error activating AdZep ads on navigation:", error);
        }
      }
    };

    // Activate immediately if script is already loaded
    if (window.AdZepActivateAds) {
      activateOnLoad();
    } else {
      // Wait for script to load if not available yet
      const checkAndActivate = () => {
        if (window.AdZepActivateAds) {
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
        if (window.AdZepActivateAds) {
          try {
            window.AdZepActivateAds();
            
            if (process.env.NODE_ENV === "development") {
              console.log("AdZep: Navigation handler activated ads on browser navigation");
            }
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

  // This useEffect will trigger on every pathname change (Next.js internal navigation)
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Small delay to ensure page content is loaded after navigation
    const timer = setTimeout(() => {
      if (window.AdZepActivateAds) {
        try {
          window.AdZepActivateAds();
          
          if (process.env.NODE_ENV === "development") {
            console.log("AdZep: Navigation handler activated ads on route change to:", pathname);
          }
        } catch (error) {
          console.warn("Error activating AdZep ads on route change:", error);
        }
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [pathname]); // This will trigger on every route change

  return null;
}

// Type declaration for window.AdZepActivateAds
declare global {
  interface Window {
    AdZepActivateAds?: () => void;
  }
}
