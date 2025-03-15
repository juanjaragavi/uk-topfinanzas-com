import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
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
                <Button href="/credit-cards/recommendation" variant="primary">
                  Accept recommendation
                </Button>
              </AnimatedText>
            </div>

            <div className="flex justify-center">
              <AnimatedImage
                src="https://media.topfinanzas.com/images/generated/1741904486433/sample_0.jpg"
                alt="Credit Card Recommendation"
                width={500}
                height={400}
                delay={0.3}
              />
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
                Finding the right credit card is a key step toward financial
                success
              </AnimatedText>

              <AnimatedText as="p" className="mb-4 text-gray-600" delay={0.1}>
                With our recommender, you'll gain access to tailored suggestions
                that match your needs—helping you save money and build a
                brighter financial future.
              </AnimatedText>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.2}>
                Our recommender connects you with tailored options to fit your
                needs. From saving on interest to earning rewards or avoiding
                fees, we make choosing the right card simple and confident.
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <Button href="/credit-cards/citi-double-cash" variant="primary">
                  Learn how to apply
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
            <Button
              href="/credit-cards/apply/citi-double-cash"
              variant="secondary"
            >
              Apply now
            </Button>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
}
