"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Import Button for pagination

// Interface for post frontmatter
interface PostFrontmatter {
  title: string;
  date?: string; // Made date optional
  categories?: Array<{ name: string; slug: string }>;
  featuredImage?: string;
  description: string;
  excerpt?: string;
  [key: string]: any;
}

// Interface for post data, matching the structure used in blog archive
interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
  category: string; // Added category field
  categoryPath: string;
}

// Helper function to clean titles (copied from blog archive)
const cleanTitle = (title: string): string => {
  // Added safety check for undefined/null title
  if (!title) return "Untitled Post";
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

// --- Hardcoded Post Data (Similar to app/page.tsx) ---
// Using a subset of posts for the homepage, sorted by date descending
const allPosts: PostData[] = [
  {
    slug: "barclaycard-avios-plus",
    frontmatter: {
      title: "Barclaycard Avios Plus Credit Card: Premium Travel Rewards",
      description:
        "The Barclaycard Avios Plus Credit Card offers premium travel perks...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "hsbc-personal-loan",
    frontmatter: {
      title:
        "HSBC Personal Loan: Flexible Financing from a Global Banking Leader",
      description: "Discover HSBC Personal Loans with competitive rates...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.jpg",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "funding-circle-personal-loan", // Example Loan
    frontmatter: {
      title: "Funding Circle Business Loan",
      description:
        "Explore Funding Circle's business loans offering fast, flexible financing...",
      date: "2025-04-04T00:00:00Z", // Example Date
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.jpg",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "best-rewards-credit-cards",
    frontmatter: {
      title:
        "Top Rewards Credit Cards to Maximize Your Spending | Top Finance UK",
      description: "Discover the best rewards credit cards...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_tarjeta_de_credito_nu.jpg", // Placeholder
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "getting-out-of-debt",
    frontmatter: {
      title: "Practical Guide to Getting Out of Debt | Top Finance UK",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_como_salir_de_deudas.jpg",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "top-credit-cards-0-intro-apr",
    frontmatter: {
      title:
        "Best Credit Cards with 0% Intro APR Offers in the UK | Top Finance UK",
      description:
        "Compare the best credit cards offering 0% introductory APR...",
      date: "2025-04-03T00:00:00Z",
      featuredImage: "https://media.topfinanzas.com/images/uk/APR.webp", // Placeholder
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "best-personal-loans",
    frontmatter: {
      title:
        "Best Personal Loans in the UK: Your Complete Guide | Top Finance UK",
      description: "Comprehensive guide to the UK's top personal loans...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/best-personal-loans.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "tips-for-choosing-an-online-loan",
    frontmatter: {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | Top Finance UK",
      description: "Navigate the world of online loans with confidence...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/choosing-online-loan.jpg",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
];
// --- End of Hardcoded Data ---

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  // Removed state variables for fetched posts, loading, error, activeCategory
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page for homepage

  // Removed useEffect for fetching posts

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Removed uniqueCategories calculation

  // Calculate paginated posts using useMemo (operates on the hardcoded allPosts)
  const { paginatedPosts, totalPages } = useMemo(() => {
    // Sort posts by date descending (if date exists)
    const sortedPosts = [...allPosts].sort((a, b) => {
      const dateA = a.frontmatter.date
        ? new Date(a.frontmatter.date).getTime()
        : 0;
      const dateB = b.frontmatter.date
        ? new Date(b.frontmatter.date).getTime()
        : 0;
      return dateB - dateA; // Descending order
    });

    const calculatedTotalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const postsToDisplay = sortedPosts.slice(
      startIndex,
      startIndex + postsPerPage
    );
    return { paginatedPosts: postsToDisplay, totalPages: calculatedTotalPages };
  }, [currentPage, postsPerPage]); // Dependency only on currentPage and postsPerPage now

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

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post - Updated */}
          <div className="mb-12">
            <Link
              href="/personal-finance/best-personal-loans" // Updated href
              className="block group"
            >
              {/* New container for two-column layout */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex group-hover:shadow-lg transition-shadow duration-300">
                {/* Left Column: Image */}
                <div className="md:w-5/12 relative h-64 md:h-auto">
                  <Image
                    src="https://media.topfinanzas.com/images/best-personal-loans.webp" // Updated image src
                    alt="Best Personal Loans in the UK: Your Complete Guide" // Updated alt text
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    priority // Added priority for potential LCP
                  />
                </div>
                {/* Right Column: Text Content */}
                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
                  <h2 className="text-gray-800 text-xl md:text-2xl font-medium leading-tight mb-3">
                    Best Personal Loans in the UK: Your Complete Guide{" "}
                    {/* Updated title */}
                  </h2>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="font-medium text-gray-700">
                      TOP FINANCE
                    </span>
                    <span>•</span>
                    <span className="font-normal">March 30, 2025</span>{" "}
                    {/* Updated date */}
                    {/* Removed views for consistency */}
                  </div>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-3 hidden md:block">
                    Comprehensive guide to the UK's top personal loans,
                    including rates, terms, and application requirements from
                    leading lenders like Nationwide, Santander, and Barclays.{" "}
                    {/* Updated excerpt */}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Dynamic Blog Post Section - Now uses hardcoded data */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>

            {/* Category Filters Removed */}

            {/* Display Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.length > 0 ? (
                paginatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`${post.categoryPath}/${post.slug}`}
                    className="block relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative h-[180px] w-full">
                      <Image
                        src={
                          post.frontmatter.featuredImage ||
                          "https://media.topfinanzas.com/images/placeholder.jpg"
                        }
                        alt={cleanTitle(post.frontmatter.title)} // Use cleanTitle
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-lg"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }} // Fallback image
                      />
                      <span
                        className={`absolute top-2 left-2 inline-block px-2 py-0.5 rounded text-xs font-semibold text-white ${
                          post.category === "Personal Finance"
                            ? "bg-blue-600"
                            : "bg-green-600"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-800 text-lg font-medium leading-tight mb-2 line-clamp-2">
                        {" "}
                        {/* Added line-clamp */}
                        {cleanTitle(post.frontmatter.title)}{" "}
                        {/* Use cleanTitle */}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {post.frontmatter.excerpt ||
                          post.frontmatter.description}
                      </p>
                      {post.frontmatter.date && (
                        <p className="text-xs text-gray-500">
                          {new Date(post.frontmatter.date).toLocaleDateString(
                            "en-GB",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No posts found.{" "}
                  {/* Keep this message in case hardcoded list is empty */}
                </p>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button // Use Button component
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  variant="secondary" // Use appropriate variant
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <Button // Use Button component
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  variant="secondary" // Use appropriate variant
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
