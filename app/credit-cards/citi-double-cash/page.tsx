import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Citi Double Cash Credit Card - TopFinanzas",
  description:
    "Learn about the Citi Double Cash Credit Card benefits, requirements, and application process. Earn cash back on every purchase.",
  keywords:
    "Citi Double Cash, credit card, cash back rewards, no annual fee, balance transfer, TopFinanzas",
};

export default function CitiDoubleCashCard() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedText as="h1" className="mb-4 text-secondary">
                Citi Double Cash Credit Card
              </AnimatedText>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.1}>
                A card valued for its cash-back rewards, offering earnings on
                every purchase with no annual fee.
              </AnimatedText>

              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  4.7 (2,120 reviews)
                </span>
              </div>

              <AnimatedText delay={0.2}>
                <Button
                  href="/credit-cards/apply/citi-double-cash"
                  variant="primary"
                >
                  Apply Now
                </Button>
              </AnimatedText>
            </div>

            <div className="flex justify-center">
              <AnimatedImage
                src="/placeholder.svg?height=300&width=480"
                alt="Citi Double Cash Credit Card"
                width={480}
                height={300}
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText as="h2" className="text-center mb-12 text-secondary">
            Requirements for the Citi Double Cash Credit Card
          </AnimatedText>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <AnimatedText
                  as="h3"
                  className="text-xl font-semibold mb-4 text-secondary"
                >
                  Eligibility Criteria
                </AnimatedText>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AnimatedText as="div" delay={0.1}>
                      <div className="flex items-start">
                        <span className="bg-primary text-white p-1 rounded-full mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium">Credit Score:</span> A
                          good credit score of at least 670 is generally
                          recommended.
                        </div>
                      </div>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" delay={0.15}>
                      <div className="flex items-start">
                        <span className="bg-primary text-white p-1 rounded-full mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium">Age Requirement:</span>{" "}
                          Applicants should be 18 years or older.
                        </div>
                      </div>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" delay={0.2}>
                      <div className="flex items-start">
                        <span className="bg-primary text-white p-1 rounded-full mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium">
                            Social Security Number:
                          </span>{" "}
                          Required for identity verification.
                        </div>
                      </div>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" delay={0.25}>
                      <div className="flex items-start">
                        <span className="bg-primary text-white p-1 rounded-full mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium">
                            Income Documentation:
                          </span>{" "}
                          Proof of income or employment details is often
                          necessary.
                        </div>
                      </div>
                    </AnimatedText>
                  </li>
                </ul>
              </div>

              <div>
                <AnimatedImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="Credit Card Requirements"
                  width={400}
                  height={300}
                  delay={0.3}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedText as="h2" className="mb-8 text-secondary">
                How to apply for the Citi Double Cash Credit Card
              </AnimatedText>

              <div className="space-y-6">
                <AnimatedText
                  as="div"
                  className="bg-white p-6 rounded-lg shadow-sm"
                  delay={0.1}
                >
                  <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </span>
                    Visit Citi's official website
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Navigate to Citi's website and locate the Double Cash Card
                    application page.
                  </p>
                </AnimatedText>

                <AnimatedText
                  as="div"
                  className="bg-white p-6 rounded-lg shadow-sm"
                  delay={0.2}
                >
                  <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </span>
                    Provide personal details
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Complete fields for name, address, date of birth, and SSN.
                  </p>
                </AnimatedText>

                <AnimatedText
                  as="div"
                  className="bg-white p-6 rounded-lg shadow-sm"
                  delay={0.3}
                >
                  <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </span>
                    Income verification
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Submit income details as requested to confirm eligibility
                    and determine credit limits.
                  </p>
                </AnimatedText>

                <AnimatedText
                  as="div"
                  className="bg-white p-6 rounded-lg shadow-sm"
                  delay={0.4}
                >
                  <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </span>
                    Review terms
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Carefully review the terms and conditions, including
                    interest rates, fees, and rewards program details.
                  </p>
                </AnimatedText>

                <AnimatedText
                  as="div"
                  className="bg-white p-6 rounded-lg shadow-sm"
                  delay={0.5}
                >
                  <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      5
                    </span>
                    Submit the application
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Once all information is confirmed, submit the application
                    for an immediate decision.
                  </p>
                </AnimatedText>
              </div>

              <AnimatedText delay={0.6} className="mt-8">
                <Button
                  href="/credit-cards/apply/citi-double-cash"
                  variant="primary"
                >
                  Start Application
                </Button>
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
          <AnimatedText as="h2" className="text-center mb-12 text-secondary">
            Benefits of the Citi Double Cash Credit Card
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedText
              as="div"
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              delay={0.1}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Straightforward Cash-Back rewards
              </h3>
              <p className="text-gray-600">
                With the Citi Double Cash Card, earn 1% cash back when you buy
                and another 1% when you pay off purchases. This unique structure
                encourages timely payments and offers cash-back simplicity.
              </p>
            </AnimatedText>

            <AnimatedText
              as="div"
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              delay={0.2}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                No annual fee
              </h3>
              <p className="text-gray-600">
                With no annual fee, you can maximize rewards without worrying
                about costs. This feature makes it an accessible option for a
                range of users.
              </p>
            </AnimatedText>

            <AnimatedText
              as="div"
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              delay={0.3}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Versatile redemption options
              </h3>
              <p className="text-gray-600">
                Redeem cash-back rewards as statement credits, deposits, or
                checks, providing flexibility to suit different needs.
              </p>
            </AnimatedText>

            <AnimatedText
              as="div"
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              delay={0.4}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Balance transfer feature
              </h3>
              <p className="text-gray-600">
                Citi offers an introductory APR on balance transfers, which can
                be useful for consolidating debt. Keep in mind, however, that
                transfer fees may apply.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText as="h2" className="mb-6">
            Ready to enjoy these benefits?
          </AnimatedText>

          <AnimatedText as="p" className="mb-8 max-w-2xl mx-auto" delay={0.1}>
            Apply for the Citi Double Cash Credit Card today and start earning
            cash back on every purchase. Our simple application process takes
            just minutes to complete.
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Button
              href="/credit-cards/apply/citi-double-cash"
              variant="secondary"
            >
              Apply Now
            </Button>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
}
