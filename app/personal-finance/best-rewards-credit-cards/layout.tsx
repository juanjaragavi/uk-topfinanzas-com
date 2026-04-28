import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const routePath = "/personal-finance/best-rewards-credit-cards";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
