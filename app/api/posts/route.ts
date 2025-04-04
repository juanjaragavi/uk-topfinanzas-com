import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the structure for frontmatter, aligning with PostFrontmatter in page components
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

// Function to get all posts data
function getAllPostsData(): PostData[] {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Error reading content/blog directory:", error);
    return []; // Return empty if directory doesn't exist or other error
  }

  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, filename);
      try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        // Basic validation/defaults
        const frontmatter: PostFrontmatter = {
          title: data.title || "Untitled Post",
          description: data.description || "No description provided.",
          date: data.date || new Date().toISOString(),
          author: data.author || "Top Finance",
          authorImage:
            data.authorImage ||
            "https://media.topfinanzas.com/images/favicon.png",
          readingTime: data.readingTime,
          categories: data.categories || [
            { name: "Uncategorized", slug: "uncategorized" },
          ],
          featuredImage: data.featuredImage,
          excerpt: data.excerpt || data.description || "No excerpt provided.",
          views: data.views || 0,
          commentCount: data.commentCount || 0,
          ...data,
        };

        return { slug, frontmatter };
      } catch (readError) {
        console.error(
          `Error reading or parsing frontmatter for ${filename}:`,
          readError
        );
        return null; // Skip files that cause errors
      }
    })
    .filter((post): post is PostData => post !== null); // Filter out nulls from errors

  // Sort posts by date, newest first
  return posts.sort((postA, postB) =>
    postA.frontmatter.date < postB.frontmatter.date ? 1 : -1
  );
}

// API Route Handler
export async function GET() {
  try {
    const posts = getAllPostsData();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("API Error fetching posts:", error);
    return NextResponse.json(
      { message: "Error fetching posts" },
      { status: 500 }
    );
  }
}
