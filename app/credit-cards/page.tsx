import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import CreditCardsClient from "./page-client";

const routePath = "/credit-cards";

export const metadata = createRouteMetadata(routePath);

export default function CreditCardsPage() {
  return (
    <>
      <CreditCardsClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
