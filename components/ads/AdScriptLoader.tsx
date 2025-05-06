"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function AdScriptLoader() {
  const pathname = usePathname();

  // Do not load the ad script on the /quiz page
  if (pathname === "/quiz") {
    return null;
  }

  return (
    <Script
      id="adzep-script"
      data-cfasync="false"
      src="https://autozep.adzep.io/paid/uk.topfinanzas.js"
      strategy="afterInteractive" // Load after the page becomes interactive
    />
  );
}
