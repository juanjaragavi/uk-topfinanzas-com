"use client";

import { useEffect, useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function UtmPersister() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Define the UTM parameters we want to track
  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  // Store UTM parameters in sessionStorage when they appear in the URL
  useEffect(() => {
    // Check if we have any UTM parameters in the current URL
    const hasUtmParams = utmParams.some((param) => searchParams.has(param));
    if (hasUtmParams) {
      // Save UTM parameters to sessionStorage
      utmParams.forEach((param) => {
        if (searchParams.has(param)) {
          sessionStorage.setItem(param, searchParams.get(param)!);
        }
      });
    }
  }, [searchParams]);

  // Function to add UTM parameters to all regular <a> links (non-Next.js Links)
  const attachUtmParamsToRegularLinks = useCallback(() => {
    // Check if we have stored UTM parameters
    const storedUtmParams = utmParams.filter(
      (param) => sessionStorage.getItem(param) !== null
    );

    if (storedUtmParams.length === 0) return;

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      try {
        // Skip links without href or non-HTTP URLs
        if (!link.href || !link.href.startsWith("http")) return;

        // Skip links with data-next-* attributes (Next.js Links)
        if (
          link.hasAttribute("data-next-router-prefetch") ||
          link.hasAttribute("data-next-router-state") ||
          link.hasAttribute("data-next") ||
          link.hasAttribute("data-nextjs")
        ) {
          return;
        }

        const url = new URL(link.href);

        // Only add UTM params to internal links
        if (url.host === window.location.host) {
          storedUtmParams.forEach((param) => {
            const value = sessionStorage.getItem(param);
            if (value) {
              url.searchParams.set(param, value);
            }
          });

          link.href = url.toString();
        }
      } catch (e) {
        // Silent fail for invalid URLs
        console.error("Error processing URL:", link.href, e);
      }
    });
  }, []);

  // Run on initial load and when pathname changes
  useEffect(() => {
    // Handle regular <a> links
    attachUtmParamsToRegularLinks();

    // Add a mutation observer to handle dynamically added links
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          attachUtmParamsToRegularLinks();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, attachUtmParamsToRegularLinks]);

  return null; // This component doesn't render anything
}
