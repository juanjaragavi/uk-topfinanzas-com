import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export function generateMetadata() {
  return {
    title:
      "Lloyds Bank Personal Loan Requirements: Application Guide - Top Finance UK",
    description:
      "Learn about Lloyds Bank Personal Loan eligibility criteria, application process, and required documentation to maximize your chances of approval.",
    keywords:
      "Lloyds Bank Personal Loan requirements, UK loan application, loan eligibility, Lloyds loan criteria, personal loan documentation, loan application process",
  };
}

export default function LloydsBankPersonalLoanRequirementsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for Lloyds Bank Personal Loans
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Lloyds Bank Personal Loans offer competitive rates and flexible
                terms. Understanding the eligibility criteria and application
                requirements is key to a successful application.
              </p>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136062-fotosprestamo-lloyds2uk.webp"
                  alt="Lloyds Bank Personal Loan Requirements"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Basic Eligibility Criteria
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Age requirement:</span>{" "}
                      You must be 18 years or older to apply for a Lloyds Bank
                      Personal Loan.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">UK residency:</span> You
                      must be a UK resident with a permanent UK address. Lloyds
                      Bank typically requires applicants to have been resident
                      in the UK for at least 3 years.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Income requirements:
                      </span>{" "}
                      You need to have a regular annual income of at least
                      £10,000. Lloyds Bank will assess your income against your
                      outgoings to ensure the loan is affordable for you.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Credit history:</span> A
                      good credit history is important for approval and securing
                      the best interest rates. Lloyds Bank will conduct a credit
                      check as part of the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Lloyds Bank customer status:
                      </span>{" "}
                      While not always mandatory, existing Lloyds Bank current
                      account holders may benefit from a simplified application
                      process and potentially preferential rates.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Required Documentation:
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Proof of identity:</span>{" "}
                      A valid passport, UK driving license, or EU identity card
                      is typically required. Existing Lloyds customers may have
                      this step streamlined.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Proof of address:</span>{" "}
                      Recent utility bills, council tax statements, or bank
                      statements (usually dated within the last 3 months) are
                      needed to verify your current address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Income verification:
                      </span>{" "}
                      You may need to provide recent payslips (typically the
                      last 3 months), employment contracts, or tax returns (if
                      self-employed) to confirm your income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Bank account details:
                      </span>{" "}
                      Details of a UK bank account are required for loan
                      disbursement and setting up direct debit repayments.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Lloyds Bank offers a convenient application process, primarily
                  online:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Online Application:</span>{" "}
                      The quickest method is via the Lloyds Bank website or
                      mobile app. The online form is designed for ease of use,
                      guiding you through each section. Existing customers often
                      benefit from pre-filled information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Personalized Quote:</span>{" "}
                      Before submitting a full application, use the Lloyds Bank
                      loan calculator and personalized quote tool. This provides
                      an estimate of your potential rate and monthly payments
                      without affecting your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Decision Time:</span>{" "}
                      Lloyds Bank aims to provide an instant decision for most
                      online applications. If further checks are required, it
                      may take slightly longer.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Funding Speed:</span> Once
                      approved and the loan agreement is electronically signed,
                      funds are typically transferred to your nominated account
                      the next working day.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Loan Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Key terms associated with Lloyds Bank Personal Loans:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      Lloyds Bank's representative APR starts from 3.9% for
                      loans between £7,500 and £25,000. The actual rate offered
                      depends on your creditworthiness, loan amount, and term.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Loan Amounts:</span>{" "}
                      Borrow between £1,000 and £50,000, subject to eligibility
                      and affordability checks.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Repayment Terms:</span>{" "}
                      Choose repayment periods from 1 to 7 years (12 to 84
                      months).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Early Repayment:</span>{" "}
                      Lloyds Bank allows early repayment without charging any
                      fees or penalties, offering excellent flexibility to save
                      on interest.
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Lloyds Bank Personal Loan"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      priority
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Who Is This Loan Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Lloyds Bank Personal Loans are a strong option for various
                  borrowers:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Those seeking flexibility:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  With loan amounts up to £50,000, repayment terms up to 7
                  years, and penalty-free early repayment, Lloyds offers
                  significant flexibility to tailor the loan to individual needs
                  and changing circumstances.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Understanding flexible loan features
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Debt consolidation:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The competitive rates and structured repayment plans make
                  Lloyds loans suitable for consolidating higher-interest debts
                  into a single, potentially lower-cost monthly payment.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/personal-loans-debt-strategy" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Is debt consolidation the right move?
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Existing Lloyds Bank customers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Current account holders may benefit from a faster application
                  process and potentially better rates, making it a convenient
                  option for those already banking with Lloyds.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-rewards-credit-cards" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    The benefits of strong banking relationships
                  </Link>
                </p>

                <div className="my-8">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Lloyds Bank Personal Loan"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      priority
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tips for a Successful Application
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To enhance your chances of approval for a Lloyds Bank Personal
                  Loan:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Check your credit score:
                      </span>{" "}
                      Review your credit report beforehand to ensure accuracy
                      and address any potential issues. A strong credit score is
                      crucial for securing the best rates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Use the eligibility checker:
                      </span>{" "}
                      Utilize the personalized quote tool on the Lloyds Bank
                      website. This gives an indication of your likelihood of
                      approval and potential rate without impacting your credit
                      file.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Be accurate with details:
                      </span>{" "}
                      Ensure all information provided, especially regarding
                      income and existing financial commitments, is accurate and
                      consistent.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Prepare documentation:
                      </span>{" "}
                      Have necessary documents like proof of ID, address, and
                      income ready to speed up the verification process if
                      required.
                    </div>
                  </div>
                </div>

                <div className="text-center my-8">
                  <Link
                    href="https://www.lloydsbank.com/personal-loans.html"
                    target="_blank"
                  >
                    <Button className="bg-[#006A4D] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website
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
