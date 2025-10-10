import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// --- Simplified Logic for Debugging File Existence ---

// Function to scan a directory and check for metadata.ts existence
async function checkMetadataExistence(
  dirPath: string,
  categoryName: string,
): Promise<void> {
  // Changed return type
  const fullDirPath = path.join(process.cwd(), dirPath);
  console.log(`[checkMetadataExistence] Scanning directory: ${fullDirPath}`);

  try {
    const entries = await fs.readdir(fullDirPath, { withFileTypes: true });
    console.log(
      `[checkMetadataExistence] Found ${entries.length} entries in ${dirPath}`,
    );

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const slug = entry.name;
        console.log(
          `[checkMetadataExistence] Processing directory entry: ${slug}`,
        );
        if (slug.endsWith("-requirements") || slug.endsWith("-application")) {
          console.log(
            `[checkMetadataExistence] Skipping auxiliary directory: ${slug}`,
          );
          continue;
        }

        const metadataPath = path.join(fullDirPath, slug, "metadata.ts");
        try {
          await fs.access(metadataPath, fs.constants.F_OK); // Check if file exists and is accessible
          console.log(
            `[checkMetadataExistence] FOUND metadata.ts for slug: ${slug} in ${categoryName}`,
          );
        } catch (accessError) {
          // Log only if it's not a 'Not Found' error, or specifically log 'Not Found'
          if (
            accessError instanceof Error &&
            (accessError as NodeJS.ErrnoException).code === "ENOENT"
          ) {
            console.warn(
              `[checkMetadataExistence] NOT FOUND metadata.ts for slug: ${slug} in ${categoryName} (Path: ${metadataPath})`,
            );
          } else {
            console.error(
              `[checkMetadataExistence] Error accessing metadata.ts for slug: ${slug} in ${categoryName}:`,
              accessError,
            );
          }
        }
      } else {
        console.log(
          `[checkMetadataExistence] Skipping non-directory entry: ${entry.name}`,
        );
      }
    }
  } catch (error) {
    console.error(
      `[checkMetadataExistence] Error reading directory ${fullDirPath}:`,
      error,
    );
  }
  console.log(`[checkMetadataExistence] Finished scanning ${dirPath}.`);
}

export async function GET() {
  try {
    console.log(
      "API route /api/posts called (DEBUGGING - Checking Metadata Existence)",
    );

    // Run checks but don't collect posts for now
    await checkMetadataExistence("app/personal-finance", "Personal Finance");
    await checkMetadataExistence(
      "app/financial-solutions",
      "Financial Solutions",
    );

    // Return an empty array for now to prevent frontend errors,
    // focus is on checking the server logs for the existence messages.
    console.log(
      "API route finished checks. Returning empty array for debugging.",
    );
    return NextResponse.json([]);
  } catch (error) {
    console.error("Failed to get posts in API route:", error);
    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 },
    );
  }
}
