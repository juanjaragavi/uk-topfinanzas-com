"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export function BlogLayout({ children, metadata }: BlogLayoutProps) {
  const {
    title = "Blog - Top Finance",
    description = "Stay informed with the latest financial tips, strategies, and insights from Top Finance experts.",
  } = metadata || {};

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
              {/* Ad placeholder */}
              <div className="mb-8">
                <AdPlaceholder className="mx-auto" width={300} height={250} />
              </div>

              {/* Recent articles */}
              <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-xl mr-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">IMG</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium hover:text-blue-600 transition-colors">
                        <a href="/blog/post/your-first-paycheck">
                          Your First Paycheck: A Complete Guide to Smart
                          Management
                        </a>
                      </h4>
                      <p className="text-sm text-gray-500">February 25, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-xl mr-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">IMG</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium hover:text-blue-600 transition-colors">
                        <a href="/blog/post/what-is-a-home-mortgage">
                          What Is a Home Mortgage? Your Complete Guide
                        </a>
                      </h4>
                      <p className="text-sm text-gray-500">February 25, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-xl mr-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">IMG</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium hover:text-blue-600 transition-colors">
                        <a href="/blog/post/what-are-online-loans">
                          What Are Online Loans?: A Key Tool in Personal
                          Finances
                        </a>
                      </h4>
                      <p className="text-sm text-gray-500">February 25, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/blog/category/personal-finance"
                      className="flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>Personal Finance</span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                        12
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/category/credit-cards"
                      className="flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>Credit Cards</span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                        8
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/category/mortgages"
                      className="flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>Mortgages</span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                        6
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/category/investing"
                      className="flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>Investing</span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                        5
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/category/budgeting"
                      className="flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>Budgeting</span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                        4
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter signup */}
              <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  Subscribe to our newsletter
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest financial tips and insights delivered straight
                  to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
