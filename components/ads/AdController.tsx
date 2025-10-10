"use client";

import { useEffect } from "react";

interface AdControllerProps {
  /**
   * Set to true to disable ads on the current page
   */
  disableAds?: boolean;
}

/**
 * AdController component
 *
 * This component allows for controlling ad visibility on specific pages.
 * When disableAds is true, it adds CSS to hide ad elements without removing the script.
 *
 * @example
 * // In a page where you want to disable ads:
 * <AdController disableAds={true} />
 */
export default function AdController({
  disableAds = false,
}: AdControllerProps) {
  useEffect(() => {
    if (disableAds) {
      // Add temporary style to hide all ad containers
      const style = document.createElement("style");
      style.id = "ad-controller-style";

      // Target common ad container classes and IDs
      // Generic selectors for various ad networks
      style.innerHTML = `
        /* Generic ad containers */
        [data-ad],
        .ad-container,
        #ad-container,
        div[id^="ad-"],
        iframe[id^="ad-"],
        div[class^="ad-"],
        .advertisement,
        .ads {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          width: 0 !important;
          height: 0 !important;
          position: absolute !important;
          pointer-events: none !important;
          overflow: hidden !important;
        }
      `;

      document.head.appendChild(style);

      // Cleanup function to remove the style when component unmounts
      return () => {
        const styleElement = document.getElementById("ad-controller-style");
        if (styleElement) {
          styleElement.remove();
        }
      };
    }
  }, [disableAds]);

  // This component doesn't render anything visible
  return null;
}
