"use client";

import { useEffect } from "react";
import { useAdZep } from "./adzep";

/**
 * Enhanced AdZep Link Tracker
 * - Provides enhanced link tracking for specific pages
 * - Can be imported and used in pages that need additional tracking
 * - Integrates with the main AdZep system
 */
export default function AdZepLinkTracker() {
  const { activateAds } = useAdZep();

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    const handleLinkInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a, button");

      if (link) {
        // Call activateAds for any link or button interaction
        activateAds();

        // Log for debugging in development
        if (process.env.NODE_ENV === "development") {
          console.log("AdZep: Link interaction detected", {
            type: link.tagName,
            href: link.getAttribute("href"),
            text: link.textContent?.substring(0, 50),
          });
        }
      }
    };

    // Track various interaction events
    const events = ["click", "mousedown", "touchstart"];

    events.forEach((eventType) => {
      document.addEventListener(eventType, handleLinkInteraction, {
        passive: true,
      });
    });

    // Cleanup
    return () => {
      events.forEach((eventType) => {
        document.removeEventListener(eventType, handleLinkInteraction);
      });
    };
  }, [activateAds]);

  return null;
}

/**
 * AdZep Form Tracker
 * - Tracks form submissions and interactions
 * - Useful for contact forms, quiz forms, etc.
 */
export function AdZepFormTracker() {
  const { activateAds } = useAdZep();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFormSubmit = (event: Event) => {
      activateAds();

      if (process.env.NODE_ENV === "development") {
        console.log("AdZep: Form submission detected");
      }
    };

    const handleFormInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA"
      ) {
        activateAds();
      }
    };

    // Track form submissions
    document.addEventListener("submit", handleFormSubmit);

    // Track form interactions
    document.addEventListener("change", handleFormInteraction);
    document.addEventListener("focus", handleFormInteraction);

    return () => {
      document.removeEventListener("submit", handleFormSubmit);
      document.removeEventListener("change", handleFormInteraction);
      document.removeEventListener("focus", handleFormInteraction);
    };
  }, [activateAds]);

  return null;
}

/**
 * AdZep Page Tracker
 * - Tracks page visibility changes
 * - Activates ads when page becomes visible
 */
export function AdZepPageTracker() {
  const { activateAds } = useAdZep();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        activateAds();

        if (process.env.NODE_ENV === "development") {
          console.log("AdZep: Page became visible");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activateAds]);

  return null;
}
