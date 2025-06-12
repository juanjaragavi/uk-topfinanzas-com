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
  slotPath?: string;
  sizes?: Array<[number, number]>;
}

export default function EnhancedMobileBannerAd({
  slotId = "div-gpt-ad-1749568543258-0",
  slotPath = "/23062212598/uk.topfinanzas_com_mob_1",
  sizes = [
    [250, 250],
    [336, 280],
    [300, 250],
  ],
}: EnhancedMobileBannerAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const slotRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 5;
    const retryDelay = 1000; // 1 second

    const initializeAd = () => {
      if (!isMounted) return;

      // Check if container exists
      if (!adContainerRef.current) {
        console.error("Ad container not found");
        setError("Ad container not found");
        return;
      }

      // Check if googletag is available
      if (typeof window === "undefined" || !window.googletag) {
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(
            `GPT not loaded yet, retrying... (${retryCount}/${maxRetries})`
          );
          setTimeout(initializeAd, retryDelay);
        } else {
          console.error("GPT failed to load after maximum retries");
          setError("GPT failed to load");
        }
        return;
      }

      // Initialize ad slot
      window.googletag.cmd.push(function () {
        try {
          // Check if slot already exists
          const existingSlots = window.googletag.pubads().getSlots();
          const existingSlot = existingSlots.find(
            (slot: any) => slot.getSlotElementId() === slotId
          );

          if (existingSlot) {
            console.log("Slot already exists, refreshing...");
            slotRef.current = existingSlot;
            // Clear the slot before refresh
            window.googletag.destroySlots([existingSlot]);
          }

          // Define new slot
          slotRef.current = window.googletag
            .defineSlot(slotPath, sizes, slotId)
            .addService(window.googletag.pubads());

          // Enable single request mode if not already enabled
          if (!window.googletag.pubadsReady) {
            window.googletag.pubads().enableSingleRequest();
            window.googletag.enableServices();
          }

          // Display the ad
          window.googletag.display(slotId);

          // Refresh the specific slot to force ad request
          window.googletag.pubads().refresh([slotRef.current]);

          console.log(`Ad slot ${slotId} initialized and displayed`);
          setIsAdLoaded(true);
          setError(null);

          // Set up event listeners for debugging
          window.googletag
            .pubads()
            .addEventListener("slotRenderEnded", function (event: any) {
              if (event.slot === slotRef.current) {
                console.log("Ad render ended:", {
                  isEmpty: event.isEmpty,
                  size: event.size,
                  slotId: event.slot.getSlotElementId(),
                });
              }
            });

          window.googletag
            .pubads()
            .addEventListener("impressionViewable", function (event: any) {
              if (event.slot === slotRef.current) {
                console.log(
                  "Ad impression viewable:",
                  event.slot.getSlotElementId()
                );
              }
            });
        } catch (error) {
          console.error("Error initializing ad:", error);
          setError("Failed to initialize ad");
        }
      });
    };

    // Initialize ad after a short delay to ensure DOM is ready
    const initTimer = setTimeout(initializeAd, 100);

    // Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(initTimer);

      // Destroy slot on unmount
      if (
        slotRef.current &&
        window.googletag &&
        window.googletag.destroySlots
      ) {
        window.googletag.cmd.push(function () {
          window.googletag.destroySlots([slotRef.current]);
          console.log(`Ad slot ${slotId} destroyed`);
        });
      }
    };
  }, [pathname, slotId, slotPath]); // Re-initialize when pathname changes

  // Debug mode indicator
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
          data-ad-status={isAdLoaded ? "loaded" : "loading"}
        >
          {/* Ad will be rendered here by Google Ad Manager */}
          {!isAdLoaded && !error && (
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
            Slot: {slotId} | Status: {isAdLoaded ? "Loaded" : "Loading"}
          </div>
        )}
      </div>
    </div>
  );
}
