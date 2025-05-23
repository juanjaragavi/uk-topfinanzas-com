import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import "./globals.css";
import Script from "next/script"; // Added if not present, but it is for GTM
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmMonitor from "@/components/analytics/utm-monitor";
import ResourceHints from "@/components/resource-hints";
import NavigationProvider from "@/components/providers/navigation-provider";
import ClientOnly from "@/components/ClientOnly";
{
  /*import AdZepScript from "@/components/ads/AdZepScript"; // Import the new component*/
}

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

  // Use simplified favicon configuration
  icons: {
    icon: "/favicon.png",
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
        {/*<link
          rel="preload"
          href="https://media.topfinanzas.com/images/banner-home-mobile.webp"
          as="image"
          media="(max-width: 767px)"
          fetchPriority="high"
          crossOrigin="anonymous"
        />*/}
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

        <ClientOnly>
          <GoogleTagManager />
        </ClientOnly>
        <ResourceHints />

        {/* Google Publisher Tag Scripts */}
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="beforeInteractive"
          async
          crossOrigin="anonymous"
          id="gpt-js"
        />
        <Script id="gpt-inline-config" strategy="beforeInteractive">
          {`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
              // Define ad slot 1
              googletag.defineSlot('/23062212598/uk.topfinanzas_com_mob_1', [[300, 250], [250, 250], [336, 280]], 'div-gpt-ad-1747926742578-0').addService(googletag.pubads());
              // Define ad slot 2 (interstitial)
              googletag.defineSlot('/23062212598/uk.topfinanzas_com_mob_interstitial', ['fluid'], 'div-gpt-ad-1747934765427-0').addService(googletag.pubads());
              // Define ad slot 3 (offerwall)
              googletag.defineSlot('/23062212598/uk.topfinanzas_com_mob_offerwall', ['fluid'], 'div-gpt-ad-1747927172704-0').addService(googletag.pubads());
              
              // Enable services once after all slots are defined
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `}
        </Script>

        {/* Explicit favicon and manifest links with proper MIME types */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          type="application/manifest+json"
          crossOrigin="anonymous"
        />

        {/* Fallback api routes for browsers that might have issues with static files */}
        <link rel="alternate icon" href="/api/favicon" type="image/x-icon" />
        <link
          rel="alternate"
          href="/api/webmanifest"
          type="application/manifest+json"
        />
      </head>
      <body className={`${poppins.variable} font-sans text-left sm:text-left`}>
        {/* /23062212598/uk.topfinanzas_com_mob_offerwall */}
        <div id="div-gpt-ad-1747927172704-0">
          <Script id="gpt-display-1747927172704-0" strategy="lazyOnload">
            {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1747927172704-0'); });`}
          </Script>
        </div>
        {/* /23062212598/uk.topfinanzas_com_mob_interstitial */}
        <div id="div-gpt-ad-1747934765427-0">
          <Script id="gpt-display-1747934765427-0" strategy="lazyOnload">
            {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1747934765427-0'); });`}
          </Script>
        </div>
        {/* ADZep AutoZep Paid Advertising tag */}
        {/* <script
          data-cfasync="false"
          src="https://autozep.adzep.io/paid/uk.topfinanzas.js"
        ></script>
        ADZep AutoZep Paid Advertising tag - Now using AdZepScript component
        <AdZepScript /> */}
        <GoogleTagManagerNoScript />
        <NavigationProvider>
          <Suspense fallback={null}>
            <UtmPersister />
            {process.env.NODE_ENV === "development" && <UtmMonitor />}
          </Suspense>
          {children}
        </NavigationProvider>
        {/*<script
          dangerouslySetInnerHTML={{
            __html: `
      window.onload = function() {
        if (typeof window.AdZepActivateAds === 'function') {
          window.AdZepActivateAds();
        } else {
          console.error('AdZepActivateAds function not found after window load.');
        }
      };
    `,
          }}
        />*/}
      </body>
    </html>
  );
}
