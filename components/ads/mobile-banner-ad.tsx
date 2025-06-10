"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googletag: any;
  }
}

export default function MobileBannerAd() {
  useEffect(() => {
    // Ensure googletag is available before displaying the ad
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag.cmd.push(function () {
        window.googletag.display("div-gpt-ad-1749568543258-0");
      });
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <div
        id="div-gpt-ad-1749568543258-0"
        style={{
          minWidth: "250px",
          minHeight: "250px",
          maxWidth: "336px",
          width: "100%",
        }}
        className="mx-auto"
      >
        {/* Ad will be rendered here by Google Ad Manager */}
      </div>
    </div>
  );
}
