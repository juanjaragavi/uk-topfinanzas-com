import type React from "react";
import type { Metadata } from "next";
import { metadata as metadataStrings } from "@/lib/constants";
import UtmMonitor from "@/components/analytics/utm-monitor";
import { Suspense } from "react";
import localFont from "next/font/local";
import fs from "fs";
import path from "path";
import "./styles/globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import UtmPersister from "@/components/analytics/utm-persister";
import ResourceHints from "@/components/resource-hints";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins-semibold.woff2",
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

// Define base URL for metadata
const baseUrl = "https://uk.topfinanzas.com";

export const metadata: Metadata = {
  title: metadataStrings.title,
  description: metadataStrings.description,
  generator: "TopNetworks Inc.",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout completely replaces the root layout for the quiz page
  // ADZep script is intentionally excluded for this route
  return (
    <html lang="en-gb">
      <head>
        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCSS,
          }}
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

        <GoogleTagManager />
        <ResourceHints />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>
          <UtmPersister />
          {process.env.NODE_ENV === "development" && <UtmMonitor />}
        </Suspense>
        <main className="flex min-h-[100dvh] flex-col justify-start bg-gray-100 pb-safe">
          {children}
        </main>
      </body>
    </html>
  );
}
