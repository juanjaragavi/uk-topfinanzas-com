import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedImage } from "@/components/ui/animated-image";
import { Ad } from "@/components/ui/ad";
import Link from "next/link";

// Import the content from our centralized TS file
import { creditCardsPageContent } from "@/lib/pages/credit-cards/main";

// Use the metadata directly from our content file
export const metadata = creditCardsPageContent.metadata;

export default function CreditCards() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <AnimatedText
                as="h1"
                className="mb-4 text-[16px] font-bold text-[#234043] leading-tight"
              >
                {creditCardsPageContent.hero.title}
              </AnimatedText>

              <AnimatedText
                as="p"
                className="mb-6 text-[10px] text-[#234043] leading-tight"
                delay={0.1}
              >
                {creditCardsPageContent.hero.description}
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <Link
                  href={creditCardsPageContent.hero.ctaLink}
                  className="btn-primary inline-block text-lg py-4 px-8 rounded-full text-center"
                >
                  {creditCardsPageContent.hero.ctaText}
                </Link>
              </AnimatedText>
            </div>

            <div className="flex justify-center">
              <Ad
                format="square"
                fallbackWidth={500}
                fallbackHeight={400}
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
            className="text-center mb-12 text-[12px] text-[#234043] leading-tight"
          >
            {creditCardsPageContent.benefits.title}
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creditCardsPageContent.benefits.items.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <AnimatedText
                  as="h3"
                  className="text-[12px] font-semibold mb-3 text-[#234043] leading-tight"
                >
                  {benefit.title}
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-[10px] text-[#234043] leading-tight"
                  delay={0.1}
                >
                  {benefit.description}
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedText
                as="h2"
                className="mb-6 text-[12px] text-[#234043] leading-tight"
              >
                {creditCardsPageContent.featuredCard.title}
              </AnimatedText>

              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <AnimatedImage
                    src={creditCardsPageContent.featuredCard.image}
                    alt={creditCardsPageContent.featuredCard.cardName}
                    width={320}
                    height={200}
                  />

                  <div>
                    <AnimatedText
                      as="h3"
                      className="text-[12px] font-semibold mb-2 text-[#234043] leading-tight"
                    >
                      {creditCardsPageContent.featuredCard.cardName}
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
                        {creditCardsPageContent.featuredCard.rating.score} (
                        {creditCardsPageContent.featuredCard.rating.count.toLocaleString()}{" "}
                        reviews)
                      </span>
                    </div>

                    <AnimatedText
                      as="p"
                      className="text-[10px] text-[#234043] mb-4 leading-tight"
                      delay={0.1}
                    >
                      {creditCardsPageContent.featuredCard.description}
                    </AnimatedText>

                    <AnimatedText delay={0.2}>
                      <Link
                        href={creditCardsPageContent.featuredCard.ctaLink}
                        className="btn-primary inline-block text-lg py-4 px-8 rounded-full text-center"
                      >
                        {creditCardsPageContent.featuredCard.ctaText}
                      </Link>
                    </AnimatedText>
                  </div>
                </div>
              </div>

              <AnimatedText
                as="h3"
                className="text-[12px] font-semibold mb-4 text-[#234043] leading-tight"
              >
                {creditCardsPageContent.featuredCard.requirements.title}
              </AnimatedText>

              <ul className="list-disc pl-5 space-y-2 mb-6">
                {creditCardsPageContent.featuredCard.requirements.items.map(
                  (req, index) => (
                    <AnimatedText
                      as="div"
                      delay={0.1 + index * 0.05}
                      key={index}
                    >
                      <span className="font-medium">{req.label}:</span>{" "}
                      {req.value}
                    </AnimatedText>
                  )
                )}
              </ul>
              <div className="text-center sm:text-left flex flex-col lg:flex-row gap-8">
                <AnimatedText delay={0.3}>
                  <Link
                    href={
                      creditCardsPageContent.featuredCard.requirements.ctaLink
                    }
                    className="btn-primary inline-block text-lg py-4 px-8 rounded-full text-center"
                  >
                    {creditCardsPageContent.featuredCard.requirements.ctaText}
                  </Link>
                </AnimatedText>
              </div>
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
            className="text-center mb-8 text-[12px] text-[#234043] leading-tight"
          >
            {creditCardsPageContent.faq.title}
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {creditCardsPageContent.faq.questions.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <AnimatedText
                  as="h3"
                  className="text-[12px] font-semibold mb-3 text-[#234043] leading-tight"
                >
                  {faq.question}
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-[10px] text-[#234043] leading-tight"
                  delay={0.1}
                >
                  {faq.answer}
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center justify-center items-center">
          <AnimatedText as="h2" className="mb-6 text-[12px] leading-tight">
            {creditCardsPageContent.callToAction.title}
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-8 text-[10px] max-w-2xl mx-auto leading-tight"
            delay={0.1}
          >
            {creditCardsPageContent.callToAction.description}
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <Link
              href={creditCardsPageContent.callToAction.buttonLink}
              className="bg-white text-primary hover:bg-gray-100 font-medium py-4 px-10 rounded-full transition-colors duration-300 inline-block text-lg"
            >
              {creditCardsPageContent.callToAction.buttonText}
            </Link>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
}
