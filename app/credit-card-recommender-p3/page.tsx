"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CreditCardRecommenderPage() {
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
            <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 leading-5">
              Discover Your Ideal Credit Card
            </h1>

            <p className="text-left text-xs leading-4 text-gray-800 mb-5">
              Finding the right card is simple. Maximise rewards, organise your
              spending and enjoy exclusive benefits. Explore and choose the
              ideal card for you!
            </p>

            <div
              id="uk_topfinanzas_1"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <AnimatePresence mode="wait">
                {!cardRevealed && !isShuffling ? (
                  <motion.div
                    key="reveal-button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Button
                      onClick={handleRevealCard}
                      className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Reveal Your Recommended Card</span>
                        <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                          <span className="text-[#F97316] text-xs">🎴</span>
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ) : isShuffling ? (
                  <motion.div
                    key="shuffling"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className="w-16 h-24 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-lg shadow-lg flex items-center justify-center"
                          animate={{
                            y: [0, -10, 0],
                            rotateY: [0, 180, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: 2,
                            delay: index * 0.2,
                            ease: "easeInOut",
                          }}
                        >
                          <span className="text-white text-xl font-bold">
                            ?
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.p
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-sm text-gray-600 font-medium"
                    >
                      Shuffling cards to find your perfect match...
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed-card"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Link href="/financial-solutions/starling-bank-credit-card">
                      <Button className="bg-[#250E62] hover:bg-[#250E62] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                        <div className="flex items-center space-x-1">
                          <span>🌟 Starling Bank Credit Card</span>
                          <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                            <span className="text-[#250E62] text-xs">➔</span>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6">
              Why Choose Our Credit Card Recommender?
            </h2>

            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#F97316] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Personalised Options</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#F97316] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Completely Free</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#F97316] px-1 flex items-center justify-center mr-2">
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

            <div
              id="uk_topfinanzas_2"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <p className="text-left text-sm leading-5 text-gray-800 mb-5">
              With our guide, you'll transform your credit card into a tool that
              simplifies your finances and helps you achieve your goals without
              complications.
            </p>

            <div className="mt-6 mb-4">
              <Link href="/financial-solutions/virgin-money-credit-card">
                <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span>Our Top Recommendation</span>
                    <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                      <span className="text-[#F97316] text-xs">➔</span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <p className="text-left text-sm mb-6">
              <Link
                className="text-blue-500"
                href="/financial-solutions/virgin-money-credit-card-requirements"
              >
                Learn How to Apply
              </Link>
            </p>

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

            <p className="text-left text-sm leading-5 text-gray-800 mb-8">
              Make your credit card an ally in achieving your financial goals.
              From cashback to travel rewards, choose an option that simplifies
              your life and maximises your benefits. Explore our recommendations
              and find the card that best suits you.
            </p>

            <div className="my-8 text-left sm:text-left">
              <Link href="/financial-solutions/barclaycard-avios-plus">
                <Image
                  src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                  alt="Barclaycard Avios Plus Credit Card"
                  width={900}
                  height={507}
                  className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                  priority
                  sizes="(max-width: 767px) 768px, 512px" // Added sizes based on layout constraints
                />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
