"use client";

import CreditCardForm from "@/components/credit-card-form";
import AdController from "@/components/ads/AdController";

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
