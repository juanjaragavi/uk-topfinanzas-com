"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { cn } from "@/lib/utils";

export default function TypographyStyleGuide() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-h1 mb-8">Typography Style Guide</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-h2 mb-4">Headings</h2>
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
              <div>
                <div className="text-meta mb-1 text-gray-500">text-h1</div>
                <h1 className="text-h1">Heading Level 1</h1>
                <div className="text-meta mt-1 text-gray-500">
                  16px, bold, #234043, leading-tight
                </div>
              </div>

              <div>
                <div className="text-meta mb-1 text-gray-500">text-h2</div>
                <h2 className="text-h2">Heading Level 2</h2>
                <div className="text-meta mt-1 text-gray-500">
                  12px, normal, #234043, leading-tight
                </div>
              </div>

              <div>
                <div className="text-meta mb-1 text-gray-500">text-h3</div>
                <h3 className="text-h3">Heading Level 3</h3>
                <div className="text-meta mt-1 text-gray-500">
                  12px, semibold, #234043, leading-tight
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-h2 mb-4">Body Text</h2>
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
              <div>
                <div className="text-meta mb-1 text-gray-500">text-body</div>
                <p className="text-body">
                  This is a paragraph with body text styling. The text-body
                  class is used for the main content text throughout the site.
                  It uses a 10px font size with a natural line height and
                  #234043 color.
                </p>
                <div className="text-meta mt-1 text-gray-500">
                  10px, normal, #234043, leading-normal
                </div>
              </div>

              <div>
                <div className="text-meta mb-1 text-gray-500">text-list</div>
                <ul className="space-y-1 ml-5 list-disc">
                  <li className="text-list">First list item</li>
                  <li className="text-list">Second list item</li>
                  <li className="text-list">Third list item</li>
                </ul>
                <div className="text-meta mt-1 text-gray-500">
                  10px, normal, #234043, leading-normal
                </div>
              </div>

              <div>
                <div className="text-meta mb-1 text-gray-500">text-meta</div>
                <span className="text-meta block">
                  This text is used for captions, dates, and other metadata.
                </span>
                <div className="text-meta mt-1 text-gray-500">
                  8px, normal, #234043, leading-tight
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-h2 mb-4">Links and CTAs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-meta mb-1 text-gray-500">text-link</div>
              <p className="text-body">
                Here is a paragraph with a{" "}
                <a href="#" className="text-link">
                  link styled with text-link class
                </a>{" "}
                embedded within the text.
              </p>
              <div className="text-meta mt-1 text-gray-500">
                Inherits size, #222442 color, hover:underline
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-meta mb-1 text-gray-500">text-cta</div>
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                <span className="text-cta">Call to Action</span>
              </button>
              <div className="text-meta mt-1 text-gray-500">
                12px, medium weight
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-h2 mb-4">Usage Examples</h2>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-h3 mb-4">Article Layout Example</h3>
            <div className="article-container">
              <h1 className="text-h1">
                Your First Paycheck: A Complete Guide to Smart Management
              </h1>
              <p className="text-body">
                Welcome to the working world, where your first paycheck marks
                the start of a new chapter full of opportunities and
                responsibilities.
              </p>
              <div className="gam-ad-container bg-gray-200 h-16 flex items-center justify-center">
                <span className="text-gray-500 text-meta">
                  GAM Ad Placement
                </span>
              </div>
              <h2 className="text-h2">Understanding Your Paycheck</h2>
              <p className="text-body">
                Before spending your earnings, take time to understand the
                different components of your paycheck, including gross pay, net
                pay, and various deductions.
              </p>
              <ul className="space-y-1 ml-5 list-disc">
                <li className="text-list">
                  Gross Pay: Your total earnings before any deductions
                </li>
                <li className="text-list">
                  Net Pay: The amount you actually receive after deductions
                </li>
                <li className="text-list">
                  Tax Withholdings: Income taxes withheld by your employer
                </li>
                <li className="text-list">
                  Benefit Deductions: Health insurance, retirement
                  contributions, etc.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CompactFooter />
    </main>
  );
}
