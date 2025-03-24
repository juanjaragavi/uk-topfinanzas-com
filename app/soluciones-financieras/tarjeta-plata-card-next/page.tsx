import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/mdx/blog-post";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

// Metadata for the blog post
const POST_METADATA = {
  title: "Tarjeta Plata Card: La Tarjeta de Crédito Ideal para Principiantes",
  date: "24 de marzo de 2025",
  author: "Top Finanzas",
  authorImage: "https://media.topfinanzas.com/images/favicon.png",
  readingTime: "7 minutos de lectura",
  categories: [
    { name: "Soluciones Financieras", slug: "soluciones-financieras" },
  ],
  featuredImage:
    "https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg",
  excerpt:
    "Conoce la Tarjeta Plata Card, una opción accesible para quienes están comenzando a construir su historial crediticio o buscan una tarjeta con requisitos flexibles.",
  views: 486,
  commentCount: 0,
};

export function generateMetadata() {
  return {
    title: `${POST_METADATA.title} - Top Finanzas México`,
    description: POST_METADATA.excerpt,
    keywords:
      "tarjeta de crédito, Plata Card, historial crediticio, finanzas personales, crédito para principiantes",
  };
}

async function getPostContent() {
  try {
    // Path to a potential MDX file for this blog post
    const contentDir = path.join(process.cwd(), "content/blog");
    const mdxFilePath = path.join(contentDir, "tarjeta-plata-card.mdx");

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

## ¿Qué es la Tarjeta Plata Card?

La Tarjeta Plata Card es un producto financiero diseñado específicamente para personas que están iniciando su vida crediticia o que tienen un historial limitado. Esta tarjeta se posiciona como una excelente alternativa para quienes encuentran difícil acceder a las tarjetas de crédito tradicionales debido a los estrictos requisitos que suelen imponer los bancos convencionales.

## Características Principales

- **Línea de crédito inicial**: Desde $2,000 hasta $8,000 MXN, dependiendo de tu perfil financiero.
- **Aceptación flexible**: Consideración de múltiples factores más allá del historial crediticio tradicional.
- **Sin comisión por apertura**: Comienza a utilizar tu tarjeta sin costos iniciales.
- **Programa de recompensas**: Acumula puntos por cada compra que realices.
- **Aumento de línea de crédito**: Posibilidad de incrementar tu línea de crédito después de 6 meses de buen comportamiento de pago.

## Ventajas de la Tarjeta Plata Card

### Para Quienes Comienzan

Si eres nuevo en el mundo del crédito, la Tarjeta Plata Card ofrece varias ventajas:

- Oportunidad de comenzar a construir un historial crediticio positivo
- Requisitos menos exigentes que los bancos tradicionales
- Proceso de solicitud 100% en línea
- Aprobación rápida (generalmente en menos de 24 horas)

### Para Quienes Buscan Reconstruir su Crédito

Si has tenido dificultades crediticias en el pasado, esta tarjeta también puede ser una buena opción:

- Consideración de tu situación financiera actual, no solo tu historial
- Reportes mensuales a las principales burós de crédito
- Herramientas educativas sobre finanzas personales
- Alertas y recordatorios de pago para ayudarte a mantener un buen comportamiento

## Costos y Comisiones

| Concepto | Costo |
|---------|-------|
| Anualidad | $699 MXN (cobrada en 12 mensualidades de $58.25) |
| Tasa de interés | 70.8% anual (CAT promedio) |
| Comisión por disposición de efectivo | 6% del monto + IVA |
| Reposición de tarjeta | $150 MXN |
| Pago tardío | $400 MXN |

## Cómo Solicitar la Tarjeta Plata Card

El proceso para solicitar la Tarjeta Plata Card es totalmente digital:

1. Ingresa al [sitio oficial de Plata Card](https://platacard.mx/es/)
2. Completa el formulario de pre-aprobación con tus datos básicos
3. Si eres pre-aprobado, deberás proporcionar información adicional y documentación
4. Firma electrónicamente tu contrato
5. Recibe tu tarjeta en tu domicilio en un plazo de 7 a 10 días hábiles

## Consejos para Aprovechar al Máximo tu Tarjeta Plata Card

- **Paga siempre el total de tu deuda**: Evita los intereses pagando el saldo completo cada mes
- **Establece límites personales**: No utilices más del 30% de tu línea de crédito
- **Programa pagos automáticos**: Evita olvidos y pagos tardíos
- **Revisa regularmente tu estado de cuenta**: Detecta cualquier cargo no reconocido
- **Aprovecha las promociones**: Mantente atento a ofertas especiales para tarjetahabientes

## Conclusión

La Tarjeta Plata Card representa una oportunidad valiosa para quienes desean iniciar o reconstruir su vida crediticia con un producto financiero accesible y transparente. Si estás interesado en conocer más detalles sobre los requisitos específicos, te recomendamos visitar nuestra página de [requisitos para la Tarjeta Plata Card](/mx/soluciones-financieras/requisitos-tarjeta-plata-card-next).
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
