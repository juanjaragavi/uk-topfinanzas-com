import fs from "fs";
import path from "path";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export const metadata = {
  title: "Terms & Conditions - Top Finance",
  description:
    "Read the Terms and Conditions for using Top Finance services and website.",
};

export default async function TermsPage() {
  // Read the MDX file
  const filePath = path.join(
    process.cwd(),
    "content/legal/terms-conditions.mdx"
  );
  let source = "# Terms & Conditions\n\nContent not found.";

  try {
    if (fs.existsSync(filePath)) {
      source = fs.readFileSync(filePath, "utf8");
    }
  } catch (error) {
    console.error("Error reading terms and conditions file:", error);
    source =
      "# Error Loading Content\n\nSorry, there was an error loading this content.";
  }

  // Compile MDX content, properly handling frontmatter
  const { content } = await compileMDX({
    source,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">{content}</div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
