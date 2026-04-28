import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import AboutUsClient from "./page-client";

const routePath = "/about-us";

export const metadata = createRouteMetadata(routePath);

export default function AboutUsPage() {
  return (
    <>
      <AboutUsClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
