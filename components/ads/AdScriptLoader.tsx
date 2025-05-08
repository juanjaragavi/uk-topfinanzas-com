"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

/**
 * AdScriptLoader component
 *
 * This component handles loading the ad script for TopFinanzas UK.
 * It uses Next.js Script component with "afterInteractive" strategy
 * to ensure the script loads after the page becomes interactive.
 */
export default function AdScriptLoader() {
  const pathname = usePathname();

  // Do not load ad scripts on certain pages
  if (pathname === "/quiz" || pathname?.startsWith("/quiz/")) {
    return null;
  }

  return (
    <>
      <Script
        id="adzep-script"
        data-cfasync="false"
        src="https://autozep.adzep.io/paid/uk.topfinanzas.js"
        strategy="afterInteractive"
      />
    </>
  );
}
