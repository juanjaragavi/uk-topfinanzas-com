"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googletag: any;
  }
}

export default function MobileInterstitialAd() {
  useEffect(() => {
    const gpt = window.googletag;
    if (!gpt || !gpt.cmd) {
      return;
    }

    gpt.cmd.push(function () {
      const slot = gpt.defineOutOfPageSlot(
        "/23062212598/uk.topfinanzas_com_mob_interstitial",
        "div-gpt-ad-1749571694903-0"
      );

      if (slot) {
        slot.addService(gpt.pubads());
        gpt.enableServices();
        gpt.display("div-gpt-ad-1749571694903-0");
        console.log("Interstitial ad slot defined and displayed");
      } else {
        console.error("Failed to define interstitial ad slot");
      }
    });
  }, []);

  return null;
}
