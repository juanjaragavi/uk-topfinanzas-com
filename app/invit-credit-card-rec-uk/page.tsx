"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitCreditCardRecUKPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  const handleRevealCard = () => {
    setIsShuffling(true);
    // Simulate shuffling animation for 2 seconds, then reveal the card
    setTimeout(() => {
      setIsShuffling(false);
      setCardRevealed(true);
    }, 2000);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="text-left bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-teal-700 font-bold text-xl md:text-2xl leading-6 md:leading-8 mb-4">
              We’ve discovered a few cards that unlock remarkable boundaries for
              you.
            </h2>
            <p className="text-center text-sm text-gray-700 mb-2">
              Please select the limit option below that aligns with your daily
              requirements:
            </p>
            <p className="text-center text-xs text-gray-500 mb-6">
              By Top Finance
            </p>

            <div
              id="uk_topfinanzas_1"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            {/* Centered limit options (green buttons), per US layout */}
            <div className="grid grid-cols-1 gap-3 my-4">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 w-full rounded-md">
                £1000 CREDIT CARD
              </Button>
              <Button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 w-full rounded-md">
                £2500 CREDIT CARD
              </Button>
              <Button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 w-full rounded-md">
                £5000 CREDIT CARD
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 w-full rounded-md">
                MORE OPTIONS
              </Button>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6">
              Why Choose Our Credit Card Recommender?
            </h2>

            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-teal-600 px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Personalised Options</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-teal-600 px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Completely Free</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-teal-600 px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Expert Advice</span>
                </div>
              </div>
            </div>

            <p className="text-left text-sm leading-5 text-gray-800 mb-4">
              Our recommendations are designed to connect your financial goals
              with cards that suit your needs. From cashback to travel rewards,
              we give you clear, easy-to-understand options so you can make
              informed decisions.
            </p>

            {/* UK product quick links – six CTAs (keep styling/structure consistent) */}
            <div className="grid grid-cols-1 gap-3 my-4">
              <Link href="/financial-solutions/barclaycard-avios-plus">
                <Button className="bg-[#0F766E] hover:bg-[#0D6560] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  Barclaycard Avios Plus
                </Button>
              </Link>
              <Link href="/financial-solutions/lloyds-bank-credit-card">
                <Button className="bg-[#0F766E] hover:bg-[#0D6560] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  Lloyds Bank Credit Card
                </Button>
              </Link>
              <Link href="/financial-solutions/curve-credit-card">
                <Button className="bg-[#0F766E] hover:bg-[#0D6560] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  Curve Credit Card
                </Button>
              </Link>
              <Link href="/financial-solutions/santander-uk-credit-card">
                <Button className="bg-[#0F766E] hover:bg-[#0D6560] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  Santander UK Credit Card
                </Button>
              </Link>
              <Link href="/financial-solutions/starling-bank-credit-card">
                <Button className="bg-[#0F766E] hover:bg-[#0D6560] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  Starling Bank Credit Card
                </Button>
              </Link>
              <Link href="/financial-solutions/natwest-credit-card">
                <Button className="bg-[#0F766E] hover:bg-[#0D6560] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  NatWest Credit Card
                </Button>
              </Link>
            </div>

            <div
              id="uk_topfinanzas_2"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            {/* Well Done info panel + accept CTA (matching US layout) */}
            <section className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 relative">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-teal-600 rounded-l-md"
                  aria-hidden="true"
                />
                <h3 className="text-teal-700 font-semibold mb-2">Well Done</h3>
                <p className="text-sm text-gray-700">
                  Your card is prepared for you. Select the limit option that
                  suits you best and begin enjoying perks like 0% APR, cashback,
                  points, and more. If none of these options fits your
                  preferences, we have additional alternatives available for
                  your consideration.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/financial-solutions/barclaycard-avios-plus">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 w-full rounded-md uppercase tracking-wide">
                    ACCEPT RECOMMENDATION
                  </Button>
                </Link>
              </div>
            </section>

            <div className="mt-6 mb-6 border rounded">
              {/* FAQ Item 1: Benefits */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("benefits")}
                aria-expanded={openFaq === "benefits"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "benefits" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  What are the benefits of a card with no annual fee?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "benefits" ? "transform rotate-180" : "" // Changed to rotate for better icon indication
                  } ${
                    openFaq === "benefits" ? "text-green-500" : "text-sky-700"
                  }`}
                  aria-hidden="true" // Hide decorative icon from screen readers
                >
                  ▼ {/* Use a consistent down arrow, rotation handled by CSS */}
                </span>
              </button>
              {openFaq === "benefits" && (
                <div className="p-4 text-gray-700" id="faq-benefits-content">
                  <p className="text-left">
                    A card with no annual fee helps you save on recurring costs
                    while enjoying key benefits such as cashback or points for
                    purchases.
                  </p>
                </div>
              )}

              {/* FAQ Item 2: Cashback */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("cashback")}
                aria-expanded={openFaq === "cashback"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "cashback" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  How does cashback work?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "cashback" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "cashback" ? "text-green-500" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "cashback" && (
                <div className="p-4 text-gray-700" id="faq-cashback-content">
                  <p className="text-left">
                    You receive a percentage of your purchases as cash that you
                    can use to reduce balances or spend as you prefer.
                  </p>
                </div>
              )}

              {/* FAQ Item 3: Travelers */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("travelers")}
                aria-expanded={openFaq === "travelers"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "travelers" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  What's the best option for travellers?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "travelers" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "travelers" ? "text-green-500" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "travelers" && (
                <div className="p-4 text-gray-700" id="faq-travelers-content">
                  <p className="text-left">
                    Cards with air miles accumulation or access to VIP lounges
                    are ideal for frequent travellers, allowing you to save on
                    flights and enjoy exclusive benefits.
                  </p>
                </div>
              )}

              {/* FAQ Item 4: Online */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
                onClick={() => toggleFaq("online")}
                aria-expanded={openFaq === "online"}
              >
                <h3
                  className={`font-medium text-lg leading-6 ${
                    openFaq === "online" ? "text-green-500" : "text-sky-600"
                  }`}
                >
                  Is it safe to use credit cards online?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "online" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "online" ? "text-green-500" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "online" && (
                <div className="p-4 text-gray-700" id="faq-online-content">
                  <p className="text-left">
                    Yes, many cards offer advanced technology such as dynamic
                    CVV and instant alerts to protect your transactions.
                  </p>
                </div>
              )}
            </div>

            {/* Stay Tuned panel (matching US layout copy, UK spelling) */}
            <section className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 relative">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-teal-600 rounded-l-md"
                  aria-hidden="true"
                />
                <h3 className="text-gray-800 font-semibold mb-2">Stay Tuned</h3>
                <p className="text-sm text-gray-700">
                  If you're looking for additional assistance in boosting your
                  credit score or optimising your credit card usage while
                  avoiding banks capitalising on your situation, please explore
                  the information below as well. We offer valuable resources
                  tailored to your specific needs.
                </p>
              </div>
            </section>

            <p className="text-left text-sm leading-5 text-gray-800 mb-8">
              Make your credit card an ally in achieving your financial goals.
              From cashback to travel rewards, choose an option that simplifies
              your life and maximises your benefits. Explore our recommendations
              and find the card that best suits you.
            </p>

            {/* Bottom promotional banner (HTML markup as requested) */}
            <div className="my-8 text-left sm:text-left">
              <div className="mx-auto w-full md:w-8/12 border rounded-xl p-4 bg-white">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Image
                    src="https://media.topfinanzas.com/images/credit-card-varity.png"
                    alt="UK Credit Cards"
                    width={640}
                    height={360}
                    className="w-56 h-auto"
                  />
                  <p className="text-[#B45309] text-sm font-semibold">
                    🔔 Limited offer!
                  </p>
                  <h4 className="text-gray-800 font-bold">
                    CARD WITH NO ANNUAL FEE
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The most requested among our readers! Check it out today...
                  </p>
                  <Link
                    href="/financial-solutions/barclaycard-avios-plus"
                    className="w-full"
                  >
                    <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold py-2 w-full rounded-md">
                      SEE HOW TO APPLY
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
