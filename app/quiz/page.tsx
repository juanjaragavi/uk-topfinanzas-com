"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreditCardForm from "@/components/credit-card-form";
import AdController from "@/components/ads/AdController";
import {
  buildRedirectPath,
  readRecommenderLockFromClient,
} from "@/lib/navigation/recommender-lock";

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const lock = readRecommenderLockFromClient();
    if (!lock) {
      return;
    }

    const destination = buildRedirectPath(lock);

    if (!destination) {
      return;
    }

    if (typeof window !== "undefined") {
      const currentUrl = `${window.location.pathname}${window.location.search}`;
      if (destination === currentUrl) {
        return;
      }
    }

    setIsRedirecting(true);

    // Use replace to avoid altering the history stack any further
    router.replace(destination);
  }, [router]);

  if (isRedirecting) {
    return (
      <section className="w-full p-0">
        <AdController disableAds={true} />
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <p className="text-sm text-gray-600 text-center">
            Redirecting you to your personalised credit card recommendations…
          </p>
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
