import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/mdx/blog-post";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamicParams = true;

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
};

// Define a type for our blog posts object with string keys
type BlogPostsData = {
  [key: string]: BlogPostMetadata;
};

// This would typically come from a CMS, database, or file system
// For this demo, we'll use a hardcoded map of sample blog posts
const BLOG_POSTS_DATA: BlogPostsData = {
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
  },
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_DATA[params.slug];

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Top Finance Blog`,
    description: post.excerpt,
    keywords:
      post.categories.map((cat) => cat.name).join(", ") +
      ", finance, blog, advice",
  };
}

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA).map((slug) => ({ slug }));
}

async function getPostContent(slug: string) {
  try {
    // In a real app, this would fetch from a CMS or file system
    // For now, we'll check if a file exists in the content directory
    const contentDir = path.join(process.cwd(), 'content/blog');
    const mdxFilePath = path.join(contentDir, `${slug}.mdx`);
    
    // Check if the file exists
    if (fs.existsSync(mdxFilePath)) {
      // Read and return the file content
      const source = fs.readFileSync(mdxFilePath, 'utf8');
      return source;
    }
    
    // If no file exists, return a placeholder content for demo purposes
    return `
# ${BLOG_POSTS_DATA[slug]?.title || 'Blog Post'}

${BLOG_POSTS_DATA[slug]?.excerpt || ''}

## Introduction

Welcome to this blog post! This is a placeholder content for demonstration purposes.

## Key Points

- This is point 1
- This is point 2
- This is point 3

## Conclusion

Thank you for reading this blog post.
`;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return "# Error Loading Content\n\nSorry, there was an error loading this content.";
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Check if we have metadata for this post
  if (!BLOG_POSTS_DATA[slug]) {
    notFound();
  }

  // Get the post metadata
  const postMetadata = BLOG_POSTS_DATA[slug];
  
  // Get the MDX content
  const mdxContent = await getPostContent(slug);
  
  // Compile the MDX content
  const { content } = await compileMDX({
    source: mdxContent,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true }
  });

  return (
    <BlogPost metadata={postMetadata}>
      {content}
    </BlogPost>
  );
}
