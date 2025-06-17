"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googletag: any;
  }
}

interface EnhancedMobileBannerAdProps {
  slotId?: string;
}

export default function EnhancedMobileBannerAd({
  slotId = "div-gpt-ad-1750179025531-0",
}: EnhancedMobileBannerAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isAdDisplayed, setIsAdDisplayed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const adContainer = adContainerRef.current;

    const displayAd = () => {
      if (!isMounted || !adContainer) return;

      if (typeof window === "undefined" || !window.googletag?.pubadsReady) {
        console.log("GPT not ready, retrying display...");
        setTimeout(displayAd, 200);
        return;
      }

      window.googletag.cmd.push(function () {
        try {
          const slots = window.googletag.pubads().getSlots();
          const slot = slots.find((s: any) => s.getSlotElementId() === slotId);

          if (slot) {
            window.googletag.display(slotId);
            window.googletag.pubads().refresh([slot]);
            setIsAdDisplayed(true);
            console.log(`Ad slot ${slotId} displayed and refreshed.`);
          } else {
            console.error(
              `Ad slot ${slotId} not found. Was it defined in GPTScriptManager?`
            );
            setError("Slot not defined");
          }
        } catch (e) {
          console.error(`Error displaying ad ${slotId}:`, e);
          setError("Display error");
        }
      });
    };

    displayAd();

    return () => {
      isMounted = false;
    };
  }, [pathname, slotId]);

  const showDebugInfo = process.env.NODE_ENV === "development";

  return (
    <div className="my-8 flex justify-center">
      <div className="relative">
        <div
          ref={adContainerRef}
          id={slotId}
          style={{
            minWidth: "250px",
            minHeight: "250px",
            maxWidth: "336px",
            width: "100%",
          }}
          className="mx-auto"
          data-ad-status={isAdDisplayed ? "displayed" : "loading"}
        >
          {!isAdDisplayed && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
              <div className="text-sm text-gray-500">Loading ad...</div>
            </div>
          )}
          {error && showDebugInfo && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded border border-red-200">
              <div className="text-xs text-red-600 p-2 text-center">
                Ad Error: {error}
              </div>
            </div>
          )}
        </div>
        {showDebugInfo && (
          <div className="mt-2 text-xs text-gray-500 text-center">
            Slot: {slotId} | Status: {isAdDisplayed ? "Displayed" : "Loading"}
          </div>
        )}
      </div>
    </div>
  );
}
