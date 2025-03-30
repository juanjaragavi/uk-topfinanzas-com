import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AmazonRewardsVisaCreditCardBenefitsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Amazon Rewards Visa Credit Card: Ideal Benefits for You
            </h1>

            <div className="my-8">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Maximise your rewards with cashback at Amazon and Whole Foods
                plus no annual fee!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">
                      3% cashback on purchases
                    </span>{" "}
                    at Amazon.com and Whole Foods Market.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">
                      2% cashback at restaurants
                    </span>{" "}
                    petrol stations and pharmacies.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">1% cashback</span> on all
                    other purchases.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5">
                    <span className="font-semibold">No annual fees.</span>
                  </div>
                </div>
              </div>

              <div className="text-center my-8">
                <Link href="/financial-solutions/amazon-rewards-visa-credit-card-requirements">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/amazon-rewards-visa.webp"
                  alt="Amazon Rewards Visa Credit Card"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              <section className="my-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Why choose the Amazon Rewards Visa Credit Card?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Amazon Rewards Visa Credit Card is ideal for frequent
                  Amazon and Whole Foods shoppers, offering cashback on
                  purchases and extra rewards in everyday categories like dining
                  and petrol. Discover its key benefits and how to maximise your
                  rewards.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  3% cashback on Amazon and Whole Foods purchases: Maximise your
                  favourite purchases
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Amazon Rewards Visa Credit Card offers 3% cashback on
                  purchases at Amazon.com and Whole Foods Market, making it a
                  great choice for frequent shoppers. For example, spending £500
                  a month on Amazon could earn £15 in cashback—£180
                  annually—which can be used for future purchases or as a
                  statement credit. This is especially valuable during events
                  like Prime Day or Black Friday where higher spending can lead
                  to even greater rewards.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  At Whole Foods Market, known for its organic and premium
                  products, the same 3% cashback applies, offering savings for
                  health-conscious shoppers. This feature makes the card an
                  excellent tool for maximising rewards on both online and
                  grocery purchases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  2% cashback at restaurants, petrol stations and pharmacies:
                  Benefits for your daily life
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Amazon Rewards Visa Credit Card offers 2% cashback on
                  everyday purchases at restaurants, petrol stations and
                  pharmacies, adding value to your daily spending. For example,
                  spending £200 a month on fuel earns £4 monthly cashback, while
                  dining out or shopping at pharmacies also helps you accumulate
                  rewards.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  This 2% cashback feature makes the card a versatile choice,
                  benefiting not just Amazon shoppers but anyone looking to save
                  on essential purchases. Over a year, these rewards can add up
                  to meaningful savings for your budget.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  1% cashback on all other purchases: Save everywhere
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Amazon Rewards Visa Credit Card offers 1% cashback on all
                  purchases outside specific categories, ensuring every
                  transaction earns rewards. Whether you're shopping for
                  clothes, paying bills or travelling, this feature helps you
                  accumulate savings effortlessly.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  For example, spending £1000 a month earns £10 in cashback—£120
                  annually—which can be applied to your balance or future Amazon
                  purchases. This universal cashback makes the card a flexible
                  choice for any lifestyle.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  No annual fees: Maximise your rewards without paying more
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Amazon Rewards Visa Credit Card stands out with no annual
                  fees, ensuring all rewards you earn translate to net savings.
                  Unlike many cards with fees that reduce reward value, this
                  card lets you fully benefit from its cashback programme.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Without an annual fee, you can use the card freely—whether for
                  occasional or daily purchases—knowing every reward adds value
                  without extra costs.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Maximise Your Rewards with Flexibility and Savings
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  The Amazon Rewards Visa Credit Card offers 3% cashback at
                  Amazon and Whole Foods, 2% at restaurants, petrol stations and
                  pharmacies, and 1% on all other purchases—all with no annual
                  fees. Before applying, ensure you meet the eligibility
                  criteria such as credit score and income requirements to take
                  full advantage of its benefits. It's a versatile option for
                  maximising rewards and saving on everyday expenses.
                </p>

                <div className="text-center my-8">
                  <Link href="/financial-solutions/amazon-rewards-visa-credit-card-requirements">
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Requirements
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
