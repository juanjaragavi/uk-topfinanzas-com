import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Nationwide Building Society Credit Card: Member Benefits & 0% Offers - Top Finance UK",
    description:
      "Nationwide's Member Credit Card offers two introductory 0% options: up to 24 months on balance transfers or 15 months on purchases. Representative 24.9% APR (variable). Available exclusively to Nationwide members.",
    keywords:
      "Nationwide credit card, building society credit card, 0% balance transfer, 0% purchases, member credit card, balance transfer credit card, purchase credit card UK, Nationwide member benefits",
  };
}

export default function NationwideBuildingSocietyCreditCardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Nationwide Building Society Credit Card: Exclusive Member Benefits
              with Extended 0% Offers
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Nationwide Building Society's Member Credit Card is exclusively
                available to existing customers with a savings account, current
                account, or mortgage, offering two compelling introductory 0%
                interest options designed to help you manage debt or spread the
                cost of larger purchases—all backed by one of the UK's most
                trusted financial institutions.
              </p>

              <div
                id="uk_topfinanzas_3"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Balance Transfers for up to 24 Months:
                    </span>{" "}
                    Transfer existing credit card balances and pay absolutely no
                    interest for up to 24 months, giving you two full years to
                    pay off debt without accumulating additional interest
                    charges.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Purchases for up to 15 Months:
                    </span>{" "}
                    Choose the purchase option and enjoy 0% interest on all new
                    purchases for 15 months, allowing you to spread the cost of
                    essential items or larger investments interest-free.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Section 75 Protection:
                    </span>{" "}
                    All purchases between £100 and £30,000 are protected under
                    Section 75 of the Consumer Credit Act, giving you additional
                    recourse if something goes wrong with a purchase.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Member-Exclusive Product:
                    </span>{" "}
                    Available only to existing Nationwide members with a
                    qualifying account, reflecting the mutual ethos of putting
                    members first with preferential rates and terms.
                  </div>
                </div>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp"
                  alt="Nationwide Building Society Credit Card with 0% balance transfer and purchase options"
                  width={800}
                  height={450}
                  quality={85}
                  className="rounded-lg w-full h-auto shadow-lg"
                  loading="eager"
                  priority
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Two Introductory Offers Tailored to Your Financial Needs
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                Nationwide Building Society understands that different members
                have different financial priorities. That's why their Member
                Credit Card comes with a choice between two compelling
                introductory offers, allowing you to select the option that best
                matches your circumstances.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                Option 1: Purchase and Balance Transfer Credit Card
              </h3>

              <p className="text-md leading-5 text-left mb-4">
                This balanced option is perfect if you need to both transfer
                existing debt and make new purchases. You'll receive 0% interest
                on balance transfers for 15 months and 0% interest on purchases
                for 15 months, providing comprehensive support for managing both
                existing and new credit commitments. Additionally, you'll
                benefit from 0% interest on purchases for 3 months, giving you
                immediate breathing space for essential spending.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                Option 2: Balance Transfer Credit Card
              </h3>

              <p className="text-md leading-5 text-left mb-4">
                If your primary goal is to consolidate and pay off existing
                credit card debt, this option offers an extended 0% interest
                period on balance transfers for 24 months—one of the longest
                available from a UK building society. This extended
                interest-free period means you can focus every penny of your
                monthly payments on reducing the actual debt rather than
                servicing interest charges, potentially saving you hundreds of
                pounds over the introductory period.
              </p>

              <div
                id="uk_topfinanzas_4"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Why Choose a Building Society Credit Card?
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                Unlike traditional banks, Nationwide is a mutual building
                society owned by its members, not shareholders. This fundamental
                difference means that Nationwide can focus on providing value to
                members rather than maximising profits for external investors.
                The Member Credit Card exemplifies this philosophy with
                competitive introductory rates, transparent terms, and no hidden
                fees that might surprise you down the line.
              </p>

              <p className="text-md leading-5 text-left mb-4">
                Nationwide's commitment to responsible lending is reflected in
                their credit card offering. The application process includes
                thorough affordability checks to ensure that credit is only
                extended to members who can comfortably manage repayments. This
                approach protects both the member and the mutual, ensuring
                long-term financial sustainability for all involved.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Additional Features and Card Benefits
              </h2>

              <div className="bg-gray-50 border-l-4 border-[#011546] p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                  Commission-Free Spending Abroad
                </h3>
                <p className="text-md leading-5 text-left mb-3">
                  Some Nationwide credit cards offer commission-free spending
                  abroad, meaning you won't be charged for using your card
                  internationally for purchases. However, be aware that cash
                  withdrawals may still incur fees, so it's best to check your
                  specific terms before travelling.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                  Build Your Credit Score
                </h3>
                <p className="text-md leading-5 text-left mb-3">
                  Using your Nationwide credit card responsibly and paying off
                  your balance on time each month can help you build a positive
                  credit history. A higher credit score can improve your chances
                  of being accepted for mortgages, loans, and other financial
                  products in the future.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                  Emergency Financial Safety Net
                </h3>
                <p className="text-md leading-5 text-left">
                  Having a credit card available provides a financial cushion
                  for unexpected expenses or emergencies. Whether it's an urgent
                  home repair or an unexpected medical expense, your Nationwide
                  credit card can help you cover costs quickly when you need it
                  most.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Understanding Costs and Interest Rates
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                After your introductory 0% period ends, the standard variable
                purchase rate of 24.9% APR applies to any outstanding balance.
                This representative rate is typical for UK credit cards and
                applies to most approved applicants, though your specific rate
                may vary based on your individual credit assessment.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                  Representative Example
                </h3>
                <p className="text-md leading-5 text-left">
                  <strong>24.9% APR representative (variable).</strong> Based on
                  an assumed credit limit of £1,200 and a purchase rate of 24.9%
                  p.a. (variable).
                </p>
              </div>

              <p className="text-md leading-5 text-left mb-4">
                It's important to understand that if you don't pay off your
                balance in full each month after the introductory period, you'll
                be charged interest on the outstanding amount. To avoid these
                charges, aim to pay off your balance in full each month, or at
                the very least, pay substantially more than the minimum payment
                to reduce the overall interest you'll pay.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Using Your Credit Card Responsibly
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                Nationwide Building Society is committed to responsible lending
                and encourages all members to use credit cards wisely. Before
                deciding whether to pay off your balance in full each month or
                spread payments over a longer period, carefully consider your
                financial situation and ability to make repayments.
              </p>

              <p className="text-md leading-5 text-left mb-4">
                Here are some key tips for using your Nationwide credit card
                responsibly:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-md leading-5 text-left">
                <li>
                  <strong>Understand the terms, fees, and charges</strong>{" "}
                  before you apply and use your card. Read all documentation
                  carefully.
                </li>
                <li>
                  <strong>Pay your credit card bill on time</strong> every month
                  to avoid late payment fees and negative impacts on your credit
                  score.
                </li>
                <li>
                  <strong>Pay more than the minimum</strong> whenever possible
                  to reduce the overall interest you'll pay and clear your
                  balance faster.
                </li>
                <li>
                  <strong>Keep your balance manageable</strong> by only charging
                  what you can comfortably afford to pay off each month.
                </li>
                <li>
                  <strong>Set up payment reminders</strong> or direct debits to
                  ensure you never miss a payment and to help you stay on top of
                  your spending.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Is the Nationwide Credit Card Right for You?
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                The Nationwide Building Society Member Credit Card is an
                excellent choice if you're an existing Nationwide member looking
                for competitive introductory 0% offers backed by one of the UK's
                most trusted financial institutions. It's particularly suitable
                for:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-md leading-5 text-left">
                <li>
                  Existing Nationwide members with a savings account, current
                  account, or mortgage who want to consolidate high-interest
                  debt through balance transfers
                </li>
                <li>
                  Members who need extended interest-free periods to spread the
                  cost of essential purchases or larger investments
                </li>
                <li>
                  Customers who value the mutual ethos and member-focused
                  approach of a building society over traditional banks
                </li>
                <li>
                  Those seeking the additional security and protection of
                  Section 75 coverage on eligible purchases
                </li>
                <li>
                  Responsible borrowers who can commit to making regular
                  payments and clearing their balance within the introductory
                  period
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left flex items-center">
                  <svg
                    className="size-6 mr-2 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Important Information
                </h3>
                <p className="text-md leading-5 text-left">
                  Credit cards should be used responsibly. You must be 18 or
                  over and a UK resident to apply. Credit is subject to status
                  and affordability assessments. Nationwide Building Society
                  will conduct thorough checks before approving your
                  application. Missing payments or going over your credit limit
                  can negatively impact your credit score and may result in
                  additional charges.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Related Guides and Resources
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                To help you make the most informed decision about credit cards
                and managing your finances, explore these helpful resources:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Link
                  href="/personal-finance/credit-card-types-benefits"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-[#011546] hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Understanding Credit Card Types
                  </h3>
                  <p className="text-sm text-gray-600 text-left">
                    Learn about different types of credit cards and their
                    benefits to find the right one for your needs.
                  </p>
                </Link>

                <Link
                  href="/personal-finance/understanding-credit-card-interest-rates"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-[#011546] hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Credit Card Interest Rates Explained
                  </h3>
                  <p className="text-sm text-gray-600 text-left">
                    Understand how APR works and what it means for your credit
                    card balance.
                  </p>
                </Link>

                <Link
                  href="/personal-finance/top-credit-cards-0-intro-apr"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-[#011546] hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Best 0% Intro APR Credit Cards
                  </h3>
                  <p className="text-sm text-gray-600 text-left">
                    Compare the top 0% introductory offer credit cards in the UK
                    market.
                  </p>
                </Link>

                <Link
                  href="/personal-finance/getting-out-of-debt"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-[#011546] hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Debt Management Strategies
                  </h3>
                  <p className="text-sm text-gray-600 text-left">
                    Discover practical strategies for getting out of debt and
                    improving your financial health.
                  </p>
                </Link>
              </div>

              <div className="mt-8 p-6 bg-[#011546] text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-left">
                  Ready to Apply for the Nationwide Credit Card?
                </h3>
                <p className="mb-4 text-left">
                  Before applying, make sure you understand all the eligibility
                  requirements, costs, and terms. Review the requirements page
                  to ensure you meet all the necessary criteria.
                </p>
                <Link href="/financial-solutions/nationwide-building-society-credit-card-requirements">
                  <Button className="bg-white text-[#011546] hover:bg-gray-100 font-semibold px-6 py-3">
                    View Eligibility Requirements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
      <AIContentDisclaimer />
    </main>
  );
}
