"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googletag: any;
  }
}

export default function MobileInterstitialAd() {
  useEffect(() => {
    // Ensure googletag is available before displaying the ad
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag.cmd.push(function () {
        window.googletag.display("div-gpt-ad-1749571694903-0");
      });
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <div
        id="div-gpt-ad-1749571694903-0"
        className="w-full max-w-full"
        style={{
          minHeight: "50px", // Minimum height for interstitial
        }}
      >
        {/* Interstitial ad will be rendered here by Google Ad Manager */}
      </div>
    </div>
  );
}
