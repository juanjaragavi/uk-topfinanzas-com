"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logger } from "@/lib/logger";

type TopAdsConfig = Record<string, unknown>;

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
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip the first run (initial mount)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

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

    // Trigger on route change (pathname or searchParams change)
    logger.info("[TopAds] Next.js route change detected");
    // Small timeout to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      triggerTopAdsSPA();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

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
      config?: TopAdsConfig;
      spa?: () => void;
    };
  }
}
