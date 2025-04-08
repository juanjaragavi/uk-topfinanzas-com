"use client"; // Keep client directive if interactions are needed

import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming this layout is suitable
import Link from "next/link";
import Image from "next/image";
// Remove state imports if no filtering is implemented initially
// import { useState } from "react";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string; // Optional date
}

export default function PersonalFinanceArchivePage() {
  // Array of all posts in this category
  const allPosts: PostItem[] = [
    {
      title: "Best Personal Loans in the UK: Your Complete Guide | Top Finance UK",
      slug: "best-personal-loans",
      description: "Comprehensive guide to the UK's top personal loans, including rates, terms, and application requirements from leading lenders like Nationwide, Santander, and Barclays.",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      date: "30 March 2025", // Example date
    },
    {
      title: "Top Rewards Credit Cards to Maximize Your Spending | Top Finance UK",
      slug: "best-rewards-credit-cards",
      description: "Discover the best rewards credit cards that turn your everyday spending into valuable perks. From cashback to points and miles, find the perfect card.",
      image: "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    {
      title: "Best Cashback Credit Cards for Maximizing Your Rewards | Top Finance UK",
      slug: "cashback-credit-cards",
      description: "Discover the top cashback credit cards! Compare benefits like unlimited rewards, flexible redemption options, and introductory APR offers.",
      image: "https://media.topfinanzas.com/images/uk/download-8-1.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    {
      title: "Credit Cards - Types, Benefits, and Keys to Financial Health | Top Finance UK",
      slug: "credit-card-types-benefits",
      description: "Discover everything you need to know about credit cards, from types and benefits to tips for responsible usage and maintaining healthy finances.",
      image: "https://media.topfinanzas.com/images/uk/Top_Finanzas_Top_tarjeta_de_credito-1.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    {
      title: "Practical Guide to Getting Out of Debt | Top Finance UK",
      slug: "getting-out-of-debt",
      description: "Feeling overwhelmed by debt? Get practical strategies for getting out of debt, building an emergency fund, and taking control of your finances.",
      image: "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      date: "3 April 2025", // Example date
    },
    {
      title: "Top Credit Cards With No Annual Fees | Top Finance UK",
      slug: "no-annual-fee-credit-cards",
      description: "Find the best no annual fee credit cards with great cashback, rewards, and flexible benefits. Perfect for managing expenses while saving on fees.",
      image: "https://media.topfinanzas.com/images/uk/Top_Finanzas_tarjetas_de_credito_sin_anualidad.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    {
      title: "Personal Loans - A Strategy for Managing Debt | Top Finance UK",
      slug: "personal-loans-debt-strategy",
      description: "Discover how personal loans can help you consolidate debt and manage your finances efficiently. Learn how to choose the right loan for your needs.",
      image: "https://media.topfinanzas.com/images/uk/Top-Finanzas_prestamos_personales.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    {
      title: "5 Essential Tips for Choosing an Online Loan: Quick Guide | Top Finance UK",
      slug: "tips-for-choosing-an-online-loan",
      description: "Navigate the world of online loans with confidence using these essential tips to find the best rates and terms for your financial needs.",
      image: "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      date: "30 March 2025", // Example date
    },
    {
      title: "Best Credit Cards with 0% Intro APR Offers in the UK | Top Finance UK",
      slug: "top-credit-cards-0-intro-apr",
      description: "Compare the best credit cards offering 0% introductory APR on purchases and balance transfers in the UK. Save money on interest and manage debt effectively.",
      image: "https://media.topfinanzas.com/images/uk/APR.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    {
      title: "Understanding Credit Card Interest Rates - A Consumer Guide | Top Finance UK",
      slug: "understanding-credit-card-interest-rates",
      description: "Learn how credit card interest rates work, including APR calculations, and discover ways to manage and minimize your debt effectively.",
      image: "https://media.topfinanzas.com/images/uk/download-5-2.webp", // Placeholder image - UPDATE NEEDED
      date: "3 April 2025", // Example date
    },
    // Add other posts here as needed
  ];

  // Simple content structure without filtering for now
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">Personal Finance Guides</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore our guides on credit cards, loans, debt management, and other personal finance topics to help you make informed decisions.
      </p>

      {/* Grid of posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title.split('|')[0].trim()} // Cleaner alt text
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic responsive sizes
                onError={(e) => { e.currentTarget.src = 'https://media.topfinanzas.com/images/placeholder-image.webp'; }} // Fallback image
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {post.date && <p className="text-sm text-gray-500 mb-2">{post.date}</p>}
              <Link
                href={`/personal-finance/${post.slug}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2"
              >
                {post.title.split('|')[0].trim()} {/* Show cleaner title */}
              </Link>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{post.description}</p>
              <div className="mt-auto">
                <Link
                  href={`/personal-finance/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Metadata for the archive page itself
  const pageMetadata = {
    title: "Personal Finance Guides | Top Finance UK",
    description: "Explore guides on credit cards, loans, debt management, and other personal finance topics in the UK.",
  };

  return (
    <BlogLayout metadata={pageMetadata}>
      {content}
    </BlogLayout>
  );
}
