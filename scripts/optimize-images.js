/**
 * Image Optimization Script for uk.topfinanzas.com
 *
 * This script performs the following optimizations to improve LCP performance:
 * 1. Adds proper width/height attributes to reduce layout shifts
 * 2. Implements proper sizing using the Next.js Image component
 * 3. Ensures correct priority flag for above-the-fold images
 * 4. Implements proper sizes attribute for responsive images
 * 5. Transforms image URLs to use the CDN domain
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const rootDir = path.resolve(__dirname, "..");
const appDir = path.join(rootDir, "app");
const componentsDir = path.join(rootDir, "components");
const imageBaseUrl = "https://media.topfinanzas.com/images";

// Check if a file contains Image imports and usage
function containsNextImage(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return content.includes("import Image") && content.includes("<Image");
}

// Update Image components to include proper sizing and optimization
function optimizeImageComponents(filePath) {
  console.log(`Optimizing images in: ${filePath}`);
  let content = fs.readFileSync(filePath, "utf8");

  // Count original images
  const originalImagesCount = (content.match(/<Image/g) || []).length;

  // 1. Ensure all Image components have explicit width and height
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+(?!.*?(width|height))/g,
    '<Image src="$1" alt="$2" width={800} height={450} '
  );

  // 2. Add proper sizes attribute for responsive images
  content = content.replace(
    /<Image\s+([^>]*?)\s+fill\b([^>]*?)>/g,
    '<Image $1 fill$2 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" >'
  );

  // 3. Prioritize above-the-fold images (usually hero images)
  // Hero images are usually in the first sections of the page
  const lines = content.split("\n");
  let inHeroSection = false;
  let updatedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect hero sections (can be adjusted based on your markup patterns)
    if (
      line.includes('className="hero') ||
      line.includes('className="banner') ||
      (line.includes("<h1") && !inHeroSection)
    ) {
      inHeroSection = true;
    }

    // Add priority to hero images
    if (
      inHeroSection &&
      line.includes("<Image") &&
      !line.includes("priority")
    ) {
      updatedLines.push(line.replace(/<Image\s+/, "<Image priority "));
    } else {
      updatedLines.push(line);
    }

    // End of potential hero section
    if (inHeroSection && line.includes("</div>")) {
      inHeroSection = false;
    }
  }

  content = updatedLines.join("\n");

  // 4. Replace old image domain with CDN domain
  content = content.replace(
    /https:\/\/us\.topfinanzas\.com\/images/g,
    imageBaseUrl
  );

  // Count optimized images
  const optimizedImagesCount =
    (content.match(/priority/g) || []).length +
    (content.match(/sizes=/g) || []).length;

  fs.writeFileSync(filePath, content, "utf8");

  return {
    original: originalImagesCount,
    optimized: optimizedImagesCount,
  };
}

// Recursively find and process all TSX files
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let stats = { processed: 0, optimized: 0, total: 0 };

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subStats = processDirectory(filePath);
      stats.processed += subStats.processed;
      stats.optimized += subStats.optimized;
      stats.total += subStats.total;
    } else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
      // Check if file contains Next.js Image components
      if (containsNextImage(filePath)) {
        stats.total++;
        const result = optimizeImageComponents(filePath);
        stats.processed++;
        if (result.optimized > 0) {
          stats.optimized++;
        }
      }
    }
  }

  return stats;
}

// Main execution
console.log("Starting image optimization for better LCP performance...");

// Process app and components directories
const appStats = processDirectory(appDir);
const componentsStats = processDirectory(componentsDir);

const totalStats = {
  processed: appStats.processed + componentsStats.processed,
  optimized: appStats.optimized + componentsStats.optimized,
  total: appStats.total + componentsStats.total,
};

console.log("\nImage Optimization Complete:");
console.log(
  `- Total files processed: ${totalStats.processed}/${totalStats.total}`
);
console.log(`- Files with optimized images: ${totalStats.optimized}`);
console.log("\nNext steps:");
console.log("1. Run the build process to verify optimization impact");
console.log("2. Test LCP performance with PageSpeed Insights");
console.log(
  "3. Further adjust image sizes based on device viewport for optimal loading"
);
