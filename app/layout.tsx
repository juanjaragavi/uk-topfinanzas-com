import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import "./globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmMonitor from "@/components/analytics/utm-monitor";
import ResourceHints from "@/components/resource-hints";

// Use local font to avoid external requests during build
// This improves build time and eliminates network dependency
const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
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
const baseUrl = "https://uk.topfinanzas.com";

// Read critical CSS at build time to inline it
let criticalCSS = "";
try {
  // Read the critical CSS file
  criticalCSS = fs.readFileSync(
    path.join(process.cwd(), "app/critical.css"),
    "utf8"
  );
} catch (e) {
  console.warn("Failed to read critical CSS:", e);
}

// Add viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

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
        url: `https://media.topfinanzas.com/images/placeholder-image.webp`, // Using the provided image URL
        width: 900, // Assuming standard OG image width
        height: 600, // Assuming standard OG image height
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
    images: [`https://media.topfinanzas.com/images/placeholder-image.webp`], // Using the provided image URL
  },

  // Optional: Add icons and manifest for PWA/better bookmarking
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.ico", // Corrected to existing .ico file
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Use relative path for local manifest

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
        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCSS,
          }}
        />

        {/* Removed manual loading for /styles.css; ./globals.css import handles it */}

        {/* Preload critical resources for faster LCP with crossorigin for CORS compliance */}
        {/* Removed preload for placeholder-image.webp as it competes with LCP banners */}
        <link
          rel="preload"
          href="https://media.topfinanzas.com/images/banner-home-mobile.webp"
          as="image"
          media="(max-width: 767px)"
          fetchPriority="high"
          crossOrigin="anonymous"
        />
        {/* Removed specific preload for desktop banner; browser will fetch based on CSS media query */}
        {/* Removed redundant manual preload for logo; Next/Image priority=true handles this */}

        {/* Add Cache-Control meta tag for browser caching */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />

        {/* Preconnect to media domain to establish early connection */}
        <link
          rel="preconnect"
          href="https://media.topfinanzas.com"
          crossOrigin="anonymous"
        />

        {/* Module/nomodule pattern for modern browsers */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.dataset.jsEnabled = 'module';",
          }}
        />
        <script
          noModule
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.dataset.jsEnabled = 'nomodule';",
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "TopFinance UK",
                url: baseUrl,
                logo: "https://media.topfinanzas.com/images/logo-english.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "PANAMA, PANAMA CITY",
                  addressLocality: "AV. AQUILINO DE LA GUARDIA",
                  postalCode: "OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
                  addressCountry: "PA",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+44-20-1234-5678",
                  contactType: "customer support",
                  email: "info@topfinanzas.com",
                },
                sameAs: [
                  "https://www.linkedin.com/company/top-networks-inc",
                  "https://www.instagram.com/topfinance_en/",
                ],
              },
              null,
              2
            ),
          }}
        />
        <GoogleTagManager />
        <ResourceHints />
        <script
          data-cfasync="false"
          src="https://autozep.adzep.io/paid/uk.topfinanzas.js"
        ></script>
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
