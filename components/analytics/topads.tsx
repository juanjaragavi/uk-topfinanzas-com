"use client";

import { useEffect } from "react";
import Script from "next/script";
import { logger } from "@/lib/logger";

/**
 * TopAds Integration Component
 *
 * Loads the TopAds advertising script with proper configuration.
 * This component should be included in the root layout.
 *
 * @see /lib/documents/config.js for configuration options
 */
export default function TopAds() {
  useEffect(() => {
    // Mark when TopAds component mounts
    if (typeof window !== "undefined" && window.performance) {
      window.performance.mark("topads-mount");
      logger.info("[TopAds] Component mounted");
    }
  }, []);

  return (
    <>
      {/* Load TopAds configuration script */}
      <Script
        id="topads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.topAds = window.topAds || {};
            const topAdsLogoOrigin =
              typeof window !== "undefined" &&
              window.location &&
              window.location.origin
                ? window.location.origin
                : "https://uk.topfinanzas.com";
            const topAdsLogoUrl = topAdsLogoOrigin + "/images/logo-english.webp";
            
            topAds.config = {
              domain: "uk.topfinanzas.com",
              networkCode: "23062212598",
              lazyLoad: "hard",
              refresh: {
                time: 30,
                status: "active",
                anchor: "active",
              },
              formats: {
                anchor: {
                  status: "active",
                  position: "bottom",
                },
                interstitial: {
                  status: "active",
                  include: [],
                  exclude: [],
                },
                offerwall: {
                  status: "active",
                  logoUrl: topAdsLogoUrl,
                  websiteName: "TopFinance UK",
                  cooldown: "12",
                  include: [],
                  exclude: [],
                },
              },
            };
          `,
        }}
        onLoad={() => {
          logger.info("[TopAds] Configuration loaded");
        }}
        onError={(e) => {
          logger.error("[TopAds] Configuration load error:", e);
        }}
      />

      {/* Load TopAds main script */}
      <Script
        id="topads-script"
        src="//test-topads.tbytpm.easypanel.host/topAds.min.js"
        strategy="afterInteractive"
        defer
        async
        data-cfasync="false"
        onLoad={() => {
          if (typeof window !== "undefined" && window.performance) {
            window.performance.mark("topads-loaded");
            window.performance.measure(
              "topads-execution",
              "topads-mount",
              "topads-loaded",
            );
          }
          logger.info("[TopAds] Script loaded successfully");
        }}
        onError={(e) => {
          logger.error("[TopAds] Script load error:", e);
        }}
      />
    </>
  );
}
