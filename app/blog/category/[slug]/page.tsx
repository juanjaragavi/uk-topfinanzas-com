import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";

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
  slug: string;
};

// Sample categories with post counts
const CATEGORIES = [
  { name: "Personal Finance", slug: "personal-finance", count: 12, description: "Practical advice to help you manage your money, build savings, and plan for the future." },
  { name: "Credit Cards", slug: "credit-cards", count: 8, description: "Tips for choosing the right credit cards, maximizing rewards, and managing credit responsibly." },
  { name: "Mortgages", slug: "mortgages", count: 6, description: "Everything you need to know about home loans, refinancing, and the mortgage application process." },
  { name: "Investing", slug: "investing", count: 5, description: "Guidance on investment strategies, portfolio management, and building long-term wealth." },
  { name: "Budgeting", slug: "budgeting", count: 4, description: "Step-by-step guides for creating and sticking to a budget that works for your lifestyle." },
  { name: "Student Loans", slug: "student-loans", count: 3, description: "Advice on managing student loan debt, repayment options, and loan forgiveness programs." },
  { name: "Retirement", slug: "retirement", count: 3, description: "Strategies for retirement planning and making the most of your retirement accounts." },
  { name: "Taxes", slug: "taxes", count: 2, description: "Information on tax planning, deductions, and maximizing your tax refund." },
];

// This would typically come from a CMS or database - simplified for demo
const BLOG_POSTS_DATA: { [key: string]: BlogPostMetadata } = {
  "your-first-paycheck": {
    title: "Your First Paycheck: A Complete Guide to Smart Management",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "https://media.topfinanzas.com/images/favicon.png",
    readingTime: "6 minute read",
    categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    featuredImage: "https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg",
    excerpt:
      "Welcome to the working world, where your first paycheck marks the start of a new chapter full of opportunities and responsibilities.",
    views: 721,
    commentCount: 0,
    slug: "your-first-paycheck"
  },
  "what-is-a-home-mortgage": {
    title: "What Is a Home Mortgage? Your Complete Guide",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "https://media.topfinanzas.com/images/favicon.png",
    readingTime: "8 minute read",
    categories: [{ name: "Mortgages", slug: "mortgages" }],
    featuredImage: "https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg",
    excerpt:
      "A comprehensive guide to understanding home mortgages, types of loans, interest rates, and how to get the best deal.",
    views: 563,
    commentCount: 0,
    slug: "what-is-a-home-mortgage"
  },
  "what-are-online-loans": {
    title: "What Are Online Loans?: A Key Tool in Personal Finances",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "https://media.topfinanzas.com/images/favicon.png",
    readingTime: "5 minute read",
    categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    featuredImage: "https://media.topfinanzas.com/images/generated/1741723547071/sample_0.jpg",
    excerpt:
      "In an increasingly digital world, online loans have emerged as a fundamental financial option for many Americans.",
    views: 412,
    commentCount: 0,
    slug: "what-are-online-loans"
  },
  "5-tips-for-choosing-an-online-loan": {
    title: "5 Tips for Choosing an Online Loan: Quick Guide",
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "https://media.topfinanzas.com/images/favicon.png",
    readingTime: "4 minute read", 
    categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    featuredImage: "https://media.topfinanzas.com/images/generated/1741732471632/sample_0.jpg",
    excerpt:
      "Navigate the world of online loans with confidence using these essential tips to find the best rates and terms.",
    views: 345,
    commentCount: 0,
    slug: "5-tips-for-choosing-an-online-loan"
  },
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find(cat => cat.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${category.name} Articles - Top Finance Blog`,
    description: category.description,
    keywords: `${category.name}, finance, blog, advice, financial tips, ${category.slug}`,
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the category
  const category = CATEGORIES.find(cat => cat.slug === slug);
  if (!category) {
    notFound();
  }

  // Get posts for this category
  const posts = Object.values(BLOG_POSTS_DATA).filter(post => 
    post.categories.some(cat => cat.slug === slug)
  );

  return (
    <BlogLayout metadata={{
      title: `${category.name} - Top Finance Blog`,
      description: category.description,
    }}>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600 text-lg">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-sm overflow-hidden group">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:col-span-3 p-6">
                <Link
                  href={`/blog/category/${post.categories[0].slug}`}
                  className="text-blue-600 text-xs font-medium hover:underline inline-block mb-2"
                >
                  {post.categories[0].name}
                </Link>
                <h2 className="text-xl font-bold mb-3">
                  <Link
                    href={`/blog/post/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    <div className="text-sm">
                      <span className="text-gray-900">{post.author}</span>
                      <div className="text-gray-500">{post.date}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {post.readingTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-4">No posts found in this category</h2>
            <p className="text-gray-600 mb-6">We haven't published any articles in this category yet. Check back soon!</p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Return to blog
            </Link>
          </div>
        )}
      </div>
    </BlogLayout>
  );
}
