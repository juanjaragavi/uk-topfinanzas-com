"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Using existing Button for consistency

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Show after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="primary" // Use primary blue color
          className={cn(
            "bg-[#8DC63F] fixed bottom-4 right-4 z-50 h-10 w-10 p-0 rounded-full shadow-lg", // Fixed position, size, padding removed, rounded, shadow
            "transition-opacity duration-300",
            isVisible ? "opacity-100" : "opacity-0", // Fade in/out
          )}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
