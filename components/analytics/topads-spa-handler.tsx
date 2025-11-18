"use client";

import { useEffect } from "react";
import Router from "next/router";
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

    let timeoutId: number | null = null;

    const scheduleTrigger = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        triggerTopAdsSPA();
      }, 100);
    };

    // Initial run on mount
    scheduleTrigger();

    const handleRouteChange = () => {
      logger.info("[TopAds] Next.js route change detected");
      scheduleTrigger();
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    Router.events.on("routeChangeError", handleRouteChange);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      Router.events.off("routeChangeComplete", handleRouteChange);
      Router.events.off("routeChangeError", handleRouteChange);
    };
  }, []);

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
      config?: TopAdsConfig;
      spa?: () => void;
    };
  }
}
