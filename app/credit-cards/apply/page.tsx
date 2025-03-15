import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { CreditCardApplicationForm } from "@/components/forms/credit-card-application-form";

export const metadata = {
  title: "Apply for a Credit Card - TopFinanzas",
  description:
    "Apply for a credit card online. Quick and secure application process with fast approval.",
  keywords:
    "credit card application, apply for credit card, online application, TopFinanzas",
};

export default function ApplyCreditCard() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText as="h1" className="text-center mb-6 text-secondary">
            Credit Card Application
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-center mb-12 text-gray-600 max-w-3xl mx-auto"
            delay={0.1}
          >
            Complete the form below to apply for your selected credit card. Your
            information is secure and will only be used for processing your
            application.
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CreditCardApplicationForm />
            </div>

            <div className="space-y-6">
              <AdPlaceholder width={300} height={250} className="mx-auto" />

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <AnimatedText
                  as="h3"
                  className="text-lg font-semibold mb-4 text-secondary"
                >
                  Why Choose TopFinanzas?
                </AnimatedText>

                <ul className="space-y-3">
                  <AnimatedText
                    as="div"
                    className="flex items-start"
                    delay={0.1}
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span>Secure application process</span>
                  </AnimatedText>

                  <AnimatedText
                    as="div"
                    className="flex items-start"
                    delay={0.15}
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span>Fast approval decisions</span>
                  </AnimatedText>

                  <AnimatedText
                    as="div"
                    className="flex items-start"
                    delay={0.2}
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span>No impact on credit score to check rates</span>
                  </AnimatedText>

                  <AnimatedText
                    as="div"
                    className="flex items-start"
                    delay={0.25}
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span>Expert support throughout the process</span>
                  </AnimatedText>
                </ul>
              </div>

              <AdPlaceholder width={300} height={250} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
