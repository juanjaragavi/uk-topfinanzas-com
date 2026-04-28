import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import HomeClient from "./page-client";

const routePath = "/";

export const metadata = createRouteMetadata(routePath);

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
