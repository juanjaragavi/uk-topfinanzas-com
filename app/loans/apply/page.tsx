import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedText } from "@/components/ui/animated-text"
import { AdPlaceholder } from "@/components/ui/ad-placeholder"
import { LoanApplicationForm } from "@/components/forms/loan-application-form"

export const metadata = {
  title: "Apply for a Personal Loan - TopFinanzas",
  description:
    "Apply for a personal loan online. Quick and secure application process with fast approval and competitive rates.",
  keywords: "loan application, apply for loan, personal loan, online application, TopFinanzas",
}

export default function ApplyLoan() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedText as="h1" className="text-center mb-6 text-secondary">
            Personal Loan Application
          </AnimatedText>

          <AnimatedText as="p" className="text-center mb-12 text-gray-600 max-w-3xl mx-auto" delay={0.1}>
            Complete the form below to apply for a personal loan. Your information is secure and will only be used for
            processing your application.
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LoanApplicationForm />
            </div>

            <div className="space-y-6">
              <AdPlaceholder width={300} height={250} className="mx-auto" />

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <AnimatedText as="h3" className="text-lg font-semibold mb-4 text-secondary">
                  UNLOCK YOUR PATH TO DEBT FREEDOM
                </AnimatedText>

                <ul className="space-y-3">
                  <AnimatedText as="li" className="flex items-start" delay={0.1}>
                    <span className="text-primary mr-2">✓</span>
                    <span>Lower interest rates than most credit cards</span>
                  </AnimatedText>

                  <AnimatedText as="li" className="flex items-start" delay={0.15}>
                    <span className="text-primary mr-2">✓</span>
                    <span>Fixed monthly payments for easier budgeting</span>
                  </AnimatedText>

                  <AnimatedText as="li" className="flex items-start" delay={0.2}>
                    <span className="text-primary mr-2">✓</span>
                    <span>Flexible loan amounts from $1,000 to $50,000</span>
                  </AnimatedText>

                  <AnimatedText as="li" className="flex items-start" delay={0.25}>
                    <span className="text-primary mr-2">✓</span>
                    <span>Quick funding as soon as the next business day</span>
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
  )
}

