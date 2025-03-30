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
                  {/* Recent Articles */}
                  <SidebarRecentArticles>
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg"
                        alt="Tu Primer Sueldo: Una Guía Completa para Gestión Inteligente"
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <div>
                        <Link
                          href="/blog/post/your-first-paycheck"
                          className="text-sm font-medium hover:underline"
                        >
                          Your First Salary: A Complete Guide to Smart
                          Management
                        </Link>
                        <p className="text-xs text-gray-500">
                          25 February, 2025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg"
                        alt="¿Qué Es una Hipoteca? Tu Guía Completa"
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <div>
                        <Link
                          href="/blog/post/what-is-a-home-mortgage"
                          className="text-sm font-medium hover:underline"
                        >
                          What Is a Mortgage? Your Complete Guide
                        </Link>
                        <p className="text-xs text-gray-500">
                          25 February, 2025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Image
                        src="https://media.topfinanzas.com/images/generated/1741723547071/sample_0.jpg"
                        alt="What Are Online Loans? A Key Tool in Personal Finance"
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <div>
                        <Link
                          href="/blog/post/what-are-online-loans"
                          className="text-sm font-medium hover:underline"
                        >
                          What Are Online Loans? A Key Tool in Personal
                          Finance
                        </Link>
                        <p className="text-xs text-gray-500">
                          25 February, 2025
                        </p>
                      </div>
                    </div>
                  </SidebarRecentArticles>
                  <SidebarSeparator />
                  {/* Categories */}
                  <SidebarCategories>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/blog/category/personal-finance"
                        className="text-sm hover:underline"
                      >
                        Personal Finance
                      </Link>
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                        12
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href="/blog/category/credit-cards"
                        className="text-sm hover:underline"
                      >
                        Credit Cards
                      </Link>
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                        8
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href="/blog/category/mortgages"
                        className="text-sm hover:underline"
                      >
                        Mortgages
                      </Link>
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                        6
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href="/blog/category/investing"
                        className="text-sm hover:underline"
                      >
                        Investments
                      </Link>
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                        5
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href="/blog/category/budgeting"
                        className="text-sm hover:underline"
                      >
                        Budgeting
                      </Link>
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                        4
                      </span>
                    </div>
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
