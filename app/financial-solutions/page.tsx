import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import FinancialSolutionsClient from "./page-client";

const routePath = "/financial-solutions";

export const metadata = createRouteMetadata(routePath);

export default function FinancialSolutionsPage() {
  return (
    <>
      <FinancialSolutionsClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
