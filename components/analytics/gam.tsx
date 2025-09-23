"use client";

import Script from "next/script";
import { useEffect } from "react";

const GAM_NETWORK_CODE = "21879825561";

export default function GoogleAdManager() {
  useEffect(() => {
    // Initialize GAM after component mount
    if (typeof window !== "undefined") {
      // Define GPT command queue
      window.googletag = window.googletag || { cmd: [] };

      console.debug(
        `GAM: Initializing Google Ad Manager with network code ${GAM_NETWORK_CODE}`
      );

      // Wait for GPT script to load, then initialize
      const initializeGAM = () => {
        if (window.googletag && window.googletag.cmd) {
          window.googletag.cmd.push(() => {
            // Enable single request mode for better performance
            window.googletag.pubads().enableSingleRequest();

            // Enable services
            window.googletag.enableServices();

            // Set targeting based on UTM parameters if available
            const utmSource = sessionStorage.getItem("utm_source");
            const utmCampaign = sessionStorage.getItem("utm_campaign");
            const utmMedium = sessionStorage.getItem("utm_medium");

            if (utmSource) {
              window.googletag.pubads().setTargeting("utm_source", utmSource);
            }
            if (utmCampaign) {
              window.googletag
                .pubads()
                .setTargeting("utm_campaign", utmCampaign);
            }
            if (utmMedium) {
              window.googletag.pubads().setTargeting("utm_medium", utmMedium);
            }

            // Set additional targeting for UK market
            window.googletag.pubads().setTargeting("country", "UK");
            window.googletag.pubads().setTargeting("language", "en");
            window.googletag.pubads().setTargeting("site", "topfinanzas_uk");

            console.debug("GAM: Services enabled and targeting configured");
          });
        } else {
          // Retry if script not loaded yet
          setTimeout(initializeGAM, 100);
        }
      };

      // Start initialization after a brief delay
      setTimeout(initializeGAM, 1000);
    }
  }, []);

  return (
    <>
      {/* Google Publisher Tag (GPT) library */}
      <Script
        id="gam-gpt"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      {/* GAM configuration script */}
      <Script
        id="gam-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googletag = window.googletag || {cmd: []};
            
            // Define ad slots function
            window.defineGAMAdSlots = function() {
              if (!window.googletag || !window.googletag.defineSlot) {
                console.warn('GAM: googletag not ready, retrying...');
                setTimeout(window.defineGAMAdSlots, 100);
                return;
              }
              
              window.googletag.cmd.push(function() {
                // Define common ad slots for UK TopFinanzas
                
                // Header banner slot
                if (!window.gamSlots) window.gamSlots = {};
                
                window.gamSlots.header = window.googletag.defineSlot(
                  '/${GAM_NETWORK_CODE}/uk_topfinanzas_header',
                  [[728, 90], [970, 90], [320, 50]],
                  'gam-header-ad'
                ).addService(window.googletag.pubads());
                
                // Sidebar ad slot
                window.gamSlots.sidebar = window.googletag.defineSlot(
                  '/${GAM_NETWORK_CODE}/uk_topfinanzas_sidebar',
                  [[300, 250], [336, 280], [300, 600]],
                  'gam-sidebar-ad'
                ).addService(window.googletag.pubads());
                
                // Content ad slot
                window.gamSlots.content = window.googletag.defineSlot(
                  '/${GAM_NETWORK_CODE}/uk_topfinanzas_content',
                  [[728, 90], [300, 250], [336, 280]],
                  'gam-content-ad'
                ).addService(window.googletag.pubads());
                
                // Footer ad slot
                window.gamSlots.footer = window.googletag.defineSlot(
                  '/${GAM_NETWORK_CODE}/uk_topfinanzas_footer',
                  [[728, 90], [970, 90], [320, 50]],
                  'gam-footer-ad'
                ).addService(window.googletag.pubads());
                
                console.debug('GAM: Ad slots defined for network ${GAM_NETWORK_CODE}');
              });
            };
            
            // Initialize ad slots when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', window.defineGAMAdSlots);
            } else {
              window.defineGAMAdSlots();
            }
          `,
        }}
      />
    </>
  );
}

/**
 * GAM Ad Slot Component
 * Use this component to display ads in specific positions
 */
interface GAMAdSlotProps {
  slotId: string;
  sizes: Array<[number, number]>;
  className?: string;
  style?: React.CSSProperties;
}

export function GAMAdSlot({
  slotId,
  sizes,
  className = "",
  style = {},
}: GAMAdSlotProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag.cmd.push(() => {
        // Display the ad slot
        window.googletag.display(slotId);
        console.debug(`GAM: Displaying ad slot ${slotId}`);
      });
    }
  }, [slotId]);

  return (
    <div
      id={slotId}
      className={`gam-ad-slot ${className}`}
      style={{
        minHeight: sizes[0] ? `${sizes[0][1]}px` : "250px",
        minWidth: sizes[0] ? `${sizes[0][0]}px` : "300px",
        ...style,
      }}
      data-gam-slot={slotId}
    />
  );
}

/**
 * Function to refresh GAM ads
 * Call this when navigating between pages in SPA mode
 */
export function refreshGAMads(slotIds?: string[]) {
  if (typeof window !== "undefined" && window.googletag) {
    window.googletag.cmd.push(() => {
      if (slotIds && window.gamSlots) {
        // Refresh specific slots
        const slotsToRefresh = slotIds
          .map((id) => window.gamSlots[id])
          .filter((slot) => slot);

        if (slotsToRefresh.length > 0) {
          window.googletag.pubads().refresh(slotsToRefresh);
          console.debug("GAM: Refreshed specific ad slots", slotIds);
        }
      } else {
        // Refresh all slots
        window.googletag.pubads().refresh();
        console.debug("GAM: Refreshed all ad slots");
      }
    });
  }
}

// Type declarations for GAM
declare global {
  interface Window {
    googletag: any;
    gamSlots: Record<string, any>;
    defineGAMAdSlots: () => void;
  }
}
