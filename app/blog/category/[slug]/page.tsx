import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { notFound } from "next/navigation";

// Define types for our blog data
type Category = {
  name: string;
  slug: string;
  description?: string;
  count: number;
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: { name: string; slug: string };
  date: string;
  author: string;
  authorImage: string;
  readingTime: string;
  views: number;
};

// Mock data for categories
const CATEGORIES: { [key: string]: Category } = {
  "personal-finance": {
    name: "Personal Finance",
    slug: "personal-finance",
    description:
      "Empower yourself with knowledge and tools that will transform your relationship with money. From saving to investing, take control of your finances.",
    count: 12,
  },
  "credit-cards": {
    name: "Credit Cards",
    slug: "credit-cards",
    description:
      "Navigate the complex world of credit cards with expert advice on choosing the right card, maximizing rewards, and avoiding common pitfalls.",
    count: 8,
  },
  mortgages: {
    name: "Mortgages",
    slug: "mortgages",
    description:
      "Everything you need to know about home loans, from understanding different mortgage types to securing the best rates and terms.",
    count: 6,
  },
  investing: {
    name: "Investing",
    slug: "investing",
    description:
      "Build wealth for the future with strategic investment advice for beginners and experienced investors alike.",
    count: 5,
  },
  budgeting: {
    name: "Budgeting",
    slug: "budgeting",
    description:
      "Learn practical budgeting techniques to manage your money effectively, reduce debt, and achieve your financial goals.",
    count: 4,
  },
  "student-loans": {
    name: "Student Loans",
    slug: "student-loans",
    description:
      "Navigate the complexities of student loan debt with strategies for repayment, refinancing, and potential forgiveness options.",
    count: 3,
  },
};

// Sample blog posts data - in a real app, this would come from a CMS or database
const BLOG_POSTS: BlogPost[] = [
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

export const dynamicParams = true;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = CATEGORIES[params.slug];

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${category.name} - Top Finance Blog`,
    description: category.description || `Articles about ${category.name}`,
    keywords: `${category.name}, finance blog, financial advice, money management`,
  };
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export default function BlogCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Check if we have metadata for this category
  if (!CATEGORIES[slug]) {
    notFound();
  }

  const category = CATEGORIES[slug];

  // Filter posts by category
  const categoryPosts = BLOG_POSTS.filter(
    (post) => post.category.slug === slug
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-b from-white to-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {category.count} Articles
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-gray-600 text-lg">{category.description}</p>
            )}
          </div>

          {/* Categories nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Link
              href="/blog"
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              All Posts
            </Link>
            {Object.values(CATEGORIES).map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`${
                  cat.slug === slug
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                } rounded-full px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-colors`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Category posts grid */}
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {categoryPosts.map((post) => (
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
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">No posts found</h2>
              <p className="text-gray-600 mb-6">
                We're working on adding content to this category. Check back
                soon for new articles!
              </p>
              <Button href="/blog" variant="primary">
                Browse all posts
              </Button>
            </div>
          )}

          {/* Newsletter signup */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay updated on {category.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive the latest articles and
                expert insights on {category.name.toLowerCase()}.
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
