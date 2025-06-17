"use client";

import { useState } from "react";
import EnhancedMobileBannerAd from "@/components/ads/enhanced-mobile-banner-ad";
// import MobileInterstitialAd from "@/components/ads/mobile-interstitial-ad";
import MobileOfferwallAd from "@/components/ads/mobile-offerwall-ad";

export default function AdDemoPage() {
  const [showManualInterstitial, setShowManualInterstitial] = useState(false);
  const [interstitialType, setInterstitialType] = useState<
    "immediate" | "delay" | "scroll" | "manual" | null
  >(null);
  const [offerwallType, setOfferwallType] = useState<
    "immediate" | "delay" | "scroll" | "manual" | null
  >(null);
  const [offerwallPosition, setOfferwallPosition] = useState<
    "bottom" | "center" | "full"
  >("bottom");
  const [showManualOfferwall, setShowManualOfferwall] = useState(false);

  const handleInterstitialClose = () => {
    console.log("Interstitial closed");
    setInterstitialType(null);
    setShowManualInterstitial(false);
  };

  const handleInterstitialLoaded = () => {
    console.log("Interstitial loaded successfully");
  };

  const handleInterstitialError = (error: string) => {
    console.error("Interstitial error:", error);
  };

  const handleOfferwallClose = () => {
    console.log("Offerwall closed");
    setOfferwallType(null);
    setShowManualOfferwall(false);
  };

  const handleOfferwallLoaded = () => {
    console.log("Offerwall loaded successfully");
  };

  const handleOfferwallError = (error: string) => {
    console.error("Offerwall error:", error);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Google Ad Manager Demo
        </h1>     

        {/* Interstitial Ads Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Interstitial Ads
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Interstitial Ad Triggers
            </h3>
            <p className="text-gray-600 mb-6">
              Click a button below to see different interstitial ad behaviors
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setInterstitialType("immediate")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Show Immediate Interstitial
              </button>

              <button
                onClick={() => setInterstitialType("delay")}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Show Delayed Interstitial (3s)
              </button>

              <button
                onClick={() => setInterstitialType("scroll")}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Enable Scroll Trigger (50%)
              </button>

              <button
                onClick={() => {
                  setInterstitialType("manual");
                  setShowManualInterstitial(true);
                }}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Manual Control
              </button>
            </div>

            {interstitialType === "scroll" && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  Scroll down to 50% of the page to trigger the interstitial ad
                </p>
              </div>
            )}
          </div>
        </section> */}

        {/* Offerwall Ads Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Offerwall Ads
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Offerwall Ad Options
            </h3>
            <p className="text-gray-600 mb-6">
              Test different offerwall behaviors and positions
            </p>

            {/* Position Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Position:
              </label>
              <select
                value={offerwallPosition}
                onChange={(e) => setOfferwallPosition(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="bottom">Bottom Sheet</option>
                <option value="center">Center Modal</option>
                <option value="full">Full Screen</option>
              </select>
            </div>

            {/* Trigger Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setOfferwallType("immediate")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Show Immediate Offerwall
              </button>

              <button
                onClick={() => setOfferwallType("delay")}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Show Delayed Offerwall (5s)
              </button>

              <button
                onClick={() => setOfferwallType("scroll")}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Enable Scroll Trigger (75%)
              </button>

              <button
                onClick={() => {
                  setOfferwallType("manual");
                  setShowManualOfferwall(true);
                }}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Manual Control
              </button>
            </div>

            {offerwallType === "scroll" && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  Scroll down to 75% of the page to trigger the offerwall
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Render Interstitial Ads Based on Type */}
        {/* {interstitialType === "immediate" && (
          <MobileInterstitialAd
            displayTrigger="immediate"
            onClose={handleInterstitialClose}
            onAdLoaded={handleInterstitialLoaded}
            onAdError={handleInterstitialError}
          />
        )}

        {interstitialType === "delay" && (
          <MobileInterstitialAd
            displayTrigger="delay"
            delaySeconds={3}
            onClose={handleInterstitialClose}
            onAdLoaded={handleInterstitialLoaded}
            onAdError={handleInterstitialError}
          />
        )}

        {interstitialType === "scroll" && (
          <MobileInterstitialAd
            displayTrigger="scroll"
            scrollPercentage={50}
            onClose={handleInterstitialClose}
            onAdLoaded={handleInterstitialLoaded}
            onAdError={handleInterstitialError}
          />
        )}

        {interstitialType === "manual" && showManualInterstitial && (
          <MobileInterstitialAd
            displayTrigger="manual"
            onClose={() => {
              setShowManualInterstitial(false);
              handleInterstitialClose();
            }}
            onAdLoaded={handleInterstitialLoaded}
            onAdError={handleInterstitialError}
          />
        )} */}

        {/* Render Offerwall Ads Based on Type */}
        {offerwallType === "immediate" && (
          <MobileOfferwallAd
            displayTrigger="immediate"
            position={offerwallPosition}
            onClose={handleOfferwallClose}
            onAdLoaded={handleOfferwallLoaded}
            onAdError={handleOfferwallError}
          />
        )}

        {offerwallType === "delay" && (
          <MobileOfferwallAd
            displayTrigger="delay"
            delaySeconds={5}
            position={offerwallPosition}
            onClose={handleOfferwallClose}
            onAdLoaded={handleOfferwallLoaded}
            onAdError={handleOfferwallError}
          />
        )}

        {offerwallType === "scroll" && (
          <MobileOfferwallAd
            displayTrigger="scroll"
            scrollPercentage={75}
            position={offerwallPosition}
            onClose={handleOfferwallClose}
            onAdLoaded={handleOfferwallLoaded}
            onAdError={handleOfferwallError}
          />
        )}

        {offerwallType === "manual" && showManualOfferwall && (
          <MobileOfferwallAd
            displayTrigger="manual"
            position={offerwallPosition}
            onClose={() => {
              setShowManualOfferwall(false);
              handleOfferwallClose();
            }}
            onAdLoaded={handleOfferwallLoaded}
            onAdError={handleOfferwallError}
          />
        )}

        {/* Dummy Content for Scroll Testing */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Content
          </h2>
          <div className="space-y-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Content Block {i + 1}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
