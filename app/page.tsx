"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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

      {/* Banner Section */}
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
          <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl  mb-6 md:mb-8 drop-shadow-md leading-tight">
            Where every financial decision expands your world. <br />
            Choose wisely, live fully.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          <div className="mb-12">
            <Link
              href="/blog/post/your-first-paycheck"
              className="block relative overflow-hidden"
            >
              <div className="relative h-[300px] md:h-[350px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg"
                  alt="Your first salary: A complete guide to managing it intelligently"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                  <h2 className="text-white text-xl md:text-2xl font-medium leading-tight">
                    Your first salary: A complete guide to managing it
                    intelligently
                  </h2>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-200">
                      TOP FINANCE
                    </span>
                    <span className="text-xs">•</span>
                    <span className="text-[10px] font-normal text-gray-200">
                      25 February 2025
                    </span>
                  </div>
                  <div className="flex items-center font-light mt-1 text-xs opacity-90 text-gray-200">
                    <span>{721} views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Latest articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link
              href="/blog/post/what-is-a-home-mortgage"
              className="block relative overflow-hidden"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg"
                  alt="What is a mortgage? Your complete guide"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                    What is a mortgage? Your complete guide
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-200">
                      TOP FINANCE
                    </span>
                    <span className="text-xs">•</span>
                    <span className="text-[10px] font-normal text-gray-200">
                      25 February 2025
                    </span>
                  </div>
                  <div className="flex items-center font-light mt-1 text-xs opacity-90 text-gray-200">
                    <span>{563} views</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/post/what-are-online-loans"
              className="block relative overflow-hidden"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/generated/1741723547071/sample_0.jpg"
                  alt="What are online loans?: A key tool in personal finance"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                    What are online loans?: A key tool in personal finance
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-200">
                      TOP FINANCE
                    </span>
                    <span className="text-xs">•</span>
                    <span className="text-[10px] font-normal text-gray-200">
                      25 February 2025
                    </span>
                  </div>
                  <div className="flex items-center font-light mt-1 text-xs opacity-90 text-gray-200">
                    <span>{412} views</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/post/5-tips-for-choosing-an-online-loan"
              className="block relative overflow-hidden"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="https://media.topfinanzas.com/images/generated/1741732471632/sample_0.jpg"
                  alt="5 tips for choosing an online loan: Quick guide"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                    5 tips for choosing an online loan: Quick guide
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-xs font-normal text-gray-200">
                      TOP FINANCE
                    </span>
                    <span className="text-xs">•</span>
                    <span className="text-[10px] font-normal text-gray-200">
                      25 February 2025
                    </span>
                  </div>
                  <div className="flex items-center font-light mt-1 text-xs opacity-90 text-gray-200">
                    <span>{345} views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
