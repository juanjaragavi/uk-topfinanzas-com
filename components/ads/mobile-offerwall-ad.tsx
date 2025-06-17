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
  const [isAdDisplayed, setIsAdDisplayed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasDisplayedTrigger = useRef(false);

  // Handle display triggers
  useEffect(() => {
    if (hasDisplayedTrigger.current) return;

    let timeoutId: NodeJS.Timeout;
    let scrollHandler: () => void;

    const trigger = () => {
      if (!hasDisplayedTrigger.current) {
        setIsVisible(true);
        hasDisplayedTrigger.current = true;
      }
    };

    switch (displayTrigger) {
      case "immediate":
        trigger();
        break;
      case "delay":
        timeoutId = setTimeout(trigger, delaySeconds * 1000);
        break;
      case "scroll":
        scrollHandler = () => {
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollPercentageReached =
            (scrolled / (documentHeight - windowHeight)) * 100;
          if (scrollPercentageReached >= scrollPercentage) {
            trigger();
            window.removeEventListener("scroll", scrollHandler);
          }
        };
        window.addEventListener("scroll", scrollHandler);
        break;
      case "manual":
        break;
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, [displayTrigger, delaySeconds, scrollPercentage]);

  // Display ad
  useEffect(() => {
    if (!isVisible) return;

    let isMounted = true;
    const adContainer = adContainerRef.current;

    const displayAd = () => {
      if (!isMounted || !adContainer) return;

      if (typeof window === "undefined" || !window.googletag?.pubadsReady) {
        console.log("GPT not ready, retrying display for offerwall...");
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
            onAdLoaded?.();
            console.log(`Ad slot ${slotId} displayed and refreshed.`);
          } else {
            console.error(
              `Ad slot ${slotId} not found. Was it defined in GPTScriptManager?`
            );
            setError("Slot not defined");
            onAdError?.("Slot not defined");
          }
        } catch (e) {
          console.error(`Error displaying ad ${slotId}:`, e);
          setError("Display error");
          onAdError?.("Display error");
        }
      });
    };

    displayAd();

    return () => {
      isMounted = false;
    };
  }, [isVisible, pathname, slotId, onAdLoaded, onAdError]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (pathname === "/quiz" || !isVisible || error) return null;

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
      {(position === "full" || position === "center") && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          style={{ zIndex }}
          onClick={handleClose}
        />
      )}
      <div
        className={`${getPositionStyles()} bg-white shadow-2xl transition-all duration-300`}
        style={{ zIndex: position === "bottom" ? zIndex : zIndex + 1 }}
      >
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
              {!isAdDisplayed && !error && (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-2"></div>
                  <p className="text-gray-500">Loading offers...</p>
                </div>
              )}
              {error && (
                <div className="text-center">
                  <div className="text-red-600 font-medium mb-2">Error</div>
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
