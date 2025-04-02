import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";

export function generateMetadata() {
  return {
    title:
      "Lloyds Bank Credit Card: Flexible Everyday Rewards - Top Finance UK",
    description:
      "The Lloyds Bank Credit Card offers flexible rewards, competitive rates, and convenient features for everyday spending and financial management.",
    keywords:
      "Lloyds Bank Credit Card, UK credit cards, everyday spending, cashback rewards, Lloyds Bank, balance transfer, purchase card",
  };
}

export default function LloydsBankCreditCardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Lloyds Bank Credit Card: Flexible Everyday Banking Solutions
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5">
                The Lloyds Bank Credit Card offers a balance of everyday value
                and flexibility, designed to support your daily spending while
                providing useful rewards and benefits.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5">
                    <span className="font-semibold">Everyday Rewards:</span>{" "}
                    Earn cashback on selected purchases at participating
                    retailers through the Everyday Offers program.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5">
                    <span className="font-semibold">
                      Balance Transfer Offers:
                    </span>{" "}
                    Enjoy competitive balance transfer rates to help manage
                    existing credit card debt more effectively.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5">
                    <span className="font-semibold">Purchase Protection:</span>{" "}
                    Benefit from purchase protection on eligible items,
                    providing security for your shopping.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5">
                    <span className="font-semibold">Mobile Banking:</span>{" "}
                    Manage your account seamlessly through the Lloyds Bank
                    mobile app with real-time notifications.
                  </div>
                </div>
              </div>

              <div className="text-center my-8">
                <Link href="/financial-solutions/lloyds-bank-credit-card-requirements">
                  <Button className="bg-[#006A4D] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/barclaycard-avios-plus.webp"
                  alt="Lloyds Bank Credit Card"
                  width={1000}
                  height={563}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light">
                  The Lloyds Bank Credit Card is designed to offer everyday
                  value to UK consumers, providing a reliable financial tool
                  that combines convenience, security, and rewards. As one of
                  the UK's oldest and most trusted banking institutions, Lloyds
                  Bank has created a credit card that reflects its commitment to
                  customer-focused banking solutions.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Everyday Rewards and Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light">
                  One of the most attractive features of the Lloyds Bank Credit
                  Card is its Everyday Offers program. This program allows
                  cardholders to earn cashback on purchases at participating
                  retailers, effectively providing a discount on your regular
                  shopping. The cashback is automatically credited to your
                  account, making it a hassle-free way to save money on everyday
                  expenses. The variety of participating retailers means you can
                  earn rewards across multiple spending categories, from
                  groceries to entertainment.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Effective Debt Management Tools
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light">
                  For those looking to manage existing credit card debt, the
                  Lloyds Bank Credit Card offers competitive balance transfer
                  rates. This feature allows you to transfer balances from other
                  credit cards to your Lloyds card, potentially at a lower
                  interest rate. This can be an effective way to consolidate
                  debt and reduce interest payments, making it easier to pay
                  down your balance over time. The card also offers flexibility
                  in repayment options, allowing you to set up direct debits for
                  either the minimum payment, a fixed amount, or the full
                  balance each month.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Security and Protection
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light">
                  Security is a priority with the Lloyds Bank Credit Card. The
                  card comes with advanced security features, including
                  real-time fraud monitoring that tracks unusual activity on
                  your account. If suspicious transactions are detected, you'll
                  be alerted immediately, helping to prevent fraud before it
                  becomes a major issue. Additionally, the card offers purchase
                  protection on eligible items, providing an extra layer of
                  security for your shopping. This protection can cover items
                  against damage or theft for a specified period after purchase,
                  giving you peace of mind when making significant purchases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Mobile Banking Integration:
                      </span>{" "}
                      Seamlessly manage your credit card through the Lloyds Bank
                      mobile app, allowing you to check your balance, view
                      transactions, make payments, and receive real-time
                      notifications.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">Global Acceptance:</span>{" "}
                      Widely accepted worldwide through the Mastercard or Visa
                      network (depending on your specific card), ensuring you
                      can use your card confidently at millions of locations
                      globally.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Contactless Technology:
                      </span>{" "}
                      Quick and convenient contactless payment capability for
                      purchases up to the current UK limit, making everyday
                      transactions faster and easier.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Compatible with digital wallets like Apple Pay and Google
                      Pay, allowing for convenient and secure mobile payments.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Customer Support and Banking Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4">
                  Lloyds Bank is known for its comprehensive customer support,
                  which extends to its credit card services:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        24/7 Customer Service:
                      </span>{" "}
                      Access to round-the-clock customer support for urgent card
                      issues, ensuring help is available whenever you need it.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5">
                      <span className="font-semibold">
                        Branch Network Support:
                      </span>{" "}
                      Benefit from Lloyds Bank's extensive branch network across
                      the UK, providing in-person support when needed.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  A Reliable Everyday Financial Tool
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4">
                  The Lloyds Bank Credit Card represents a balanced approach to
                  everyday financial management. It doesn't focus on flashy
                  premium benefits or complex rewards structures, but instead
                  delivers reliable, practical features that most consumers will
                  find useful in their daily lives. The combination of cashback
                  rewards, security features, and debt management tools makes it
                  a versatile option for a wide range of financial needs.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4">
                  Whether you're looking to earn rewards on everyday spending,
                  manage existing credit card debt, or simply want a reliable
                  card from a trusted high street bank, the Lloyds Bank Credit
                  Card offers a straightforward and valuable solution. Its
                  integration with Lloyds' broader banking services also makes
                  it particularly convenient for existing Lloyds Bank customers,
                  allowing for seamless management alongside other accounts.
                </p>

                <div className="text-center my-8">
                  <Link href="/financial-solutions/lloyds-bank-credit-card-requirements">
                    <Button className="bg-[#006A4D] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Requirements
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
