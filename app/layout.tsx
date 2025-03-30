import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import UtmPersister from "@/components/analytics/utm-persister";

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

export const metadata: Metadata = {
  title: "TopFinance - Smart Solutions for Credit Cards",
  description:
    "Find the perfect credit card tailored to your needs with expert recommendations from TopFinance.",
  keywords:
    "credit cards, credit card comparison, cashback, rewards, TopFinance, UK",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-gb">
      <head>
        <GoogleTagManager />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>
          <UtmPersister />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
