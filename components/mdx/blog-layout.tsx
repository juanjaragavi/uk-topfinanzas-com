"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Ad } from "@/components/ui/ad";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarAd,
  SidebarCategories,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
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
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-b from-white to-gray-50 py-10">
        <div className="container mx-auto px-4">
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
                    {/* Article 1 */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/best-personal-loans.webp"
                        alt="Best Personal Loans in the UK"
                        width={50}
                        height={50}
                        className="rounded-md object-cover" // Added object-cover
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/best-personal-loans"
                          className="text-sm font-medium hover:underline line-clamp-2" // Added line-clamp
                        >
                          Best Personal Loans in the UK
                        </Link>
                        {/* Optional: Add date if available */}
                      </div>
                    </div>
                    {/* Article 2 */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp" // Placeholder
                        alt="Top Rewards Credit Cards"
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/best-rewards-credit-cards"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Top Rewards Credit Cards
                        </Link>
                      </div>
                    </div>
                    {/* Article 3 */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/barclaycard-avios-plus.webp"
                        alt="Barclaycard Avios Plus"
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/financial-solutions/barclaycard-avios-plus"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Barclaycard Avios Plus Credit Card
                        </Link>
                      </div>
                    </div>
                    {/* Article 4 */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp"
                        alt="Practical Guide to Getting Out of Debt"
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.topfinanzas.com/images/placeholder-image.webp";
                        }}
                      />
                      <div>
                        <Link
                          href="/personal-finance/getting-out-of-debt"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Practical Guide to Getting Out of Debt
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
