"use client";

import { useEffect, useState, ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ClientOnly component prevents hydration mismatch errors by only rendering content on the client side.
 * This is useful for components that depend on browser-specific APIs or dynamic content like dates/times.
 */
export default function ClientOnly({
  children,
  fallback = null,
}: ClientOnlyProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return fallback;
  }

  return <>{children}</>;
}
