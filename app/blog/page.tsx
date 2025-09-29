"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Standard Next.js Image component
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { FeaturedPostsGrid } from "@/components/ui/featured-posts-grid";
import { motion, AnimatePresence } from "framer-motion";
import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming this layout is suitable
import { Button } from "@/components/ui/button"; // For pagination

// Define the structure for each post item, adding category
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Personal Finance" | "Financial Solutions";
  categoryPath: string;
  date?: string; // Optional date
}

// Helper function to clean titles
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export default function BlogArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const postsPerPage = 9; // Display 9 posts per page (3x3 grid)

  // Categories for filtering
  const categories = {
    all: "All Articles",
    personalFinance: "Personal Finance",
    financialSolutions: "Financial Solutions",
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Combine posts from both categories
  const allPosts: PostItem[] = [
    // Personal Finance Posts
    {
      title:
        "Best Personal Loans in the UK: Your Complete Guide | Top Finance UK",
      slug: "best-personal-loans",
      description: "Comprehensive guide to the UK's top personal loans...",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title:
        "Top Rewards Credit Cards to Maximize Your Spending | Top Finance UK",
      slug: "best-rewards-credit-cards",
      description: "Discover the best rewards credit cards...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Best Cashback Credit Cards for Maximizing Your Rewards | Top Finance UK",
      slug: "cashback-credit-cards",
      description: "Discover the top cashback credit cards!...",
      image: "https://media.topfinanzas.com/images/uk/download-8-1.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Credit Cards - Types, Benefits, and Keys to Financial Health | Top Finance UK",
      slug: "credit-card-types-benefits",
      description: "Discover everything you need to know about credit cards...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_Top_tarjeta_de_credito-1.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Practical Guide to Getting Out of Debt | Top Finance UK",
      slug: "getting-out-of-debt",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Top Credit Cards With No Annual Fees | Top Finance UK",
      slug: "no-annual-fee-credit-cards",
      description: "Find the best no annual fee credit cards...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_credit_cards_without_annual_fee.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Personal Loans - A Strategy for Managing Debt | Top Finance UK",
      slug: "personal-loans-debt-strategy",
      description:
        "Discover how personal loans can help you consolidate debt...",
      image:
        "https://media.topfinanzas.com/images/uk/Top-Finances_personal_loans.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | Top Finance UK",
      slug: "tips-for-choosing-an-online-loan",
      description: "Navigate the world of online loans with confidence...",
      image:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title:
        "Best Credit Cards with 0% Intro APR Offers in the UK | Top Finance UK",
      slug: "top-credit-cards-0-intro-apr",
      description:
        "Compare the best credit cards offering 0% introductory APR...",
      image: "https://media.topfinanzas.com/images/uk/APR.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Understanding Credit Card Interest Rates - A Consumer Guide | Top Finance UK",
      slug: "understanding-credit-card-interest-rates",
      description: "Learn how credit card interest rates work...",
      image: "https://media.topfinanzas.com/images/uk/download-5-2.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Side Hustle or Second Job? How to Choose the Right Income Booster",
      slug: "side-hustle-or-second-job",
      description:
        "With rising living costs across the UK, many people are seeking ways to boost their income. Whether you're considering a traditional second job or exploring the world of side hustles, making the right choice can significantly impact your personal finance goals and lifestyle.",
      image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "27 August 2025",
    },
    {
      title:
        "Beyond Spreadsheets: Create a Personal Finance Budget You'll Actually Stick To | Top Finance UK",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "A modern UK-friendly budgeting guide covering 50/30/20, zero‑based budgeting, digital pots, and a 7‑day quick start.",
      image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "4 September 2025",
    },
    // Financial Solutions Posts (Add relevant ones)
    // Example: Add a few key ones, more can be added later
    {
      title: "Barclaycard Avios Plus Credit Card: Premium Travel Rewards",
      slug: "barclaycard-avios-plus",
      description:
        "The Barclaycard Avios Plus Credit Card offers premium travel perks...",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025", // Example date
    },
    {
      title:
        "HSBC Personal Loan: Flexible Financing from a Global Banking Leader",
      slug: "hsbc-personal-loan",
      description: "Discover HSBC Personal Loans with competitive rates...",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Learn about the innovative Curve Card that consolidates all your existing cards...",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "2 April 2025",
    },
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan",
      description:
        "Explore Funding Circle's business loans offering fast, flexible financing...",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    // ... Add more posts from financial-solutions as needed
  ];

  // Sort posts by date (newest first). Supports ISO strings and "DD Month YYYY".
  const MONTHS: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const parseDate = (value?: string): number => {
    if (!value) return 0;
    // ISO quick path
    if (/^\d{4}-\d{2}-\d{2}/.test(value) || value.includes("T")) {
      const t = Date.parse(value);
      return isNaN(t) ? 0 : t;
    }
    // "DD Month YYYY" (e.g., "3 April 2025")
    const m = value.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
    if (m) {
      const day = parseInt(m[1], 10);
      const monthName = m[2].toLowerCase();
      const year = parseInt(m[3], 10);
      const month = MONTHS[monthName];
      if (month != null) {
        return Date.UTC(year, month, day);
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  const allPostsSorted: PostItem[] = [...allPosts].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date),
  );

  // Filter posts based on active category
  const filterPosts = useCallback(() => {
    let filteredPosts = [...allPostsSorted];

    if (activeCategory === "personalFinance") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Personal Finance",
      );
    } else if (activeCategory === "financialSolutions") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Financial Solutions",
      );
    } else if (activeCategory === "creditCards") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("credit card") ||
          post.slug.toLowerCase().includes("credit-card") ||
          post.description.toLowerCase().includes("credit card"),
      );
    } else if (activeCategory === "loans") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("loan") ||
          post.slug.toLowerCase().includes("loan") ||
          post.description.toLowerCase().includes("loan"),
      );
    }

    return filteredPosts;
  }, [allPosts, activeCategory]);

  // Get filtered posts
  const filteredPosts = filterPosts();

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">TopFinance UK Blog</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Your source for insights on personal finance and financial solutions in
        the UK.
      </p>

      {/* Category Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/personal-finance"
          className="block p-6 bg-blue-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Personal Finance Guides
          </h2>
          <p className="text-blue-700">
            Explore tips on budgeting, saving, debt management, credit cards,
            and more.
          </p>
        </Link>
        <Link
          href="/financial-solutions"
          className="block p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Financial Solutions
          </h2>
          <p className="text-green-700">
            Discover detailed reviews and comparisons of credit cards and loans
            available in the UK.
          </p>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {activeCategory
          ? categories[activeCategory as keyof typeof categories]
          : "All Articles"}
      </h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key === "all" ? null : key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              (key === "all" && !activeCategory) || activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            data-category={key}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of posts with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="relative"
              style={{ position: "relative" }}
              data-category={post.category.toLowerCase().replace(" ", "-")}
            >
              <FeaturedPostCard
                title={cleanTitle(post.title)}
                description={post.description}
                image={post.image}
                slug={post.slug}
                category={post.category}
                categorySlug={post.categoryPath}
                date={post.date}
                priority={index < 2}
                showBadge={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary" // Changed from outline
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary" // Changed from outline
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );

  // The BlogLayout component might handle this automatically if set up,
  // otherwise, you might pass the imported metadata object.
  // For simplicity, assuming BlogLayout handles it or metadata is implicitly used.
  return (
    <BlogLayout metadata={{}}>
      {" "}
      {/* Pass empty or specific metadata if needed by layout */}
      {content}
    </BlogLayout>
  );
}
