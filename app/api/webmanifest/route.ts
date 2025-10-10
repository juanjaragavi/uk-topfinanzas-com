import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// This is a route to handle site.webmanifest requests
export async function GET() {
  try {
    // Read the site.webmanifest from the public directory
    const manifestPath = join(process.cwd(), "public", "site.webmanifest");
    const manifestContent = readFileSync(manifestPath, "utf-8");

    // Return the manifest with appropriate headers
    return new NextResponse(manifestContent, {
      status: 200,
      headers: {
        "Content-Type": "application/manifest+json",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Error serving webmanifest:", error);
    return new NextResponse(null, { status: 404 });
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}
