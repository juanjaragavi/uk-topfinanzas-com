import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export function generateMetadata() {
  return {
    title:
      "Monzo Personal Loan Requirements: Neobank Application Guide - Top Finance UK",
    description:
      "Learn about Monzo Personal Loan eligibility criteria, the fully digital application process via the Monzo app, and required information.",
    keywords:
      "Monzo Personal Loan requirements, UK neobank loan application, loan eligibility, Monzo loan criteria, personal loan documentation, Monzo app",
  };
}

export default function MonzoPersonalLoanRequirementsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for Monzo Personal Loans
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Monzo Personal Loans offer a simple, app-based borrowing
                experience. Understanding the eligibility criteria and digital
                application process is key for Monzo users.
              </p>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/barclaycard-avios-plus-requirements.webp"
                  alt="Monzo Personal Loan Requirements"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Basic Eligibility Criteria
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Existing Monzo Customer:
                      </span>{" "}
                      You generally need to have an active Monzo current account
                      to be eligible to apply for a Monzo Personal Loan. Loan
                      availability and terms may depend on your account usage
                      and history.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Age requirement:</span>{" "}
                      You must be at least 18 years old.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">UK residency:</span> You
                      must be a UK resident with a UK address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Income and Affordability:
                      </span>{" "}
                      You need to demonstrate sufficient regular income to
                      afford the loan repayments. Monzo assesses affordability
                      based on your account activity and information provided.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Credit History:</span>{" "}
                      Monzo will perform a credit check. A good credit history
                      improves your chances of approval and securing a favorable
                      rate. Your Monzo account history may also be considered.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Required Information (In-App):
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The application is fully digital within the Monzo app. You'll
                  typically need to provide or confirm:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Loan Amount and Term:
                      </span>{" "}
                      Specify how much you want to borrow and over what period
                      (typically 1-5 years).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Loan Purpose:</span>{" "}
                      Indicate the reason for the loan (e.g., car, home
                      improvements, debt consolidation).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Employment and Income Details:
                      </span>{" "}
                      Confirm your employment status and provide details about
                      your regular income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Affordability Information:
                      </span>{" "}
                      You may need to confirm details about your monthly
                      expenses or existing financial commitments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Consent for Credit Check:
                      </span>{" "}
                      Provide consent for Monzo to perform a credit check with
                      credit reference agencies.
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <Image
                    src="https://media.topfinanzas.com/images/download-5-2.webp"
                    alt="Monzo Personal Loan Application In-App"
                    width={1000}
                    height={563}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Digital Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Monzo's loan application is designed for speed and simplicity
                  within their app:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        In-App Eligibility Check:
                      </span>{" "}
                      Monzo often proactively offers loans to eligible customers
                      within the app. You can also check your eligibility
                      directly in the 'Borrowing' section.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Quick Application Form:
                      </span>{" "}
                      The application form is short and leverages your existing
                      Monzo profile information, making it fast to complete.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Instant Decision (Often):
                      </span>{" "}
                      Monzo uses automated systems to provide a lending decision
                      quickly, often within minutes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Instant Funding (if approved):
                      </span>{" "}
                      Once approved and the digital agreement is signed within
                      the app, funds are typically credited instantly to your
                      Monzo current account.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Loan Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Key terms associated with Monzo Personal Loans:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      Monzo's representative APR typically starts from around
                      4.9%. The actual rate is personalized based on your credit
                      profile and Monzo relationship.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Loan Amounts:</span>{" "}
                      Typically borrow between £1,000 and £25,000, subject to
                      eligibility.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Repayment Terms:</span>{" "}
                      Choose repayment periods usually from 1 to 5 years (12 to
                      60 months).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Early Repayment:</span>{" "}
                      Monzo allows early repayment and overpayments without
                      charging any fees, offering excellent flexibility.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Who Is This Loan Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Monzo Personal Loans are particularly suitable for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Existing Monzo customers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The seamless in-app experience, potential for pre-approved
                  offers, and integration with budgeting tools make it highly
                  convenient for those already using Monzo.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/blog/post/monzo-ecosystem-benefits"
                    className="text-blue-600 underline"
                  >
                    Benefits of the Monzo ecosystem
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Digital natives:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Individuals who prefer managing all their finances through a
                  mobile app and value speed, transparency, and a modern user
                  experience will appreciate Monzo's approach.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/blog/post/neobanks-vs-traditional-banks"
                    className="text-blue-600 underline"
                  >
                    Neobanks vs. Traditional Banks
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Borrowers seeking flexibility:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The penalty-free overpayment option provides significant
                  flexibility for those who might want to pay off their loan
                  faster if their circumstances change.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/blog/post/flexible-loan-repayment"
                    className="text-blue-600 underline"
                  >
                    The advantage of flexible loan repayments
                  </Link>
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tips for a Successful Application
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To enhance your chances of approval for a Monzo Personal Loan:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Use Monzo actively and responsibly:
                      </span>{" "}
                      Regularly using your Monzo account for salary payments and
                      day-to-day spending, while managing it well, may
                      positively influence eligibility.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Check your credit score:
                      </span>{" "}
                      Ensure your credit report is accurate and healthy, as this
                      remains a key factor in Monzo's lending decisions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Keep your Monzo profile updated:
                      </span>{" "}
                      Ensure your personal details, address, and employment
                      information within the Monzo app are current before
                      applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Demonstrate affordability:
                      </span>{" "}
                      Be prepared to confirm income and outgoings. Using Monzo's
                      budgeting tools effectively might help demonstrate
                      responsible financial management.
                    </div>
                  </div>
                </div>

                <div className="text-center my-8">
                  <Link
                    href="https://monzo.com/features/loans/"
                    target="_blank"
                  >
                    <Button className="bg-[#FF4D56] hover:bg-red-500 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website (Check Availability in App)
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
