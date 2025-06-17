"use client";

import { useState } from "react";
import EnhancedMobileBannerAd from "@/components/ads/enhanced-mobile-banner-ad";
import MobileInterstitialAd from "@/components/ads/mobile-interstitial-ad";

export default function AdDemoPage() {
  const [showManualInterstitial, setShowManualInterstitial] = useState(false);
  const [interstitialType, setInterstitialType] = useState<
    "immediate" | "delay" | "scroll" | "manual" | null
  >(null);

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Google Ad Manager Demo
        </h1>

        {/* Interstitial Ads Section */}
        <section className="mb-12">
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
        </section>

        {/* Render Interstitial Ads Based on Type */}
        <EnhancedMobileBannerAd />
        {interstitialType === "immediate" && <MobileInterstitialAd />}
        {interstitialType === "delay" && <MobileInterstitialAd />}
        {interstitialType === "scroll" && <MobileInterstitialAd />}
        {showManualInterstitial && <MobileInterstitialAd />}

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
