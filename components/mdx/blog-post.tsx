"use client";

import { BlogLayout } from "@/components/layout/blog-layout";
import { ReactNode } from "react";

interface BlogPostProps {
  children: ReactNode;
  metadata: {
    title: string;
    date: string;
    author: string;
    authorImage: string;
    readingTime: string;
    categories: Array<{ name: string; slug: string }>;
    featuredImage: string;
    excerpt: string;
    views?: number;
    commentCount?: number;
  };
}

export function BlogPost({ children, metadata }: BlogPostProps) {
  return (
    <BlogLayout metadata={metadata}>
      <div className="article-container prose max-w-none prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3 prose-p:text-body prose-li:text-list prose-a:text-link">
        {children}
      </div>
    </BlogLayout>
  );
}
