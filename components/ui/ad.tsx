"use client";

/**
 * Advertisement component for TopFinanzas
 * Displays an advertisement from the centralized ad management system
 * Updated to comply with AutoZep Tag implementation requirements
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getRandomAd,
  getAdById,
  type Advertisement,
} from "@/lib/ads/advertisements";

interface AdProps {
  format: Advertisement["format"];
  adId?: string; // Specify a specific ad ID (should be in format "uk_topfinanzas_X" for AutoZep compatibility)
  className?: string;
  fallbackWidth?: number;
  fallbackHeight?: number;
}

export const Ad: React.FC<AdProps> = ({
  format,
  adId,
  className = "",
  fallbackWidth,
  fallbackHeight,
}) => {
  const [ad, setAd] = useState<Advertisement | undefined>(undefined);
  const [isAutoZepAd, setIsAutoZepAd] = useState<boolean>(false);

  useEffect(() => {
    // Check if this is an AutoZep ad based on its ID format
    if (adId && adId.startsWith("uk_topfinanzas_")) {
      setIsAutoZepAd(true);
      return;
    }

    // For non-AutoZep ads, use the existing system
    const advertisement = adId ? getAdById(adId) : getRandomAd(format);
    setAd(advertisement);
  }, [format, adId]);

  // If this is an AutoZep ad, render the div with the exact required ID
  if (isAutoZepAd) {
    return (
      <div
        id={adId}
        className={`ad-container ${className}`}
        style={{
          width: fallbackWidth ? `${fallbackWidth}px` : "100%",
          height: fallbackHeight ? `${fallbackHeight}px` : "auto",
          minHeight: "100px", // Ensures the ad container is visible even when empty
        }}
      ></div>
    );
  }

  // If no ad is found or loaded yet, show a placeholder
  if (!ad) {
    return (
      <div
        className={`bg-gray-100 border border-gray-200 flex items-center justify-center rounded-xl ${className}`}
        style={{
          width: fallbackWidth ? `${fallbackWidth}px` : "auto",
          height: fallbackHeight ? `${fallbackHeight}px` : "auto",
          overflow: "hidden",
          objectFit: "contain",
        }}
      >
        <p className="text-gray-500 text-sm">Ad ({format})</p>
      </div>
    );
  }

  // Render the advertisement with a link (for non-AutoZep ads)
  return (
    <Link
      href={ad.link}
      className={`block rounded-xl overflow-hidden ${className}`}
      style={{
        maxWidth: `${ad.image.width}px`,
        maxHeight: `${ad.image.height}px`,
        width: "100%",
      }}
    >
      <Image
        src={ad.image.src}
        alt={ad.image.alt}
        width={ad.image.width}
        height={ad.image.height}
        priority
        className="object-cover transition-transform duration-300 hover:scale-[1.02]"
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  );
};
