/**
 * Image utilities to improve loading performance and reliability
 */

/**
 * Calculate appropriate image sizes based on breakpoints
 * @param options Optional size configurations
 * @returns A sizes string for the Next.js Image component
 */
export function getImageSizes(options?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  default?: string;
}): string {
  const mobile = options?.mobile || "100vw";
  const tablet = options?.tablet || "50vw";
  const desktop = options?.desktop || "33vw";

  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

/**
 * Get a default blur placeholder for images
 * @returns A base64 encoded tiny image placeholder
 */
export function getDefaultBlurPlaceholder(): string {
  return "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA=";
}

/**
 * Fix image URL if needed (ensure HTTPS, add cache-busting, etc.)
 * @param url Original image URL
 * @returns Fixed URL
 */
export function fixImageUrl(url: string): string {
  // Handle empty or invalid URLs
  if (!url) {
    return "/images/placeholder.webp";
  }

  // Force HTTPS
  let fixedUrl = url.replace(/^http:\/\//i, "https://");

  // Handle relative URLs
  if (fixedUrl.startsWith("/")) {
    // Already a relative URL - no need to change
    return fixedUrl;
  }

  // Handle CDN domain issues
  if (
    fixedUrl.includes("topfinanzas.com") ||
    fixedUrl.includes("media.topfinanzas")
  ) {
    // Return the URL as is, but with HTTPS
    return fixedUrl;
  }

  return fixedUrl;
}
