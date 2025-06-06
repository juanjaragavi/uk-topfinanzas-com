"use client";

import { useEffect, useState } from "react";
import CreditCardForm from "@/components/credit-card-form";
import AdController from "@/components/ads/AdController";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Registered users can now answer questions again (Step 1 & 2) while skipping Step 3

  if (!isClient) {
    return (
      <section className="w-full p-0">
        <div className="flex justify-center items-center p-8 min-h-[60vh]">
          <div className="animate-pulse text-gray-600">Loading quiz...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full p-0">
      {/* Disable ads specifically on this page */}
      <AdController disableAds={true} />
      <CreditCardForm />
    </section>
  );
}
