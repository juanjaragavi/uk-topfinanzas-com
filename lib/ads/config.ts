// Central configuration for AdZep activation and ad container detection
// This module is imported by activation and overlay utilities.

export interface AdZepConfig {
  // CSS selectors that indicate ad unit containers are present on the page
  containerSelectors: string[];
  // Path prefixes that usually represent article/content pages with ads
  articlePathPrefixes: string[];
  // Maximum time to wait for containers on initial load (ms)
  initialContainerWaitMs: number;
  // Maximum time to wait for containers on SPA navigations (ms)
  navigationContainerWaitMs: number;
  // Activation default timeout for waiting AdZepActivateAds to exist (ms)
  defaultActivationTimeoutMs: number;
  // Retry attempts and delay for waiting AdZepActivateAds to exist
  defaultRetryAttempts: number;
  defaultRetryDelayMs: number;
  // Post-activation verification retries
  verifyRetries: number;
  verifyDelayMs: number;
  // Overlay grace period if no ad units exist (ms)
  overlayGraceMs: number;
}

export const adZepConfig: AdZepConfig = {
  // Known generic container patterns; adjust as concrete IDs/classes become available
  containerSelectors: [
    "[data-ad-slot]",
    "[data-adzep]",
    "[id^='adzep-']",
    "[class*='adzep-']",
    ".ad-slot",
    ".ad-unit",
    "#sidebar-ads",
    ".in-article-ad",
  ],
  articlePathPrefixes: [
    "/blog",
    "/financial-solutions",
    "/personal-finance",
    "/credit-cards",
  ],
  initialContainerWaitMs: 10000,
  navigationContainerWaitMs: 4000,
  defaultActivationTimeoutMs: 5000,
  defaultRetryAttempts: 2,
  defaultRetryDelayMs: 600,
  verifyRetries: 3,
  verifyDelayMs: 1200,
  overlayGraceMs: 1800,
};

export function isArticlePath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return adZepConfig.articlePathPrefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );
}
