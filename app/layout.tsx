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
  title: "TopFinanzas - Soluciones Inteligentes para Tarjetas de Crédito",
  description:
    "Encuentra la tarjeta de crédito perfecta adaptada a tus necesidades con las recomendaciones expertas de TopFinanzas.",
  keywords:
    "tarjetas de crédito, comparación de tarjetas de crédito, cashback, recompensas, TopFinanzas, México",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-mx">
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
