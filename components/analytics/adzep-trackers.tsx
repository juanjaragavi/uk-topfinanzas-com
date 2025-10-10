"use client";

import { useEffect } from "react";

/**
 * Enhanced AdZep Link Tracker
 * - Provides enhanced link tracking for specific pages
 * - DOES NOT call activateAds() - activation is handled by AdZepCentralizedHandler
 * - Can be imported and used in pages that need additional tracking/logging
 * - Integrates with the main AdZep system for analytics purposes only
 */
export default function AdZepLinkTracker() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    const handleLinkInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a, button");

      if (link) {
        // Only log for debugging/tracking purposes
        // AdZep activation is handled by AdZepCentralizedHandler in header
        if (process.env.NODE_ENV === "development") {
          console.log("AdZep: Link interaction detected (tracking only)", {
            type: link.tagName,
            href: link.getAttribute("href"),
            text: link.textContent?.substring(0, 50),
            note: "Activation handled by AdZepCentralizedHandler",
          });
        }
      }
    };

    // Only track click events for logging/analytics purposes
    document.addEventListener("click", handleLinkInteraction, {
      passive: true,
    });

    // Cleanup
    return () => {
      document.removeEventListener("click", handleLinkInteraction);
    };
  }, []); // Removed activateAds dependency since we're not calling it

  return null;
}

/**
 * AdZep Form Tracker
 * - Tracks form submissions and interactions for analytics
 * - DOES NOT call activateAds() - activation is handled by AdZepCentralizedHandler
 * - Useful for contact forms, quiz forms, etc.
 */
export function AdZepFormTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFormSubmit = () => {
      // Only log for debugging/tracking purposes
      // AdZep activation is handled by AdZepCentralizedHandler in header
      if (process.env.NODE_ENV === "development") {
        console.log("AdZep: Form submission detected (tracking only)", {
          note: "Activation handled by AdZepCentralizedHandler",
        });
      }
    };

    const handleFormInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA"
      ) {
        // Only log for debugging/tracking purposes
        if (process.env.NODE_ENV === "development") {
          console.log("AdZep: Form interaction detected (tracking only)", {
            elementType: target.tagName,
            note: "Activation handled by AdZepCentralizedHandler",
          });
        }
      }
    };

    // Track form submissions and interactions for analytics only
    document.addEventListener("submit", handleFormSubmit);
    document.addEventListener("change", handleFormInteraction);
    document.addEventListener("focus", handleFormInteraction);

    return () => {
      document.removeEventListener("submit", handleFormSubmit);
      document.removeEventListener("change", handleFormInteraction);
      document.removeEventListener("focus", handleFormInteraction);
    };
  }, []); // Removed activateAds dependency since we're not calling it

  return null;
}

/**
 * AdZep Page Tracker
 * - Tracks page visibility changes for analytics
 * - DOES NOT call activateAds() - activation is handled by AdZepCentralizedHandler
 * - Useful for monitoring page engagement
 */
export function AdZepPageTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Only log for debugging/tracking purposes
        // AdZep activation is handled by AdZepCentralizedHandler in header
        if (process.env.NODE_ENV === "development") {
          console.log("AdZep: Page became visible (tracking only)", {
            note: "Activation handled by AdZepCentralizedHandler",
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // Removed activateAds dependency since we're not calling it

  return null;
}
