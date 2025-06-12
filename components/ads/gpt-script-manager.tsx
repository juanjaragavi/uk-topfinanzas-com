"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GPTScriptManager() {
  useEffect(() => {
    // Ensure googletag command queue exists immediately
    if (typeof window !== "undefined") {
      window.googletag = window.googletag || { cmd: [] };
    }
  }, []);

  const handleGPTLoad = () => {
    console.log("GPT script loaded successfully");

    // Initialize GPT configuration
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      // Enable single request mode
      window.googletag.pubads().enableSingleRequest();

      // Enable lazy loading with specific settings
      window.googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 500, // Fetch ads 5 viewports away
        renderMarginPercent: 200, // Render ads 2 viewports away
        mobileScaling: 2.0, // Double the margins on mobile
      });

      // Enable services
      window.googletag.enableServices();

      // Mark as ready
      window.googletag.pubadsReady = true;

      console.log("GPT services enabled with lazy loading");
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
