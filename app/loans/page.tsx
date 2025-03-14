import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedText } from "@/components/ui/animated-text"
import { AdPlaceholder } from "@/components/ui/ad-placeholder"
import Link from "next/link"

export const metadata = {
  title: "Personal Loans - TopFinanzas",
  description:
    "Apply for personal loans with competitive rates. Fast approval and flexible terms to meet your financial needs.",
  keywords: "personal loans, loan application, debt consolidation, emergency loans, TopFinanzas",
}

export default function Loans() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedText as="h1" className="mb-4 text-secondary">
                Personal Loans Made Simple
              </AnimatedText>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.1}>
                Get the funds you need with competitive rates and flexible terms. Our streamlined application process
                makes it easy to get approved quickly.
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <Link
                  href="/loans/apply"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md transition-colors duration-200"
                >
                  Apply Now
                </Link>
              </AnimatedText>
            </div>

            <div className="flex justify-center">
              <AdPlaceholder width={500} height={400} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText as="h2" className="text-center mb-12 text-gray-900 font-bold">
            How to Apply for a Personal Loan
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">
                1
              </div>
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Provide personal details
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Fill in your name, address, date of birth, and Social Security Number (SSN).
              </AnimatedText>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">
                2
              </div>
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Income verification
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Submit income details to confirm eligibility and determine credit limits.
              </AnimatedText>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">
                3
              </div>
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Review terms
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Carefully review the terms and conditions, including interest rates and fees.
              </AnimatedText>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">
                4
              </div>
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Submit application
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                After all information is filled out, submit the application for an immediate decision.
              </AnimatedText>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">
                5
              </div>
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Receive funds
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Once approved, funds are typically deposited into your account within 1-3 business days.
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedText as="h2" className="mb-6 text-gray-900 font-bold">
                UNLOCK YOUR PATH TO DEBT FREEDOM
              </AnimatedText>

              <AnimatedText as="p" className="mb-4 text-gray-600" delay={0.1}>
                Personal loans offer a smart solution for consolidating high-interest debt, financing major purchases,
                or covering unexpected expenses. Here's why they might be right for you:
              </AnimatedText>

              <ul className="list-disc pl-5 space-y-3 mb-6 bg-white rounded-lg p-6 shadow-sm">
                <AnimatedText as="li" delay={0.15}>
                  <span className="font-medium text-primary">Lower interest rates</span>{" "}
                  <span className="text-gray-700">than most credit cards, saving you money over time</span>
                </AnimatedText>

                <AnimatedText as="li" delay={0.2}>
                  <span className="font-medium text-primary">Fixed monthly payments</span>{" "}
                  <span className="text-gray-700">make budgeting easier and more predictable</span>
                </AnimatedText>

                <AnimatedText as="li" delay={0.25}>
                  <span className="font-medium text-primary">Flexible loan amounts</span>{" "}
                  <span className="text-gray-700">from $1,000 to $50,000 to meet your specific needs</span>
                </AnimatedText>

                <AnimatedText as="li" delay={0.3}>
                  <span className="font-medium text-primary">Quick funding</span>{" "}
                  <span className="text-gray-700">with money in your account as soon as the next business day</span>
                </AnimatedText>

                <AnimatedText as="li" delay={0.35}>
                  <span className="font-medium text-primary">No collateral required</span>{" "}
                  <span className="text-gray-700">for unsecured personal loans</span>
                </AnimatedText>
              </ul>

              <AnimatedText delay={0.4}>
                <Link
                  href="/loans/apply"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md transition-colors duration-200"
                >
                  TAKE CONTROL TODAY!
                </Link>
              </AnimatedText>
            </div>

            <div>
              <AdPlaceholder width={300} height={600} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText as="h2" className="text-center mb-8 text-gray-900 font-bold">
            Common Questions About Personal Loans
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                What can I use a personal loan for?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Personal loans can be used for almost anything, including debt consolidation, home improvements, major
                purchases, medical expenses, or unexpected emergencies.
              </AnimatedText>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                How long does approval take?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Many applications receive an instant decision. In some cases, additional verification may be needed,
                which can take 1-3 business days.
              </AnimatedText>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Will applying affect my credit score?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                When you check your rate, we perform a soft credit pull that doesn't affect your score. A hard credit
                check is only performed if you proceed with a full application.
              </AnimatedText>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText as="h3" className="text-lg font-semibold mb-3 text-secondary">
                Are there any fees?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Some lenders charge origination fees (typically 1-8% of the loan amount) or late payment fees. We always
                disclose all fees upfront before you commit.
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText as="h2" className="mb-6">
            Ready to take the next step?
          </AnimatedText>

          <AnimatedText as="p" className="mb-8 max-w-2xl mx-auto" delay={0.1}>
            Our simple application takes just minutes to complete, and you could have funds in your account as soon as
            tomorrow. There's no obligation to check your rate.
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link
              href="/loans/apply"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
            >
              Check my rate
            </Link>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  )
}

