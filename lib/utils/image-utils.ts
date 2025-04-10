/**
 * Simplified image utility functions for basic responsive sizing
 */

/**
 * Configuration for responsive image sizes
 */
export const RESPONSIVE_SIZES = {
  thumbnail: {
    sm: 320,
    md: 480,
    lg: 640,
  },
  medium: {
    sm: 640,
    md: 768,
    lg: 1024,
  },
  large: {
    sm: 768,
    md: 1024,
    lg: 1280,
  },
  hero: {
    sm: 640,
    md: 1280,
    lg: 1920,
  },
};

/**
 * Returns a sizes attribute string for Next.js Image component
 */
export function getImageSizes(
  sizeType: keyof typeof RESPONSIVE_SIZES = "medium"
): string {
  const sizes = RESPONSIVE_SIZES[sizeType];
  return `(max-width: 640px) ${sizes.sm}px, (max-width: 1024px) ${sizes.md}px, ${sizes.lg}px`;
}

/**
 * Returns the original image URL (no transformation applied)
 * This simplified version doesn't modify URLs to avoid potential issues
 */
export function getLowQualityImageUrl(imageUrl: string): string {
  return imageUrl;
}
