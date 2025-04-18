// This component has been deprecated in favor of standard Next.js Image components
// Component is kept as a reference only, to avoid breaking any remaining imports
// All instances should be migrated to use the standard Image component from next/image

import Image, { ImageProps } from "next/image";

export function OptimizedImage(props: ImageProps) {
  // Return the standard Image component with the same props
  // to ensure any lingering references still work
  return <Image {...props} />;
}
