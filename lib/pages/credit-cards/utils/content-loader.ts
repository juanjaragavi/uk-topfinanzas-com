/**
 * Content loading utility for dynamically loaded JSON content
 * This allows the system to load and validate content against TypeScript interfaces
 */

import fs from "fs";
import path from "path";

/**
 * Load content from a JSON file and validate it against a TypeScript interface
 * @param contentPath Path to the content JSON file (relative to project root)
 * @returns The content object with proper typing
 */
export function loadContent<T>(contentPath: string): T {
  // Resolve the absolute path to the content file
  const absolutePath = path.join(process.cwd(), contentPath);

  try {
    // Read the file synchronously (this is server-side code that runs at build time)
    const fileContent = fs.readFileSync(absolutePath, "utf8");

    // Parse the JSON content
    const content = JSON.parse(fileContent) as T;

    // Return the typed content
    return content;
  } catch (error) {
    console.error(`Error loading content from ${contentPath}:`, error);
    throw new Error(`Failed to load content from ${contentPath}`);
  }
}
