import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";

export const metadata = {
  title: "Blog - Top Finance",
  description:
    "Stay informed with the latest financial tips, strategies, and insights from Top Finance experts.",
  keywords:
    "personal finance blog, financial advice, credit card guides, budget tips, investment advice, money management",
};

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "your-first-paycheck",
    title: "Your First Paycheck: A Complete Guide to Smart Management",
    excerpt:
      "Welcome to the working world, where your first paycheck marks the start of a new chapter full of opportunities and responsibilities.",
    coverImage: "/placeholder.jpg",
    category: { name: "Personal Finance", slug: "personal-finance" },
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "6 min read",
    views: 721,
  },
  {
    slug: "what-is-a-home-mortgage",
    title: "What Is a Home Mortgage? Your Complete Guide",
    excerpt:
      "A comprehensive guide to understanding home mortgages, types of loans, interest rates, and how to get the best deal.",
    coverImage: "/placeholder.jpg",
    category: { name: "Mortgages", slug: "mortgages" },
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "8 min read",
    views: 563,
  },
  {
    slug: "what-are-online-loans",
    title: "What Are Online Loans?: A Key Tool in Personal Finances",
    excerpt:
      "In an increasingly digital world, online loans have emerged as a fundamental financial option for many Americans.",
    coverImage: "/placeholder.jpg",
    category: { name: "Personal Finance", slug: "personal-finance" },
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "5 min read",
    views: 412,
  },
  {
    slug: "5-tips-for-choosing-an-online-loan",
    title: "5 Tips for Choosing an Online Loan: Quick Guide",
    excerpt:
      "Navigate the world of online loans with confidence using these essential tips to find the best rates and terms.",
    coverImage: "/placeholder.jpg",
    category: { name: "Personal Finance", slug: "personal-finance" },
    date: "February 25, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "4 min read",
    views: 345,
  },
  {
    slug: "5-steps-to-a-successful-family-budget",
    title:
      "5 Steps to a Successful Family Budget: Your Route to Financial Stability",
    excerpt:
      "Create a sustainable family budget that works with these five proven steps to achieve financial stability and peace of mind.",
    coverImage: "/placeholder.jpg",
    category: { name: "Budgeting", slug: "budgeting" },
    date: "February 24, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "7 min read",
    views: 287,
  },
  {
    slug: "understanding-credit-card-interest-rates",
    title: "Understanding Credit Card Interest Rates: A Guide for Consumers",
    excerpt:
      "Demystify credit card interest rates and learn how to minimize interest charges to make smarter financial decisions.",
    coverImage: "/placeholder.jpg",
    category: { name: "Credit Cards", slug: "credit-cards" },
    date: "February 18, 2025",
    author: "Top Finance",
    authorImage: "/placeholder-user.jpg",
    readingTime: "6 min read",
    views: 456,
  },
];

// Sample categories with post counts
const categories = [
  { name: "Personal Finance", slug: "personal-finance", count: 12 },
  { name: "Credit Cards", slug: "credit-cards", count: 8 },
  { name: "Mortgages", slug: "mortgages", count: 6 },
  { name: "Investing", slug: "investing", count: 5 },
  { name: "Budgeting", slug: "budgeting", count: 4 },
  { name: "Student Loans", slug: "student-loans", count: 3 },
  { name: "Retirement", slug: "retirement", count: 3 },
  { name: "Taxes", slug: "taxes", count: 2 },
];

export default function BlogPage() {
  // Featured post is the first post
  const featuredPost = blogPosts[0];

  // Other posts
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-b from-white to-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Finance Blog
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-10">
            Expert financial advice, practical tips, and insightful strategies
            to help you make better financial decisions and secure your future.
          </p>

          {/* Featured post */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 lg:hidden"></div>
                <div className="absolute bottom-0 left-0 p-4 lg:hidden">
                  <Link
                    href={`/blog/category/${featuredPost.category.slug}`}
                    className="text-white bg-blue-600 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors inline-block mb-2"
                  >
                    {featuredPost.category.name}
                  </Link>
                  <h2 className="text-white text-2xl font-bold">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="hidden lg:block">
                  <Link
                    href={`/blog/category/${featuredPost.category.slug}`}
                    className="text-white bg-blue-600 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors inline-block mb-2"
                  >
                    {featuredPost.category.name}
                  </Link>
                </div>
                <h2 className="hidden lg:block text-2xl md:text-3xl font-bold mb-4">
                  <Link
                    href={`/blog/post/${featuredPost.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-4">
                  <Image
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">{featuredPost.author}</div>
                    <div className="text-sm text-gray-500">
                      {featuredPost.date} • {featuredPost.readingTime}
                    </div>
                  </div>
                </div>
                <Button
                  href={`/blog/post/${featuredPost.slug}`}
                  variant="primary"
                >
                  Read Article
                </Button>
              </div>
            </div>
          </div>

          {/* Post categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Link
              href="/blog"
              className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              All Posts
            </Link>
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <button className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors">
              More +
            </button>
          </div>

          {/* Latest articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {otherPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-lg shadow-sm overflow-hidden group"
              >
                <Link
                  href={`/blog/post/${post.slug}`}
                  className="block relative h-48"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <Link
                    href={`/blog/category/${post.category.slug}`}
                    className="text-blue-600 text-xs font-medium hover:underline inline-block mb-2"
                  >
                    {post.category.name}
                  </Link>
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href={`/blog/post/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
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
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Stay up to date with the latest financial tips, insights, and
                exclusive content delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 border"
                />
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Bottom ad placeholder */}
          <div className="flex justify-center mb-12">
            <AdPlaceholder width={728} height={90} className="mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
