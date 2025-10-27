"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsLogger } from "@/lib/logger";

// Define the UTM parameters we want to monitor
const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export default function UtmMonitor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Monitor UTM parameters on route changes
  useEffect(() => {
    // Don't run on server
    if (typeof window === "undefined") return;

    analyticsLogger.info("\n===== UTM MONITOR =====");
    analyticsLogger.info(`Page: ${pathname}`);

    // Check URL for UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    analyticsLogger.info("UTM Parameters in URL:");
    let foundInUrl = false;

    UTM_PARAM_KEYS.forEach((param) => {
      if (urlParams.has(param)) {
        analyticsLogger.info(`- ${param}: ${urlParams.get(param)}`);
        foundInUrl = true;
      }
    });

    if (!foundInUrl) analyticsLogger.info("- None found in URL");

    // Check sessionStorage for UTM parameters
    analyticsLogger.info("UTM Parameters in sessionStorage:");
    let foundInStorage = false;

    UTM_PARAM_KEYS.forEach((param) => {
      const value = sessionStorage.getItem(param);
      if (value !== null) {
        analyticsLogger.info(`- ${param}: ${value}`);
        foundInStorage = true;
      }
    });

    if (!foundInStorage) analyticsLogger.info("- None found in sessionStorage");
    analyticsLogger.info("=======================\n");
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}
