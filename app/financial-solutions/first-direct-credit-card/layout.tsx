import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const routePath = "/financial-solutions/first-direct-credit-card";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
