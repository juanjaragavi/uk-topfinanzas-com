import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { Ad } from "@/components/ui/ad";
import { CreditCardApplicationForm } from "@/components/forms/credit-card-application-form";

export const metadata = {
  title: "Apply for Citi Double Cash Card - TopFinanzas",
  description:
    "Apply for the Citi Double Cash Card online. Earn up to 2% cash back on every purchase with no annual fee.",
  keywords:
    "Citi Double Cash Card, credit card application, 2% cash back, no annual fee, TopFinanzas",
};

export default function ApplyCitiDoubleCash() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText as="h1" className="text-center mb-6 text-secondary">
            Citi Double Cash Card Application
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-center mb-12 text-gray-600 max-w-3xl mx-auto"
            delay={0.1}
          >
            Apply for the Citi Double Cash Card today and start earning up to 2%
            cash back on every purchase: 1% when you buy, 1% when you pay.
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CreditCardApplicationForm />
            </div>

            <div className="space-y-6">
              <Ad
                format="square"
                fallbackWidth={300}
                fallbackHeight={250}
                className="mx-auto"
              />

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <AnimatedText
                  as="h3"
                  className="text-lg font-semibold mb-4 text-secondary"
                >
                  Why Apply for the Citi Double Cash Card?
                </AnimatedText>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.1}>
                      <span className="text-primary mr-2">✓</span>
                      <span>Up to 2% cash back on all purchases</span>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.15}>
                      <span className="text-primary mr-2">✓</span>
                      <span>No annual fee</span>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.2}>
                      <span className="text-primary mr-2">✓</span>
                      <span>
                        0% intro APR on balance transfers for 18 months
                      </span>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.25}>
                      <span className="text-primary mr-2">✓</span>
                      <span>Flexible redemption options</span>
                    </AnimatedText>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <AnimatedText
                  as="h3"
                  className="text-lg font-semibold mb-4 text-secondary"
                >
                  Application Requirements
                </AnimatedText>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.1}>
                      <span className="text-primary mr-2">•</span>
                      <span>Credit score of at least 670</span>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.15}>
                      <span className="text-primary mr-2">•</span>
                      <span>Must be 18 years or older</span>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.2}>
                      <span className="text-primary mr-2">•</span>
                      <span>Valid Social Security Number</span>
                    </AnimatedText>
                  </li>

                  <li className="flex items-start">
                    <AnimatedText as="div" className="flex" delay={0.25}>
                      <span className="text-primary mr-2">•</span>
                      <span>Proof of income</span>
                    </AnimatedText>
                  </li>
                </ul>
              </div>

              <Ad
                format="square"
                fallbackWidth={300}
                fallbackHeight={250}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
