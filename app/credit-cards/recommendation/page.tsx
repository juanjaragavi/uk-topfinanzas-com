import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Your Credit Card Recommendation - TopFinanzas",
  description:
    "View your personalized credit card recommendation based on your financial profile.",
  keywords:
    "credit card recommendation, personalized recommendation, credit card match, TopFinanzas",
};

export default function CreditCardRecommendation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText as="h1" className="text-center mb-6 text-secondary">
            Your Credit Card Recommendation
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-center mb-12 text-gray-600 max-w-3xl mx-auto"
            delay={0.1}
          >
            Based on your profile, we've selected the best credit card option to
            match your needs.
          </AnimatedText>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText as="h2" className="text-center mb-12 text-secondary">
            Our Top Pick For You
          </AnimatedText>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <AnimatedImage
                  src="https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg"
                  alt="Citi Double Cash Credit Card"
                  width={320}
                  height={200}
                />

                <div>
                  <AnimatedText
                    as="h3"
                    className="text-2xl font-semibold mb-3 text-secondary"
                  >
                    Citi Double Cash Credit Card
                  </AnimatedText>

                  <div className="flex items-center mb-4">
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

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <AnimatedText as="div" className="flex" delay={0.1}>
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span>
                          <strong>Up to 2% Cash Back:</strong> Earn 1% when you
                          buy, plus 1% when you pay.
                        </span>
                      </AnimatedText>
                    </li>
                    <li className="flex items-start">
                      <AnimatedText as="div" className="flex" delay={0.15}>
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span>
                          <strong>No Restrictions:</strong> Earn cash back on
                          every purchase, with no categories to track.
                        </span>
                      </AnimatedText>
                    </li>
                    <li className="flex items-start">
                      <AnimatedText as="div" className="flex" delay={0.2}>
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span>
                          <strong>No Annual Fee:</strong> Enjoy all the benefits
                          without the cost.
                        </span>
                      </AnimatedText>
                    </li>
                    <li className="flex items-start">
                      <AnimatedText as="div" className="flex" delay={0.25}>
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span>
                          <strong>Intro APR on Balance Transfers:</strong> 0%
                          for 18 months to pay down debt.
                        </span>
                      </AnimatedText>
                    </li>
                  </ul>

                  <AnimatedText delay={0.3} className="flex flex-wrap gap-3 md:gap-4">
                    <Button
                      href="/credit-cards/citi-double-cash"
                      variant="primary"
                    >
                      Learn More
                    </Button>
                    <Button
                      href="/credit-cards/apply/citi-double-cash"
                      variant="secondary"
                    >
                      Apply Now
                    </Button>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedText as="h2" className="mb-6 text-secondary">
                How the Cash Back Works
              </AnimatedText>

              <AnimatedText as="p" className="mb-4 text-gray-600" delay={0.1}>
                One of the standout features of the Citi Double Cash Card is its
                unique cash-back structure. You don't have to worry about
                quarterly sign-ups, rotating categories, or making specific
                purchases to earn high rewards. Here's how it breaks down:
              </AnimatedText>

              <ul className="list-disc pl-5 space-y-3 mb-6">
                <li>
                  <AnimatedText as="div" delay={0.15}>
                    <span className="text-gray-700">
                      <strong>1% when you buy:</strong> On every dollar you
                      spend, you earn 1% cash back right away.
                    </span>
                  </AnimatedText>
                </li>
                <li>
                  <AnimatedText as="div" delay={0.2}>
                    <span className="text-gray-700">
                      <strong>1% when you pay:</strong> The second 1% comes when
                      you make a payment towards your balance.
                    </span>
                  </AnimatedText>
                </li>
                <li>
                  <AnimatedText as="div" delay={0.25}>
                    <span className="text-gray-700">
                      <strong>No limit on cash back:</strong> You can continue
                      earning rewards no matter how much you spend.
                    </span>
                  </AnimatedText>
                </li>
              </ul>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.3}>
                This system is ideal for those who use their credit card for a
                wide variety of purchases and want to avoid the complexity of
                other rewards programs. The Citi Double Cash Card ensures that
                every purchase, no matter how small or large, gives you value.
              </AnimatedText>

              <AnimatedText delay={0.35}>
                <Button href="/credit-cards/citi-double-cash" variant="primary">
                  Find Out More
                </Button>
              </AnimatedText>
            </div>

            <div>
              <AdPlaceholder width={300} height={600} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText as="h2" className="mb-6">
            Ready to take advantage of these benefits?
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
