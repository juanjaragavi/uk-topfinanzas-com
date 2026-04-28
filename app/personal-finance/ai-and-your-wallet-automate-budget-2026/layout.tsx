import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const routePath = "/personal-finance/ai-and-your-wallet-automate-budget-2026";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
