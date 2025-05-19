"use client";

import CreditCardForm from "@/components/credit-card-form";
import AdController from "@/components/ads/AdController";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const quizCompleted = Cookies.get("quizCompleted");
    if (quizCompleted) {
      router.push("/credit-card-recommender-p1");
    }
  }, [router]);

  return (
    <section className="w-full p-0">
      {/* Disable ads specifically on this page */}
      <AdController disableAds={true} />
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-8 min-h-[60vh]">
            <div className="animate-pulse text-gray-600">Loading quiz...</div>
          </div>
        }
      >
        <CreditCardForm />
      </Suspense>
    </section>
  );
}
