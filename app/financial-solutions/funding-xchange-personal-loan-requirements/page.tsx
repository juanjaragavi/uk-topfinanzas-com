import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export function generateMetadata() {
  return {
    title:
      "Funding Xchange Process & Eligibility: SME Finance Guide - Top Finance UK",
    description:
      "Learn how the Funding Xchange platform works, general eligibility for UK SMEs, and the information needed to compare business finance options.",
    keywords:
      "Funding Xchange process, SME finance eligibility, business loan comparison requirements, UK business funding criteria, alternative finance platform application",
  };
}

export default function FundingXchangePersonalLoanRequirementsPage() {
  // Note: Adjusting component name and content for Funding Xchange's Business Finance Platform focus
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Using Funding Xchange: Process & Eligibility for SMEs
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Funding Xchange connects UK SMEs with multiple finance
                providers. Understanding their process and general eligibility
                helps businesses leverage the platform effectively.
              </p>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136892-fotosprestamo-fundingchange2uk.jpg"
                  alt="Funding Xchange Process"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  General Eligibility to Use Funding Xchange
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  While specific lender criteria vary, businesses generally need
                  to meet these conditions to effectively use the Funding
                  Xchange platform:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">UK-Based Business:</span>{" "}
                      Your business must be registered and operating primarily
                      within the United Kingdom.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Trading History:</span>{" "}
                      Most lenders require some trading history, often 6-12
                      months minimum, though options for newer businesses might
                      exist. Established businesses (2+ years) typically have
                      more options.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Turnover Level:</span>{" "}
                      While thresholds vary, demonstrating consistent revenue is
                      key. Minimum turnover requirements differ significantly
                      depending on the lender and product type.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Business Structure:</span>{" "}
                      The platform supports Limited Companies, LLPs, Sole
                      Traders, and Partnerships, matching them with appropriate
                      lenders.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Funding Need:</span> You
                      must be seeking finance for a legitimate business purpose
                      (e.g., working capital, growth, asset purchase).
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Information Needed for the Platform:
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To facilitate accurate matching, Funding Xchange typically
                  requires:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Basic Company Details:
                      </span>{" "}
                      Registered name, company number (if applicable), address,
                      industry, years trading.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Funding Requirements:
                      </span>{" "}
                      Amount needed, preferred term, and the specific purpose
                      for the finance.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Financial Snapshot:</span>{" "}
                      Key figures like annual turnover and potentially net
                      profit. More detailed financials (bank statements,
                      accounts) may be requested later by specific lenders.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Director/Owner Information:
                      </span>{" "}
                      Basic personal details for verification and credit checks
                      by lenders.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Consent:</span> Permission
                      to share necessary information with potential lenders on
                      their panel and for credit checks to be performed by those
                      lenders if you proceed.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  How the Funding Xchange Process Works
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Using the Funding Xchange platform typically involves these
                  steps:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">1. Submit Enquiry:</span>{" "}
                      Complete the online form on the Funding Xchange website
                      with your business and funding details. This initial step
                      is quick and doesn't affect your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">2. Smart Matching:</span>{" "}
                      Funding Xchange's technology analyzes your request against
                      the criteria of its lender panel to identify suitable
                      matches.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        3. Compare Indicative Offers:
                      </span>{" "}
                      Receive and review comparable indicative quotes from
                      matched lenders, showing potential rates, terms, and
                      amounts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        4. Lender Application:
                      </span>{" "}
                      Choose the best option(s) and proceed directly to the
                      selected lender's full application process, providing any
                      further documentation they require.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        5. Approval & Funding:
                      </span>{" "}
                      The chosen lender completes their underwriting and, if
                      approved, provides the final loan agreement and disburses
                      the funds.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Types of Finance Accessible
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Funding Xchange connects businesses to a wide array of funding
                  solutions, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700 mb-8">
                  <li>Unsecured Business Loans</li>
                  <li>Secured Business Loans</li>
                  <li>Invoice Finance</li>
                  <li>Asset Finance</li>
                  <li>Revolving Credit Facilities</li>
                  <li>Merchant Cash Advance</li>
                  <li>Property Finance</li>
                  <li>Specialist Sector Finance</li>
                </ul>

                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Who Should Use Funding Xchange?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  This platform is particularly beneficial for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  SMEs wanting to compare the market:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Businesses looking to efficiently survey a wide range of
                  potential lenders and finance products without multiple
                  applications.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/blog/post/importance-of-comparing-finance"
                    className="text-blue-600 underline"
                  >
                    Why comparing business finance is crucial
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Businesses unsure of the best finance type:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The platform can help identify the most suitable type of
                  finance (e.g., loan vs. invoice finance) based on the
                  business's needs and profile.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/blog/post/choosing-right-sme-finance"
                    className="text-blue-600 underline"
                  >
                    Choosing the right type of SME finance
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Companies seeking alternative lenders:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Funding Xchange provides access to a diverse panel including
                  fintechs and specialist lenders who may offer different
                  criteria or products than high-street banks.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/blog/post/navigating-alternative-finance-market"
                    className="text-blue-600 underline"
                  >
                    Navigating the alternative finance market
                  </Link>
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tips for Using Funding Xchange Effectively
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To maximize your success with the platform:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Provide Accurate Data:
                      </span>{" "}
                      The quality of the matches depends on the accuracy of the
                      information you provide about your business and funding
                      needs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Consider Open Banking Linking:
                      </span>{" "}
                      Securely linking your bank accounts can provide richer
                      data for assessment and potentially lead to better, faster
                      offers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Review Indicative Offers Carefully:
                      </span>{" "}
                      Understand that initial offers are indicative. Compare the
                      details (rate, fees, term, security) before deciding which
                      lender(s) to proceed with for a full application.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#008C95] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Be Prepared for Lender Due Diligence:
                      </span>{" "}
                      While Funding Xchange matches you, the chosen lender will
                      conduct their own full underwriting process. Have
                      necessary documentation ready.
                    </div>
                  </div>
                </div>

                <div className="text-center my-8">
                  <Link href="https://fundingxchange.co.uk/" target="_blank">
                    <Button className="bg-[#008C95] hover:bg-teal-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Funding Xchange Website
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
