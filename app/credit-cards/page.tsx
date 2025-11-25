"use client";

import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming BlogLayout is suitable
import { FeaturedPostCard } from "@/components/ui/featured-post-card"; // Reusing card component
import { useState, useEffect } from "react"; // Keep state hooks for consistency, though filtering is static now

// Define the structure for each post item (can be imported if shared)
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string; // Keep type if used by FeaturedPostCard
}

export default function CreditCardsArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Complete list of credit card content (synchronized with financial-solutions/page.tsx)
  const creditCardsContent: PostItem[] = [
    // Latest Products (October 2025)
    {
      title: "RBS Purchase & Balance Transfer Card",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "The RBS Purchase & Balance Transfer Card offers 0% interest on purchases for up to 20 months and 0% on balance transfers for up to 18 months. No annual fee. Representative 24.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Bank of Scotland Credit Cards",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Bank of Scotland offers credit cards for everyday spending, balance transfers, large purchases, and credit building. Check eligibility with One Check without affecting your credit score. Part of Lloyds Banking Group.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "First Direct Credit Card",
      slug: "first-direct-credit-card",
      description:
        "The First Direct 1st Credit Card offers 0% interest on purchases for 12 months, competitive rates with no annual fee, and award-winning 24/7 customer service. Representative 24.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "The Co-operative Bank Credit Card",
      slug: "the-co-operative-bank-credit-card",
      description:
        "The Co-operative Members Credit Card offers 0.5% cashback at Co-op stores and 0.3% everywhere else, with no annual fee. Join the UK's original ethical bank with customer-led values since 1872. Representative 18.2% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "M&S Rewards Credit Card",
      slug: "ms-rewards-credit-card",
      description:
        "The M&S Rewards Credit Card offers reward points on all spending at M&S and beyond, exclusive member benefits, and competitive rates with no annual fee. Representative 23.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tesco Bank Clubcard Credit Cards",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Discover Tesco Bank Clubcard Credit Cards offering 0% introductory rates, low APR options, and Clubcard points on everyday spending. Representative 24.9% APR (variable). Build credit whilst earning rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "American Express Preferred Rewards Gold Credit Card",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "The American Express Gold Card offers premium Membership Rewards points, comprehensive travel insurance, and exclusive lifestyle benefits with a £140 annual fee. Representative 24.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Nationwide Building Society Credit Card",
      slug: "nationwide-building-society-credit-card",
      description:
        "Nationwide's Member Credit Card offers two introductory 0% options: up to 24 months on balance transfers or 15 months on purchases. Representative 24.9% APR (variable). Available exclusively to Nationwide members.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "HSBC Rewards Credit Card",
      slug: "hsbc-rewards-credit-card",
      description:
        "The HSBC Rewards Credit Card offers reward points on everyday spending, 0% interest on purchases for 6 months, and a £25 welcome bonus. Representative 26.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Ocean Credit Card",
      slug: "ocean-credit-card",
      description:
        "The Ocean Credit Card offers credit limits from £200 to £8,000 with no annual fee. Check your eligibility with QuickCheck without affecting your credit score. Representative 39.9% APR (variable).",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Fluid Credit Card",
      slug: "fluid-credit-card",
      description:
        "The Fluid Credit Card offers 0% interest on balance transfers for 9 months (3% fee), helping you save on interest charges and clear your credit card debt faster. Representative 34.9% APR (variable).",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "John Lewis Partnership Card",
      slug: "john-lewis-partnership-card",
      description:
        "The John Lewis Partnership Credit Card lets you earn valuable points on everyday purchases at John Lewis, Waitrose, and beyond. Enjoy double points for 60 days and exclusive cardholder offers. Representative 29.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "118 118 Money Credit Card",
      slug: "118-118-money-credit-card",
      description:
        "The 118 118 Money Credit Card offers guaranteed personalised credit limits and transparent terms to help you build or rebuild your credit score with expert support. Representative 49.0% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Vanquis Credit Card",
      slug: "vanquis-credit-card",
      description:
        "Vanquis Credit Cards offer personalised limits from £250-£7,000, award-winning credit building features, and 0% balance transfers for up to 19 months. Named Credit Builder Card Provider of the Year 2023-2025. Representative 37.9% APR (variable).",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Capital One UK Classic Card",
      slug: "capital-one-uk-credit-card",
      description:
        "The Capital One UK Classic Card helps you build your credit score with a starting credit limit of £200-£1,500, flexible payments, and no annual fee. Get a decision in 60 seconds.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Marbles Credit Card",
      slug: "marbles-credit-card",
      description:
        "The Marbles Credit Card helps you manage your finances with a manageable credit limit from £250 to £1,500, FastCheck eligibility checker, no annual fee, and flexible account management tools. Representative APR 34.9% (variable).",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Aqua Credit Card",
      slug: "aqua-credit-card",
      description:
        "The Aqua Credit Card offers personalised credit limits, expert support tools, and 24/7 fraud protection to help you build better credit with confidence and security. Representative APR 34.9% (variable).",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Bip Credit Card",
      slug: "bip-credit-card",
      description:
        "Discover the Bip Credit Card - a revolutionary cardless credit solution with no hidden fees, spending caps, and instant balance updates. Representative APR 34.9% (variable).",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Barclaycard Avios Plus Credit Card",
      slug: "barclaycard-avios-plus",
      description:
        "The Barclaycard Avios Plus Credit Card offers premium travel perks and generous Avios points to enhance your travel experience and reward your everyday spending.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    // Traditional Bank Cards
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
        "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp",
      date: "4 April 2025",
      type: "traditional",
    },
    // Neobank Cards
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
      title: "Starling Bank Credit Card",
      slug: "starling-bank-credit-card",
      description:
        "Discover the Starling Bank Credit Card with transparent pricing, ethical banking practices, and advanced digital features for modern financial management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    // Fintech Cards
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
            (m) => m.toLowerCase() === match[2].toLowerCase(),
          );
          year = parseInt(match[3], 10);
        } else if (pattern === patterns[1]) {
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[1].toLowerCase(),
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
  const sortedCreditCards = [...creditCardsContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // No filtering needed, just display the sorted credit card content
  const filteredPosts = sortedCreditCards;

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
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        UK Credit Card Solutions
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore detailed guides and reviews of the best credit cards available
        in the UK. Find the right card based on rewards, fees, and your
        financial needs.
      </p>

      {/* Grid of credit card posts */}
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
              category="Credit Cards" // Static category for this page
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
        title: "UK Credit Cards: Reviews & Guides | TopFinance UK",
        description:
          "Compare the best UK credit cards. Find reviews, guides, and comparisons for rewards, cashback, travel, and low-interest cards.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
