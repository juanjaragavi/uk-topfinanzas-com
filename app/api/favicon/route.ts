import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// This is a fallback route for favicon.ico requests
export async function GET(request: NextRequest) {
  try {
    // Try to read the favicon.ico from the public directory
    const faviconPath = join(process.cwd(), "public", "favicon.ico");
    const faviconBuffer = readFileSync(faviconPath);

    // Return the favicon with appropriate headers
    return new NextResponse(faviconBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/x-icon",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving favicon:", error);

    // If there's an error, try to serve the PNG version instead
    try {
      const faviconPngPath = join(process.cwd(), "public", "favicon.png");
      const faviconPngBuffer = readFileSync(faviconPngPath);

      return new NextResponse(faviconPngBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch (fallbackError) {
      console.error("Error serving fallback favicon:", fallbackError);
      return new NextResponse(null, { status: 404 });
    }
  }
}
