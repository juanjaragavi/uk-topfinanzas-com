import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import PersonalFinanceClient from "./page-client";

const routePath = "/personal-finance";

export const metadata = createRouteMetadata(routePath);

export default function PersonalFinancePage() {
  return (
    <>
      <PersonalFinanceClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
