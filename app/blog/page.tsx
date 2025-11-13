"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
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
    // Personal Finance - Latest Articles
    {
      title:
        "Stop Living Paycheck to Paycheck: 3 Shifts to Break the Cycle Today - Top Finance UK",
      slug: "stop-living-paycheck-to-paycheck",
      description:
        "Escape the paycheck-to-paycheck cycle with three practical cash flow shifts. Learn how UK families are building breathing room without dramatic sacrifices or extreme budgets.",
      image:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "13 November 2025",
    },
    {
      title:
        "The 5-Minute Financial Health Check: Where Does Your Money Go? - Top Finance UK",
      slug: "financial-health-check-where-does-your-money-go",
      description:
        "Discover where your money really goes with our quick UK financial health check. Learn simple expense tracking methods that reveal spending patterns and help you take control in just minutes a day.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "5 November 2025",
    },
    {
      title:
        "The Hidden Costs of Homeownership That No One Talks About | Top Finance UK",
      slug: "hidden-costs-of-homeownership",
      description:
        "Discover the unexpected expenses that catch UK homeowners off guard. From maintenance to insurance, learn how to budget for the hidden costs of owning a home.",
      image:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "28 October 2025",
    },
    // Financial Solutions - Credit Cards
    {
      title:
        "RBS Purchase & Balance Transfer Card: Save on Interest with 0% Offers - Top Finance UK",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "The RBS Purchase & Balance Transfer Card offers 0% interest on purchases for up to 20 months and 0% on balance transfers for up to 18 months. No annual fee. Representative 24.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Bank of Scotland Credit Cards: Flexible Options for Every Need - Top Finance UK",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Discover Bank of Scotland credit cards with options for everyday spending, balance transfers, large purchases, and credit building. Check eligibility with One Check without affecting your credit score.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "First Direct Credit Card: Straightforward Banking with Competitive Rates - Top Finance UK",
      slug: "first-direct-credit-card",
      description:
        "Discover the First Direct 1st Credit Card with 0% interest on purchases for 12 months, competitive rates, no annual fee, and award-winning 24/7 customer service. Representative 24.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "The Co-operative Bank Credit Card: Ethical Banking with Cashback Rewards - Top Finance UK",
      slug: "the-co-operative-bank-credit-card",
      description:
        "Discover The Co-operative Members Credit Card offering 0.5% cashback at Co-op stores, 0.3% everywhere else, with no annual fee. Join the UK's original ethical bank. Representative 18.2% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "M&S Rewards Credit Card: Earn Points on Every Purchase - Top Finance UK",
      slug: "ms-rewards-credit-card",
      description:
        "Discover the M&S Rewards Credit Card offering reward points on all spending at M&S and beyond, exclusive member benefits, and competitive rates. Representative 23.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tesco Bank Clubcard Credit Cards: Earn Points on Every Purchase - Top Finance UK",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Discover Tesco Bank Clubcard Credit Cards offering 0% introductory rates, low APR options, and Clubcard points on everyday spending. Representative 24.9% APR (variable). Build credit whilst earning rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "American Express Preferred Rewards Gold Credit Card: Exclusive Travel & Lifestyle Benefits - Top Finance UK",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "The American Express Gold Card offers premium Membership Rewards points, comprehensive travel insurance, and exclusive lifestyle benefits with a £140 annual fee. Representative 24.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Nationwide Building Society Credit Card: Exclusive Member Benefits & 0% Offers - Top Finance UK",
      slug: "nationwide-building-society-credit-card",
      description:
        "Nationwide's Member Credit Card offers two introductory 0% options: up to 24 months on balance transfers or 15 months on purchases. Representative 24.9% APR (variable). Available exclusively to Nationwide members.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "HSBC Rewards Credit Card: Earn Points on Every Purchase - Top Finance UK",
      slug: "hsbc-rewards-credit-card",
      description:
        "The HSBC Rewards Credit Card offers reward points on everyday spending, 0% interest on purchases for 6 months, and a £25 welcome bonus. Representative 26.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Ocean Credit Card: Check Your Eligibility in 60 Seconds - Top Finance UK",
      slug: "ocean-credit-card",
      description:
        "The Ocean Credit Card offers credit limits from £200 to £8,000 with no annual fee. Check your eligibility with QuickCheck without affecting your credit score. Representative 39.9% APR (variable).",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Fluid Credit Card: Cut Your Credit Card Costs with Balance Transfers - Top Finance UK",
      slug: "fluid-credit-card",
      description:
        "The Fluid Credit Card offers 0% interest on balance transfers for 9 months (3% fee), helping you save on interest charges and clear your credit card debt faster. Representative 34.9% APR (variable).",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "John Lewis Partnership Card: Earn Rewards on Everyday Shopping - Top Finance UK",
      slug: "john-lewis-partnership-card",
      description:
        "The John Lewis Partnership Credit Card lets you earn valuable points on everyday purchases at John Lewis, Waitrose, and beyond. Enjoy double points for 60 days and exclusive cardholder offers. Representative 29.9% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "118 118 Money Credit Card: Build Your Credit Score with Confidence - Top Finance UK",
      slug: "118-118-money-credit-card",
      description:
        "The 118 118 Money Credit Card offers guaranteed personalised credit limits and transparent terms to help you build or rebuild your credit score with expert support. Representative 49.0% APR (variable).",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Vanquis Credit Card: Award-Winning Credit Building and Balance Transfer Solutions - Top Finance UK",
      slug: "vanquis-credit-card",
      description:
        "Discover Vanquis Credit Cards with personalised limits from £250-£7,000, award-winning credit building features, and 0% balance transfers for up to 19 months. Representative 37.9% APR (variable).",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Capital One UK Classic Card: Build Your Credit Score - Top Finance UK",
      slug: "capital-one-uk-credit-card",
      description:
        "The Capital One UK Classic Card helps you build your credit score with a starting credit limit of £200-£1,500, flexible payments, and no annual fee. Get a decision in 60 seconds.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Aqua Credit Card: Build Better Credit with Smart Features | Top Finance UK",
      slug: "aqua-credit-card",
      description:
        "The Aqua Credit Card offers personalised credit limits, expert support tools, and 24/7 fraud protection to help you build better credit with confidence and security. Representative APR 34.9% (variable).",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title: "Bip Credit Card: Cardless Credit You Control | Top Finance UK",
      slug: "bip-credit-card",
      description:
        "Discover the Bip Credit Card - a revolutionary cardless credit solution with no hidden fees, spending caps, and instant balance updates. Representative APR 34.9% (variable).",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Yonder Credit Card: Epic Rewards with No Foreign Transaction Fees | Top Finance UK",
      slug: "yonder-credit-card",
      description:
        "The Yonder Free Credit Card earns 1 point per £1 spent with no fees abroad, plus a £10 welcome offer and 1,000 bonus points when you spend £1,000 in 30 days.",
      image:
        "https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/6839943447d06a3292522ecd_head-p-800.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title: "Zopa Credit Card: Award-Winning Card Management | Top Finance UK",
      slug: "zopa-credit-card",
      description:
        "Discover the Zopa Credit Card with effortless app management, Credit Cushion feature, no foreign fees, and award-winning customer service. Best Credit Card Provider at British Bank Awards 2024 & 2025.",
      image: "https://media.topfinanzas.com/images/uk/zopa-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Marbles Credit Card: Stay in Control of Your Finances | Top Finance UK",
      slug: "marbles-credit-card",
      description:
        "The Marbles Credit Card helps you manage your finances with a manageable credit limit from £250 to £1,500, FastCheck eligibility checker, no annual fee, and flexible account management tools. Representative APR 34.9% (variable).",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    // Personal Finance Posts
    {
      title:
        "Inflation-Proof Your Life: 7 Smart Money Moves to Make When Prices Are High | Top Finance UK",
      slug: "inflation-proof-your-life",
      description:
        "Discover seven practical strategies to protect your purchasing power during high inflation. Learn how to cut invisible spending leaks, lock in fixed rates, build emergency buffers, and keep your personal finance on track when costs are rising.",
      image:
        "https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "15 October 2025",
    },
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
    {
      title:
        "How to Confidently Ask for a Raise (with Scripts and a Preparation Guide)",
      slug: "how-to-ask-for-a-raise",
      description:
        "Learn exactly what to say when asking for a pay rise. This UK-focused guide includes preparation steps, conversation scripts, salary research tips, and how to handle both positive and negative responses professionally.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-ask-for-a-raise.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 October 2025",
    },
    {
      title:
        "What Is 'Lifestyle Creep' and How Is It Silently Draining Your Wallet?",
      slug: "what-is-lifestyle-creep",
      description:
        "Discover how lifestyle creep gradually increases your spending as your income grows, and learn practical strategies to prevent this silent wealth-drainer from sabotaging your personal finance goals whilst still enjoying life.",
      image:
        "https://media.topfinanzas.com/images/lifestyle-creep-personal-finance.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "9 October 2025",
    },
    {
      title:
        "Financial Uncoupling: A Compassionate Guide to Separating Finances During a Breakup",
      slug: "financial-uncoupling-separating-finances-during-breakup",
      description:
        "Practical UK guidance on untangling joint accounts, managing shared debts, protecting your credit, and rebuilding financial independence after a relationship ends.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "23 October 2025",
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
  }, [activeCategory, allPostsSorted]);

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
