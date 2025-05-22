"use client";

import CreditCardForm from "@/components/credit-card-form";
import AdController from "@/components/ads/AdController";
import { Suspense } from "react";

export default function Home() {
  // Registered users can now answer questions again (Step 1 & 2) while skipping Step 3

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
