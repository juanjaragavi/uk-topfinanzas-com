import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmMonitor from "@/components/analytics/utm-monitor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
  preload: false, // Change to false to avoid network requests during build
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

// Define base URL for metadata
const baseUrl = "https://uk.topfinanzas.com"; // Replace with actual production URL if different

export const metadata: Metadata = {
  // Updated Title and Description for UK focus
  title: "TopFinance UK - Your Guide to UK Credit Cards & Loans",
  description:
    "Compare the best UK credit cards, loans, and financial solutions with TopFinance UK. Expert guides and tools tailored for the UK market.",
  keywords:
    "credit cards UK, personal loans UK, compare credit cards, compare loans, financial advice UK, TopFinance UK", // Updated keywords
  // Removed generator tag

  // Added Open Graph Metadata
  openGraph: {
    title: "TopFinance UK - Your Guide to UK Credit Cards & Loans",
    description:
      "Compare the best UK credit cards, loans, and financial solutions with TopFinance UK.",
    url: baseUrl,
    siteName: "TopFinance UK",
    images: [
      {
        url: `https://media.topfinanzas.com/images/your-first-paycheck.webp`, // Using the provided image URL
        width: 1200, // Assuming standard OG image width
        height: 630, // Assuming standard OG image height
        alt: "TopFinance UK - Financial Guides and Solutions", // Updated Alt Text
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // Added Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "TopFinance UK - Your Guide to UK Credit Cards & Loans",
    description:
      "Compare the best UK credit cards, loans, and financial solutions with TopFinance UK.",
    // siteId: "[Optional Twitter ID]",
    // creator: "[Optional Twitter Handle]",
    // creatorId: "[Optional Twitter ID]",
    images: [`https://media.topfinanzas.com/images/your-first-paycheck.webp`], // Using the provided image URL
  },

  // Optional: Add icons and manifest for PWA/better bookmarking
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${baseUrl}/site.webmanifest`,

  // Optional: Define metadataBase for resolving relative image URLs
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-gb">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "TopFinance UK", // Replace with your actual name
                url: baseUrl, // Uses the variable defined above
                logo: "https://uk.topfinanzas.com/images/logo-english-color.png",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "PANAMA, PANAMA CITY", // Replace with your address
                  addressLocality: "AV. AQUILINO DE LA GUARDIA",
                  postalCode: "OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
                  addressCountry: "PA",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+44-20-1234-5678", // Replace with your phone
                  contactType: "customer support", // Adjust as needed
                  email: "info@topnetworks.co", // Replace with your email
                },
                sameAs: [
                  "https://www.linkedin.com/company/top-networks-inc", // Replace with your actual social links
                  "https://www.instagram.com/topfinance_en/",
                ],
              },
              null,
              2
            ),
          }} // Added null, 2 for pretty printing in source (optional)
        />
        <GoogleTagManager />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>
          <UtmPersister />
          {process.env.NODE_ENV === "development" && <UtmMonitor />}
        </Suspense>
        {children}
      </body>
    </html>
  );
}
