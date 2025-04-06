"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react"; // Added useMemo here
import { cn } from "@/lib/utils";

// Interface for post frontmatter (align with app/blog/post/[slug]/page.tsx)
interface PostFrontmatter {
  title: string;
  date: string;
  author?: string;
  authorImage?: string;
  readingTime?: string;
  categories?: Array<{ name: string; slug: string }>;
  featuredImage?: string;
  description: string;
  excerpt?: string;
  views?: number;
  commentCount?: number;
  [key: string]: any;
}

interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [allPosts, setAllPosts] = useState<PostData[]>([]); // State to hold all fetched posts
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All"); // State for active category filter
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const postsPerPage = 6; // Number of posts per page

  // Fetch posts from the API route on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }
        const data: PostData[] = await response.json();
        setAllPosts(data);
      } catch (fetchError) {
        console.error("Error fetching posts:", fetchError);
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Calculate unique categories from posts
  const uniqueCategories = useMemo(() => {
    const categories = new Map<string, string>(); // slug -> name
    allPosts.forEach((post) => {
      post.frontmatter.categories?.forEach((cat) => {
        if (!categories.has(cat.slug)) {
          categories.set(cat.slug, cat.name);
        }
      });
    });
    return Array.from(categories.entries());
  }, [allPosts]);

  // Calculate filtered and paginated posts using useMemo at the top level
  const { paginatedPosts, totalPages } = useMemo(() => {
    const filteredPosts =
      activeCategory === "All"
        ? allPosts
        : allPosts.filter((post) =>
            post.frontmatter.categories?.some(
              (cat) => cat.slug === activeCategory
            )
          );

    const calculatedTotalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const postsToDisplay = filteredPosts.slice(
      startIndex,
      startIndex + postsPerPage
    );

    return { paginatedPosts: postsToDisplay, totalPages: calculatedTotalPages };
  }, [allPosts, activeCategory, currentPage, postsPerPage]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <section
        className={cn(
          "banner-section",
          isMobile ? "banner-section-mobile" : "banner-section-desktop"
        )}
      >
        <div className="absolute inset-0 bg-black opacity-30 md:opacity-25"></div>
        <div className="container mx-auto px-4 text-left relative z-10">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Welcome to Top Finance
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl mb-6 md:mb-8 drop-shadow-md leading-tight">
            Where every financial decision expands your world. <br />
            Choose wisely, live fully.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          <div className="mb-12">
            <Link
              href="/blog/post/your-first-paycheck"
              className="block group" // Removed relative/overflow-hidden here, moved to inner container
            >
              {/* New container for two-column layout */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex group-hover:shadow-lg transition-shadow duration-300">
                {/* Left Column: Image */}
                <div className="md:w-5/12 relative h-64 md:h-auto">
                  {" "}
                  {/* Adjusted width and height */}
                  <Image
                    src="https://media.topfinanzas.com/images/featured-post.jpg"
                    alt="Your first salary: A complete guide to managing it intelligently"
                    fill // Changed layout to fill
                    style={{ objectFit: "cover" }} // Keep object-fit
                    className="transition-transform duration-300 group-hover:scale-105" // Added subtle hover effect
                  />
                </div>
                {/* Right Column: Text Content */}
                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
                  {" "}
                  {/* Adjusted width and padding */}
                  <h2 className="text-gray-800 text-xl md:text-2xl font-medium leading-tight mb-3">
                    {" "}
                    {/* Adjusted text color and margin */}
                    Your First Paycheck: A Complete Guide to Smart Management
                  </h2>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    {" "}
                    {/* Adjusted text color */}
                    <div className="size-5 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="font-medium text-gray-700">
                      TOP FINANCE
                    </span>{" "}
                    {/* Adjusted font weight/color */}
                    <span>•</span>
                    <span className="font-normal">February 25, 2025</span>
                    <span>•</span>
                    <span className="font-light">798 views</span>{" "}
                    {/* Adjusted opacity */}
                  </div>
                  {/* Optional: Add excerpt here if needed */}
                  <p className="text-gray-600 text-sm mt-3 line-clamp-3 hidden md:block">
                    {" "}
                    {/* Added excerpt for desktop */}
                    Starting your career journey comes with the excitement of
                    earning your first paycheck. Learn essential strategies for
                    budgeting, saving, and making smart financial decisions from
                    day one to build a solid foundation for your future.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Dynamic Blog Post Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                key="all"
                onClick={() => {
                  setActiveCategory("All");
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {uniqueCategories.map(([slug, name]) => (
                <button
                  key={slug}
                  onClick={() => {
                    setActiveCategory(slug);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeCategory === slug
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Display Loading / Error / Posts */}
            {isLoading && <p>Loading posts...</p>}
            {error && (
              <p className="text-red-600">Error loading posts: {error}</p>
            )}
            {!isLoading && !error && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedPosts.length > 0 ? (
                    paginatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/post/${post.slug}`}
                        className="block relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="relative h-[180px] w-full">
                          <Image
                            src={
                              post.frontmatter.featuredImage ||
                              "https://media.topfinanzas.com/images/placeholder.jpg"
                            }
                            alt={post.frontmatter.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-gray-800 text-lg font-medium leading-tight mb-2">
                            {post.frontmatter.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {post.frontmatter.excerpt ||
                              post.frontmatter.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(post.frontmatter.date).toLocaleDateString(
                              "en-GB",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="col-span-full text-center text-gray-500">
                      No posts found for this category.
                    </p>
                  )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-4 mt-8">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-gray-700">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
