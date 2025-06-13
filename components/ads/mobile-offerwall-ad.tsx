"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googletag: any;
  }
}

interface MobileOfferwallAdProps {
  slotId?: string;
  slotPath?: string;
  sizes?: Array<[number, number]>;
  zIndex?: number;
  displayTrigger?: "immediate" | "delay" | "scroll" | "manual";
  delaySeconds?: number;
  scrollPercentage?: number;
  position?: "full" | "bottom" | "center";
  onClose?: () => void;
  onAdLoaded?: () => void;
  onAdError?: (error: string) => void;
}

export default function MobileOfferwallAd({
  slotId = "div-gpt-ad-1749832817468-0",
  slotPath = "/23062212598/uk.topfinanzas_com_mob_offerwall",
  sizes = [[1, 1]], // Standard offerwall size
  zIndex = 9999,
  displayTrigger = "immediate",
  delaySeconds = 5,
  scrollPercentage = 75,
  position = "bottom",
  onClose,
  onAdLoaded,
  onAdError,
}: MobileOfferwallAdProps) {
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
        console.error("Offerwall ad container not found");
        setError("Ad container not found");
        onAdError?.("Ad container not found");
        return;
      }

      if (typeof window === "undefined" || !window.googletag) {
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(
            `GPT not loaded for offerwall, retrying... (${retryCount}/${maxRetries})`
          );
          setTimeout(initializeAd, retryDelay);
        } else {
          console.error(
            "GPT failed to load for offerwall after maximum retries"
          );
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
            console.log("Offerwall slot already exists, destroying...");
            window.googletag.destroySlots([existingSlot]);
          }

          // Define offerwall slot
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
                console.log("Offerwall ad render ended:", {
                  isEmpty: event.isEmpty,
                  size: event.size,
                  slotId: event.slot.getSlotElementId(),
                });

                if (!event.isEmpty) {
                  setIsAdLoaded(true);
                  setError(null);
                  onAdLoaded?.();
                } else {
                  setError("No offerwall available");
                  onAdError?.("No offerwall available");
                }
              }
            });

          window.googletag
            .pubads()
            .addEventListener("slotOnload", function (event: any) {
              if (event.slot === slotRef.current) {
                console.log("Offerwall ad loaded successfully");
              }
            });

          // Display the ad
          window.googletag.display(slotId);

          console.log(`Offerwall ad slot ${slotId} initialized`);
        } catch (error) {
          console.error("Error initializing offerwall ad:", error);
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
          console.log(`Offerwall ad slot ${slotId} destroyed`);
        });
      }
    };
  }, [pathname, slotId, slotPath, onAdLoaded, onAdError]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible || error) return null;

  // Position styles based on prop
  const getPositionStyles = () => {
    switch (position) {
      case "full":
        return "fixed inset-0";
      case "center":
        return "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full mx-4";
      case "bottom":
      default:
        return "fixed bottom-0 left-0 right-0";
    }
  };

  return (
    <>
      {/* Backdrop (only for full and center positions) */}
      {(position === "full" || position === "center") && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          style={{ zIndex }}
          onClick={handleClose}
        />
      )}

      {/* Offerwall Container */}
      <div
        className={`${getPositionStyles()} bg-white shadow-2xl transition-all duration-300`}
        style={{ zIndex: position === "bottom" ? zIndex : zIndex + 1 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Special Offers
            </h3>
            <p className="text-sm text-gray-500">
              Check out these exclusive deals
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close offerwall"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
        </div>

        {/* Ad Container */}
        <div
          className={`${
            position === "bottom" ? "max-h-96" : "max-h-[70vh]"
          } overflow-y-auto`}
        >
          <div className="p-4">
            <div
              ref={adContainerRef}
              id={slotId}
              className="flex items-center justify-center"
              style={{
                minHeight: position === "bottom" ? "200px" : "400px",
                width: "100%",
              }}
            >
              {!isAdLoaded && (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-2"></div>
                  <p className="text-gray-500">Loading offers...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer (optional) */}
        {position === "bottom" && (
          <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              Advertisement • Swipe up for more
            </p>
          </div>
        )}
      </div>
    </>
  );
}
