import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/layout/blog-layout";

export const dynamicParams = true;

// Define a type for the blog post data
type BlogPostMetadata = {
  title: string;
  date: string;
  author: string;
  authorImage: string;
  readingTime: string;
  categories: Array<{ name: string; slug: string }>;
  featuredImage: string;
  excerpt: string;
  views: number;
  commentCount: number;
};

// Define a type for our blog posts object with string keys
type BlogPostsData = {
  [key: string]: BlogPostMetadata;
};

// This would typically come from a CMS, database, or file system
// For this demo, we'll use a hardcoded map of sample blog posts
const BLOG_POSTS_DATA: BlogPostsData = {
  "your-first-paycheck": {
    title: "Your First Paycheck: A Complete Guide to Smart Management",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "6 minute read",
    categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    featuredImage: "/placeholder.jpg",
    excerpt:
      "Welcome to the working world, where your first paycheck marks the start of a new chapter full of opportunities and responsibilities.",
    views: 721,
    commentCount: 0,
  },
  "what-is-a-home-mortgage": {
    title: "What Is a Home Mortgage? Your Complete Guide",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "8 minute read",
    categories: [{ name: "Mortgages", slug: "mortgages" }],
    featuredImage: "/placeholder.jpg",
    excerpt:
      "A comprehensive guide to understanding home mortgages, types of loans, interest rates, and how to get the best deal.",
    views: 563,
    commentCount: 0,
  },
  "what-are-online-loans": {
    title: "What Are Online Loans?: A Key Tool in Personal Finances",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "5 minute read",
    categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    featuredImage: "/placeholder.jpg",
    excerpt:
      "In an increasingly digital world, online loans have emerged as a fundamental financial option for many Americans.",
    views: 412,
    commentCount: 0,
  },
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_DATA[params.slug];

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Top Finance Blog`,
    description: post.excerpt,
    keywords:
      post.categories.map((cat) => cat.name).join(", ") +
      ", finance, blog, advice",
  };
}

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Check if we have metadata for this post
  if (!BLOG_POSTS_DATA[slug]) {
    notFound();
  }

  // This would come from a CMS or database in a real application
  const postMetadata = BLOG_POSTS_DATA[slug];

  // In a real app, we would fetch the MDX content from a CMS or file system
  // For this demo, we'll just render a sample post
  return (
    <BlogLayout metadata={postMetadata}>
      <h1>{postMetadata.title}</h1>

      <p>
        Welcome to the working world, where your first paycheck marks the start
        of a new chapter full of opportunities and responsibilities. Managing
        your salary from the start is essential for securing a successful
        financial future. This article offers practical tools and advice
        tailored to the U.S. reality so you can make smart choices with your
        first income. This is your first step toward financial independence.
      </p>

      <h2>Financial Basics</h2>

      <p>
        Before diving into strategies for managing your first paycheck, it's
        important to understand fundamental financial concepts. These will help
        you build a solid foundation for making informed decisions and
        establishing good financial habits right from the start.
      </p>

      <h3>Budgeting</h3>

      <p>
        A budget is a key tool that helps you plan how to spend your money. An
        effective budget allows you to control your finances, avoid debt, and
        save for long-term goals.
      </p>

      <h3>How to Create a Budget in 3 Easy Steps:</h3>

      <ul>
        <li>
          <strong>Record your income and expenses</strong>: Note down all your
          income (net salary) and categorize your expenses, from recurring costs
          (like rent, transportation, and food) to smaller daily expenses.
        </li>
        <li>
          <strong>Categorize your expenses</strong>: Divide expenses into fixed
          costs (such as rent or utilities) and variable ones (like
          entertainment or shopping). This helps identify areas to cut back.
        </li>
        <li>
          <strong>Set limits</strong>: Based on your income and expenses,
          determine how much you can spend in each category without exceeding
          your budget.
        </li>
      </ul>

      <h3>Additional Tips for an Effective Budget:</h3>

      <ul>
        <li>
          <strong>Create a realistic budget</strong>: Don't overlook any
          expenses. Being thorough gives you a clear picture of your financial
          situation.
        </li>
        <li>
          <strong>Avoid unnecessary debt</strong>: Be cautious with credit card
          use and loans. Credit can be useful but should not turn into
          unmanageable debt.
        </li>
      </ul>

      <h3>Why Saving Is Important:</h3>

      <ul>
        <li>
          <strong>Financial Security</strong>: Savings provide a buffer for
          emergencies, like unexpected medical costs or job loss.
        </li>
        <li>
          <strong>Achieving Goals</strong>: Savings allow you to plan for things
          like buying a car, a home, paying for college, or traveling.
        </li>
        <li>
          <strong>Financial Independence</strong>: Saving reduces your
          dependency on loans and credit, bringing you closer to financial
          freedom.
        </li>
      </ul>

      <h3>Strategies for Effective Saving:</h3>

      <ul>
        <li>
          <strong>Set a savings percentage</strong>: Start by setting aside
          10-15% of your monthly income.
        </li>
        <li>
          <strong>Automate savings</strong>: Schedule automatic transfers to a
          savings account each payday.
        </li>
        <li>
          <strong>Create an emergency fund</strong>: Ensure you have 3-6 months
          of essential expenses covered for emergencies.
        </li>
        <li>
          <strong>Choose the best saving instrument</strong>: Look for savings
          accounts that offer interest or even low-risk investment funds.
          Options range from traditional banks to digital platforms.
        </li>
      </ul>

      <h2>Credit: A Double-Edged Sword</h2>

      <p>
        Credit can be a powerful tool when used responsibly. Maintaining a good
        credit history is crucial for securing loans with favorable terms.
      </p>

      <p>
        A good credit history opens doors to future loans, such as mortgages or
        car loans, with better interest rates.
      </p>

      <p>
        Using a credit card responsibly helps you build this history. However,
        avoid spending more than you can repay monthly.
      </p>

      <h2>Managing Your First Job Income</h2>

      <p>
        Your first paycheck is more than just money; it's a foundation for your
        financial future. Here's how to allocate it wisely:
      </p>

      <h3>The 50/30/20 Rule</h3>

      <p>This popular budgeting method suggests:</p>

      <ul>
        <li>
          <strong>50% for necessities</strong>: Rent, utilities, food,
          transportation, and minimum debt payments.
        </li>
        <li>
          <strong>30% for wants</strong>: Dining out, entertainment, hobbies,
          and other non-essential expenses.
        </li>
        <li>
          <strong>20% for savings and debt repayment</strong>: Emergency fund,
          retirement contributions, and paying down debt beyond minimum
          payments.
        </li>
      </ul>

      <h3>Prioritize Financial Goals</h3>

      <ol>
        <li>
          <strong>Build an emergency fund</strong>: Start with $1,000, then work
          toward 3-6 months of essential expenses.
        </li>
        <li>
          <strong>Pay high-interest debt</strong>: Focus on credit cards and
          personal loans first.
        </li>
        <li>
          <strong>Contribute to retirement</strong>: Take advantage of employer
          matching if available.
        </li>
        <li>
          <strong>Save for short and medium-term goals</strong>: Vacations, home
          down payment, etc.
        </li>
      </ol>

      <h2>Conclusion</h2>

      <p>
        Managing your first paycheck sets the stage for financial
        independence—each decision, from saving to investing, is a building
        block for your future. By implementing these strategies, you're not just
        handling today's finances but creating a foundation for lasting
        financial well-being.
      </p>

      <p>
        Remember that financial management is a journey, not a destination. As
        your income grows and life circumstances change, revisit your budget and
        goals regularly to ensure they still align with your needs and
        aspirations.
      </p>

      <p>
        Start small, stay consistent, and watch your financial confidence grow
        alongside your savings.
      </p>
    </BlogLayout>
  );
}
