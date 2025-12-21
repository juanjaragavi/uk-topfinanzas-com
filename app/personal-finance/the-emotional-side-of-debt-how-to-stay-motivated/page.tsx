import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Emotional Side of Debt: How to Stay Motivated | TopFinanzas UK",
  description:
    "Debt isn't just about numbers; it's emotional. Discover practical strategies to overcome debt anxiety, stay motivated, and build a healthier relationship with money.",
  keywords: [
    "personal finance",
    "debt motivation",
    "debt anxiety",
    "financial well-being",
    "money mindset",
    "getting out of debt uk",
    "debt stress",
  ],
};

export default function EmotionalSideOfDebtPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="personal-finance"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              The Emotional Side of Debt: How to Stay Motivated on Your Payoff
              Journey
            </h1>
            {/* Placeholder `<div>` for the Ad Unit 'square01' - centered and responsive */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                When we talk about debt, we usually talk about interest rates,
                APRs, and repayment terms. But anyone who has ever stared at a
                credit card statement with a knot in their stomach knows that
                debt is rarely just a maths problem. It’s deeply emotional.
                Guilt, shame, and anxiety can be far more paralysing than the
                balance itself. This guide explores the psychological side of
                debt and offers practical ways to stay motivated as you work
                towards financial freedom.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/emotional-side-of-debt.webp"
                  alt="Person looking stressed while reviewing financial documents"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Why Debt Feels So Heavy
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  In the UK, money is often a taboo subject. We’re happy to
                  discuss the weather or the football, but tell a friend you’re
                  struggling with an overdraft? Unlikely. This silence breeds
                  shame. You might feel like you’re the only one who’s “bad with
                  money,” but the reality is that millions of Britons carry
                  debt.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The stress of debt triggers our “fight or flight” response.
                  For some, this means frantically working extra hours (fight);
                  for others, it means ignoring the post and hoping it goes away
                  (flight). Recognising these emotional triggers is the first
                  step to breaking the cycle.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Shifting Your Mindset: From Shame to Strategy
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Beating yourself up won’t lower your balance. Instead of
                  dwelling on past decisions, focus on your current trajectory.
                  A helpful reframe is to view your debt repayment not as a
                  punishment for past mistakes, but as a gift to your future
                  self.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you’re just starting out, it’s crucial to have a solid
                  foundation. Our guide on{" "}
                  <Link
                    href="/personal-finance/money-management-for-beginners"
                    className="text-blue-600 hover:underline"
                  >
                    money management for beginners
                  </Link>{" "}
                  can help you establish the basics of budgeting and tracking,
                  which brings a sense of control back to your life.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Practical Ways to Stay Motivated
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Motivation is a finite resource; you can’t rely on willpower
                  alone. You need systems and psychological hacks to keep you
                  going when the novelty wears off.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. Visualise Your Progress
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Humans are visual creatures. Create a “debt thermometer” or
                  chart and colour it in as you make payments. Seeing the
                  balance go down physically can give you a dopamine hit that a
                  digital bank statement simply can’t.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Choose the Right Method for Your Brain
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Mathematically, the “Avalanche” method (paying off the highest
                  interest debt first) saves the most money. However, the
                  “Snowball” method (paying off the smallest balance first)
                  often works better for motivation. Clearing a small debt
                  completely gives you a quick win, proving to yourself that you
                  <i>can</i> do this. For more on structuring your repayments,
                  read about{" "}
                  <Link
                    href="/personal-finance/getting-out-of-debt"
                    className="text-blue-600 hover:underline"
                  >
                    strategies for getting out of debt
                  </Link>
                  .
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Find Your “Why”
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Why do you want to be debt-free? Is it to buy a home? To
                  travel? To sleep better at night? Write down your “why” and
                  keep it somewhere visible. When you’re tempted to overspend,
                  remind yourself of the bigger picture.
                </p>
              </section>

              {/* Placeholder `<div>` for the Ad Unit 'square02' - centered and responsive */}
              <div id="square02" data-topads data-topads-size="square"></div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  When to Seek Help
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Sometimes, willpower isn’t enough. If your debt feels
                  unmanageable, or if you’re borrowing to pay for essentials,
                  it’s time to seek professional advice. In the UK,
                  organisations like StepChange, National Debtline, and Citizens
                  Advice offer free, confidential support. There is no shame in
                  asking for help; it’s one of the bravest steps you can take.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you are considering consolidation as a way to simplify your
                  payments, make sure you understand the terms. You can learn
                  more about how loans work in our guide to{" "}
                  <Link
                    href="/personal-finance/personal-loans-debt-strategy"
                    className="text-blue-600 hover:underline"
                  >
                    personal loans and debt strategy
                  </Link>
                  .
                </p>
              </section>

              <section className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Ready to Take Control?
                </h2>
                <p className="text-gray-700 mb-6 text-sm leading-6">
                  Your financial well-being is about more than just numbers. By
                  addressing the emotional side of debt, you empower yourself to
                  make lasting changes. Start small, be kind to yourself, and
                  keep moving forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/personal-finance/getting-out-of-debt"
                    className="cta-button-blue text-center"
                  >
                    Read Our Debt Guide
                  </Link>
                </div>
              </section>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>
      <CompactFooter />
    </main>
  );
}
