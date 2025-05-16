"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect, useCallback } from "react";

export default function FinancialSolutionsPage() {
  // Category definitions
  const categories = {
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Content type definitions
  const creditCardTypes = {
    all: "All",
    traditional: "Traditional Banks",
    neobank: "Neobanks",
    fintech: "Fintech Solutions",
  };

  // Loan type definitions
  const loanTypes = {
    all: "All",
    personal: "Personal Loans",
    sme_fintech: "SME Fintech",
    neobank: "Neobank Loans",
    marketplace: "Marketplaces",
    guide: "Guides",
  };

  // State for active category and filters with more reliable client-side initialization
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("creditCards");
  const [activeCreditCardType, setActiveCreditCardType] = useState("all");
  const [activeLoanType, setActiveLoanType] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Force re-render after mount to ensure hydration issues are resolved
    const timer = setTimeout(() => {
      setActiveCategory("creditCards");
      setActiveCreditCardType("all");
      setActiveLoanType("all");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Avoid any rendering until client-side code is running
  // This prevents hydration issues in production
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-xl p-8">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // List of all loan content with types
  const allLoansContent = [
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
      type: "fintech", // Could also be 'personal' depending on desired filter logic
    },
    {
      title: "Monzo Personal Loan",
      slug: "monzo-personal-loan",
      description:
        "Explore Monzo Personal Loans offering quick decisions, clear terms, and seamless management through the Monzo app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136607-fotosprestamo-monzo2uk.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    {
      title: "Starling Bank Personal Loan",
      slug: "starling-bank-personal-loan",
      description:
        "Explore Starling Bank Personal Loans offering competitive rates, clear terms, and seamless management via the Starling app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136704-fotosprestamo-starlinkbanck1uk.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    // SME Fintech Loans
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan", // Keep slug as created
      description:
        "Explore Funding Circle's business loans offering fast, flexible financing solutions designed specifically for UK SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Options Marketplace",
      slug: "funding-options-personal-loan", // Keep slug as created
      description:
        "Explore Funding Options, a leading UK platform connecting SMEs with a wide range of business finance solutions.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718138018-fotosprestamo-fundingoption1uk.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "iwoca Flexi-Loan",
      slug: "iwoca-personal-loan", // Keep slug as created
      description:
        "Explore iwoca's Flexi-Loan, offering fast, flexible working capital solutions designed for UK SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "MarketFinance Business Finance",
      slug: "marketfinance-personal-loan", // Keep slug as created
      description:
        "Explore MarketFinance's solutions for UK SMEs, including fast business loans and flexible invoice finance.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137315-fotosprestamo-fundingchange2uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Xchange Platform",
      slug: "funding-xchange-personal-loan", // Keep slug as created
      description:
        "Explore Funding Xchange, a smart platform helping UK SMEs compare and access business finance options.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "Capify Business Finance",
      slug: "capify-personal-loan", // Keep slug as created
      description:
        "Explore Capify's financing solutions for UK SMEs, including Merchant Cash Advances and Business Loans.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Fleximize Business Loans",
      slug: "fleximize-personal-loan", // Keep slug as created
      description:
        "Explore Fleximize's flexible business loans (Flexiloan & Flexiloan Lite) offering tailored repayment options for UK SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
  ];

  // List of credit card content with types
  const creditCardsContent = [
    {
      title: "Lloyds Bank Credit Card",
      slug: "lloyds-bank-credit-card",
      description:
        "Explore the Lloyds Bank Credit Card with competitive rates, no annual fees, and Everyday Offers cashback program for existing Lloyds customers.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "NatWest Credit Card",
      slug: "natwest-credit-card",
      description:
        "Discover the NatWest Credit Card with MyRewards program, mobile banking integration, and flexible payment options for everyday spending.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Santander UK Credit Card",
      slug: "santander-uk-credit-card",
      description:
        "Learn about the Santander UK Credit Card with All in One cashback, no foreign transaction fees, and balance transfer options for smart financial management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "TSB Credit Card",
      slug: "tsb-credit-card",
      description:
        "Explore the TSB Credit Card with everyday value, low fees, and seamless integration with TSB's mobile and online banking platforms.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Virgin Money Credit Card",
      slug: "virgin-money-credit-card",
      description:
        "Discover the Virgin Money Credit Card with lifestyle-focused rewards, Virgin Points, and exclusive offers across the Virgin Group ecosystem.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Halifax World Elite MasterCard",
      slug: "halifax-world-elite-mastercard",
      description:
        "Explore the Halifax World Elite MasterCard, offering premium travel benefits, comprehensive insurance, and exclusive rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp", // Placeholder image
      date: "4 April 2025",
      type: "traditional",
    },
    {
      title: "Monzo Credit Card",
      slug: "monzo-credit-card",
      description:
        "Learn about the Monzo Credit Card with real-time spending notifications, smart budgeting tools, and seamless integration with Monzo's digital banking services.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Revolut Credit Card",
      slug: "revolut-credit-card",
      description:
        "Explore the Revolut Credit Card with multi-currency capabilities, competitive exchange rates, and real-time control for modern international lifestyles.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Starling Bank Credit Card",
      slug: "starling-bank-credit-card",
      description:
        "Discover the Starling Bank Credit Card with transparent pricing, ethical banking practices, and advanced digital features for modern financial management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Learn about the innovative Curve Card that consolidates all your existing cards into a single smart card with time-travel functionality and enhanced rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      date: "2 April 2025",
      type: "fintech",
    },
  ];

  // Filter content based on selected category and type
  const filteredCreditCards =
    activeCreditCardType === "all"
      ? creditCardsContent
      : creditCardsContent.filter((card) => card.type === activeCreditCardType);

  const filteredLoans =
    activeLoanType === "all"
      ? allLoansContent
      : allLoansContent.filter((loan) => loan.type === activeLoanType);

  // Custom content for this category page
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-left sm:text-left">
        Financial Solutions
      </h1>

      <p className="text-lg text-gray-700 mb-8 leading-tight text-left sm:text-left">
        Find detailed information about the best credit cards available in the
        UK, requirements for applying, and comprehensive guides to help you
        choose the best option based on your financial needs.
      </p>

      {/* AdZep AutoZep Paid Advertisement `<div>` element */}
      <div
        id="uk_topfinanzas_1"
        className="p-4 flex items-center justify-center w-full min-w-full"
      ></div>

      {/* Featured article using our new component */}
      <div className="mb-10">
        <FeaturedPostCard
          title="Barclaycard Avios Plus Credit Card: Premium Travel Rewards"
          description="Discover why the Barclaycard Avios Plus Credit Card has become one of the most popular options among those looking for a credit card with excellent benefits and favourable conditions."
          image="https://media.topfinanzas.com/images/barclaycard-avios-plus.webp"
          slug="barclaycard-avios-plus"
          category="Financial Solutions"
          categorySlug="/financial-solutions"
          orientation="horizontal"
          priority={true}
        />
      </div>

      {/* Main category selector */}
      <div className="flex mb-8 border-b border-gray-200">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              // Reset filters when changing main categories
              setActiveCreditCardType("all");
              setActiveLoanType("all");
            }}
            className={`px-6 py-3 font-medium text-md transition-colors focus:outline-none ${
              activeCategory === key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* AdZep AutoZep Paid Advertisement `<div>` element */}
      <div
        id="uk_topfinanzas_2"
        className="p-4 flex items-center justify-center w-full min-w-full"
      ></div>

      {activeCategory === "creditCards" && (
        <div className="mb-8">
          {/* Subcategory filter for credit cards */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(creditCardTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCreditCardType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCreditCardType === key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Credit cards grid with fixed positioning to accommodate Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCreditCards.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Financial Solutions"
                  categorySlug="/financial-solutions"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={
                    post.type === "traditional" &&
                    activeCreditCardType === "traditional"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCategory === "loans" && (
        <div className="mb-8">
          {/* Subcategory filter for loans */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(loanTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveLoanType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeLoanType === key
                    ? "bg-green-600 text-white" // Use a different color for loan filters
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* AdZep AutoZep Paid Advertisement `<div>` element */}
          <div
            id="uk_topfinanzas_3"
            className="p-4 flex items-center justify-center w-full min-w-full"
          ></div>

          {/* Loans grid with fixed positioning for Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLoans.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Financial Solutions"
                  categorySlug="/financial-solutions"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={post.type === "guide" && activeLoanType === "guide"}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4 text-left sm:text-left">
          Looking for the ideal card for you?
        </h2>
        <p className="text-gray-700 mb-6 text-left sm:text-left">
          Use our credit card recommender and find the option that best suits
          your financial profile and specific needs.
        </p>
        <Link
          href="/credit-card-recommender-p1"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          Go to Recommender
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Financial Solutions - TopFinance",
        description:
          "Discover information about the best credit cards, requirements and comprehensive guides to choose the right option for your financial needs.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
