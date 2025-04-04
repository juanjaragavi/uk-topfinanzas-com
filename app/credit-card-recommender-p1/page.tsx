"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreditCardRecommenderPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 leading-5">
              Discover Your Ideal Credit Card
            </h1>

            <p className="text-xs leading-4 text-gray-800 mb-5">
              Finding the right card is simple. Maximise rewards, organise your
              spending and enjoy exclusive benefits. Explore and choose the
              ideal card for you!
            </p>

            <div className="my-8">
              <Link href="/financial-solutions/barclaycard-avios-plus">
                <Button className="bg-[#80E67D] hover:bg-[#6AD167] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span>Accept Recommendation</span>
                    <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                      <span className="text-[#80E67D] text-xs">➔</span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6">
              Why Choose Our Credit Card Recommender?
            </h2>

            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#80E67D] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Personalised Options</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#80E67D] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Completely Free</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 rounded-full bg-[#80E67D] px-1 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Expert Advice</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-5 text-gray-800 mb-4">
              Our recommendations are designed to connect your financial goals
              with cards that suit your needs. From cashback to travel rewards,
              we give you clear, easy-to-understand options so you can make
              informed decisions.
            </p>

            <p className="text-sm leading-5 text-gray-800 mb-5">
              With our guide, you'll transform your credit card into a tool that
              simplifies your finances and helps you achieve your goals without
              complications.
            </p>

            <div className="mt-6 mb-4">
              <Link href="/financial-solutions/halifax-world-elite-mastercard">
                <Button className="bg-[#80E67D] hover:bg-[#6AD167] text-white font-medium text-md py-2 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span>Our Top Recommendation</span>
                    <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                      <span className="text-[#80E67D] text-xs">➔</span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm mb-6">
              <Link
                className="text-blue-500"
                href="/financial-solutions/halifax-world-elite-mastercard-requirements"
              >
                Learn How to Apply
              </Link>
            </p>

            <div className="mt-6 mb-6 border rounded">
              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleFaq("benefits")}
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
                    openFaq === "benefits"
                      ? "transform text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "benefits" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "benefits" && (
                <div className="p-4 text-gray-700">
                  <p>
                    A card with no annual fee helps you save on recurring costs
                    while enjoying key benefits such as cashback or points for
                    purchases.
                  </p>
                </div>
              )}

              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleFaq("cashback")}
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
                    openFaq === "cashback"
                      ? "transform text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "cashback" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "cashback" && (
                <div className="p-4 text-gray-700">
                  <p>
                    You receive a percentage of your purchases as cash that you
                    can use to reduce balances or spend as you prefer.
                  </p>
                </div>
              )}

              <div
                className="flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleFaq("travelers")}
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
                    openFaq === "travelers"
                      ? "transform text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "travelers" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "travelers" && (
                <div className="p-4 text-gray-700">
                  <p>
                    Cards with air miles accumulation or access to VIP lounges
                    are ideal for frequent travellers, allowing you to save on
                    flights and enjoy exclusive benefits.
                  </p>
                </div>
              )}

              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFaq("online")}
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
                    openFaq === "online"
                      ? "transform -rotate-90 text-green-500"
                      : "text-sky-700"
                  }`}
                >
                  {openFaq === "online" ? "−" : "+"}
                </span>
              </div>
              {openFaq === "online" && (
                <div className="p-4 text-gray-700">
                  <p>
                    Yes, many cards offer advanced technology such as dynamic
                    CVV and instant alerts to protect your transactions.
                  </p>
                </div>
              )}
            </div>

            <p className="text-sm leading-5 text-gray-800 mb-8">
              Make your credit card an ally in achieving your financial goals.
              From cashback to travel rewards, choose an option that simplifies
              your life and maximises your benefits. Explore our recommendations
              and find the card that best suits you.
            </p>

            <div className="my-8">
              <Link href="/financial-solutions/barclaycard-avios-plus">
                <Image
                  src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.png"
                  alt="Barclaycard Avios Plus Credit Card"
                  width={1000}
                  height={563}
                  className="mx-auto w-full md:w-8/12 h-auto rounded-lg"
                  priority
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
