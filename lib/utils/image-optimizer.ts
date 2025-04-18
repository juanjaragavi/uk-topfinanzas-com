/**
 * Global image optimization helper to consistently improve image loading performance
 */
import { useEffect } from "react";

/**
 * A React hook to preload critical images on the page
 * @param imageUrls Array of image URLs to preload
 * @param priority Whether these are high priority images
 */
export function useImagePreloader(imageUrls: string[], priority = false) {
  useEffect(() => {
    // Skip on server render
    if (typeof window === "undefined") return;

    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        if (priority) {
          img.fetchPriority = "high";
        }

        img.onload = () => resolve(url);
        img.onerror = () => reject(`Failed to load image: ${url}`);
        img.src = url;
      });
    };

    // Preload all images in parallel
    const preloadPromises = imageUrls.map((url) => loadImage(url));

    // We don't need to handle the results, just initiate the preloading
    Promise.allSettled(preloadPromises).then(() => {
      if (process.env.NODE_ENV === "development") {
        console.log(`Preloaded ${imageUrls.length} images`);
      }
    });
  }, [imageUrls, priority]);
}

/**
 * Fix common issues with image URLs in a production environment
 * @param url The original image URL
 * @returns Fixed image URL
 */
export function getFixedImageUrl(url: string): string {
  if (!url) return "/images/placeholder.webp";

  // Force HTTPS
  let fixedUrl = url.replace(/^http:\/\//i, "https://");

  // For blob URLs, return as is
  if (fixedUrl.startsWith("blob:")) return fixedUrl;

  // For data URLs, return as is
  if (fixedUrl.startsWith("data:")) return fixedUrl;

  // Add cache-busting for certain domains
  if (fixedUrl.includes("topfinanzas.com")) {
    // Add width and quality params if not already present
    if (!fixedUrl.includes("?")) {
      fixedUrl += "?";
    } else if (!fixedUrl.endsWith("&")) {
      fixedUrl += "&";
    }

    // Add quality if not present
    if (!fixedUrl.includes("q=")) {
      fixedUrl += "q=80&";
    }

    // Add modern format if not present
    if (!fixedUrl.includes("fm=")) {
      fixedUrl += "fm=webp&";
    }

    // Remove trailing & if present
    if (fixedUrl.endsWith("&")) {
      fixedUrl = fixedUrl.slice(0, -1);
    }
  }

  return fixedUrl;
}

/**
 * Generate a valid image src that works in both development and production
 * This helps prevent issues with image loading across environments
 */
export function getImageSrc(src: string): string {
  // Handle empty src
  if (!src) return "/images/placeholder.webp";

  // Get the fixed URL
  return getFixedImageUrl(src);
}

/**
 * Default low-quality image placeholder for blur-up loading
 */
export const defaultBlurDataURL =
  "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA=";
