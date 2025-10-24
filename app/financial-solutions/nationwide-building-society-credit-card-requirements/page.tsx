import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Nationwide Building Society Credit Card Requirements: Eligibility & Application Guide - Top Finance UK",
    description:
      "Learn about Nationwide credit card eligibility requirements, income criteria, documentation needed, and the application process. Member-exclusive access required. Representative 24.9% APR (variable).",
    keywords:
      "Nationwide credit card requirements, Nationwide member credit card eligibility, credit card application UK, Nationwide customer requirements, building society credit card criteria, credit score requirements",
  };
}

export default function NationwideBuildingSocietyCreditCardRequirementsPage() {
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
              Nationwide Building Society Credit Card Requirements: Complete
              Eligibility Guide
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Nationwide Building Society Member Credit Card is
                exclusively available to existing Nationwide members, offering
                competitive 0% introductory periods to help you manage debt or
                spread purchase costs. Understanding the eligibility
                requirements and application process will help you prepare a
                successful application.
              </p>

              <div
                id="uk_topfinanzas_3"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Essential Eligibility Criteria
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                To qualify for the Nationwide Building Society Member Credit
                Card, you must meet several key requirements. Nationwide, as a
                mutual building society, prioritises responsible lending and
                conducts thorough assessments to ensure credit is only extended
                to members who can comfortably afford repayments.
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-[#011546] pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2 text-left">
                    Age Requirement
                  </h3>
                  <p className="text-md leading-5 text-left">
                    You must be <strong>18 years or older</strong> to apply for
                    a credit card in the UK. This is a legal requirement that
                    applies to all credit products. If you're under 18,
                    Nationwide offers alternative youth banking products through
                    FlexOne accounts.
                  </p>
                </div>

                <div className="border-l-4 border-[#011546] pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2 text-left">
                    Residency Status
                  </h3>
                  <p className="text-md leading-5 text-left">
                    Applicants must be <strong>UK residents</strong> with a
                    permanent UK address. Nationwide will verify your address
                    through credit reference checks and may request proof of
                    residency such as utility bills or council tax statements.
                  </p>
                </div>

                <div className="border-l-4 border-[#011546] pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2 text-left">
                    Existing Nationwide Membership
                  </h3>
                  <p className="text-md leading-5 text-left">
                    This is the unique requirement for this card: you must
                    already be a Nationwide member with at least one of the
                    following:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-md leading-5 text-left">
                    <li>A Nationwide savings account</li>
                    <li>A Nationwide current account</li>
                    <li>A Nationwide mortgage</li>
                  </ul>
                  <p className="text-md leading-5 text-left mt-2">
                    If you're not yet a Nationwide member, you'll need to open a
                    qualifying account before applying for the credit card.
                  </p>
                </div>

                <div className="border-l-4 border-[#011546] pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2 text-left">
                    Credit History Assessment
                  </h3>
                  <p className="text-md leading-5 text-left">
                    Nationwide will assess your credit history to determine your
                    creditworthiness. While they don't publish a specific
                    minimum credit score, successful applicants typically have:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-md leading-5 text-left">
                    <li>A positive credit history with no recent defaults</li>
                    <li>No County Court Judgements (CCJs) in recent years</li>
                    <li>
                      No Individual Voluntary Arrangements (IVAs) or bankruptcy
                      on their record
                    </li>
                    <li>
                      A track record of making timely payments on existing
                      credit commitments
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#011546] pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2 text-left">
                    Income and Affordability
                  </h3>
                  <p className="text-md leading-5 text-left">
                    You must have a <strong>regular income</strong> that
                    demonstrates you can afford monthly credit card repayments
                    alongside your other financial commitments. Nationwide
                    accepts income from various sources including employment,
                    self-employment, pensions, and benefits. During the
                    application, you'll need to provide details about:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-md leading-5 text-left">
                    <li>Your annual gross income</li>
                    <li>Employment status and occupation</li>
                    <li>Monthly housing costs (rent or mortgage)</li>
                    <li>Other financial commitments and existing debts</li>
                  </ul>
                </div>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card-requirements.webp"
                  alt="Nationwide Building Society credit card application requirements and eligibility criteria"
                  width={800}
                  height={450}
                  quality={85}
                  className="rounded-lg w-full h-auto shadow-lg"
                  loading="lazy"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Required Documentation
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                When applying for the Nationwide credit card, you'll need to
                provide various documents to verify your identity, address, and
                financial situation. Having these documents ready before you
                start your application will help streamline the process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <svg
                      className="size-8 text-[#011546] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800 text-left">
                      Personal Information
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 text-left">
                    <li>• Full legal name</li>
                    <li>• Date of birth</li>
                    <li>• Current UK address</li>
                    <li>• Previous addresses (last 3 years)</li>
                    <li>• Contact telephone number</li>
                    <li>• Email address</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <svg
                      className="size-8 text-[#011546] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800 text-left">
                      Financial Information
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 text-left">
                    <li>• Annual gross income</li>
                    <li>• Employment status</li>
                    <li>• Occupation and employer name</li>
                    <li>• Monthly housing costs</li>
                    <li>• Existing credit commitments</li>
                    <li>• Other regular outgoings</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <svg
                      className="size-8 text-[#011546] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-800 text-left">
                      Nationwide Account Details
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 text-left">
                    <li>• Nationwide account number</li>
                    <li>• Sort code</li>
                    <li>• Type of account held</li>
                    <li>• Length of membership</li>
                    <li>• Account status</li>
                  </ul>
                </div>
              </div>

              <div
                id="uk_topfinanzas_4"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Understanding Costs and APR
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                The Nationwide Building Society Member Credit Card comes with
                competitive interest rates and transparent fee structures. It's
                essential to understand all associated costs before applying to
                ensure the card fits your financial circumstances.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                  Representative APR
                </h3>
                <p className="text-md leading-5 text-left mb-3">
                  <strong>24.9% APR representative (variable)</strong>
                </p>
                <p className="text-md leading-5 text-left mb-3">
                  Based on an assumed credit limit of £1,200 and a purchase rate
                  of 24.9% p.a. (variable). This representative rate applies to
                  most approved applicants, though your specific rate may vary
                  based on your individual credit assessment.
                </p>
                <p className="text-sm text-gray-700 text-left">
                  The 24.9% APR only applies after your introductory 0% period
                  ends. During the introductory period (either 15 or 24 months
                  depending on your chosen option), you'll pay 0% interest on
                  qualifying transactions.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-left">
                    Balance Transfer Fee
                  </h4>
                  <p className="text-md leading-5 text-left">
                    A balance transfer fee applies when you transfer debt from
                    another credit card. Check your specific card terms for the
                    exact percentage, which is typically calculated as a
                    percentage of the amount transferred. This fee is added to
                    your balance and is included in your 0% introductory offer.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-left">
                    Late Payment Charges
                  </h4>
                  <p className="text-md leading-5 text-left">
                    Missing your monthly minimum payment or paying late can
                    result in late payment fees and may negatively impact your
                    credit score. Nationwide strongly encourages setting up
                    Direct Debit payments to avoid these charges.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-left">
                    Cash Withdrawal Fees
                  </h4>
                  <p className="text-md leading-5 text-left">
                    Using your credit card to withdraw cash from ATMs or over
                    the counter incurs both a cash advance fee and interest from
                    the day of the withdrawal. This is one of the most expensive
                    ways to use your credit card and should be avoided whenever
                    possible.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-left">
                    Over-Limit Fees
                  </h4>
                  <p className="text-md leading-5 text-left">
                    Exceeding your agreed credit limit may result in fees and
                    could negatively affect your credit score. Nationwide may
                    decline transactions that would take you over your limit to
                    protect you from these charges.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Key Benefits Summary
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                Before applying, it's helpful to review the key benefits that
                come with the Nationwide Building Society Member Credit Card:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="size-6 text-[#011546] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Extended 0% Period
                    </h4>
                    <p className="text-sm text-gray-700">
                      Up to 24 months 0% on balance transfers or 15 months on
                      purchases and transfers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="size-6 text-[#011546] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Section 75 Protection
                    </h4>
                    <p className="text-sm text-gray-700">
                      Purchases £100-£30,000 protected under Consumer Credit Act
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="size-6 text-[#011546] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Member-Only Access
                    </h4>
                    <p className="text-sm text-gray-700">
                      Exclusive to Nationwide members with qualifying accounts
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="size-6 text-[#011546] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Credit Building
                    </h4>
                    <p className="text-sm text-gray-700">
                      Responsible use helps improve your credit score over time
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="size-6 text-[#011546] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Emergency Coverage
                    </h4>
                    <p className="text-sm text-gray-700">
                      Provides financial safety net for unexpected expenses
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="size-6 text-[#011546] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Mutual Values
                    </h4>
                    <p className="text-sm text-gray-700">
                      Backed by member-owned building society ethos
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                The Application Process
              </h2>

              <p className="text-md leading-5 text-left mb-4">
                Applying for the Nationwide Building Society Member Credit Card
                is straightforward, especially if you're already managing your
                accounts through Nationwide's Internet Banking or Mobile Banking
                app. Here's what to expect:
              </p>

              <div className="space-y-6 my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center size-12 rounded-full bg-[#011546] text-white font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Verify Your Membership
                    </h3>
                    <p className="text-md leading-5 text-left text-gray-700">
                      Ensure you have an active Nationwide savings account,
                      current account, or mortgage. If you don't have one,
                      you'll need to open a qualifying account first before you
                      can apply for the credit card.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center size-12 rounded-full bg-[#011546] text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Choose Your Card Option
                    </h3>
                    <p className="text-md leading-5 text-left text-gray-700">
                      Decide which introductory offer suits your needs: the
                      Purchase and Balance Transfer option (15 months 0% on
                      both) or the Balance Transfer option (24 months 0% on
                      transfers, 3 months on purchases). Consider your primary
                      goal—debt consolidation or spreading purchase costs.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center size-12 rounded-full bg-[#011546] text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Complete the Online Application
                    </h3>
                    <p className="text-md leading-5 text-left text-gray-700">
                      Fill out the application form through Nationwide's website
                      or mobile app. You'll need to provide personal details,
                      financial information, employment status, and details
                      about your income and outgoings. The form typically takes
                      10-15 minutes to complete.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center size-12 rounded-full bg-[#011546] text-white font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Credit Assessment
                    </h3>
                    <p className="text-md leading-5 text-left text-gray-700">
                      Nationwide will perform a credit check with one or more
                      credit reference agencies. They'll assess your credit
                      history, current commitments, and affordability. This
                      credit check will leave a 'hard search' footprint on your
                      credit file, which is visible to other lenders for 12
                      months.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center size-12 rounded-full bg-[#011546] text-white font-bold text-xl">
                      5
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Receive Your Decision
                    </h3>
                    <p className="text-md leading-5 text-left text-gray-700">
                      In many cases, you'll receive an instant decision online.
                      If Nationwide needs additional information or time to
                      assess your application, they'll contact you within a few
                      working days. Approved applicants will be notified of
                      their credit limit and can expect to receive their card
                      within 7-10 working days.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center size-12 rounded-full bg-[#011546] text-white font-bold text-xl">
                      6
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Activate and Start Using
                    </h3>
                    <p className="text-md leading-5 text-left text-gray-700">
                      Once your card arrives, activate it through the Nationwide
                      Banking app, online, or by calling the activation number.
                      Set up a PIN, and you're ready to start using your card.
                      If you've opted for balance transfers, initiate these as
                      soon as possible to maximise your 0% interest period.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-left">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Can I apply if I'm not currently a Nationwide member?
                  </h3>
                  <p className="text-md leading-5 text-left text-gray-700">
                    No, the Member Credit Card is exclusively available to
                    existing Nationwide members. You'll need to open a
                    Nationwide savings account, current account, or mortgage
                    before applying for this credit card. Opening a basic
                    savings account can be done quickly online and will make you
                    eligible to apply.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    What credit score do I need to be approved?
                  </h3>
                  <p className="text-md leading-5 text-left text-gray-700">
                    Nationwide doesn't publish a specific minimum credit score
                    requirement. However, successful applicants typically have a
                    good credit history with no recent defaults, CCJs, or
                    bankruptcy records. If you're unsure about your credit
                    status, consider checking your credit report with Experian,
                    Equifax, or TransUnion before applying.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    How long does the application process take?
                  </h3>
                  <p className="text-md leading-5 text-left text-gray-700">
                    Many applicants receive an instant decision when applying
                    online. If Nationwide needs additional time to assess your
                    application, you should hear back within 3-5 working days.
                    If approved, your card will typically arrive within 7-10
                    working days of approval.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Can I switch between the two card options after approval?
                  </h3>
                  <p className="text-md leading-5 text-left text-gray-700">
                    Once you've been approved for a specific card option, you
                    typically cannot switch to the other option without applying
                    for a new card. It's important to carefully consider which
                    option best suits your needs before applying.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    What happens if my application is declined?
                  </h3>
                  <p className="text-md leading-5 text-left text-gray-700">
                    If your application is declined, Nationwide will send you a
                    letter explaining the reasons. You can contact them to
                    discuss the decision or work on improving your credit
                    profile before reapplying in the future. Remember that the
                    credit check will remain on your credit file for 12 months,
                    so multiple applications in quick succession can negatively
                    impact your credit score.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Is there an annual fee for this credit card?
                  </h3>
                  <p className="text-md leading-5 text-left text-gray-700">
                    No, the Nationwide Building Society Member Credit Card does
                    not charge an annual fee. You'll only pay interest (after
                    the introductory 0% period ends) if you carry a balance,
                    plus any applicable fees such as balance transfer fees or
                    late payment charges if you miss payments.
                  </p>
                </div>
              </div>

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
                  Important Reminders
                </h3>
                <ul className="space-y-2 text-md leading-5 text-left">
                  <li>
                    • Credit is subject to status and affordability assessments
                  </li>
                  <li>• You must be 18 or over and a UK resident to apply</li>
                  <li>
                    • Missing payments can seriously harm your credit rating and
                    result in additional charges
                  </li>
                  <li>
                    • Nationwide is a member of the Financial Services
                    Compensation Scheme (FSCS)
                  </li>
                  <li>
                    • Representative 24.9% APR (variable) applies after
                    introductory period
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-[#011546] text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-left">
                  Ready to Learn More About the Benefits?
                </h3>
                <p className="mb-4 text-left">
                  Now that you understand the requirements, explore the full
                  benefits of the Nationwide Building Society Member Credit
                  Card, including extended 0% periods and Section 75 protection.
                </p>
                <Link href="/financial-solutions/nationwide-building-society-credit-card">
                  <Button className="bg-white text-[#011546] hover:bg-gray-100 font-semibold px-6 py-3">
                    View Card Benefits & Features
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
