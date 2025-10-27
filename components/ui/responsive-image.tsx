"use client";

import Image, { ImageProps } from "next/image";
import { CSSProperties } from "react";
import { logger } from "@/lib/logger";

type ResponsiveImageProps = ImageProps & {
  containerClassName?: string;
  responsiveHeight?: boolean;
};

/**
 * A wrapper around Next.js Image component that handles common styling issues
 * and ensures proper positioning when using fill property
 */
export default function ResponsiveImage({
  src,
  alt = "",
  width,
  height,
  fill,
  sizes,
  quality = 80,
  priority = false,
  loading = priority ? "eager" : "lazy",
  containerClassName = "",
  className = "",
  responsiveHeight = false,
  style,
  ...props
}: ResponsiveImageProps) {
  if (process.env.NODE_ENV !== "production" && !alt) {
    logger.warn(
      "ResponsiveImage rendered without an alt description; consider providing descriptive text for accessibility.",
    );
  }
  // When using fill, we need to ensure the parent container has position relative
  const containerStyle: CSSProperties = fill
    ? { position: "relative", ...style }
    : {};

  // Ensure height is properly set if responsiveHeight is true
  const aspectRatio =
    typeof height === "number" && typeof width === "number"
      ? height / width
      : undefined;

  if (responsiveHeight && aspectRatio && !fill) {
    containerStyle.paddingBottom = `${aspectRatio * 100}%`;
    containerStyle.height = 0;
    containerStyle.width = "100%";
    containerStyle.position = "relative";
  }

  // Default sizes if not provided and using fill mode
  const defaultSizes = fill && !sizes ? "100vw" : sizes;

  // Prepare image props
  const imageProps: Omit<ImageProps, "alt"> = {
    src,
    fill,
    sizes: defaultSizes,
    quality,
    priority,
    loading,
    className: `${className} ${fill ? "object-cover" : ""}`,
    style: fill ? { objectFit: "cover", ...style } : style,
    ...props,
  };

  // Add width and height if not using fill
  if (!fill && width && height) {
    imageProps.width = width;
    imageProps.height = height;
  }

  // For responsiveHeight mode with fixed dimensions
  if (responsiveHeight && aspectRatio && !fill) {
    imageProps.fill = true;
    imageProps.sizes = "100vw";
    delete imageProps.width;
    delete imageProps.height;
  }

  return (
    <div
      className={`overflow-hidden ${containerClassName}`}
      style={containerStyle}
    >
      <Image {...imageProps} alt={alt} />
    </div>
  );
}
