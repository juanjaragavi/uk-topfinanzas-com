import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";

// Define placeholder post data for this category
// TODO: Replace with actual data fetching logic when available
const posts = [
  {
    title: "Best Rewards Credit Cards",
    slug: "best-rewards-credit-cards",
    description: "Find credit cards that offer the best rewards programs.",
    image: "/images/blog/placeholder-rewards.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Cashback Credit Cards Explained",
    slug: "cashback-credit-cards",
    description:
      "Understand how cashback credit cards work and find top offers.",
    image: "/images/blog/placeholder-cashback.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Credit Card Types & Benefits",
    slug: "credit-card-types-benefits",
    description:
      "An overview of different credit card types and their benefits.",
    image: "/images/blog/placeholder-types.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Practical Guide to Getting Out of Debt",
    slug: "getting-out-of-debt",
    description: "Strategies and tips for managing and eliminating debt.",
    image: "/images/blog/placeholder-debt.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "No Annual Fee Credit Cards",
    slug: "no-annual-fee-credit-cards",
    description: "Discover credit cards that don't charge an annual fee.",
    image: "/images/blog/placeholder-no-fee.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Using Personal Loans as a Debt Strategy",
    slug: "personal-loans-debt-strategy",
    description: "Learn how personal loans can be used to manage debt.",
    image: "/images/blog/placeholder-loans-debt.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Top Credit Cards with 0% Intro APR",
    slug: "top-credit-cards-0-intro-apr",
    description: "Find cards offering introductory 0% APR periods.",
    image: "/images/blog/placeholder-0-apr.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Best Travel Credit Cards",
    slug: "travel-credit-cards",
    description: "Compare credit cards designed for travellers.",
    image: "/images/blog/placeholder-travel.webp", // Placeholder image
    date: "4 April 2025",
  },
  {
    title: "Understanding Credit Card Interest Rates",
    slug: "understanding-credit-card-interest-rates",
    description: "A guide to how credit card interest (APR) works.",
    image: "/images/blog/placeholder-interest.webp", // Placeholder image
    date: "4 April 2025",
  },
  // Note: Guides like 'best-personal-loans' and 'tips-for-choosing-an-online-loan' might also fit here
  // depending on content strategy, but are currently listed under /financial-solutions/
];

export default function PersonalFinanceCategoryPage() {
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">Personal Finance</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Articles and guides related to managing your personal finances,
        budgeting, saving, and getting out of debt.
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
                  // Assuming posts live under /personal-finance/slug
                  href={`/personal-finance/${post.slug}`}
                  className="text-xl font-semibold hover:text-blue-600 transition-colors mb-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 text-sm flex-grow">
                  {post.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/personal-finance/${post.slug}`}
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
        title: "Personal Finance Blog Posts | TopFinance UK",
        description:
          "Explore articles on personal finance, budgeting, saving, and debt management.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
