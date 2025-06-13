"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googletag: any;
  }
}

interface MobileInterstitialAdProps {
  slotId?: string;
  slotPath?: string;
  sizes?: Array<[number, number]>;
  zIndex?: number;
  displayTrigger?: "immediate" | "delay" | "scroll" | "manual";
  delaySeconds?: number;
  scrollPercentage?: number;
  onClose?: () => void;
  onAdLoaded?: () => void;
  onAdError?: (error: string) => void;
}

export default function MobileInterstitialAd({
  slotId = "div-gpt-ad-1749831510729-0",
  slotPath = "/23062212598/uk.topfinanzas_com_mob_interstitial",
  sizes = [[1, 1]], // Standard interstitial size
  zIndex = 9999,
  displayTrigger = "immediate",
  delaySeconds = 3,
  scrollPercentage = 50,
  onClose,
  onAdLoaded,
  onAdError,
}: MobileInterstitialAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const slotRef = useRef<any>(null);
  const hasDisplayed = useRef(false);

  // Initialize GPT script in head if not already present
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if GPT script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"]'
    );

    if (!existingScript) {
      // Add GPT script to head
      const script = document.createElement("script");
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Initialize googletag
    window.googletag = window.googletag || { cmd: [] };
  }, []);

  // Handle display triggers
  useEffect(() => {
    if (hasDisplayed.current || !isAdLoaded) return;

    let timeoutId: NodeJS.Timeout;
    let scrollHandler: () => void;

    switch (displayTrigger) {
      case "immediate":
        setIsVisible(true);
        hasDisplayed.current = true;
        break;

      case "delay":
        timeoutId = setTimeout(() => {
          setIsVisible(true);
          hasDisplayed.current = true;
        }, delaySeconds * 1000);
        break;

      case "scroll":
        scrollHandler = () => {
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollPercentageReached =
            (scrolled / (documentHeight - windowHeight)) * 100;

          if (scrollPercentageReached >= scrollPercentage) {
            setIsVisible(true);
            hasDisplayed.current = true;
            window.removeEventListener("scroll", scrollHandler);
          }
        };
        window.addEventListener("scroll", scrollHandler);
        break;

      case "manual":
        // Controlled externally
        break;
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, [isAdLoaded, displayTrigger, delaySeconds, scrollPercentage]);

  // Initialize ad
  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 5;
    const retryDelay = 1000;

    const initializeAd = () => {
      if (!isMounted) return;

      if (!adContainerRef.current) {
        console.error("Interstitial ad container not found");
        setError("Ad container not found");
        onAdError?.("Ad container not found");
        return;
      }

      if (typeof window === "undefined" || !window.googletag) {
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(
            `GPT not loaded for interstitial, retrying... (${retryCount}/${maxRetries})`
          );
          setTimeout(initializeAd, retryDelay);
        } else {
          console.error("GPT failed to load for interstitial after maximum retries");
          setError("GPT failed to load");
          onAdError?.("GPT failed to load");
        }
        return;
      }

      window.googletag.cmd.push(function () {
        try {
          // Check if slot already exists
          const existingSlots = window.googletag.pubads().getSlots();
          const existingSlot = existingSlots.find(
            (slot: any) => slot.getSlotElementId() === slotId
          );

          if (existingSlot) {
            console.log("Interstitial slot already exists, destroying...");
            window.googletag.destroySlots([existingSlot]);
          }

          // Define interstitial slot
          slotRef.current = window.googletag
            .defineSlot(slotPath, sizes, slotId)
            .addService(window.googletag.pubads());

          // Enable services if not already enabled
          if (!window.googletag.pubadsReady) {
            window.googletag.pubads().enableSingleRequest();
            window.googletag.enableServices();
          }

          // Set up event listeners
          window.googletag
            .pubads()
            .addEventListener("slotRenderEnded", function (event: any) {
              if (event.slot === slotRef.current) {
                console.log("Interstitial ad render ended:", {
                  isEmpty: event.isEmpty,
                  size: event.size,
                  slotId: event.slot.getSlotElementId(),
                });
                
                if (!event.isEmpty) {
                  setIsAdLoaded(true);
                  setError(null);
                  onAdLoaded?.();
                } else {
                  setError("No ad available");
                  onAdError?.("No ad available");
                }
              }
            });

          window.googletag
            .pubads()
            .addEventListener("slotOnload", function (event: any) {
              if (event.slot === slotRef.current) {
                console.log("Interstitial ad loaded successfully");
              }
            });

          // Display the ad
          window.googletag.display(slotId);

          console.log(`Interstitial ad slot ${slotId} initialized`);
        } catch (error) {
          console.error("Error initializing interstitial ad:", error);
          setError("Failed to initialize ad");
          onAdError?.("Failed to initialize ad");
        }
      });
    };

    const initTimer = setTimeout(initializeAd, 100);

    return () => {
      isMounted = false;
      clearTimeout(initTimer);

      if (
        slotRef.current &&
        window.googletag &&
        window.googletag.destroySlots
      ) {
        window.googletag.cmd.push(function () {
          window.googletag.destroySlots([slotRef.current]);
          console.log(`Interstitial ad slot ${slotId} destroyed`);
        });
      }
    };
  }, [pathname, slotId, slotPath, onAdLoaded, onAdError]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible || error) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        style={{ zIndex }}
        onClick={handleClose}
      />
      
      {/* Interstitial Container */}
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: zIndex + 1 }}
      >
        <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Close interstitial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Ad Container */}
          <div className="p-4">
            <div
              ref={adContainerRef}
              id={slotId}
              className="flex items-center justify-center"
              style={{
                minHeight: "250px",
                width: "100%",
              }}
            >
              {!isAdLoaded && (
                <div className="text-gray-500">Loading advertisement...</div>
              )}
            </div>
          </div>

          {/* Optional Footer */}
          <div className="border-t border-gray-200 px-4 py-2">
            <p className="text-xs text-gray-500 text-center">Advertisement</p>
          </div>
        </div>
      </div>
    </>
  );
}
