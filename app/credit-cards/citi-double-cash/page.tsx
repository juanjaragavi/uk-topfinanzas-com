import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { Ad } from "@/components/ui/ad";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Import the content from our centralized TS file
import { citiDoubleCashPageContent } from "@/lib/pages/credit-cards/citi-double-cash";

// Use the metadata directly from our content file
export const metadata = citiDoubleCashPageContent.metadata;

export default function CitiDoubleCashCard() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedText
                as="h1"
                className="mb-4 text-secondary leading-tight"
              >
                {citiDoubleCashPageContent.hero.title}
              </AnimatedText>

              <AnimatedText
                as="p"
                className="mb-6 text-gray-600 leading-tight"
                delay={0.1}
              >
                {citiDoubleCashPageContent.hero.description}
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
                  {citiDoubleCashPageContent.hero.rating.score} (
                  {citiDoubleCashPageContent.hero.rating.count.toLocaleString()}{" "}
                  reviews)
                </span>
              </div>

              <AnimatedText delay={0.2}>
                <div className="text-center lg:text-left">
                  <Button
                    href={citiDoubleCashPageContent.hero.applyButtonLink}
                    variant="primary"
                    className="text-lg py-4 px-6 text-center"
                  >
                    {citiDoubleCashPageContent.hero.applyButtonText}
                  </Button>
                </div>
              </AnimatedText>
            </div>

            <div className="flex justify-center">
              <AnimatedImage
                src={citiDoubleCashPageContent.hero.image.src}
                alt={citiDoubleCashPageContent.hero.image.alt}
                width={citiDoubleCashPageContent.hero.image.width}
                height={citiDoubleCashPageContent.hero.image.height}
                delay={0.3}
                className="max-w-[320px] rounded-xl overflow-hidden shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText
            as="h2"
            className="text-center mb-12 text-secondary leading-tight"
          >
            {citiDoubleCashPageContent.requirements.title}
          </AnimatedText>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <AnimatedText
                  as="h3"
                  className="text-xl font-semibold mb-4 text-secondary leading-tight"
                >
                  Eligibility Criteria
                </AnimatedText>

                <ul className="space-y-4">
                  {citiDoubleCashPageContent.requirements.items.map(
                    (req, index) => (
                      <li className="flex items-start" key={index}>
                        <AnimatedText as="div" delay={0.1 + index * 0.05}>
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
                              <span className="font-medium leading-tight">
                                {req.label}:
                              </span>{" "}
                              {req.value}
                            </div>
                          </div>
                        </AnimatedText>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <AnimatedImage
                  src={citiDoubleCashPageContent.requirements.image.src}
                  alt={citiDoubleCashPageContent.requirements.image.alt}
                  width={citiDoubleCashPageContent.requirements.image.width}
                  height={citiDoubleCashPageContent.requirements.image.height}
                  delay={0.3}
                  className="max-w-[320px] rounded-xl overflow-hidden shadow-md"
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
              <AnimatedText
                as="h2"
                className="mb-8 text-secondary leading-tight"
              >
                {citiDoubleCashPageContent.applicationSteps.title}
              </AnimatedText>

              <div className="space-y-6">
                {citiDoubleCashPageContent.applicationSteps.steps.map(
                  (step, index) => (
                    <AnimatedText
                      key={index}
                      as="div"
                      className="bg-white p-6 rounded-xl shadow-sm"
                      delay={0.1 + index * 0.1}
                    >
                      <h3 className="text-lg font-semibold mb-3 text-secondary flex items-center leading-tight">
                        <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 ml-11 leading-tight">
                        {step.description}
                      </p>
                    </AnimatedText>
                  )
                )}
              </div>

              <AnimatedText delay={0.6} className="mt-8">
                <div className="text-center lg:text-left">
                  <Button
                    href={citiDoubleCashPageContent.applicationSteps.buttonLink}
                    variant="primary"
                    className="text-lg py-4 px-6 text-center"
                  >
                    {citiDoubleCashPageContent.applicationSteps.buttonText}
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

      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedText
            as="h2"
            className="text-center mb-12 text-secondary leading-tight"
          >
            {citiDoubleCashPageContent.benefits.title}
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {citiDoubleCashPageContent.benefits.items.map((benefit, index) => (
              <AnimatedText
                key={index}
                as="div"
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
                delay={0.1 + index * 0.1}
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-tight">
                  {benefit.description}
                </p>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedText as="h2" className="mb-6 leading-tight">
            {citiDoubleCashPageContent.callToAction.title}
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-8 max-w-2xl mx-auto leading-tight"
            delay={0.1}
          >
            {citiDoubleCashPageContent.callToAction.description}
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <div className="text-center">
              <Link
                href={citiDoubleCashPageContent.callToAction.buttonLink}
                className="bg-white text-primary hover:bg-gray-100 font-medium py-4 px-10 rounded-full transition-colors duration-300 inline-block text-xl"
              >
                {citiDoubleCashPageContent.callToAction.buttonText}
              </Link>
            </div>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
}
