"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface AdDebugInfo {
  gptLoaded: boolean;
  gptReady: boolean;
  slotsDefinition: string[];
  slotsDisplayed: string[];
  errors: string[];
  consoleUrl: string;
}

export default function AdDebugger() {
  const pathname = usePathname();
  const [debugInfo, setDebugInfo] = useState<AdDebugInfo>({
    gptLoaded: false,
    gptReady: false,
    slotsDefinition: [],
    slotsDisplayed: [],
    errors: [],
    consoleUrl: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode or with debug query param
    const urlParams = new URLSearchParams(window.location.search);
    const debugMode =
      process.env.NODE_ENV === "development" || urlParams.has("debug-ads");
    setIsVisible(debugMode);

    if (!debugMode) return;

    const checkGPTStatus = () => {
      const info: AdDebugInfo = {
        gptLoaded: typeof window.googletag !== "undefined",
        gptReady: false,
        slotsDefinition: [],
        slotsDisplayed: [],
        errors: [],
        consoleUrl:
          window.location.href +
          (window.location.href.includes("?") ? "&" : "?") +
          "googfc",
      };

      if (window.googletag) {
        try {
          info.gptReady = window.googletag.pubadsReady || false;

          // Get defined slots
          const slots = window.googletag.pubads().getSlots();
          info.slotsDefinition = slots.map((slot: any) =>
            slot.getSlotElementId()
          );

          // Check for displayed slots
          const displayedSlots = document.querySelectorAll(
            '[data-ad-status="loaded"]'
          );
          info.slotsDisplayed = Array.from(displayedSlots).map((el) => el.id);

          // Listen for GPT events
          window.googletag.cmd.push(function () {
            window.googletag
              .pubads()
              .addEventListener("slotRenderEnded", function (event: any) {
                console.log("[Ad Debug] Slot render ended:", {
                  slot: event.slot.getSlotElementId(),
                  isEmpty: event.isEmpty,
                  size: event.size,
                });

                // Update debug info
                checkGPTStatus();
              });

            window.googletag
              .pubads()
              .addEventListener("slotOnload", function (event: any) {
                console.log(
                  "[Ad Debug] Slot loaded:",
                  event.slot.getSlotElementId()
                );
              });

            window.googletag
              .pubads()
              .addEventListener("slotRequested", function (event: any) {
                console.log(
                  "[Ad Debug] Slot requested:",
                  event.slot.getSlotElementId()
                );
              });
          });
        } catch (error) {
          info.errors.push(`GPT Error: ${error}`);
          console.error("[Ad Debug] Error:", error);
        }
      }

      setDebugInfo(info);
    };

    // Initial check
    checkGPTStatus();

    // Set up interval to check GPT status
    const interval = setInterval(checkGPTStatus, 2000);

    // Check for console errors
    const originalError = console.error;
    console.error = function (...args) {
      const errorMessage = args.join(" ");
      if (
        errorMessage.toLowerCase().includes("gpt") ||
        errorMessage.toLowerCase().includes("googletag")
      ) {
        setDebugInfo((prev) => ({
          ...prev,
          errors: [...prev.errors, errorMessage],
        }));
      }
      originalError.apply(console, args);
    };

    return () => {
      clearInterval(interval);
      console.error = originalError;
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 max-w-md z-50">
      <h3 className="text-lg font-bold mb-2">Ad Debug Panel</h3>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              debugInfo.gptLoaded ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span>GPT Loaded: {debugInfo.gptLoaded ? "Yes" : "No"}</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              debugInfo.gptReady ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span>GPT Ready: {debugInfo.gptReady ? "Yes" : "No"}</span>
        </div>

        <div>
          <strong>Defined Slots:</strong> {debugInfo.slotsDefinition.length}
          {debugInfo.slotsDefinition.length > 0 && (
            <ul className="ml-4 text-xs">
              {debugInfo.slotsDefinition.map((slot, i) => (
                <li key={i}>• {slot}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <strong>Displayed Slots:</strong> {debugInfo.slotsDisplayed.length}
          {debugInfo.slotsDisplayed.length > 0 && (
            <ul className="ml-4 text-xs">
              {debugInfo.slotsDisplayed.map((slot, i) => (
                <li key={i}>• {slot}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <strong>Current Path:</strong> {pathname}
        </div>

        {debugInfo.errors.length > 0 && (
          <div className="mt-2 p-2 bg-red-50 rounded">
            <strong className="text-red-600">Errors:</strong>
            <ul className="text-xs mt-1">
              {debugInfo.errors.map((error, i) => (
                <li key={i} className="text-red-600">
                  • {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-3 pt-3 border-t">
          <a
            href={debugInfo.consoleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xs"
          >
            Open Google Publisher Console →
          </a>
        </div>
      </div>
    </div>
  );
}
