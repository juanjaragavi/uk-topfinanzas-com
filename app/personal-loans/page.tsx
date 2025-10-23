"use client";

import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming BlogLayout is suitable
import { FeaturedPostCard } from "@/components/ui/featured-post-card"; // Reusing card component
import { useState, useEffect } from "react"; // Keep state hooks for consistency

// Define the structure for each post item (can be imported if shared)
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string; // Keep type if used by FeaturedPostCard
}

export default function PersonalLoansArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Hardcoded list of loan content (copied from financial-solutions/page.tsx)
  const allLoansContent: PostItem[] = [
    // Personal Loans (Traditional Banks)
    {
      title: "HSBC Personal Loan",
      slug: "hsbc-personal-loan",
      description:
        "Discover HSBC Personal Loans with competitive rates, flexible repayment terms, and quick application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Barclays Personal Loan",
      slug: "barclays-personal-loan",
      description:
        "Explore Barclays Personal Loans with competitive rates, flexible terms, and a streamlined application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136012-fotosprestamo-barclays2uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Lloyds Bank Personal Loan",
      slug: "lloyds-bank-personal-loan",
      description:
        "Explore Lloyds Bank Personal Loans with competitive rates, flexible repayment options, and trusted service.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136057-fotosprestamo-lloyds1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "NatWest Personal Loan",
      slug: "natwest-personal-loan",
      description:
        "Explore NatWest Personal Loans with competitive rates, flexible repayment terms, and a straightforward application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136156-fotosprestamo-nawest1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Santander UK Personal Loan",
      slug: "santander-uk-personal-loan",
      description:
        "Explore Santander UK Personal Loans with competitive rates, flexible repayment terms, and potential benefits for 1|2|3 World customers.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136214-fotosprestamo-santander1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "TSB Personal Loan",
      slug: "tsb-personal-loan",
      description:
        "Explore TSB Personal Loans with competitive rates, flexible repayment options, and a focus on clear, simple banking solutions.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Virgin Money Personal Loan",
      slug: "virgin-money-personal-loan",
      description:
        "Explore Virgin Money Personal Loans with competitive rates, flexible terms, and potential benefits linked to the Virgin Red rewards program.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136330-fotosprestamo-virginmoney1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Halifax Personal Loan",
      slug: "halifax-personal-loan",
      description:
        "Explore Halifax Personal Loans with competitive rates, flexible repayment options, and the trusted service of a major UK bank.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136403-fotosprestamo-halifax1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Nationwide Personal Loan",
      slug: "nationwide-personal-loan",
      description:
        "Explore Nationwide Personal Loans with competitive rates, flexible terms, and benefits for existing members.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136476-fotosprestamo-nationwide1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    // Personal Loans (Fintech/Neobank)
    {
      title: "Revolut Personal Loan",
      slug: "revolut-personal-loan",
      description:
        "Explore Revolut Personal Loans offering quick decisions, flexible terms, and seamless management through the Revolut app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136529-fotosprestamo-revoult1uk.webp",
      date: "4 April 2025",
      type: "fintech",
    },
    {
      title: "Monzo Personal Loan",
      slug: "monzo-personal-loan",
      description:
        "Explore Monzo Personal Loans offering quick decisions, clear terms, and seamless management through the Monzo app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136607-fotosprestamo-monzo2uk.webp",
      date: "4 April 2025",
      type: "neobank",
    },
    {
      title: "Starling Bank Personal Loan",
      slug: "starling-bank-personal-loan",
      description:
        "Explore Starling Bank Personal Loans offering competitive rates, clear terms, and seamless management via the Starling app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136704-fotosprestamo-starlinkbanck1uk.webp",
      date: "4 April 2025",
      type: "neobank",
    },
    // SME Fintech Loans
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan",
      description:
        "Explore Funding Circle's business loans offering fast, flexible financing solutions designed specifically for UK SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Options Marketplace",
      slug: "funding-options-personal-loan",
      description:
        "Explore Funding Options, a leading UK platform connecting SMEs with a wide range of business finance solutions.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718138018-fotosprestamo-fundingoption1uk.webp",
      date: "4 April 2025",
      type: "marketplace",
    },
    {
      title: "iwoca Flexi-Loan",
      slug: "iwoca-personal-loan",
      description:
        "Explore iwoca's Flexi-Loan, offering fast, flexible working capital solutions designed for UK SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "MarketFinance Business Finance",
      slug: "marketfinance-personal-loan",
      description:
        "Explore MarketFinance's solutions for UK SMEs, including fast business loans and flexible invoice finance.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137315-fotosprestamo-fundingchange2uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Xchange Platform",
      slug: "funding-xchange-personal-loan",
      description:
        "Explore Funding Xchange, a smart platform helping UK SMEs compare and access business finance options.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.webp",
      date: "4 April 2025",
      type: "marketplace",
    },
    {
      title: "Capify Business Finance",
      slug: "capify-personal-loan",
      description:
        "Explore Capify's financing solutions for UK SMEs, including Merchant Cash Advances and Business Loans.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Fleximize Business Loans",
      slug: "fleximize-personal-loan",
      description:
        "Explore Fleximize's flexible business loans (Flexiloan & Flexiloan Lite) offering tailored repayment options for UK SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
  ];

  // Date parsing utility function
  const parseDate = (dateString: string): number => {
    if (!dateString) return 0;
    const value = dateString.trim();
    const patterns = [
      /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/,
      /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) {
        let day: number, month: number, year: number;
        if (pattern === patterns[0]) {
          day = parseInt(match[1], 10);
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[2].toLowerCase()
          );
          year = parseInt(match[3], 10);
        } else if (pattern === patterns[1]) {
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[1].toLowerCase()
          );
          day = parseInt(match[2], 10);
          year = parseInt(match[3], 10);
        } else {
          year = parseInt(match[1], 10);
          month = parseInt(match[2], 10) - 1;
          day = parseInt(match[3], 10);
        }
        if (month !== -1 && !isNaN(day) && !isNaN(year)) {
          return Date.UTC(year, month, day);
        }
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  // Sort posts by date (newest first)
  const sortedLoans = [...allLoansContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || "")
  );

  // No filtering needed, just display the sorted loan content
  const filteredPosts = sortedLoans;

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Basic loading skeleton */}
        <div className="animate-pulse bg-gray-200 rounded-xl p-8 w-full max-w-4xl">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const pageContent = (
    <div>
      <h1 className="text-4xl font-bold mb-6">UK Personal & Business Loans</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore detailed guides and reviews of personal and business loans
        available in the UK. Find the right financing solution for your needs.
      </p>

      {/* Grid of loan posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post: PostItem) => (
          <div
            key={post.slug}
            className="relative"
            style={{ position: "relative" }} // Needed for FeaturedPostCard image positioning
          >
            <FeaturedPostCard
              title={post.title}
              description={post.description}
              image={post.image}
              // Posts are located under /financial-solutions/
              slug={post.slug}
              category="Loans" // Static category for this page
              categorySlug="/financial-solutions" // Base path for these posts
              date={post.date}
              type={post.type}
              showBadge={true} // Show type badge if desired
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "UK Personal & Business Loans: Reviews & Guides | TopFinance UK",
        description:
          "Compare the best UK personal loans and business financing options. Find reviews, guides, and comparisons for various loan types.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
