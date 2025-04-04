import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/mdx/blog-post";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Ad } from "@/components/ui/ad"; // Import Ad component
import { Button } from "@/components/ui/button"; // Import Button component (used in index.mdx)
// MDXRemote might not be needed if content is passed as children
// import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter"; // Added for frontmatter parsing

export const dynamicParams = true; // Keep true to allow rendering pages not found during build

// Removed BlogPostMetadata type - will infer from frontmatter or define locally if needed
// Removed BlogPostsData type
// Removed BLOG_POSTS_DATA constant

// Example of expected frontmatter structure (can be adjusted)
interface PostFrontmatter {
  title: string;
  date: string; // Consider using Date type if consistency is guaranteed
  author?: string; // Made optional, provide defaults if needed
  authorImage?: string; // Made optional
  readingTime?: string; // Made optional, could be calculated
  categories?: Array<{ name: string; slug: string }>; // Made optional
  featuredImage?: string; // Made optional
  description: string; // Keep description for metadata
  excerpt?: string; // Added excerpt, make optional as it might fallback to description
  views?: number; // Made optional
  commentCount?: number; // Made optional
  [key: string]: any; // Allow other fields
}

// Placeholder for the actual data fetching logic
const getPostBySlug = (
  slug: string
): { frontmatter: PostFrontmatter; content: string } | null => {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Basic validation/defaults for required fields
    if (!data.title || !data.description || !data.date) {
      console.warn(
        `Post ${slug} is missing required frontmatter (title, description, date)`
      );
      // Optionally return null or throw error if strict validation is needed
    }

    // Provide default values for optional fields if necessary
    const frontmatter: PostFrontmatter = {
      title: data.title || "Untitled Post",
      description: data.description || "No description provided.",
      date: data.date || new Date().toISOString(), // Default to now if date missing
      author: data.author || "Top Finance", // Default author
      authorImage:
        data.authorImage || "https://media.topfinanzas.com/images/favicon.png", // Default image
      readingTime: data.readingTime, // Keep undefined if not present
      categories: data.categories || [
        { name: "Uncategorized", slug: "uncategorized" },
      ], // Default category
      featuredImage: data.featuredImage, // Keep undefined if not present
      excerpt: data.excerpt || data.description || "No excerpt provided.", // Add excerpt, fallback to description
      views: data.views || 0,
      commentCount: data.commentCount || 0,
      ...data, // Include any other fields from frontmatter
    };

    return { frontmatter, content };
  } catch (err) {
    // File not found or other read error
    // console.error(`Error reading post ${slug}:`, err); // Optional logging
    return null;
  }
};

const getAllPostSlugs = (): string[] => {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => filename.replace(/\.mdx$/, ""));
  } catch (err) {
    console.error("Error reading content/blog directory:", err);
    return [];
  }
};

// This would typically come from a CMS, database, or file system
// For this demo, we'll use a hardcoded map of sample blog posts
// --- Removed BLOG_POSTS_DATA ---
// Removed orphaned comment opener /*
// Removed leftover const definition below
// Removed the entire invalid block of leftover object data.

// Updated generateMetadata to use getPostBySlug
export function generateMetadata({ params }: { params: { slug: string } }) {
  const postData = getPostBySlug(params.slug);

  if (!postData) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { frontmatter } = postData;

  // Generate keywords from categories if they exist
  const categoryKeywords = frontmatter.categories
    ?.map((cat: { name: string; slug: string }) => cat.name) // Added type annotation
    .join(", ");
  const baseKeywords = "finance, blog, advice";
  const keywords = categoryKeywords
    ? `${categoryKeywords}, ${baseKeywords}`
    : baseKeywords;

  return {
    title: `${frontmatter.title} - Top Finance Blog`,
    description: frontmatter.description, // Use description from frontmatter
    keywords: keywords,
  };
}

// Updated generateStaticParams to use getAllPostSlugs
export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Removed getPostContent function as its logic is now in getPostBySlug

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Get post data (frontmatter and content)
  const postData = getPostBySlug(slug);

  // If post doesn't exist (file not found or invalid frontmatter), show 404
  if (!postData) {
    notFound();
  }

  const { frontmatter, content: mdxSource } = postData;

  // Compile the MDX source, passing custom components
  const { content } = await compileMDX({
    source: mdxSource,
    components: { ...useMDXComponents({}), Ad, Button }, // Pass Ad and Button components
    options: {
      // No need to parse frontmatter here again, already done by gray-matter
      // parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [], // Add remark plugins here
        rehypePlugins: [], // Add rehype plugins here
      },
    },
  });

  // Pass the extracted frontmatter as metadata to the BlogPost component
  // Ensure BlogPost component expects the structure provided by PostFrontmatter
  return <BlogPost metadata={frontmatter}>{content}</BlogPost>;
}
