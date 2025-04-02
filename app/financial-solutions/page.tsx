"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

  // State for active category and filters
  const [activeCategory, setActiveCategory] = useState("creditCards");
  const [activeCreditCardType, setActiveCreditCardType] = useState("all");
  const [activeLoanType, setActiveLoanType] = useState("all");

  // List of all loan content with types
  const allLoansContent = [
    // Guides
    {
      title: "Best Personal Loans in the UK",
      slug: "best-personal-loans",
      description:
        "Find the perfect personal loan for your needs with our comprehensive guide to the UK's top lenders, rates, and application requirements.",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      date: "30 March 2025",
      type: "guide",
    },
    {
      title: "Tips for Choosing an Online Loan",
      slug: "tips-for-choosing-an-online-loan",
      description:
        "Navigate the world of online loans with confidence using these essential tips to find the best rates and terms for your financial needs.",
      image: "https://media.topfinanzas.com/images/choosing-online-loan.jpg",
      date: "30 March 2025",
      type: "guide",
    },
    // Personal Loans (Traditional Banks)
    {
      title: "HSBC Personal Loan",
      slug: "hsbc-personal-loan",
      description:
        "Discover HSBC Personal Loans with competitive rates, flexible repayment terms, and quick application process.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Barclays Personal Loan",
      slug: "barclays-personal-loan",
      description:
        "Explore Barclays Personal Loans with competitive rates, flexible terms, and a streamlined application process.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Lloyds Bank Personal Loan",
      slug: "lloyds-bank-personal-loan",
      description:
        "Explore Lloyds Bank Personal Loans with competitive rates, flexible repayment options, and trusted service.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "NatWest Personal Loan",
      slug: "natwest-personal-loan",
      description:
        "Explore NatWest Personal Loans with competitive rates, flexible repayment terms, and a straightforward application process.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Santander UK Personal Loan",
      slug: "santander-uk-personal-loan",
      description:
        "Explore Santander UK Personal Loans with competitive rates, flexible repayment terms, and potential benefits for 1|2|3 World customers.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "TSB Personal Loan",
      slug: "tsb-personal-loan",
      description:
        "Explore TSB Personal Loans with competitive rates, flexible repayment options, and a focus on clear, simple banking solutions.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Virgin Money Personal Loan",
      slug: "virgin-money-personal-loan",
      description:
        "Explore Virgin Money Personal Loans with competitive rates, flexible terms, and potential benefits linked to the Virgin Red rewards program.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Halifax Personal Loan",
      slug: "halifax-personal-loan",
      description:
        "Explore Halifax Personal Loans with competitive rates, flexible repayment options, and the trusted service of a major UK bank.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Nationwide Personal Loan",
      slug: "nationwide-personal-loan",
      description:
        "Explore Nationwide Personal Loans with competitive rates, flexible terms, and benefits for existing members.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "personal",
    },
    // Personal Loans (Fintech/Neobank)
    {
      title: "Revolut Personal Loan",
      slug: "revolut-personal-loan",
      description:
        "Explore Revolut Personal Loans offering quick decisions, flexible terms, and seamless management through the Revolut app.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "fintech", // Could also be 'personal' depending on desired filter logic
    },
    {
      title: "Monzo Personal Loan",
      slug: "monzo-personal-loan",
      description:
        "Explore Monzo Personal Loans offering quick decisions, clear terms, and seamless management through the Monzo app.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    {
      title: "Starling Bank Personal Loan",
      slug: "starling-bank-personal-loan",
      description:
        "Explore Starling Bank Personal Loans offering competitive rates, clear terms, and seamless management via the Starling app.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    // SME Fintech Loans
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan", // Keep slug as created
      description:
        "Explore Funding Circle's business loans offering fast, flexible financing solutions designed specifically for UK SMEs.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Options Marketplace",
      slug: "funding-options-personal-loan", // Keep slug as created
      description:
        "Explore Funding Options, a leading UK platform connecting SMEs with a wide range of business finance solutions.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "iwoca Flexi-Loan",
      slug: "iwoca-personal-loan", // Keep slug as created
      description:
        "Explore iwoca's Flexi-Loan, offering fast, flexible working capital solutions designed for UK SMEs.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "MarketFinance Business Finance",
      slug: "marketfinance-personal-loan", // Keep slug as created
      description:
        "Explore MarketFinance's solutions for UK SMEs, including fast business loans and flexible invoice finance.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Xchange Platform",
      slug: "funding-xchange-personal-loan", // Keep slug as created
      description:
        "Explore Funding Xchange, a smart platform helping UK SMEs compare and access business finance options.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "Capify Business Finance",
      slug: "capify-personal-loan", // Keep slug as created
      description:
        "Explore Capify's financing solutions for UK SMEs, including Merchant Cash Advances and Business Loans.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Fleximize Business Loans",
      slug: "fleximize-personal-loan", // Keep slug as created
      description:
        "Explore Fleximize's flexible business loans (Flexiloan & Flexiloan Lite) offering tailored repayment options for UK SMEs.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
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
        "https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.jpg",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "NatWest Credit Card",
      slug: "natwest-credit-card",
      description:
        "Discover the NatWest Credit Card with MyRewards program, mobile banking integration, and flexible payment options for everyday spending.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.jpg",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Santander UK Credit Card",
      slug: "santander-uk-credit-card",
      description:
        "Learn about the Santander UK Credit Card with All in One cashback, no foreign transaction fees, and balance transfer options for smart financial management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.jpg",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "TSB Credit Card",
      slug: "tsb-credit-card",
      description:
        "Explore the TSB Credit Card with everyday value, low fees, and seamless integration with TSB's mobile and online banking platforms.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.jpg",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Virgin Money Credit Card",
      slug: "virgin-money-credit-card",
      description:
        "Discover the Virgin Money Credit Card with lifestyle-focused rewards, Virgin Points, and exclusive offers across the Virgin Group ecosystem.",
      image: "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.jpg",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Monzo Credit Card",
      slug: "monzo-credit-card",
      description:
        "Learn about the Monzo Credit Card with real-time spending notifications, smart budgeting tools, and seamless integration with Monzo's digital banking services.",
      image: "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.jpg",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Revolut Credit Card",
      slug: "revolut-credit-card",
      description:
        "Explore the Revolut Credit Card with multi-currency capabilities, competitive exchange rates, and real-time control for modern international lifestyles.",
      image: "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.jpg",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Starling Bank Credit Card",
      slug: "starling-bank-credit-card",
      description:
        "Discover the Starling Bank Credit Card with transparent pricing, ethical banking practices, and advanced digital features for modern financial management.",
      image: "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.jpg",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Learn about the innovative Curve Card that consolidates all your existing cards into a single smart card with time-travel functionality and enhanced rewards.",
      image: "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.jpg",
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
      <h1 className="text-4xl font-bold mb-6">Financial Solutions</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Find detailed information about the best credit cards available in the
        UK, requirements for applying, and comprehensive guides to help you
        choose the best option based on your financial needs.
      </p>

      {/* Featured article */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div className="md:flex">
          <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-48">
            <Image
              src="https://media.topfinanzas.com/images/barclaycard-avios-plus.webp"
              alt="Barclaycard Avios Plus Credit Card: Premium Travel Rewards"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
              Featured
            </div>
            <Link
              href={`/financial-solutions/barclaycard-avios-plus`}
              className="block mt-1 text-2xl font-medium text-black hover:text-blue-600 transition-colors"
            >
              Barclaycard Avios Plus Credit Card: Premium Travel Rewards.
            </Link>
            <p className="mt-2 text-gray-600">
              Discover why the Barclaycard Avios Plus Credit Card has become one
              of the most popular options among those looking for a credit card
              with excellent benefits and favourable conditions.
            </p>
            <div className="mt-4">
              <Link
                href={`/financial-solutions/barclaycard-avios-plus`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
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

          {/* Credit cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCreditCards.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase">
                    {post.type === "traditional"
                      ? "Traditional"
                      : post.type === "neobank"
                      ? "Neobank"
                      : "Fintech"}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <Link
                    href={`/financial-solutions/${post.slug}`}
                    className="text-xl font-semibold hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-2 text-gray-600">{post.description}</p>
                  <div className="mt-4">
                    <Link
                      href={`/financial-solutions/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
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

          {/* Loans grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLoans.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* Dynamic Badge based on type */}
                  <div
                    className={`absolute top-0 right-0 text-white text-xs font-bold px-2 py-1 uppercase ${
                      post.type === "personal"
                        ? "bg-blue-600"
                        : post.type === "sme_fintech"
                        ? "bg-purple-600"
                        : post.type === "neobank"
                        ? "bg-pink-600"
                        : post.type === "marketplace"
                        ? "bg-yellow-600"
                        : "bg-gray-600" // Default for Guide etc.
                    }`}
                  >
                    {loanTypes[post.type as keyof typeof loanTypes] ||
                      post.type}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <Link
                    href={`/financial-solutions/${post.slug}`}
                    className="text-xl font-semibold hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-2 text-gray-600">{post.description}</p>
                  <div className="mt-4">
                    <Link
                      href={`/financial-solutions/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Looking for the ideal card for you?
        </h2>
        <p className="text-gray-700 mb-6">
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
