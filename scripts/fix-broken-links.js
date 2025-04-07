/**
 * Broken Internal Link Finder and Fixer for uk.topfinanzas.com
 *
 * This script:
 * 1. Scans all TSX/MDX/JSX files for internal links
 * 2. Verifies if the linked pages exist
 * 3. Generates a report of broken links
 * 4. Suggests replacements or creates redirects for broken links
 * 5. Optionally auto-fixes common issues
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const rootDir = path.resolve(__dirname, "..");
const appDir = path.join(rootDir, "app");
const contentDir = path.join(rootDir, "content");
const componentsDir = path.join(rootDir, "components");
const publicDir = path.join(rootDir, "public");

// Map of known replacements for common broken links
const knownReplacements = {
  "/personal-finance/travel-credit-cards/":
    "/personal-finance/travel-credit-cards", // Already fixed with our new page
  "/blog/understanding-credit-card-rates/":
    "/personal-finance/understanding-credit-card-interest-rates",
  "/credit-card-types/": "/personal-finance/credit-card-types-benefits",
  "/blog/managing-debt/": "/personal-finance/getting-out-of-debt",
  "/blog/best-credit-cards/": "/personal-finance/best-rewards-credit-cards",
  "/best-uk-loans/": "/personal-finance/best-personal-loans",
};

// URL patterns to identify internal links
const linkPatterns = [
  // Next.js Link component
  {
    regex: /href=["']([^"']*?)["']/g,
    fileTypes: [".tsx", ".jsx", ".mdx"],
    isNextLink: true,
  },
  // Regular anchor tags
  {
    regex: /<a[^>]*?href=["']([^"']*?)["'][^>]*?>/g,
    fileTypes: [".tsx", ".jsx", ".mdx"],
    isNextLink: false,
  },
  // Markdown links
  {
    regex: /\[([^\]]+)\]\(([^)]+)\)/g,
    fileTypes: [".mdx", ".md"],
    isMarkdown: true,
  },
];

// Check if a path exists within the app directory structure
function pageExists(linkPath) {
  // Remove any query params or hash
  const cleanPath = linkPath.split("?")[0].split("#")[0];

  // Skip external links, mailto links, tel links, etc.
  if (
    cleanPath.startsWith("http") ||
    cleanPath.startsWith("mailto:") ||
    cleanPath.startsWith("tel:") ||
    cleanPath === "/"
  ) {
    return true;
  }

  // Check for file existence in app directory
  let possiblePaths = [
    path.join(appDir, cleanPath.slice(1), "page.tsx"), // /about -> app/about/page.tsx
    path.join(appDir, cleanPath.slice(1) + ".tsx"), // /about -> app/about.tsx
    path.join(appDir, cleanPath.slice(1), "index.tsx"), // /about -> app/about/index.tsx
  ];

  // Also check .jsx extensions
  possiblePaths = [
    ...possiblePaths,
    path.join(appDir, cleanPath.slice(1), "page.jsx"),
    path.join(appDir, cleanPath.slice(1) + ".jsx"),
    path.join(appDir, cleanPath.slice(1), "index.jsx"),
  ];

  // Check for static files in public directory
  possiblePaths.push(path.join(publicDir, cleanPath.slice(1)));

  // For root URLs like "/", check for index files
  if (cleanPath === "/") {
    possiblePaths.push(path.join(appDir, "page.tsx"));
    possiblePaths.push(path.join(appDir, "index.tsx"));
  }

  return possiblePaths.some((p) => fs.existsSync(p));
}

// Find a replacement for a broken link
function findReplacement(brokenLink) {
  // Check known replacements first
  if (knownReplacements[brokenLink]) {
    return knownReplacements[brokenLink];
  }

  // Handle trailing slash variations
  const withTrailingSlash = brokenLink.endsWith("/")
    ? brokenLink
    : brokenLink + "/";
  const withoutTrailingSlash = brokenLink.endsWith("/")
    ? brokenLink.slice(0, -1)
    : brokenLink;

  if (pageExists(withTrailingSlash)) {
    return withTrailingSlash;
  }

  if (pageExists(withoutTrailingSlash)) {
    return withoutTrailingSlash;
  }

  // Try to find similar pages by removing parts of the path
  const pathParts = withoutTrailingSlash.split("/").filter(Boolean);
  let currentPath = "";

  for (let i = 0; i < pathParts.length; i++) {
    currentPath += "/" + pathParts[i];
    if (pageExists(currentPath)) {
      return currentPath; // Return the closest existing parent path
    }
  }

  return null; // No suitable replacement found
}

// Extract links from a file
function extractLinks(filePath, content) {
  const fileExt = path.extname(filePath);
  const links = [];

  linkPatterns.forEach((pattern) => {
    if (pattern.fileTypes.includes(fileExt)) {
      let match;

      if (pattern.isMarkdown) {
        // Handle markdown links differently
        while ((match = pattern.regex.exec(content)) !== null) {
          const linkText = match[1];
          const linkUrl = match[2];

          if (linkUrl.startsWith("/")) {
            links.push({
              text: linkText,
              url: linkUrl,
              match: match[0],
              isExternal: false,
              isNextLink: false,
              isMarkdown: true,
            });
          }
        }
      } else {
        // Handle JSX/TSX links
        while ((match = pattern.regex.exec(content)) !== null) {
          const linkUrl = match[1];

          if (linkUrl.startsWith("/")) {
            links.push({
              url: linkUrl,
              match: match[0],
              isExternal: false,
              isNextLink: pattern.isNextLink,
              isMarkdown: false,
            });
          }
        }
      }
    }
  });

  return links;
}

// Fix broken links in a file
function fixBrokenLinks(filePath, autoFix = false) {
  console.log(`Checking links in: ${filePath}`);
  let content, originalContent;

  try {
    content = fs.readFileSync(filePath, "utf8");
    originalContent = content;
  } catch (err) {
    console.error(`Error reading file ${filePath}: ${err.message}`);
    return { fixed: 0, broken: 0 };
  }

  const links = extractLinks(filePath, content);
  let brokenCount = 0;
  let fixedCount = 0;

  links.forEach((link) => {
    // Skip external links
    if (link.url.startsWith("http")) return;

    // Check if the link is valid
    if (!pageExists(link.url)) {
      brokenCount++;
      console.log(`  Broken link found: ${link.url}`);

      // Find a replacement
      const replacement = findReplacement(link.url);

      if (replacement) {
        console.log(`  Suggested replacement: ${replacement}`);

        if (autoFix) {
          // Replace the link in the content
          if (link.isMarkdown) {
            const newMarkdownLink = link.match.replace(link.url, replacement);
            content = content.replace(link.match, newMarkdownLink);
          } else {
            content = content.replace(
              `href="${link.url}"`,
              `href="${replacement}"`
            );
            content = content.replace(
              `href='${link.url}'`,
              `href='${replacement}'`
            );
          }

          fixedCount++;
          console.log(`  Fixed link with: ${replacement}`);
        }
      } else {
        console.log(
          `  No replacement found. Consider creating content for this path.`
        );
      }
    }
  });

  // Save the file if changes were made
  if (autoFix && content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`  Saved ${fixedCount} link fixes in ${filePath}`);
  }

  return { fixed: fixedCount, broken: brokenCount };
}

// Recursively process all files in a directory
function processDirectory(dir, autoFix = false) {
  let stats = { fixed: 0, broken: 0, processed: 0 };

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file === "node_modules" || file === ".next") continue;

      const subStats = processDirectory(filePath, autoFix);
      stats.fixed += subStats.fixed;
      stats.broken += subStats.broken;
      stats.processed += subStats.processed;
    } else {
      const ext = path.extname(file);
      if ([".tsx", ".jsx", ".mdx", ".md"].includes(ext)) {
        const fileStats = fixBrokenLinks(filePath, autoFix);
        stats.fixed += fileStats.fixed;
        stats.broken += fileStats.broken;
        stats.processed++;
      }
    }
  }

  return stats;
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  const autoFix = args.includes("--fix");

  console.log(
    `Starting broken link detection${autoFix ? " and fixing" : ""}...`
  );
  console.log("This may take a few moments...");

  // Process all directories
  const appStats = processDirectory(appDir, autoFix);
  const contentStats = processDirectory(contentDir, autoFix);
  const componentsStats = processDirectory(componentsDir, autoFix);

  const totalStats = {
    processed:
      appStats.processed + contentStats.processed + componentsStats.processed,
    broken: appStats.broken + contentStats.broken + componentsStats.broken,
    fixed: appStats.fixed + contentStats.fixed + componentsStats.fixed,
  };

  console.log("\nBroken Link Analysis Complete:");
  console.log(`- Total files processed: ${totalStats.processed}`);
  console.log(`- Total broken links found: ${totalStats.broken}`);

  if (autoFix) {
    console.log(`- Total links automatically fixed: ${totalStats.fixed}`);
    console.log(
      `- Remaining broken links: ${totalStats.broken - totalStats.fixed}`
    );
  } else {
    console.log("\nRun with --fix option to automatically fix known issues:");
    console.log("node scripts/fix-broken-links.js --fix");
  }

  console.log("\nNext steps:");
  console.log("1. Review remaining broken links");
  console.log("2. Create content for missing pages or update redirects");
  console.log("3. Update sitemap.xml with valid URLs");
}

// Run the main function
main();
