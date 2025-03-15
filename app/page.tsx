"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <motion.section
        className="relative py-24 md:py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://media.topfinanzas.com/images/banner-home.webp)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Welcome to Top Finance
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Where every financial decision expands your world. Choose wisely,
            live fully.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </motion.section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Finance Blog
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-10">
            Expert financial advice, practical tips, and insightful strategies
            to help you make better financial decisions and secure your future.
          </p>

          {/* Featured post */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <motion.div
                className="relative h-64 lg:h-full rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg"
                  alt="Your First Paycheck: A Complete Guide to Smart Management"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 lg:hidden"></div>
                <div className="absolute bottom-0 left-0 p-4 lg:hidden">
                  <Link
                    href="/blog/category/personal-finance"
                    className="text-white bg-blue-600 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors inline-block mb-2"
                  >
                    Personal Finance
                  </Link>
                  <h2 className="text-white text-2xl font-bold">
                    Your First Paycheck: A Complete Guide to Smart Management
                  </h2>
                </div>
              </motion.div>
              <div className="p-6 lg:p-8">
                <div className="hidden lg:block">
                  <Link
                    href="/blog/category/personal-finance"
                    className="text-white bg-blue-600 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors inline-block mb-2"
                  >
                    Personal Finance
                  </Link>
                </div>
                <h2 className="hidden lg:block text-2xl md:text-3xl font-bold mb-4">
                  <Link
                    href="/blog/post/your-first-paycheck"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Your First Paycheck: A Complete Guide to Smart Management
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Welcome to the working world, where your first paycheck marks
                  the start of a new chapter full of opportunities and
                  responsibilities.
                </p>
                <div className="flex items-center mb-4">
                  <Image
                    src="https://media.topfinanzas.com/images/favicon.png"
                    alt="Top Finance"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">Top Finance</div>
                    <div className="text-sm text-gray-500">
                      February 25, 2025 • 6 min read
                    </div>
                  </div>
                </div>
                <Button href="/blog/post/your-first-paycheck" variant="primary">
                  Read Article
                </Button>
              </div>
            </div>
          </div>

          {/* Post categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Link
              href="/blog"
              className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              All Posts
            </Link>
            <Link
              href="/blog/category/personal-finance"
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Personal Finance
            </Link>
            <Link
              href="/blog/category/credit-cards"
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Credit Cards
            </Link>
            <Link
              href="/blog/category/mortgages"
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Mortgages
            </Link>
            <Link
              href="/blog/category/investing"
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Investing
            </Link>
            <Link
              href="/blog/category/budgeting"
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Budgeting
            </Link>
            <button className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors">
              More +
            </button>
          </div>

          {/* Latest articles grid with skyscraper ad */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Square ad instead of skyscraper */}
            <div className="md:col-span-3 flex justify-center">
              <AdPlaceholder
                width={300}
                height={300}
                className="sticky top-24"
              />
            </div>

            {/* Articles in 3-column grid */}
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <Link
                  href="/blog/post/what-is-a-home-mortgage"
                  className="block relative h-48 rounded-t-xl overflow-hidden"
                >
                  <Image
                    src="https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg"
                    alt="What Is a Home Mortgage? Your Complete Guide"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-t-xl"
                  />
                </Link>
                <div className="p-6">
                  <Link
                    href="/blog/category/mortgages"
                    className="text-blue-600 text-xs font-medium hover:underline inline-block mb-2"
                  >
                    Mortgages
                  </Link>
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href="/blog/post/what-is-a-home-mortgage"
                      className="hover:text-blue-600 transition-colors"
                    >
                      What Is a Home Mortgage? Your Complete Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    A comprehensive guide to understanding home mortgages, types
                    of loans, interest rates, and how to get the best deal.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={32}
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <div className="text-sm">
                        <span className="text-gray-900">Top Finance</span>
                        <div className="text-gray-500">February 25, 2025</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">8 min read</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <Link
                  href="/blog/post/what-are-online-loans"
                  className="block relative h-48 rounded-t-xl overflow-hidden"
                >
                  <Image
                    src="https://media.topfinanzas.com/images/generated/1741723547071/sample_0.jpg"
                    alt="What Are Online Loans?: A Key Tool in Personal Finances"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-t-xl"
                  />
                </Link>
                <div className="p-6">
                  <Link
                    href="/blog/category/personal-finance"
                    className="text-blue-600 text-xs font-medium hover:underline inline-block mb-2"
                  >
                    Personal Finance
                  </Link>
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href="/blog/post/what-are-online-loans"
                      className="hover:text-blue-600 transition-colors"
                    >
                      What Are Online Loans?: A Key Tool in Personal Finances
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    In an increasingly digital world, online loans have emerged
                    as a fundamental financial option for many Americans.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={32}
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <div className="text-sm">
                        <span className="text-gray-900">Top Finance</span>
                        <div className="text-gray-500">February 25, 2025</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">5 min read</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <Link
                  href="/blog/post/5-tips-for-choosing-an-online-loan"
                  className="block relative h-48 rounded-t-xl overflow-hidden"
                >
                  <Image
                    src="https://media.topfinanzas.com/images/generated/1741732471632/sample_0.jpg"
                    alt="5 Tips for Choosing an Online Loan: Quick Guide"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-t-xl"
                  />
                </Link>
                <div className="p-6">
                  <Link
                    href="/blog/category/personal-finance"
                    className="text-blue-600 text-xs font-medium hover:underline inline-block mb-2"
                  >
                    Personal Finance
                  </Link>
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href="/blog/post/5-tips-for-choosing-an-online-loan"
                      className="hover:text-blue-600 transition-colors"
                    >
                      5 Tips for Choosing an Online Loan: Quick Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Navigate the world of online loans with confidence using
                    these essential tips to find the best rates and terms.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="https://media.topfinanzas.com/images/favicon.png"
                        alt="Top Finance"
                        width={32}
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <div className="text-sm">
                        <span className="text-gray-900">Top Finance</span>
                        <div className="text-gray-500">February 25, 2025</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">4 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Recommender Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center mb-12 text-secondary">
            Why Choose Our Card Recommender?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Personalized options
              </h3>
              <p className="text-gray-600">
                Get tailored recommendations based on your financial profile and
                needs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                100% free to explore
              </h3>
              <p className="text-gray-600">
                No fees or commitments to browse our recommendations and find
                your perfect match.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Expert guidance
              </h3>
              <p className="text-gray-600">
                Make smarter choices with our data-driven insights and financial
                expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-secondary">
                Finding the right credit card is a key step toward financial
                success
              </h2>

              <p className="mb-4 text-gray-600">
                With our recommender, you'll gain access to tailored suggestions
                that match your needs—helping you save money and build a
                brighter financial future.
              </p>

              <p className="mb-6 text-gray-600">
                Our recommender connects you with tailored options to fit your
                needs. From saving on interest to earning rewards or avoiding
                fees, we make choosing the right card simple and confident.
              </p>

              <Button href="/credit-cards/citi-double-cash" variant="primary">
                Learn how to apply
              </Button>
            </div>

            <div>
              <AdPlaceholder width={300} height={300} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-secondary">FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary">
                How can a low APR benefit me?
              </h3>
              <p className="text-gray-600">
                A low APR means you'll pay less interest on your balance, saving
                you money over time if you carry a balance from month to month.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary">
                What are the perks of a no-annual-fee card?
              </h3>
              <p className="text-gray-600">
                No-annual-fee cards save you money each year and are often ideal
                for occasional users or those building credit.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary">
                How do points and cashback differ?
              </h3>
              <p className="text-gray-600">
                Points can be redeemed for various rewards like travel or
                merchandise, while cashback gives you a percentage of your
                spending back as cash.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary">
                What factors should I consider when choosing a credit card?
              </h3>
              <p className="text-gray-600">
                Consider your spending habits, credit score, fees, interest
                rates, rewards programs, and any additional benefits that align
                with your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-6">Take control of your finances today</h2>

          <p className="mb-8 max-w-2xl mx-auto">
            Find the credit card that fits your needs with our expert guidance.
            We'll help you make informed choices to match your goals and set you
            on the path to a brighter financial future.
          </p>

          <Button
            href="/credit-cards/apply/citi-double-cash"
            variant="secondary"
          >
            Apply now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
