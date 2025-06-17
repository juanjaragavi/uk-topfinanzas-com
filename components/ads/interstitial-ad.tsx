"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googletag: any;
  }
}

export default function InterstitialAd() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const adContainer = adContainerRef.current;
    if (!adContainer) return;

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      window.googletag.display("div-gpt-ad-1749831510729-0");
    });
  }, [pathname]);

  return (
    <div className="my-8 flex justify-center">
      <div
        ref={adContainerRef}
        id="div-gpt-ad-1749831510729-0"
        style={{
          minWidth: "1px",
          minHeight: "1px",
        }}
      />
    </div>
  );
}
