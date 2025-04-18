import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface FeaturedPostCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  categorySlug: string;
  date?: string;
  type?: string;
  priority?: boolean;
  imageHeight?: string;
  orientation?: "horizontal" | "vertical";
  showBadge?: boolean;
}

/**
 * A reusable component for displaying featured blog posts throughout the site
 */
export function FeaturedPostCard({
  title,
  description,
  image,
  slug,
  category,
  categorySlug,
  date,
  type,
  priority = false,
  imageHeight = "h-48",
  orientation = "vertical",
  showBadge = true,
}: FeaturedPostCardProps) {
  // Determine the actual URL path
  const postUrl = `${categorySlug}/${slug}`;

  // CSS classes based on orientation
  const containerClasses =
    orientation === "horizontal"
      ? "md:flex bg-white rounded-xl shadow-md overflow-hidden"
      : "bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full";

  const imageContainerClasses =
    orientation === "horizontal"
      ? "md:flex-shrink-0 relative h-64 md:h-auto md:w-48"
      : `relative ${imageHeight} w-full`;

  const contentClasses =
    orientation === "horizontal" ? "p-6 md:p-8" : "p-6 flex flex-col flex-grow";

  return (
    <div
      className={containerClasses}
      data-category={category.toLowerCase().replace(/\s+/g, "-")}
      data-post-type={type}
    >
      <div className={imageContainerClasses} style={{ position: "relative" }}>
        <Link href={postUrl} className="block h-full">
          <Image
            src={image}
            alt={title}
            fill
            priority={true}
            style={{ objectFit: "cover" }}
            loading="eager"
            sizes={
              orientation === "horizontal"
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA="
            unoptimized={false}
          />
          {showBadge && type && (
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase">
              {type}
            </div>
          )}
          {showBadge && !type && (
            <div className="absolute top-2 left-2 z-10">
              <Badge
                className={`
                ${category === "Personal Finance" ? "bg-blue-600" : ""}
                ${category === "Financial Solutions" ? "bg-green-600" : ""}
              `}
              >
                {category}
              </Badge>
            </div>
          )}
        </Link>
      </div>

      <div className={contentClasses}>
        {date && <p className="text-sm text-gray-500 mb-2">{date}</p>}

        <Link
          href={postUrl}
          className="block mt-1 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2 line-clamp-2"
        >
          {title}
        </Link>

        <p className="mt-2 text-gray-600 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-4">
          <Link
            href={postUrl}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
