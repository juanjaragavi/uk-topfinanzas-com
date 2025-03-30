"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";

export default function FinancialSolutionsPage() {
  // List of content in this category
  const cardsContent = [
    {
      title: "Plata Card",
      slug: "plata-card",
      description:
        "Discover all the benefits and requirements for obtaining the Plata Card, an excellent option for users seeking flexibility.",
      image: "https://media.topfinanzas.com/images/tarjeta-plata-card.webp",
      date: "20 March 2025",
    },
    {
      title: "BBVA Blue Credit Card",
      slug: "bbva-blue-credit-card",
      description:
        "Everything you need to know about the BBVA Blue Card, its benefits and how you can make the most of it.",
      image: "https://media.topfinanzas.com/images/download-5-2.webp",
      date: "18 March 2025",
    },
    {
      title: "Nu Bank Credit Card Guide",
      slug: "nu-bank-credit-card-guide",
      description:
        "Complete guide to the Nu Bank card, its features, exclusive benefits and application process.",
      image: "https://media.topfinanzas.com/images/download-9-1-820x462.webp",
      date: "15 March 2025",
    },
    {
      title: "Nu Credit Card Requirements",
      slug: "nu-credit-card-requirements",
      description:
        "Learn about the requirements for applying for the Nu credit card and how to complete the application process.",
      image: "https://media.topfinanzas.com/images/download-2-1.webp",
      date: "12 March 2025",
    },
    {
      title: "BBVA Blue Credit Card Requirements",
      slug: "bbva-blue-credit-card-requirements",
      description:
        "Detailed guide on the requirements for obtaining the BBVA Blue Card and the step-by-step application process.",
      image: "https://media.topfinanzas.com/images/download-5-2.webp",
      date: "10 March 2025",
    },
  ];

  // Custom content for this category page
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">Financial Solutions</h1>
      <p className="text-lg text-gray-700 mb-8">
        Find detailed information about the best credit cards
        available in the UK, requirements for applying, and comprehensive guides
        to help you choose the best option based on your financial needs.
      </p>

      {/* Featured article */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div className="md:flex">
          <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-48">
            <Image
              src="https://media.topfinanzas.com/images/tarjeta-plata-card.webp"
              alt="Plata Card"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
              Featured
            </div>
            <Link
              href={`/financial-solutions/plata-card`}
              className="block mt-1 text-2xl font-medium text-black hover:text-blue-600 transition-colors"
            >
              Plata Card: The Ideal Option for Your Finances
            </Link>
            <p className="mt-2 text-gray-600">
              Discover why the Plata Card has become one of
              the most popular options among those looking for a
              credit card with excellent benefits and favourable
              conditions.
            </p>
            <div className="mt-4">
              <Link
                href={`/financial-solutions/plata-card`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {cardsContent.map((post, index) => (
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
                href={`/financial-solutions/${post.slug}`}
                className="text-xl font-semibold hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
              <p className="mt-2 text-gray-600">{post.description}</p>
              <div className="mt-4">
                <Link
                href={`/financial-solutions/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Looking for the ideal card for you?
        </h2>
        <p className="text-gray-700 mb-6">
          Use our credit card recommender and find the
          option that best suits your financial profile and specific
          needs.
        </p>
        <Link
          href="/credit-card-recommender-p1"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          Go to Recommender
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Financial Solutions - TopFinance",
        description:
          "Discover information about the best credit cards, requirements and comprehensive guides to choose the right option for your financial needs.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
