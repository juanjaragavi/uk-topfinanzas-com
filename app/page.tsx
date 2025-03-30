"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Keep Button import if needed elsewhere, though not used in this refactored version
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section - Keep structure, CSS handles background */}
      <section
        className={cn(
          "banner-section",
          isMobile ? "banner-section-mobile" : "banner-section-desktop"
        )}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30 md:opacity-25"></div>

        <div className="container mx-auto px-4 text-left relative z-10">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Welcome to Top Finance
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl mb-6 md:mb-8 drop-shadow-md leading-tight">
            Where every financial decision expands your world. <br />
            Choose wisely, live fully.
          </p>
        </div>
      </section>

      {/* Blog Section - Refactored Layout */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          <div className="mb-12">
            <Link
              href="/blog/post/your-first-paycheck" // Assuming this link is correct
              className="block relative overflow-hidden group"
            >
              <div className="relative h-[300px] md:h-[350px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/featured-post.jpg" // Updated image path
                  alt="Your first salary: A complete guide to managing it intelligently"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <h2 className="text-white text-xl md:text-2xl font-medium leading-tight mb-2">
                    Your First Paycheck: A Complete Guide to Smart Management
                  </h2>
                  <div className="flex items-center space-x-2 text-xs text-gray-200">
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png" // Keep original author icon or replace if needed
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="font-normal">TOP FINANCE</span>
                    <span>•</span>
                    <span className="font-normal">February 25, 2025</span>
                    <span>•</span>
                    <span className="font-light opacity-90">
                      798 views {/* Example view count */}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary articles grid - Refactored to 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Secondary Post 1 */}
            <Link
              href="/blog/post/what-is-a-home-mortgage" // Assuming this link is correct
              className="block relative overflow-hidden group"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/secondary-post-1.jpg" // Updated image path
                  alt="What is a mortgage? Your complete guide"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <h3 className="text-white text-lg font-medium leading-tight mb-1">
                    What Is a Home Mortgage? Your Complete Guide
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-200">
                    <span className="font-normal">February 25, 2025</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Secondary Post 2 */}
            <Link
              href="/blog/post/what-are-online-loans" // Assuming this link is correct
              className="block relative overflow-hidden group"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/secondary-post-2.jpg" // Updated image path
                  alt="What are online loans?: A key tool in personal finance"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <h3 className="text-white text-lg font-medium leading-tight mb-1">
                    What Are Online Loans?: A Key Tool in Personal Finances
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-200">
                    <span className="font-normal">February 25, 2025</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Removed the third post block */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
