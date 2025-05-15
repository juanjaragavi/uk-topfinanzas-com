"use client";

import Script from "next/script";
import ClientOnly from "@/components/ClientOnly"; // Assuming ClientOnly is still needed, adjust if not.

// Extend the Window interface to include AdZepActivateAds if not already globally defined
// It's generally better to have this in a global .d.ts file
declare global {
  interface Window {
    AdZepActivateAds?: () => void;
  }
}

export default function AdZepScript() {
  return (
    <ClientOnly>
      <Script
        id="adzep-script"
        src="https://autozep.adzep.io/paid/uk.topfinanzas.js"
        strategy="afterInteractive"
        data-cfasync="false"
        onLoad={() => {
          if (typeof window.AdZepActivateAds === "function") {
            window.AdZepActivateAds();
          } else {
            console.warn(
              "AdZepActivateAds function not found even after adzep-script load. Ads may not be activated."
            );
          }
        }}
      />
    </ClientOnly>
  );
}
