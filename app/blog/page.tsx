"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const postsPerPage = 9; // Display 9 posts per page (3x3 grid)

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
        "https://us.topfinanzas.com/wp-content/uploads/2023/11/Top_Finanzas_tarjeta_de_credito_nu.jpg", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Best Cashback Credit Cards for Maximizing Your Rewards | Top Finance UK",
      slug: "cashback-credit-cards",
      description: "Discover the top cashback credit cards!...",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2025/02/download-8-1.webp", // Placeholder
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
        "https://us.topfinanzas.com/wp-content/uploads/2024/02/Top_Finanzas_Top_tarjeta_de_credito-1.jpg", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Practical Guide to Getting Out of Debt | Top Finance UK",
      slug: "getting-out-of-debt",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2023/11/Top_Finanzas_como_salir_de_deudas.jpg",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Top Credit Cards With No Annual Fees | Top Finance UK",
      slug: "no-annual-fee-credit-cards",
      description: "Find the best no annual fee credit cards...",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2023/11/Top_Finanzas_tarjetas_de_credito_sin_anualidad.jpg", // Placeholder
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
        "https://us.topfinanzas.com/wp-content/uploads/2018/12/Top-Finanzas_prestamos_personales.jpg", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | Top Finance UK",
      slug: "tips-for-choosing-an-online-loan",
      description: "Navigate the world of online loans with confidence...",
      image: "https://media.topfinanzas.com/images/choosing-online-loan.jpg",
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
      image: "https://us.topfinanzas.com/wp-content/uploads/2025/02/APR.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Understanding Credit Card Interest Rates - A Consumer Guide | Top Finance UK",
      slug: "understanding-credit-card-interest-rates",
      description: "Learn how credit card interest rates work...",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-5-2-820x547.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
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
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.jpg",
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
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.jpg",
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
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.jpg",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    // ... Add more posts from financial-solutions as needed
  ];

  // Sort posts by date if available, otherwise keep original order (or implement other sorting)
  // For now, keeping the combined order. Add date parsing/sorting if needed.

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

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
          className="block p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow"
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
          className="block p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow"
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

      <h2 className="text-3xl font-bold mb-8">All Articles</h2>

      {/* Grid of posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <Link href={`${post.categoryPath}/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={cleanTitle(post.title)}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              {post.date && (
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              )}
              <Link
                href={`${post.categoryPath}/${post.slug}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2 line-clamp-2"
              >
                {cleanTitle(post.title)}
              </Link>
              <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                {post.description}
              </p>
              <div className="mt-auto">
                <Link
                  href={`${post.categoryPath}/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

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

  // Use the metadata defined in app/blog/metadata.ts
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
