"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router"; // Or usePathname from next/navigation for App Router
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Use X icon instead of Twitter
import { Share2, X, Facebook, MessageCircle } from "lucide-react"; // Updated icons
import { useIsMobile } from "@/hooks/use-mobile"; // Import the useIsMobile hook

interface SocialShareButtonsProps {
  postUrl: string;
  className?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  postUrl,
  className,
}) => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const initialContainerRef = useRef<HTMLDivElement>(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const isMobile = useIsMobile(); // Use the mobile detection hook

  // Get the full current URL on the client-side
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Don't check for floating visibility if on mobile
      if (isMobile) {
        setIsFloatingVisible(false);
        return;
      }

      if (initialContainerRef.current) {
        const rect = initialContainerRef.current.getBoundingClientRect();
        // Show floating buttons if the top of the initial container is above the viewport top
        setIsFloatingVisible(rect.top < 0);
      } else {
        // If the initial container isn't rendered or available, default to not showing floating
        setIsFloatingVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page loads scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]); // Add isMobile as a dependency

  const encodedUrl = encodeURIComponent(currentUrl || postUrl); // Use client-side URL if available

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedUrl}`, // Basic web WhatsApp link
  };

  const renderButtons = (isFloating = false) => (
    <div
      className={cn(
        "flex gap-2",
        isFloating ? "flex-col" : "flex-row items-center", // Vertical for floating, horizontal inline
        className // Allow external classes
      )}
    >
      {!isFloating && <span className="text-sm font-medium mr-2">Share:</span>}
      {/* X (formerly Twitter) */}
      <Button
        aria-label="Share on X"
        className={cn(
          "bg-black text-white hover:bg-gray-800",
          isFloating && "rounded-xl"
        )} // X brand colors + conditional rounding
        onClick={() =>
          window.open(shareLinks.twitter, "_blank", "noopener,noreferrer")
        }
      >
        <span className="flex items-center justify-center">
          <X className={cn("h-4 w-4", isFloating ? "" : "mr-1")} />{" "}
          {/* Use X icon */}
          {!isFloating && "Post"} {/* Update text */}
        </span>
      </Button>
      {/* Facebook */}
      <Button
        aria-label="Share on Facebook"
        className={cn(
          "bg-blue-600 text-white hover:bg-blue-700",
          isFloating && "rounded-xl"
        )} // Facebook brand colors + conditional rounding
        onClick={() =>
          window.open(shareLinks.facebook, "_blank", "noopener,noreferrer")
        }
      >
        <span className="flex items-center justify-center">
          <Facebook className={cn("h-4 w-4", isFloating ? "" : "mr-1")} />{" "}
          {!isFloating && "Share"}
        </span>
      </Button>
      {/* WhatsApp */}
      <Button
        aria-label="Share on WhatsApp"
        className={cn(
          "bg-green-500 text-white hover:bg-green-600",
          isFloating && "rounded-xl"
        )} // WhatsApp brand colors + conditional rounding
        onClick={() =>
          window.open(shareLinks.whatsapp, "_blank", "noopener,noreferrer")
        }
      >
        <span className="flex items-center justify-center">
          <MessageCircle className={cn("h-4 w-4", isFloating ? "" : "mr-1")} />{" "}
          {!isFloating && "Send"}
        </span>
      </Button>
      {/* Add Instagram later if feasible/required */}
    </div>
  );

  return (
    <>
      {/* Initial inline container */}
      <div ref={initialContainerRef} className="my-4">
        {" "}
        {/* Add margin for spacing */}
        {renderButtons(false)}
      </div>

      {/* Floating container - only show on non-mobile devices */}
      {isFloatingVisible && !isMobile && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-2 bg-background/80 backdrop-blur-sm border rounded-xl shadow-lg">
          {/* Using background/80 for slight transparency */}
          {renderButtons(true)}
        </div>
      )}
    </>
  );
};

export default SocialShareButtons;
