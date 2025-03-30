import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CapitalOneQuicksilverStudentCreditCardRequirementsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Capital One Quicksilver Student Credit Card: Requirements &amp;
              Application Guide
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Learn everything you need to know about qualifying for the
                Capital One Quicksilver Student Credit Card, designed to help UK
                students build credit while earning cashback.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-800 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">
                      Student status required:
                    </span>{" "}
                    Must be enrolled at a UK university or college.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-800 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">
                      Limited credit history accepted:
                    </span>{" "}
                    Perfect for students building credit for the first time.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-800 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">Age requirement:</span> Must
                    be at least 18 years old.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-800 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">Income verification:</span>{" "}
                    Some form of income or financial support required.
                  </div>
                </div>
              </div>

              <div className="my-8">
                <Image
                  src="/images/financial-solutions/capital-one-quicksilver.jpg"
                  alt="Capital One Quicksilver Student Credit Card"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <section className="my-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Capital One Quicksilver Student Credit Card: Is It Right for
                  You?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Capital One Quicksilver Student Credit Card is
                  specifically designed for university students who are looking
                  to build credit while earning rewards on their everyday
                  purchases. With an unlimited 1.5% cashback on all purchases
                  and no annual fee, it's an attractive option for students
                  managing their finances in the UK.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Essential Requirements for Application
                </h2>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Student Status Verification
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To qualify for the Capital One Quicksilver Student Credit
                  Card, you must be enrolled as a student at an accredited UK
                  university or college. During the application process, you'll
                  need to provide details about your educational institution,
                  your course of study, and your expected graduation date.
                  Capital One may verify this information directly with your
                  university.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Both full-time and part-time students are eligible to apply,
                  making this card accessible to a wide range of student
                  situations. Distance learning and online programme students
                  may also qualify, provided your institution is accredited in
                  the UK.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Credit History Considerations
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  One of the most appealing aspects of the Capital One
                  Quicksilver Student Credit Card is that it's designed for
                  students with limited or no credit history. Unlike many
                  rewards credit cards that require excellent credit scores,
                  this card is more accessible to students who are just
                  beginning their credit journey.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  If you do have some credit history, Capital One will review it
                  as part of your application. While perfect credit isn't
                  required, any significant negative marks like bankruptcy or
                  severe delinquencies could impact your approval chances. For
                  most students, however, a limited credit profile won't be a
                  barrier to approval.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Age and Identity Requirements
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To be eligible for this credit card, you must be at least 18
                  years old and have a valid form of identification. You'll need
                  to provide your National Insurance number during the
                  application process for identity verification purposes.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Additionally, you'll need to have a UK address and be able to
                  demonstrate that you've been a UK resident for at least 3
                  years. International students studying in the UK may face
                  additional requirements and should contact Capital One
                  directly to discuss their eligibility.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Income Verification
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  While Capital One understands that many students don't have
                  traditional full-time employment, you'll still need to
                  demonstrate some form of income or financial support. This
                  could include:
                </p>

                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">Part-time employment earnings</li>
                  <li className="mb-2">Student loans or grants</li>
                  <li className="mb-2">
                    Regular allowance or support from parents/guardians
                  </li>
                  <li className="mb-2">Scholarships or bursaries</li>
                </ul>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The income requirements for student cards are typically lower
                  than for standard credit cards, reflecting the financial
                  realities of student life. However, you should be prepared to
                  document any income sources you list on your application.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Application Process: Step by Step
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Applying for the Capital One Quicksilver Student Credit Card
                  is straightforward. Here's what you need to know:
                </p>

                <ul className="list-decimal pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Check your eligibility:</strong> Use Capital One's
                    pre-qualification tool to see if you're likely to be
                    approved without affecting your credit score.
                  </li>
                  <li className="mb-2">
                    <strong>Gather necessary documentation:</strong> Have your
                    student ID, proof of enrollment, identification, and income
                    information ready.
                  </li>
                  <li className="mb-2">
                    <strong>Complete the online application:</strong> Visit
                    Capital One's website and fill out the application form with
                    accurate information.
                  </li>
                  <li className="mb-2">
                    <strong>Verification process:</strong> Capital One may
                    contact you to verify your student status or request
                    additional documentation.
                  </li>
                  <li className="mb-2">
                    <strong>Application decision:</strong> Many applications
                    receive an immediate decision, though some may take a few
                    days for review.
                  </li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tips for Successful Application
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To improve your chances of approval for the Capital One
                  Quicksilver Student Credit Card:
                </p>

                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    Apply during the academic term when your student status is
                    most easily verified
                  </li>
                  <li className="mb-2">
                    Ensure all application information is accurate and matches
                    your identification documents
                  </li>
                  <li className="mb-2">
                    Don't apply for multiple credit cards simultaneously, as
                    this can signal financial risk
                  </li>
                  <li className="mb-2">
                    Have documentation of your income readily available
                  </li>
                  <li className="mb-2">
                    If you have any existing credit accounts, ensure they're in
                    good standing before applying
                  </li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Starting Your Credit Journey with Confidence
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Capital One Quicksilver Student Credit Card offers a
                  valuable opportunity for UK students to build credit history
                  while earning cashback rewards. By understanding the
                  requirements and preparing thoroughly for your application,
                  you can position yourself for approval and begin establishing
                  a positive credit profile that will benefit you long after
                  graduation.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Remember that responsible credit use—paying on time and
                  keeping balances low—is the key to building a strong credit
                  history with your new card.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
