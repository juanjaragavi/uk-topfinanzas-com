/**
 * URL Builder Utility
 * Handles building URLs with UTM parameters from sessionStorage
 */

import { UTM_PARAM_KEYS } from "@/lib/constants";

/**
 * Builds a URL with UTM parameters appended from sessionStorage
 * @param baseUrl - The base URL (can be internal path or external URL)
 * @returns URL string with UTM parameters appended
 */
export function buildUrlWithUtmParams(baseUrl: string): string {
  if (typeof window === "undefined") {
    return baseUrl;
  }

  const utmParams: Record<string, string> = {};

  // Collect UTM parameters from sessionStorage
  UTM_PARAM_KEYS.forEach((param) => {
    const value = sessionStorage.getItem(param);
    if (typeof value === "string" && value.trim() !== "") {
      utmParams[param] = value;
    }
  });

  // If no UTM parameters found, return the base URL as-is
  if (Object.keys(utmParams).length === 0) {
    return baseUrl;
  }

  // Build query string
  const queryString = new URLSearchParams(utmParams).toString();

  // Check if the base URL already has query parameters
  const separator = baseUrl.includes("?") ? "&" : "?";

  return `${baseUrl}${separator}${queryString}`;
}

/**
 * Redirects to a URL with UTM parameters preserved
 * For external links, uses window.location.href
 * @param url - The URL to redirect to
 */
export function redirectWithUtmParams(url: string): void {
  const fullUrl = buildUrlWithUtmParams(url);

  if (typeof window !== "undefined") {
    window.location.href = fullUrl;
  }
}
