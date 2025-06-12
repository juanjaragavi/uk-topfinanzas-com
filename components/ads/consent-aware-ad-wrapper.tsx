"use client";

import { useEffect, useState } from "react";
import EnhancedMobileBannerAd from "./enhanced-mobile-banner-ad";

interface ConsentAwareAdWrapperProps {
  slotId?: string;
  slotPath?: string;
  sizes?: Array<[number, number]>;
}

export default function ConsentAwareAdWrapper(
  props: ConsentAwareAdWrapperProps
) {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [isCheckingConsent, setIsCheckingConsent] = useState(true);

  useEffect(() => {
    let consentCheckInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const checkForConsent = () => {
      // Check for common consent management platforms
      if (typeof window === "undefined") return;

      // Check for Google Consent Mode
      if (window.gtag && typeof window.gtag === "function") {
        try {
          // Check if consent has been granted
          const consentGranted = localStorage.getItem("consent_granted");
          if (consentGranted === "true") {
            setHasConsent(true);
            setIsCheckingConsent(false);
            return true;
          }
        } catch (e) {
          console.log("Error checking consent storage:", e);
        }
      }

      // Check for CMP (Consent Management Platform) APIs
      // OneTrust
      if (window.OneTrust && window.OneTrust.IsAlertBoxClosed()) {
        const activeGroups = window.OneTrust.GetDomainData().Groups;
        const targetingConsent = activeGroups?.some(
          (group: any) =>
            group.CustomGroupId === "C0004" && group.Status === "always active"
        );
        setHasConsent(targetingConsent !== false);
        setIsCheckingConsent(false);
        return true;
      }

      // Cookiebot
      if (window.Cookiebot && window.Cookiebot.consent) {
        const marketingConsent = window.Cookiebot.consent.marketing;
        setHasConsent(marketingConsent);
        setIsCheckingConsent(false);
        return true;
      }

      // Quantcast Choice
      if (window.__tcfapi) {
        window.__tcfapi("getTCData", 2, (tcData: any, success: boolean) => {
          if (success && tcData.gdprApplies !== undefined) {
            // Check for Purpose 1 (Store and/or access information on a device)
            const hasBasicConsent = tcData.purpose?.consents?.[1] === true;
            // Check for Purpose 4 (Select personalised ads)
            const hasPersonalizedAdsConsent =
              tcData.purpose?.consents?.[4] === true;

            setHasConsent(hasBasicConsent || hasPersonalizedAdsConsent);
            setIsCheckingConsent(false);
          }
        });
        return true;
      }

      // Check for generic consent cookie patterns
      const cookies = document.cookie.split(";");
      const consentCookies = cookies.filter(
        (cookie) =>
          cookie.toLowerCase().includes("consent") ||
          cookie.toLowerCase().includes("gdpr") ||
          cookie.toLowerCase().includes("ccpa")
      );

      if (consentCookies.length > 0) {
        // If we find consent-related cookies, assume consent was given
        // This is a fallback - ideally use specific CMP APIs
        setHasConsent(true);
        setIsCheckingConsent(false);
        return true;
      }

      return false;
    };

    // Initial check
    const consentFound = checkForConsent();

    if (!consentFound) {
      // Set up periodic checks for consent
      consentCheckInterval = setInterval(() => {
        const found = checkForConsent();
        if (found) {
          clearInterval(consentCheckInterval);
        }
      }, 500);

      // After 10 seconds, assume no CMP is present and show ads
      timeoutId = setTimeout(() => {
        if (isCheckingConsent) {
          console.log(
            "No consent management platform detected, proceeding with ads"
          );
          setHasConsent(true);
          setIsCheckingConsent(false);
        }
      }, 10000);
    }

    // Listen for consent changes
    const handleConsentUpdate = () => {
      checkForConsent();
    };

    // Listen for various consent events
    window.addEventListener("consentGranted", handleConsentUpdate);
    window.addEventListener("OneTrustGroupsUpdated", handleConsentUpdate);
    window.addEventListener("CookiebotOnConsentReady", handleConsentUpdate);

    return () => {
      if (consentCheckInterval) clearInterval(consentCheckInterval);
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("consentGranted", handleConsentUpdate);
      window.removeEventListener("OneTrustGroupsUpdated", handleConsentUpdate);
      window.removeEventListener(
        "CookiebotOnConsentReady",
        handleConsentUpdate
      );
    };
  }, []);

  // Don't render anything while checking for consent
  if (isCheckingConsent || hasConsent === null) {
    return (
      <div className="my-8 flex justify-center">
        <div className="relative">
          <div
            style={{
              minWidth: "250px",
              minHeight: "250px",
              maxWidth: "336px",
              width: "100%",
            }}
            className="mx-auto bg-gray-100 rounded flex items-center justify-center"
          >
            <div className="text-sm text-gray-500">Checking consent...</div>
          </div>
        </div>
      </div>
    );
  }

  // If no consent, show a placeholder
  if (!hasConsent) {
    return (
      <div className="my-8 flex justify-center">
        <div className="relative">
          <div
            style={{
              minWidth: "250px",
              minHeight: "250px",
              maxWidth: "336px",
              width: "100%",
            }}
            className="mx-auto bg-gray-100 rounded flex items-center justify-center p-4"
          >
            <div className="text-sm text-gray-600 text-center">
              Please accept cookies to see personalized content
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If consent granted, show the ad
  return <EnhancedMobileBannerAd {...props} />;
}

// Extend Window interface for consent management platforms
declare global {
  interface Window {
    gtag?: Function;
    OneTrust?: {
      IsAlertBoxClosed: () => boolean;
      GetDomainData: () => any;
    };
    Cookiebot?: {
      consent: {
        marketing: boolean;
        statistics: boolean;
        preferences: boolean;
        necessary: boolean;
      };
    };
    __tcfapi?: (
      command: string,
      version: number,
      callback: (tcData: any, success: boolean) => void
    ) => void;
  }
}
