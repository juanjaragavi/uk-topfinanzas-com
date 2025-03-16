import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { Ad } from "@/components/ui/ad";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Import the content from our centralized TS file
import { creditCardRecommendationPageContent } from "@/lib/pages/credit-cards/recommendation";

// Use the metadata directly from our content file
export const metadata = creditCardRecommendationPageContent.metadata;

export default function CreditCardRecommendation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText as="h1" className="text-center mb-6 text-secondary">
            {creditCardRecommendationPageContent.hero.title}
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-center mb-12 text-gray-600 max-w-3xl mx-auto"
            delay={0.1}
          >
            {creditCardRecommendationPageContent.hero.description}
          </AnimatedText>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText as="h2" className="text-center mb-12 text-secondary">
            {creditCardRecommendationPageContent.recommendedCard.title}
          </AnimatedText>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <AnimatedImage
                  src={
                    creditCardRecommendationPageContent.recommendedCard.card
                      .image.src
                  }
                  alt={
                    creditCardRecommendationPageContent.recommendedCard.card
                      .image.alt
                  }
                  width={
                    creditCardRecommendationPageContent.recommendedCard.card
                      .image.width
                  }
                  height={
                    creditCardRecommendationPageContent.recommendedCard.card
                      .image.height
                  }
                  className="max-w-[320px] rounded-full overflow-hidden shadow-md"
                />

                <div>
                  <AnimatedText
                    as="h3"
                    className="text-2xl font-semibold mb-3 text-secondary"
                  >
                    {
                      creditCardRecommendationPageContent.recommendedCard.card
                        .name
                    }
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
                      {
                        creditCardRecommendationPageContent.recommendedCard.card
                          .rating.score
                      }{" "}
                      (
                      {creditCardRecommendationPageContent.recommendedCard.card.rating.count.toLocaleString()}{" "}
                      reviews)
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {creditCardRecommendationPageContent.recommendedCard.card.benefits.map(
                      (benefit, index) => (
                        <li className="flex items-start" key={index}>
                          <AnimatedText
                            as="div"
                            className="flex"
                            delay={0.1 + index * 0.05}
                          >
                            <span className="text-primary mr-2 font-bold">
                              ✓
                            </span>
                            <span>
                              <strong>{benefit.label}:</strong>{" "}
                              {benefit.description}
                            </span>
                          </AnimatedText>
                        </li>
                      )
                    )}
                  </ul>

                  <AnimatedText
                    delay={0.3}
                    className="flex flex-wrap gap-3 md:gap-4"
                  >
                    <Button
                      href={
                        creditCardRecommendationPageContent.recommendedCard.card
                          .learnMoreButton.link
                      }
                      variant="primary"
                      className="rounded-full"
                    >
                      {
                        creditCardRecommendationPageContent.recommendedCard.card
                          .learnMoreButton.text
                      }
                    </Button>
                    <Button
                      href={
                        creditCardRecommendationPageContent.recommendedCard.card
                          .applyButton.link
                      }
                      variant="secondary"
                      className="rounded-full"
                    >
                      {
                        creditCardRecommendationPageContent.recommendedCard.card
                          .applyButton.text
                      }
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
                {creditCardRecommendationPageContent.cashBackExplanation.title}
              </AnimatedText>

              <AnimatedText as="p" className="mb-4 text-gray-600" delay={0.1}>
                {
                  creditCardRecommendationPageContent.cashBackExplanation
                    .introduction
                }
              </AnimatedText>

              <ul className="list-disc pl-5 space-y-3 mb-6">
                {creditCardRecommendationPageContent.cashBackExplanation.features.map(
                  (feature, index) => (
                    <li key={index}>
                      <AnimatedText as="div" delay={0.15 + index * 0.05}>
                        <span className="text-gray-700">
                          <strong>{feature.title}:</strong>{" "}
                          {feature.description}
                        </span>
                      </AnimatedText>
                    </li>
                  )
                )}
              </ul>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.3}>
                {
                  creditCardRecommendationPageContent.cashBackExplanation
                    .conclusion
                }
              </AnimatedText>

              <AnimatedText delay={0.35}>
                <div className="text-center lg:text-left">
                  <Button
                    href={
                      creditCardRecommendationPageContent.cashBackExplanation
                        .buttonLink
                    }
                    variant="primary"
                    className="text-lg py-4 px-8 rounded-full text-center"
                  >
                    {
                      creditCardRecommendationPageContent.cashBackExplanation
                        .buttonText
                    }
                  </Button>
                </div>
              </AnimatedText>
            </div>

            <div>
              <Ad
                format="portrait"
                fallbackWidth={300}
                fallbackHeight={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText as="h2" className="mb-6">
            {creditCardRecommendationPageContent.callToAction.title}
          </AnimatedText>

          <AnimatedText as="p" className="mb-8 max-w-2xl mx-auto" delay={0.1}>
            {creditCardRecommendationPageContent.callToAction.description}
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Button
              href={creditCardRecommendationPageContent.callToAction.buttonLink}
              variant="secondary"
              className="text-lg py-4 px-10 rounded-full text-center"
            >
              {creditCardRecommendationPageContent.callToAction.buttonText}
            </Button>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
}
