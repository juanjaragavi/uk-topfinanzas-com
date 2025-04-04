import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";

// Define placeholder post data for this category
// TODO: Replace with actual data fetching logic when available
// Data copied & combined from app/financial-solutions/page.tsx
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
    image:
      "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "Barclays Personal Loan",
    slug: "barclays-personal-loan",
    description:
      "Explore Barclays Personal Loans with competitive rates, flexible terms, and a streamlined application process.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136012-fotosprestamo-barclays2uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "Lloyds Bank Personal Loan",
    slug: "lloyds-bank-personal-loan",
    description:
      "Explore Lloyds Bank Personal Loans with competitive rates, flexible repayment options, and trusted service.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136057-fotosprestamo-lloyds1uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "NatWest Personal Loan",
    slug: "natwest-personal-loan",
    description:
      "Explore NatWest Personal Loans with competitive rates, flexible repayment terms, and a straightforward application process.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136156-fotosprestamo-nawest1uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "Santander UK Personal Loan",
    slug: "santander-uk-personal-loan",
    description:
      "Explore Santander UK Personal Loans with competitive rates, flexible repayment terms, and potential benefits for 1|2|3 World customers.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136214-fotosprestamo-santander1uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "TSB Personal Loan",
    slug: "tsb-personal-loan",
    description:
      "Explore TSB Personal Loans with competitive rates, flexible repayment options, and a focus on clear, simple banking solutions.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "Virgin Money Personal Loan",
    slug: "virgin-money-personal-loan",
    description:
      "Explore Virgin Money Personal Loans with competitive rates, flexible terms, and potential benefits linked to the Virgin Red rewards program.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136330-fotosprestamo-virginmoney1uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "Halifax Personal Loan",
    slug: "halifax-personal-loan",
    description:
      "Explore Halifax Personal Loans with competitive rates, flexible repayment options, and the trusted service of a major UK bank.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136403-fotosprestamo-halifax1uk.jpg",
    date: "4 April 2025",
    type: "personal",
  },
  {
    title: "Nationwide Personal Loan",
    slug: "nationwide-personal-loan",
    description:
      "Explore Nationwide Personal Loans with competitive rates, flexible terms, and benefits for existing members.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136476-fotosprestamo-nationwide1uk.jpg",
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
      "https://media.topfinanzas.com/images/uk/loans/718136529-fotosprestamo-revoult1uk.jpg",
    date: "4 April 2025",
    type: "fintech", // Could also be 'personal' depending on desired filter logic
  },
  {
    title: "Monzo Personal Loan",
    slug: "monzo-personal-loan",
    description:
      "Explore Monzo Personal Loans offering quick decisions, clear terms, and seamless management through the Monzo app.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136607-fotosprestamo-monzo2uk.jpg",
    date: "4 April 2025",
    type: "neobank", // Could also be 'personal'
  },
  {
    title: "Starling Bank Personal Loan",
    slug: "starling-bank-personal-loan",
    description:
      "Explore Starling Bank Personal Loans offering competitive rates, clear terms, and seamless management via the Starling app.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136704-fotosprestamo-starlinkbanck1uk.jpg",
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
      "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.jpg",
    date: "4 April 2025",
    type: "sme_fintech",
  },
  {
    title: "Funding Options Marketplace",
    slug: "funding-options-personal-loan", // Keep slug as created
    description:
      "Explore Funding Options, a leading UK platform connecting SMEs with a wide range of business finance solutions.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718138018-fotosprestamo-fundingoption1uk.jpg",
    date: "4 April 2025",
    type: "marketplace", // Specific type for marketplaces
  },
  {
    title: "iwoca Flexi-Loan",
    slug: "iwoca-personal-loan", // Keep slug as created
    description:
      "Explore iwoca's Flexi-Loan, offering fast, flexible working capital solutions designed for UK SMEs.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.jpg",
    date: "4 April 2025",
    type: "sme_fintech",
  },
  {
    title: "MarketFinance Business Finance",
    slug: "marketfinance-personal-loan", // Keep slug as created
    description:
      "Explore MarketFinance's solutions for UK SMEs, including fast business loans and flexible invoice finance.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718137315-fotosprestamo-fundingchange2uk.jpg",
    date: "4 April 2025",
    type: "sme_fintech",
  },
  {
    title: "Funding Xchange Platform",
    slug: "funding-xchange-personal-loan", // Keep slug as created
    description:
      "Explore Funding Xchange, a smart platform helping UK SMEs compare and access business finance options.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.jpg",
    date: "4 April 2025",
    type: "marketplace", // Specific type for marketplaces
  },
  {
    title: "Capify Business Finance",
    slug: "capify-personal-loan", // Keep slug as created
    description:
      "Explore Capify's financing solutions for UK SMEs, including Merchant Cash Advances and Business Loans.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.jpg",
    date: "4 April 2025",
    type: "sme_fintech",
  },
  {
    title: "Fleximize Business Loans",
    slug: "fleximize-personal-loan", // Keep slug as created
    description:
      "Explore Fleximize's flexible business loans (Flexiloan & Flexiloan Lite) offering tailored repayment options for UK SMEs.",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.jpg",
    date: "4 April 2025",
    type: "sme_fintech",
  },
];

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
    image:
      "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.jpg",
    date: "2 April 2025",
    type: "traditional",
  },
  {
    title: "Halifax World Elite MasterCard",
    slug: "halifax-world-elite-mastercard",
    description:
      "Explore the Halifax World Elite MasterCard, offering premium travel benefits, comprehensive insurance, and exclusive rewards.",
    image:
      "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.jpg", // Placeholder image
    date: "4 April 2025",
    type: "traditional",
  },
  {
    title: "Monzo Credit Card",
    slug: "monzo-credit-card",
    description:
      "Learn about the Monzo Credit Card with real-time spending notifications, smart budgeting tools, and seamless integration with Monzo's digital banking services.",
    image:
      "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.jpg",
    date: "2 April 2025",
    type: "neobank",
  },
  {
    title: "Revolut Credit Card",
    slug: "revolut-credit-card",
    description:
      "Explore the Revolut Credit Card with multi-currency capabilities, competitive exchange rates, and real-time control for modern international lifestyles.",
    image:
      "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.jpg",
    date: "2 April 2025",
    type: "fintech",
  },
  {
    title: "Starling Bank Credit Card",
    slug: "starling-bank-credit-card",
    description:
      "Discover the Starling Bank Credit Card with transparent pricing, ethical banking practices, and advanced digital features for modern financial management.",
    image:
      "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.jpg",
    date: "2 April 2025",
    type: "neobank",
  },
  {
    title: "Curve Credit Card",
    slug: "curve-credit-card",
    description:
      "Learn about the innovative Curve Card that consolidates all your existing cards into a single smart card with time-travel functionality and enhanced rewards.",
    image:
      "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.jpg",
    date: "2 April 2025",
    type: "fintech",
  },
];

const posts = [...creditCardsContent, ...allLoansContent];

export default function FinancialSolutionsCategoryPage() {
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">Financial Solutions</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore articles covering various financial products and solutions,
        including credit cards, loans, and more.
      </p>

      {/* Post Listing Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  // Handle image errors gracefully
                  onError={(e) => {
                    e.currentTarget.src = "/images/blog/placeholder.webp"; // Fallback placeholder
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <Link
                  // Assuming posts live under /financial-solutions/slug
                  href={`/financial-solutions/${post.slug}`}
                  className="text-xl font-semibold hover:text-blue-600 transition-colors mb-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 text-sm flex-grow">
                  {post.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/financial-solutions/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No posts found in this category yet. Check back soon!
        </p>
      )}
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Financial Solutions Blog Posts | TopFinance UK",
        description:
          "Explore articles on financial solutions like credit cards and loans.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
