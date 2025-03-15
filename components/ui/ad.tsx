"use client";

/**
 * Advertisement component for TopFinanzas
 * Displays an advertisement from the centralized ad management system
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
  adId?: string; // Optional: specify a specific ad by ID
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

  useEffect(() => {
    // Get advertisement either by ID or randomly by format
    const advertisement = adId ? getAdById(adId) : getRandomAd(format);
    setAd(advertisement);
  }, [format, adId]);

  // If no ad is found or loaded yet, show a placeholder
  if (!ad) {
    return (
      <div
        className={`bg-gray-100 border border-gray-200 flex items-center justify-center rounded-lg ${className}`}
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

  // Render the advertisement with a link
  return (
    <Link
      href={ad.link}
      className={`block rounded-lg overflow-hidden ${className}`}
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
