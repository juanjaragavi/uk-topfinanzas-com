"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SidebarAd,
  SidebarCategories,
  SidebarContent,
  SidebarNewsletter,
  SidebarProvider,
  SidebarRecentArticles,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface BlogLayoutProps {
  children: ReactNode;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export function BlogLayout({ children, metadata }: BlogLayoutProps) {
  const {
    title = "Blog - TopFinance",
    description = "Stay informed with the latest financial tips, strategies and information from TopFinance experts.",
  } = metadata || {};

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de suscripción
    console.log("Formulario enviado");
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-b from-white to-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-left max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">{children}</div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <SidebarProvider>
                <SidebarContent>
                  {/* Ad banner */}
                  <SidebarAd />
                  <SidebarSeparator />
                  {/* Recent Articles - Updated */}
                  <SidebarRecentArticles>
                    {/* Inflation-Proof Article - NEW */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp"
                        alt="Inflation-Proof Your Life: 7 Smart Money Moves"
                        width={50}
                        height={50}
                        loading="lazy"
                        priority={false}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/inflation-proof-your-life"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Inflation-Proof Your Life: 7 Smart Money Moves
                        </Link>
                      </div>
                    </div>
                    {/* Lifestyle Creep Article */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/uk/what-is-lifestyle-creep-silent-wallet-drain.webp"
                        alt="What Is Lifestyle Creep and How Is It Silently Draining Your Wallet"
                        width={50}
                        height={50}
                        loading="lazy"
                        priority={false}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/what-is-lifestyle-creep"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          What Is Lifestyle Creep?
                        </Link>
                      </div>
                    </div>
                    {/* Budget Article */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/uk/modern-budget-guide.webp"
                        alt="Create a Personal Finance Budget You'll Actually Stick To"
                        width={50}
                        height={50}
                        loading="lazy"
                        priority={false}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/creating-a-budget-youll-actually-stick-to"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Create a Budget You'll Actually Stick To
                        </Link>
                      </div>
                    </div>
                    {/* Article 1 */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/best-personal-loans.webp"
                        alt="Best Personal Loans in the UK"
                        width={50}
                        height={50}
                        loading="lazy"
                        priority={false}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/best-personal-loans"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Best Personal Loans in the UK
                        </Link>
                      </div>
                    </div>
                  </SidebarRecentArticles>
                  <SidebarSeparator />
                  {/* Categories - Updated */}
                  <SidebarCategories>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/personal-finance"
                        className="text-sm hover:underline font-medium" // Made font medium
                      >
                        Personal Finance
                      </Link>
                      {/* Removed count */}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/financial-solutions"
                        className="text-sm hover:underline font-medium" // Made font medium
                      >
                        Financial Solutions
                      </Link>
                      {/* Removed count */}
                    </div>
                    {/* Add more relevant categories if needed */}
                  </SidebarCategories>
                  <SidebarSeparator />
                  {/* Newsletter */}
                  <SidebarNewsletter onSubmit={handleNewsletterSubmit} />
                </SidebarContent>
              </SidebarProvider>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
