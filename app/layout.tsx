import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TopFinanzas - Smart Financial Solutions",
  description:
    "Find the perfect credit card and loan options tailored to your needs with TopFinanzas expert recommendations.",
  keywords: "credit cards, loans, financial solutions, personal finance, TopFinanzas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'