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
      <div
        className="prose max-w-none text-[#234043]
        prose-h1:text-[16px] prose-h1:font-bold prose-h1:text-[#234043]
        prose-h2:text-[12px] prose-h2:text-[#234043]
        prose-p:text-[10px] prose-p:text-[#234043]
        prose-li:text-[10px] prose-li:text-[#234043]
        prose-a:text-[#222442]"
      >
        {children}
      </div>
    </BlogLayout>
  );
}
