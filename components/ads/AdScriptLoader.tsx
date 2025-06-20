"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * AdScriptLoader component
 *
 * This component was previously used for loading ad scripts.
 * Currently cleaned and ready for future ad implementations.
 */
export default function AdScriptLoader() {
  const pathname = usePathname();

  // Do not load ad scripts on certain pages
  if (pathname === "/quiz" || pathname?.startsWith("/quiz/")) {
    return null;
  }

  return null;
}
