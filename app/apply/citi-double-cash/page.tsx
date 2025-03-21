import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { Ad } from "@/components/ui/ad";
import { CreditCardApplicationForm } from "@/components/forms/credit-card-application-form";
import { applyCitiDoubleCashPageContent } from "@/lib/pages/credit-cards/apply-citi-double-cash";

export const metadata = applyCitiDoubleCashPageContent.metadata;

export default function ApplyCitiDoubleCash() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText
            as="h1"
            className="text-center mb-6 text-[16px] font-bold text-[#234043] leading-tight"
          >
            {applyCitiDoubleCashPageContent.hero.title}
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-center mb-12 text-[10px] text-[#234043] max-w-3xl mx-auto leading-tight"
            delay={0.1}
          >
            {applyCitiDoubleCashPageContent.hero.description}
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
                  className="text-[12px] font-semibold mb-4 text-[#234043] leading-tight"
                >
                  {applyCitiDoubleCashPageContent.whyApply}
                </AnimatedText>

                <ul className="space-y-3">
                  {applyCitiDoubleCashPageContent.benefits.map(
                    (benefit, index) => (
                      <li className="flex items-start" key={index}>
                        <AnimatedText
                          as="div"
                          className="flex"
                          delay={0.1 + index * 0.05}
                        >
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-[10px] text-[#234043] leading-tight">
                            {benefit}
                          </span>
                        </AnimatedText>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <AnimatedText
                  as="h3"
                  className="text-[12px] font-semibold mb-4 text-[#234043] leading-tight"
                >
                  {applyCitiDoubleCashPageContent.applicationRequirements}
                </AnimatedText>

                <ul className="space-y-3">
                  {applyCitiDoubleCashPageContent.requirements.map(
                    (req, index) => (
                      <li className="flex items-start" key={index}>
                        <AnimatedText
                          as="div"
                          className="flex"
                          delay={0.1 + index * 0.05}
                        >
                          <span className="text-primary mr-2">•</span>
                          <span className="text-[10px] text-[#234043] leading-tight">
                            {req}
                          </span>
                        </AnimatedText>
                      </li>
                    )
                  )}
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

      <CompactFooter />
    </main>
  );
}
