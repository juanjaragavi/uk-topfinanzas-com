"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logger } from "@/lib/logger";

/**
 * TopAds SPA Navigation Handler
 *
 * Triggers TopAds SPA function on route changes in Next.js.
 * This ensures ads are properly loaded when navigating between pages.
 *
 * Usage: Include this component in the root layout within NavigationProvider
 */
export default function TopAdsSPAHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to trigger TopAds SPA
    const triggerTopAdsSPA = () => {
      try {
        if (
          typeof window !== "undefined" &&
          window.topAds &&
          typeof window.topAds.spa === "function"
        ) {
          logger.info("[TopAds] Triggering SPA navigation");
          window.topAds.spa();
        } else {
          logger.warn("[TopAds] topAds.spa() not available yet");
        }
      } catch (error) {
        logger.error("[TopAds] Error triggering SPA:", error);
      }
    };

    // Trigger on pathname change
    if (pathname) {
      // Small delay to ensure DOM is ready
      const timeoutId = setTimeout(() => {
        triggerTopAdsSPA();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  // Also handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      logger.info("[TopAds] Browser navigation detected");
      setTimeout(() => {
        if (
          typeof window !== "undefined" &&
          window.topAds &&
          typeof window.topAds.spa === "function"
        ) {
          window.topAds.spa();
        }
      }, 100);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null; // This component doesn't render anything
}

// Custom hook for manual TopAds SPA triggering
export function useTopAds() {
  const triggerSPA = () => {
    try {
      if (
        typeof window !== "undefined" &&
        window.topAds &&
        typeof window.topAds.spa === "function"
      ) {
        logger.info("[TopAds] Manual SPA trigger");
        window.topAds.spa();
        return true;
      }
      logger.warn("[TopAds] topAds.spa() not available");
      return false;
    } catch (error) {
      logger.error("[TopAds] Error in manual SPA trigger:", error);
      return false;
    }
  };

  return { triggerSPA };
}

// Type declaration for TypeScript
declare global {
  interface Window {
    topAds?: {
      config?: any;
      spa?: () => void;
    };
  }
}
