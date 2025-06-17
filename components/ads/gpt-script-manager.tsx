"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    googletag: any;
    triggerInterstitial: () => void;
  }
}

export default function GPTScriptManager() {
  const [slotsDefined, setSlotsDefined] = useState(false);

  useEffect(() => {
    // Ensure googletag command queue exists immediately
    if (typeof window !== "undefined") {
      window.googletag = window.googletag || { cmd: [] };
    }
  }, []);

  const handleGPTLoad = () => {
    console.log("GPT script loaded successfully");

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      if (slotsDefined) {
        console.log("Slots already defined, skipping re-definition.");
        return;
      }

      console.log("Defining ad slots...");

      // Define the mobile banner ad slot
      window.googletag
        .defineSlot(
          "/23062212598/uk.topfinanzas_com_mob_2/uk.topfinanzas_com_mob_2",
          [
            [250, 250],
            [300, 250],
            [336, 280],
          ],
          "div-gpt-ad-1750179025531-0"
        )
        .addService(window.googletag.pubads());

      // Define the mobile interstitial ad slot
      window.googletag
        .defineSlot(
          "/23062212598/uk.topfinanzas_com_mob_interstitial",
          [1, 1],
          "div-gpt-ad-1750177024511-0"
        )
        .addService(window.googletag.pubads());

      // Enable single request mode
      window.googletag.pubads().enableSingleRequest();

      // Enable lazy loading with specific settings
      window.googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 500,
        renderMarginPercent: 200,
        mobileScaling: 2.0,
      });

      // Enable services
      window.googletag.enableServices();

      // Mark as ready
      window.googletag.pubadsReady = true;
      setSlotsDefined(true);

      console.log("GPT services enabled and all ad slots defined.");
    });
  };

  const handleGPTError = () => {
    console.error("Failed to load GPT script");
  };

  return (
    <>
      <Script
        id="gpt-lib"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
        onLoad={handleGPTLoad}
        onError={handleGPTError}
      />
    </>
  );
}
