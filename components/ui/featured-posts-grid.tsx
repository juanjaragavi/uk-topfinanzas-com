import React from "react";
import { FeaturedPostCard, FeaturedPostCardProps } from "./featured-post-card";
import { motion, AnimatePresence } from "framer-motion";

export interface FeaturedPostsGridProps {
  posts: Array<Omit<FeaturedPostCardProps, "orientation" | "imageHeight">>;
  title?: string;
  description?: string;
  animateItems?: boolean;
  columns?: 1 | 2 | 3 | 4;
  filter?: string | null;
  showHeader?: boolean;
}

/**
 * A grid component for displaying featured blog posts
 */
export function FeaturedPostsGrid({
  posts,
  title = "Latest Articles",
  description,
  animateItems = true,
  columns = 3,
  filter = null,
  showHeader = true,
}: FeaturedPostsGridProps) {
  // Filter posts if filter is provided
  const filteredPosts = filter
    ? posts.filter(
        (post) =>
          post.category.toLowerCase() === filter.toLowerCase() ||
          post.type?.toLowerCase() === filter.toLowerCase()
      )
    : posts;

  // Determine the grid columns CSS based on the columns prop
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className="my-8">
      {showHeader && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={filter || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`grid ${gridColsClass} gap-6`}
        >
          {filteredPosts.map((post, index) =>
            animateItems ? (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <FeaturedPostCard
                  {...post}
                  orientation="vertical"
                  imageHeight="h-48"
                />
              </motion.div>
            ) : (
              <FeaturedPostCard
                key={post.slug}
                {...post}
                orientation="vertical"
                imageHeight="h-48"
              />
            )
          )}
        </motion.div>
      </AnimatePresence>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No articles found.</p>
        </div>
      )}
    </div>
  );
}
