"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  lowQualitySrc?: string;
  fallbackSrc?: string;
}

/**
 * A simplified image component that supports Next.js Image functionality
 * with fallback handling for better error recovery
 */
export function OptimizedImage({
  src,
  fallbackSrc = "https://media.topfinanzas.com/images/placeholder.webp",
  lowQualitySrc, // Included but not used in this simplified version
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <Image {...props} src={error ? fallbackSrc : src} onError={handleError} />
  );
}
