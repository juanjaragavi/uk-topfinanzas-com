import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import ContactUsClient from "./page-client";

const routePath = "/contact-us";

export const metadata = createRouteMetadata(routePath);

export default function ContactUsPage() {
  return (
    <>
      <ContactUsClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
