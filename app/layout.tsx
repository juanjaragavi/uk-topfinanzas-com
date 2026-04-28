import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import "./globals.css";
import { logger } from "@/lib/logger";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import GoogleAds from "@/components/analytics/google-ads";
import GoogleAdManager from "@/components/analytics/gam";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmLinkInjector from "@/components/analytics/utm-link-injector";
import UtmMonitor from "@/components/analytics/utm-monitor";
import AdZep from "@/components/analytics/adzep";
import AdZepTest from "@/components/analytics/adzep-test";
import AdZepSPABridge from "@/components/analytics/adzep-spa-bridge";
import AdZepInterstitialBlocker from "@/components/analytics/adzep-interstitial-blocker";
import AdZepAccessibilityFix from "@/components/analytics/adzep-accessibility-fix";
import AdZepBackdropCleaner from "@/components/analytics/adzep-backdrop-cleaner";
import AnalyticsValidationPanel from "@/components/analytics/validation-panel";
import TopAds from "@/components/analytics/topads";
import TopAdsSPAHandler from "@/components/analytics/topads-spa-handler";
import ResourceHints from "@/components/resource-hints";
import NavigationProvider from "@/components/providers/navigation-provider";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  SEO_SITE,
} from "@/lib/seo";
{
  /*import PreloaderProvider from "@/components/providers/preloader-provider";*/
}
import ClientOnly from "@/components/ClientOnly";

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


// Temporarily disable AdZep script to isolate TopAds testing
const ENABLE_ADZEP = false;

// Read critical CSS at build time to inline it
let criticalCSS = "";
try {
  // Read the critical CSS file
  criticalCSS = fs.readFileSync(
    path.join(process.cwd(), "app/critical.css"),
    "utf8",
  );
} catch (e) {
  logger.warn("Failed to read critical CSS:", e);
}

// Add viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_SITE.baseUrl),
  title: {
    template: SEO_SITE.titleTemplate,
    default: SEO_SITE.defaultTitle,
  },
  description: SEO_SITE.description,
  keywords: [
    "credit cards UK",
    "personal loans UK",
    "compare credit cards",
    "compare loans",
    "financial education UK",
    "TopFinance UK",
  ],
  alternates: {
    canonical: SEO_SITE.baseUrl,
    languages: {
      [SEO_SITE.language]: SEO_SITE.baseUrl,
      en: SEO_SITE.baseUrl,
      "en-US": "https://us.topfinanzas.com",
      "es-MX": "https://topfinanzas.com",
      "x-default": SEO_SITE.baseUrl,
    },
  },
  authors: [{ name: "TopFinance UK Editorial Team", url: SEO_SITE.baseUrl }],
  publisher: SEO_SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SEO_SITE.defaultTitle,
    description: SEO_SITE.description,
    url: SEO_SITE.baseUrl,
    siteName: SEO_SITE.name,
    images: [
      {
        url: SEO_SITE.defaultImage,
        width: 1200,
        height: 630,
        alt: `${SEO_SITE.name} financial guides and solutions`,
      },
    ],
    locale: SEO_SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_SITE.defaultTitle,
    description: SEO_SITE.description,
    images: [SEO_SITE.defaultImage],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <meta name="referrer" content="strict-origin-when-cross-origin" />
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

        <ClientOnly>
          <GoogleTagManager />
          <GoogleAds />
          <GoogleAdManager />
          {ENABLE_ADZEP && <AdZep />}
          <TopAds />
        </ClientOnly>

        <ResourceHints />

        {/* Explicit favicon and manifest links with proper MIME types */}
        <link rel="icon" href="/favicon.png" type="image/png" />
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
        <link
          rel="alternate"
          href="/api/webmanifest"
          type="application/manifest+json"
        />
      </head>
      <body className={`${poppins.variable} font-sans text-left sm:text-left`}>
        <GoogleTagManagerNoScript />
        <JsonLd data={[generateOrganizationSchema(), generateWebSiteSchema()]} />
        {/*<PreloaderProvider
          defaultConfig={{
            duration: 4000,
            primaryColor: "#1e40af",
            secondaryColor: "#3b82f6",
            backgroundColor: "#ffffff",
            showLogo: true,
            showProgress: true,
          }}
          showOnNavigation={true}
        >*/}
        <NavigationProvider>
          <Suspense fallback={null}>
            <UtmPersister />
            <UtmLinkInjector />
            {ENABLE_ADZEP && <AdZepSPABridge />}
            {ENABLE_ADZEP && <AdZepInterstitialBlocker />}
            {ENABLE_ADZEP && <AdZepAccessibilityFix />}
            {ENABLE_ADZEP && <AdZepBackdropCleaner />}
            <TopAdsSPAHandler />
            {process.env.NODE_ENV === "development" && <UtmMonitor />}
            {process.env.NODE_ENV === "development" && ENABLE_ADZEP && (
              <AdZepTest />
            )}
            {process.env.NODE_ENV === "development" && (
              <AnalyticsValidationPanel />
            )}
          </Suspense>
          {children}
        </NavigationProvider>
        {/*</PreloaderProvider>*/}
      </body>
    </html>
  );
}
