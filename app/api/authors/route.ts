import { NextResponse } from "next/server";
import authors from "@/lib/data/authors.json";
import { apiLogger } from "@/lib/logger";

/**
 * API route to retrieve authors data
 *
 * Used by the AIContentDisclaimer component to randomly select an author
 * for attribution in AI-generated content
 */
export async function GET() {
  try {
    return NextResponse.json(authors);
  } catch (error) {
    apiLogger.error("Error fetching authors data", error);
    return NextResponse.json(
      { error: "Failed to load authors data" },
      { status: 500 },
    );
  }
}
