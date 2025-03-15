"use client"

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
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </BlogLayout>
  );
}
