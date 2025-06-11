"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googletag: any;
  }
}

export default function MobileInterstitialAd() {
  const pathname = usePathname();

  // Do not render the ad on quiz pages
  if (pathname === "/quiz" || pathname?.startsWith("/quiz/")) {
    return null;
  }

  useEffect(() => {
    // Ensure googletag is available before displaying the ad
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag.cmd.push(function () {
        window.googletag.display("div-gpt-ad-1749571694903-0");
      });
    }
  }, []);

  return (
    <div className="w-auto h-auto">
      <div
        id="div-gpt-ad-1749571694903-0"
        className="w-full max-w-full"
        style={{
          minHeight: "auto", // Minimum height for interstitial
        }}
      >
        {/* Interstitial ad will be rendered here by Google Ad Manager */}
      </div>
    </div>
  );
}
