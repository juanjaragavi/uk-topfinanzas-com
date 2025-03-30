"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";

export default function SolucionesFinancierasPage() {
  // List of content in this category
  const tarjetasContent = [
    {
      title: "Tarjeta Plata Card",
      slug: "tarjeta-plata-card-next",
      description:
        "Descubre todos los beneficios y requisitos para obtener la Tarjeta Plata Card, una excelente opción para usuarios que buscan flexibilidad.",
      image: "https://media.topfinanzas.com/images/tarjeta-plata-card.webp",
      date: "Marzo 20, 2025",
    },
    {
      title: "Tarjeta de Crédito Azul BBVA",
      slug: "tarjeta-de-credito-azul-bbva-next",
      description:
        "Todo lo que necesitas saber sobre la Tarjeta Azul de BBVA, sus beneficios y cómo puedes aprovecharla al máximo.",
      image: "https://media.topfinanzas.com/images/download-5-2.webp",
      date: "Marzo 18, 2025",
    },
    {
      title: "Guía Tarjeta de Crédito Nu Bank",
      slug: "guia-tarjeta-de-credito-nu-bank-next",
      description:
        "Guía completa sobre la tarjeta Nu Bank, sus características, beneficios exclusivos y proceso de solicitud.",
      image: "https://media.topfinanzas.com/images/download-9-1-820x462.webp",
      date: "Marzo 15, 2025",
    },
    {
      title: "Requisitos Tarjeta de Crédito Nu",
      slug: "requisitos-tarjeta-de-credito-nu-next",
      description:
        "Conoce los requisitos necesarios para solicitar la tarjeta de crédito Nu y cómo completar el proceso de solicitud.",
      image: "https://media.topfinanzas.com/images/download-2-1.webp",
      date: "Marzo 12, 2025",
    },
    {
      title: "Requisitos Tarjeta de Crédito Azul BBVA",
      slug: "requisitos-tarjeta-de-credito-azul-bbva-next",
      description:
        "Guía detallada sobre los requisitos para obtener la Tarjeta Azul de BBVA y el proceso de solicitud paso a paso.",
      image: "https://media.topfinanzas.com/images/download-5-2.webp",
      date: "Marzo 10, 2025",
    },
  ];

  // Custom content for this category page
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">Soluciones Financieras</h1>
      <p className="text-lg text-gray-700 mb-8">
        Encuentra información detallada sobre las mejores tarjetas de crédito
        disponibles en México, requisitos para solicitarlas y guías completas
        para ayudarte a elegir la mejor opción según tus necesidades
        financieras.
      </p>

      {/* Featured article */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div className="md:flex">
          <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-48">
            <Image
              src="https://media.topfinanzas.com/images/tarjeta-plata-card.webp"
              alt="Tarjeta Plata Card"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
              Destacado
            </div>
            <Link
              href={`/soluciones-financieras/tarjeta-plata-card-next`}
              className="block mt-1 text-2xl font-medium text-black hover:text-blue-600 transition-colors"
            >
              Tarjeta Plata Card: La Opción Ideal para Tus Finanzas
            </Link>
            <p className="mt-2 text-gray-600">
              Descubre por qué la Tarjeta Plata Card se ha convertido en una de
              las opciones más populares entre los mexicanos que buscan una
              tarjeta de crédito con excelentes beneficios y condiciones
              favorables.
            </p>
            <div className="mt-4">
              <Link
                href={`/soluciones-financieras/tarjeta-plata-card-next`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Leer más →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {tarjetasContent.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <Link
                href={`/soluciones-financieras/${post.slug}`}
                className="text-xl font-semibold hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
              <p className="mt-2 text-gray-600">{post.description}</p>
              <div className="mt-4">
                <Link
                  href={`/soluciones-financieras/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4">
          ¿Buscando la tarjeta ideal para ti?
        </h2>
        <p className="text-gray-700 mb-6">
          Utiliza nuestro recomendador de tarjetas de crédito y encuentra la
          opción que mejor se adapte a tu perfil financiero y necesidades
          específicas.
        </p>
        <Link
          href="/recomendador-de-tarjetas-de-credito-p1-next"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          Ir al Recomendador
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Soluciones Financieras - TopFinanzas",
        description:
          "Descubra información sobre las mejores tarjetas de crédito, requisitos y guías completas para elegir la opción adecuada para sus necesidades financieras.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
