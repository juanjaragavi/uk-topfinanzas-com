import CreditCardForm from "@/components/credit-card-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="w-full p-0">
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
