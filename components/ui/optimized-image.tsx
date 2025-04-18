"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "quality"> {
  /**
   * Additional className for the image container
   */
  className?: string;
  /**
   * Whether this image is likely to be the LCP (Largest Contentful Paint)
   * If true, it will be loaded with highest priority
   */
  isLCP?: boolean;
  /**
   * Quality setting for the image (1-100)
   * Default is 85 for most images, 90 for LCP images
   */
  quality?: number;
  /**
   * Placeholder blur hash for faster perceived loading
   */
  blurHash?: string;
}

/**
 * Optimized image component that applies best practices for performance
 * - Uses Next.js Image for automatic optimization
 * - Implements proper loading priorities
 * - Ensures correct sizing with responsive behavior
 * - Implements blur-up loading for better UX
 */
export function OptimizedImage({
  src,
  alt,
  className,
  isLCP = false,
  quality,
  blurHash,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  style,
  ...props
}: OptimizedImageProps) {
  // Determine appropriate quality setting
  const imageQuality = quality ?? (isLCP ? 90 : 85);

  // Generate minimal blur placeholder if not provided
  const placeholder = props.placeholder ?? (blurHash ? "blur" : "empty");
  const blurDataURL =
    props.blurDataURL ??
    blurHash ??
    "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA=";

  return (
    <Image
      src={src}
      alt={alt || ""}
      className={cn("transition-opacity duration-300", className)}
      sizes={sizes}
      quality={imageQuality}
      priority={isLCP}
      fetchPriority={isLCP ? "high" : "auto"}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      style={{
        objectFit: "cover",
        ...style,
      }}
      {...props}
      onError={(e) => {
        // Fallback for image loading errors
        const imgElement = e.currentTarget as HTMLImageElement;
        if (
          imgElement.src !==
          "https://media.topfinanzas.com/images/placeholder-image.webp"
        ) {
          imgElement.src =
            "https://media.topfinanzas.com/images/placeholder-image.webp";
        }
        if (props.onError) props.onError(e);
      }}
    />
  );
}
