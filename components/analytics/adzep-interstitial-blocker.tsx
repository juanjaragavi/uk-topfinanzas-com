"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * AdZep Interstitial Blocker - DISABLED
 *
 * ⚠️ This component has been DISABLED to allow AdZep ad units to function properly.
 *
 * Previous behavior was removing legitimate interstitial and offerwall ad units,
 * which blocked revenue generation and prevented users from interacting with ads.
 *
 * AdZep's own ad units (interstitials, offerwalls, etc.) should be allowed to
 * display and function normally. They include their own close buttons and controls.
 *
 * If blocking overlays become an issue again, a more targeted solution should be
 * implemented that specifically identifies and removes ONLY problematic overlays
 * while preserving legitimate ad units.
 */
export default function AdZepInterstitialBlocker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // COMPONENT DISABLED - No longer blocking any elements
    // This allows AdZep interstitials, offerwalls, and other ad units to display properly

    if (process.env.NODE_ENV === "development") {
      console.log(
        "[AdZep Interstitial Blocker] Component is DISABLED - Ad units will display normally",
      );
    }

    // No cleanup needed since we're not adding any listeners or observers
    return () => {
      // No-op
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
