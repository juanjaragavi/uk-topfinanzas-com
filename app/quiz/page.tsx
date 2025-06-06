"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components to avoid SSR issues
const CreditCardForm = dynamic(() => import("@/components/credit-card-form"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center p-8 min-h-[60vh]">
      <div className="animate-pulse text-gray-600">Loading quiz...</div>
    </div>
  ),
});

const AdController = dynamic(() => import("@/components/ads/AdController"), {
  ssr: false,
});

export default function Home() {
  // Registered users can now answer questions again (Step 1 & 2) while skipping Step 3

  return (
    <section className="w-full p-0">
      {/* Disable ads specifically on this page */}
      <AdController disableAds={true} />
      <CreditCardForm />
    </section>
  );
}
