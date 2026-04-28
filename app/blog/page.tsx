import { JsonLd } from "@/components/seo/json-ld";
import { createRouteMetadata, createRouteStructuredData } from "@/lib/seo";
import BlogArchiveClient from "./page-client";

const routePath = "/blog";

export const metadata = createRouteMetadata(routePath);

export default function BlogArchivePage() {
  return (
    <>
      <BlogArchiveClient />
      <JsonLd data={createRouteStructuredData(routePath)} />
    </>
  );
}
