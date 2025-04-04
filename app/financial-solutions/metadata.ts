import type { Metadata } from "next";

// Metadata specifically for the /financial-solutions landing page
export const metadata: Metadata = {
  title: "UK Financial Solutions: Credit Cards & Loans | TopFinance UK",
  description:
    "Explore comprehensive guides and comparisons of the best UK credit cards and personal loans. Find requirements, benefits, and apply for the right financial solution.",
  keywords:
    "UK financial solutions, credit cards UK, personal loans UK, compare credit cards, compare loans, Barclays, HSBC, Lloyds, NatWest, Santander, Monzo, Starling, best UK finance",
  openGraph: {
    title: "UK Financial Solutions: Credit Cards & Loans | TopFinance UK",
    description:
      "Your guide to the top credit cards and personal loans available in the UK. Compare options and find the best fit for your needs.",
    images: [
      {
        // Using a relevant UK product image
        url: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
        width: 1200, // Adjust if necessary
        height: 630, // Adjust if necessary
        alt: "UK Financial Solutions from TopFinance UK",
      },
    ],
    type: "website",
    url: "https://uk.topfinanzas.com/financial-solutions", // Assuming this is the correct URL
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Financial Solutions: Credit Cards & Loans | TopFinance UK",
    description:
      "Your guide to the top credit cards and personal loans available in the UK. Compare options and find the best fit for your needs.",
    images: [
      "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
    ],
  },
};
