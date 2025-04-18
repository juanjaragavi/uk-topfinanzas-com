"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src" | "onLoad"> {
  src: string;
  fallbackSrc?: string;
  lowQualitySrc?: string;
  className?: string;
  loadingClassName?: string;
  fadeInDuration?: number;
  onLoadingComplete?: (img: HTMLImageElement) => void;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "https://media.topfinanzas.com/images/placeholder-image.webp",
  lowQualitySrc,
  className = "",
  loadingClassName = "opacity-50 blur-sm",
  fadeInDuration = 500,
  priority = false,
  sizes = "100vw",
  onLoadingComplete,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2;

  useEffect(() => {
    // Reset loading state and retry count when the src changes
    if (!priority) {
      setIsLoading(true);
    }
    setImgSrc(lowQualitySrc || src);
    setRetryCount(0);
  }, [src, lowQualitySrc, priority]);

  // Preconnect to image domain
  useEffect(() => {
    try {
      const url = new URL(src);
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = `${url.protocol}//${url.hostname}`;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    } catch (e) {
      // Invalid URL or other error, just ignore
      console.warn("Failed to preconnect to image domain", e);
    }
  }, [src]);

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    // If we were loading a low quality placeholder, switch to the real image
    if (lowQualitySrc && imgSrc === lowQualitySrc) {
      setImgSrc(src);
    }
    if (onLoadingComplete) {
      onLoadingComplete(event.currentTarget);
    }
  };

  const handleError = () => {
    // On error, try loading the image directly one more time
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
      // Small delay before retry
      setTimeout(() => {
        setImgSrc(`${src}?retry=${retryCount + 1}`);
      }, 1000);
    } else {
      // After max retries, use fallback
      setImgSrc(fallbackSrc);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Image
        src={imgSrc}
        alt={alt}
        className={`
          transition-all ${isLoading ? loadingClassName : ""} 
          duration-${fadeInDuration} ${className}
        `}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
