import type React from "react";
import type { Metadata } from "next";
import { metadata as metadataStrings } from "@/lib/constants";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: metadataStrings.title,
  description: metadataStrings.description,
  generator: "TopNetworks Inc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-[100dvh] flex-col justify-start bg-gray-100 pb-safe">
      {children}
    </main>
  );
}
