import fs from "fs";
import path from "path";
import { BlogLayout } from "@/components/mdx/blog-layout";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog - Top Finance",
  description:
    "Stay informed with the latest financial tips, strategies, and insights from Top Finance experts.",
  keywords:
    "personal finance blog, financial advice, credit card guides, budget tips, investment advice, money management",
};

async function getPageContent() {
  try {
    const mdxPath = path.join(process.cwd(), "content/blog/index.mdx");

    // Check if the file exists
    if (fs.existsSync(mdxPath)) {
      // Read the file content
      const source = fs.readFileSync(mdxPath, "utf8");
      return source;
    }

    return "# Top Finance Blog\n\nNo content available.";
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return "# Error Loading Content\n\nSorry, there was an error loading this content.";
  }
}

export default async function BlogPage() {
  const mdxContent = await getPageContent();

  // Compile the MDX content
  const { content, frontmatter } = await compileMDX({
    source: mdxContent,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  return <BlogLayout metadata={frontmatter}>{content}</BlogLayout>;
}
