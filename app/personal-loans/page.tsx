import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import PersonalLoansClient from "./page-client";

const routePath = "/personal-loans";

export const metadata = createRouteMetadata(routePath);

export default function PersonalLoansPage() {
  return (
    <>
      <PersonalLoansClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
