"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Reusable component for testing UTM parameters across pages
export function UtmTester() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    testUtmPersistence();
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}

// Function to test and log UTM parameter persistence
export function testUtmPersistence() {
  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  // Log current URL and UTM parameters in URL
  console.log("\n=== UTM TEST ===");
  console.log("Current Page:", window.location.pathname);
  console.log("Full URL:", window.location.href);

  // Check URL for UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  console.log("UTM Parameters in URL:");
  let foundInUrl = false;
  utmParams.forEach((param) => {
    if (urlParams.has(param)) {
      console.log(`- ${param}: ${urlParams.get(param)}`);
      foundInUrl = true;
    }
  });
  if (!foundInUrl) console.log("- None found in URL");

  // Check sessionStorage for UTM parameters
  console.log("UTM Parameters in sessionStorage:");
  let foundInStorage = false;
  utmParams.forEach((param) => {
    const value = sessionStorage.getItem(param);
    if (value) {
      console.log(`- ${param}: ${value}`);
      foundInStorage = true;
    }
  });
  if (!foundInStorage) console.log("- None found in sessionStorage");
  console.log("==================\n");
}
