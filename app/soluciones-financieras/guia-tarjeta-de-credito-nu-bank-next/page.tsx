import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/mdx/blog-post";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

// Metadata for the blog post
const POST_METADATA = {
  title: "Guía Tarjeta de Crédito Nu Bank: Todo lo que necesitas saber",
  date: "24 de marzo de 2025",
  author: "Top Finanzas",
  authorImage: "https://media.topfinanzas.com/images/favicon.png",
  readingTime: "8 minutos de lectura",
  categories: [
    { name: "Soluciones Financieras", slug: "soluciones-financieras" },
  ],
  featuredImage:
    "https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg",
  excerpt:
    "Descubre todo lo que necesitas saber sobre la tarjeta de crédito Nu: beneficios, requisitos, costos y cómo solicitar este producto financiero innovador.",
  views: 542,
  commentCount: 0,
};

export function generateMetadata() {
  return {
    title: `${POST_METADATA.title} - Top Finanzas México`,
    description: POST_METADATA.excerpt,
    keywords:
      "tarjeta de crédito, Nu Bank, nu bank, solicitar tarjeta, crédito, finanzas personales",
  };
}

async function getPostContent() {
  try {
    // Path to a potential MDX file for this blog post
    const contentDir = path.join(process.cwd(), "content/blog");
    const mdxFilePath = path.join(
      contentDir,
      "guia-tarjeta-de-credito-nu-bank.mdx"
    );

    // Check if an MDX file exists for this post
    if (fs.existsSync(mdxFilePath)) {
      // Read and return the file content
      const source = fs.readFileSync(mdxFilePath, "utf8");
      return source;
    }

    // If no MDX file exists, return default content
    return `
<div class='code-block code-block-1' style='margin: 30px 0;'>
<div id="mx_topfinanzas_1"></div></div>

# ${POST_METADATA.title}

${POST_METADATA.excerpt}

## ¿Qué es la Tarjeta de Crédito Nu?

La tarjeta de crédito Nu es un producto financiero innovador ofrecido por Nu Bank, una entidad financiera digital que ha revolucionado el mercado bancario en México. A diferencia de los bancos tradicionales, Nu ofrece una experiencia completamente digital, sin sucursales físicas y con un enfoque centrado en la experiencia del usuario.

## Beneficios Principales

- **Sin comisión anual**: La tarjeta Nu no cobra comisión anual, lo que la convierte en una opción atractiva para quienes buscan reducir costos.
- **100% digital**: Todo el proceso, desde la solicitud hasta la gestión diaria, se realiza a través de la aplicación móvil.
- **Seguridad avanzada**: Puedes bloquear y desbloquear tu tarjeta al instante desde la app.
- **Transparencia total**: Sin letras pequeñas ni costos ocultos.
- **Servicio al cliente 24/7**: Asistencia disponible todos los días a través de la aplicación.

## Requisitos para Solicitar la Tarjeta

Para solicitar la tarjeta de crédito Nu necesitas:

1. Ser mayor de 18 años
2. Residir en México
3. Tener un smartphone con sistema operativo iOS o Android
4. Contar con una identificación oficial vigente (INE/IFE o pasaporte)
5. Tener un historial crediticio aceptable

## Proceso de Solicitud

El proceso para solicitar la tarjeta Nu es rápido y sencillo:

1. Descarga la aplicación Nu desde la App Store o Google Play
2. Regístrate con tus datos personales
3. Toma una foto de tu identificación oficial
4. Espera la aprobación (generalmente en minutos)
5. Si tu solicitud es aprobada, recibirás la tarjeta en tu domicilio en 7-10 días hábiles

## Costos y Comisiones

| Concepto | Costo |
|---------|-------|
| Anualidad | $0 |
| Tasa de interés | Variable (CAT promedio: 65.7%) |
| Comisión por disposición de efectivo | 5% del monto retirado |
| Reposición de tarjeta | $0 |
| Pago tardío | $0 (pero afecta historial crediticio) |

## Conclusión

La tarjeta de crédito Nu representa una alternativa moderna a las tarjetas de crédito tradicionales, con un enfoque en la transparencia, bajos costos y una experiencia totalmente digital. Si buscas una tarjeta sin anualidad y con una interfaz fácil de usar, Nu podría ser una excelente opción para ti.

Para conocer más detalles sobre los requisitos específicos, te recomendamos visitar nuestra página de [requisitos para la tarjeta Nu](/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next) o ir directamente al [sitio oficial de Nu](https://nu.com.mx/credito/).
`;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return "# Error al Cargar el Contenido\n\nLo sentimos, hubo un error al cargar este contenido.";
  }
}

export default async function BlogPostPage() {
  // Get the MDX content
  const mdxContent = await getPostContent();

  // Compile the MDX content
  const { content } = await compileMDX({
    source: mdxContent,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  // Use the BlogPost component to render the content
  return <BlogPost metadata={POST_METADATA}>{content}</BlogPost>;
}
