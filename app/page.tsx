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

          {/* Secondary articles grid - Updated to showcase Financial Solutions posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Financial Solutions Post 1 */}
            <Link
              href="/financial-solutions/amazon-rewards-visa-credit-card-benefits"
              className="block relative overflow-hidden group"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="/images/financial-solutions/amazon-rewards-visa.webp"
                  alt="Amazon Rewards Visa Credit Card Benefits"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <h3 className="text-white text-lg font-medium leading-tight mb-1">
                    Amazon Rewards Visa Credit Card: Ideal Benefits for You
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-200">
                    <span className="font-normal">March 30, 2025</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Financial Solutions Post 2 */}
            <Link
              href="/financial-solutions/visa-signature-us-current-credit-card-benefits"
              className="block relative overflow-hidden group"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="/images/financial-solutions/visa-signature-card.webp"
                  alt="Visa Signature US Current Credit Card Benefits"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <h3 className="text-white text-lg font-medium leading-tight mb-1">
                    Visa Signature US Current Credit Card: Complete Benefits
                    Guide
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-200">
                    <span className="font-normal">March 30, 2025</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* More Financial Solutions posts - 3 columns */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              More Financial Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Financial Solutions Post 3 */}
              <Link
                href="/financial-solutions/best-personal-loans"
                className="block relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src="/images/financial-solutions/best-personal-loans.webp"
                    alt="Best Personal Loans in the UK"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 text-lg font-medium leading-tight mb-2">
                    Best Personal Loans in the UK: Your Complete Guide
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Find the perfect personal loan for your needs with our
                    comprehensive guide to the UK's top lenders, rates, and
                    application requirements.
                  </p>
                </div>
              </Link>

              {/* Financial Solutions Post 4 */}
              <Link
                href="/financial-solutions/tips-for-choosing-an-online-loan"
                className="block relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src="/images/financial-solutions/choosing-online-loan.jpg"
                    alt="Tips for Choosing an Online Loan"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 text-lg font-medium leading-tight mb-2">
                    5 Essential Tips for Choosing an Online Loan
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Navigate the world of online loans with confidence using
                    these essential tips to find the best rates and terms for
                    your financial needs.
                  </p>
                </div>
              </Link>

              {/* Financial Solutions Post 5 */}
              <Link
                href="/financial-solutions/capital-one-quicksilver-student-credit-card-requirements-application"
                className="block relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src="/images/financial-solutions/capital-one-quicksilver.jpg"
                    alt="Capital One Quicksilver Student Credit Card"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 text-lg font-medium leading-tight mb-2">
                    Capital One Quicksilver Student Credit Card: Requirements
                    Guide
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Learn everything you need to know about qualifying for the
                    Capital One Quicksilver Student Credit Card, designed for UK
                    students.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
