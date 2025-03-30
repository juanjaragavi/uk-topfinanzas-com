import fs from "fs";
import path from "path";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export const metadata = {
  title: "Términos y Condiciones - Top Finance",
  description:
    "Lea los Términos y Condiciones para el uso de los servicios y el sitio web de Top Finance.",
};

export default async function TermsPage() {
  // Read the MDX file
  const filePath = path.join(
    process.cwd(),
    "content/legal/terms-conditions.mdx"
  );
  let source = "# Términos y Condiciones\n\nContenido no encontrado.";

  try {
    if (fs.existsSync(filePath)) {
      source = fs.readFileSync(filePath, "utf8");
    }
  } catch (error) {
    console.error(
      "Error al cargar el archivo de términos y condiciones:",
      error
    );
    source =
      "# Error al Cargar el Contenido\n\nLo sentimos, hubo un error al cargar este contenido.";
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
          <div className="article-container prose max-w-none prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3 prose-p:text-body prose-li:text-list prose-a:text-link">
            {content}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
