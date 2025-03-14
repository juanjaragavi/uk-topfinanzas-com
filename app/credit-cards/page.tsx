import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import Link from "next/link";

export const metadata = {
  title: "Credit Card Recommender - TopFinanzas",
  description:
    "Find the perfect credit card with our personalized recommendations. Compare options and apply online.",
  keywords:
    "credit cards, card recommender, compare credit cards, apply for credit card, TopFinanzas",
};

export default function CreditCards() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedText as="h1" className="mb-4 text-secondary">
                The Smart Way to Choose a Credit Card
              </AnimatedText>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.1}>
                Ready to take charge of your finances? You may qualify for a
                credit card with the tools and flexibility you need. Here's why
                now is the perfect time to explore your options:
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <Link
                  href="/credit-cards/recommendation"
                  className="btn-primary inline-block"
                >
                  Accept recommendation
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
          <AnimatedText as="h2" className="text-center mb-12 text-secondary">
            Why Choose Our Card Recommender?
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <AnimatedText
                as="h3"
                className="text-xl font-semibold mb-3 text-secondary"
              >
                Personalized options
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Get tailored recommendations based on your financial profile and
                needs.
              </AnimatedText>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <AnimatedText
                as="h3"
                className="text-xl font-semibold mb-3 text-secondary"
              >
                100% free to explore
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                No fees or commitments to browse our recommendations and find
                your perfect match.
              </AnimatedText>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <AnimatedText
                as="h3"
                className="text-xl font-semibold mb-3 text-secondary"
              >
                Expert guidance
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Make smarter choices with our data-driven insights and financial
                expertise.
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedText as="h2" className="mb-6 text-secondary">
                Our Top Pick For You
              </AnimatedText>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <AnimatedImage
                    src="https://media.topfinanzas.com/images/generated/1741732471632/sample_0.jpg"
                    alt="Credit Card"
                    width={320}
                    height={200}
                  />

                  <div>
                    <AnimatedText
                      as="h3"
                      className="text-xl font-semibold mb-2 text-secondary"
                    >
                      Citi Double Cash Credit Card
                    </AnimatedText>

                    <div className="flex items-center mb-3">
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

                    <AnimatedText
                      as="p"
                      className="text-gray-600 mb-4"
                      delay={0.1}
                    >
                      Unlock Financial Freedom with our top-rated card. No
                      Credit Check Required and Flexible Cashback between 1% and
                      20%.
                    </AnimatedText>

                    <AnimatedText delay={0.2}>
                      <Link
                        href="/credit-cards/citi-double-cash"
                        className="btn-primary inline-block"
                      >
                        Find Out More
                      </Link>
                    </AnimatedText>
                  </div>
                </div>
              </div>

              <AnimatedText
                as="h3"
                className="text-xl font-semibold mb-4 text-secondary"
              >
                Requirements for the Citi Double Cash Credit Card
              </AnimatedText>

              <ul className="list-disc pl-5 space-y-2 mb-6">
                <AnimatedText as="div" delay={0.1}>
                  <span className="font-medium">Credit Score:</span> Recommended
                  minimum score of 670
                </AnimatedText>
                <AnimatedText as="div" delay={0.15}>
                  <span className="font-medium">Age Requirement:</span> Must be
                  18 years or older
                </AnimatedText>
                <AnimatedText as="div" delay={0.2}>
                  <span className="font-medium">Social Security Number:</span>{" "}
                  Required for identity verification
                </AnimatedText>
                <AnimatedText as="div" delay={0.25}>
                  <span className="font-medium">Income Documentation:</span>{" "}
                  Proof of income or employment details may be necessary
                </AnimatedText>
              </ul>

              <AnimatedText delay={0.3}>
                <Link
                  href="/credit-cards/apply"
                  className="btn-primary inline-block"
                >
                  Learn how to apply
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
          <AnimatedText as="h2" className="text-center mb-8 text-secondary">
            FAQs
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText
                as="h3"
                className="text-lg font-semibold mb-3 text-secondary"
              >
                How can a low APR benefit me?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                A low APR means you'll pay less interest on your balance, saving
                you money over time if you carry a balance from month to month.
              </AnimatedText>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText
                as="h3"
                className="text-lg font-semibold mb-3 text-secondary"
              >
                What are the perks of a no-annual-fee card?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                No-annual-fee cards save you money each year and are often ideal
                for occasional users or those building credit.
              </AnimatedText>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText
                as="h3"
                className="text-lg font-semibold mb-3 text-secondary"
              >
                How do points and cashback differ?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Points can be redeemed for various rewards like travel or
                merchandise, while cashback gives you a percentage of your
                spending back as cash.
              </AnimatedText>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <AnimatedText
                as="h3"
                className="text-lg font-semibold mb-3 text-secondary"
              >
                What factors should I consider when choosing a credit card?
              </AnimatedText>
              <AnimatedText as="p" className="text-gray-600" delay={0.1}>
                Consider your spending habits, credit score, fees, interest
                rates, rewards programs, and any additional benefits that align
                with your lifestyle.
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText as="h2" className="mb-6">
            Take control of your finances today
          </AnimatedText>

          <AnimatedText as="p" className="mb-8 max-w-2xl mx-auto" delay={0.1}>
            Find the credit card that fits your needs with our expert guidance.
            We'll help you make informed choices to match your goals and set you
            on the path to a brighter financial future.
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link
              href="/credit-cards/apply"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
            >
              Apply now
            </Link>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
}
