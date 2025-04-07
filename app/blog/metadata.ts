import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TopFinance UK Blog: Personal Finance & Financial Solutions",
  description:
    "Explore articles on credit cards, loans, debt management, savings, and more financial topics relevant to the UK market.",
  keywords:
    "UK finance blog, personal finance UK, credit cards UK, loans UK, debt management, financial advice UK",
  openGraph: {
    title: "TopFinance UK Blog: Personal Finance & Financial Solutions",
    description:
      "Explore articles on credit cards, loans, debt management, savings, and more financial topics relevant to the UK market.",
    url: "https://uk.topfinanzas.com/blog", // Assuming this is the blog URL
    type: "website",
    // Optional: Add a general blog image
    // images: [{ url: 'https://media.topfinanzas.com/images/uk-blog-og-image.webp', width: 1200, height: 630, alt: 'TopFinance UK Blog' }],
    // section: "Blog", // Removed as it's not valid for type 'website'
  },
  twitter: {
    card: "summary_large_image",
    title: "TopFinance UK Blog: Personal Finance & Financial Solutions",
    description:
      "Explore articles on credit cards, loans, debt management, savings, and more financial topics relevant to the UK market.",
    // images: ['https://media.topfinanzas.com/images/uk-blog-og-image.webp'],
  },
};
