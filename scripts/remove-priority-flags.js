#!/usr/bin/env node

/**
 * Script to remove priority={true} from blog posts and add loading="lazy"
 * Priority 2 implementation from Image Optimization Roadmap
 */

const fs = require("fs");
const path = require("path");

// Files to modify (blog posts and financial solutions)
const filesToModify = [
  // Personal Finance posts
  "app/personal-finance/getting-out-of-debt/page.tsx",
  "app/personal-finance/cashback-credit-cards/page.tsx",
  "app/personal-finance/page.tsx",
  "app/personal-finance/money-management-for-beginners/page.tsx",
  "app/personal-finance/best-rewards-credit-cards/page.tsx",
  "app/personal-finance/what-is-financial-health/page.tsx",
  "app/personal-finance/creating-a-budget-youll-actually-stick-to/page.tsx",
  "app/personal-finance/how-to-ask-for-a-raise/page.tsx",
  "app/personal-finance/understanding-credit-card-interest-rates/page.tsx",
  "app/personal-finance/setting-financial-goals/page.tsx",
  "app/personal-finance/best-personal-loans/page.tsx",
  "app/personal-finance/what-is-lifestyle-creep/page.tsx",
  "app/personal-finance/inflation-proof-your-life/page.tsx",
  "app/personal-finance/credit-card-types-benefits/page.tsx",
  "app/personal-finance/personal-loans-debt-strategy/page.tsx",
  "app/personal-finance/top-credit-cards-0-intro-apr/page.tsx",
  "app/personal-finance/side-hustle-or-second-job/page.tsx",
  "app/personal-finance/ditching-impulse-buys-mindful-spending/page.tsx",
  "app/personal-finance/tips-for-choosing-an-online-loan/page.tsx",
  "app/personal-finance/no-annual-fee-credit-cards/page.tsx",
  "app/personal-finance/combine-finances-after-marriage-or-moving-in/page.tsx",

  // Financial Solutions posts
  "app/financial-solutions/nationwide-personal-loan/page.tsx",
  "app/financial-solutions/virgin-money-personal-loan-requirements/page.tsx",
  "app/financial-solutions/natwest-personal-loan-requirements/page.tsx",
  "app/financial-solutions/iwoca-personal-loan-requirements/page.tsx",
  "app/financial-solutions/lloyds-bank-personal-loan-requirements/page.tsx",
  "app/financial-solutions/capify-personal-loan/page.tsx",
  "app/financial-solutions/curve-credit-card/page.tsx",
  "app/financial-solutions/marketfinance-personal-loan/page.tsx",
  "app/financial-solutions/capify-personal-loan-requirements/page.tsx",
  "app/financial-solutions/funding-options-personal-loan/page.tsx",
  "app/financial-solutions/marketfinance-personal-loan-requirements/page.tsx",
  "app/financial-solutions/santander-uk-personal-loan-requirements/page.tsx",
  "app/financial-solutions/tsb-personal-loan/page.tsx",
  "app/financial-solutions/natwest-personal-loan/page.tsx",
  "app/financial-solutions/tsb-credit-card-requirements/page.tsx",
  "app/financial-solutions/lloyds-bank-credit-card-requirements/page.tsx",
  "app/financial-solutions/barclaycard-avios-plus-requirements/page.tsx",
  "app/financial-solutions/fleximize-personal-loan-requirements/page.tsx",
  "app/financial-solutions/funding-options-personal-loan-requirements/page.tsx",
  "app/financial-solutions/natwest-credit-card-requirements/page.tsx",
  "app/financial-solutions/nationwide-personal-loan-requirements/page.tsx",
  "app/financial-solutions/funding-circle-personal-loan-requirements/page.tsx",
  "app/financial-solutions/starling-bank-credit-card/page.tsx",
  "app/financial-solutions/virgin-money-personal-loan/page.tsx",
  "app/financial-solutions/fleximize-personal-loan/page.tsx",
  "app/financial-solutions/funding-xchange-personal-loan/page.tsx",
  "app/financial-solutions/tsb-credit-card/page.tsx",
  "app/financial-solutions/monzo-personal-loan-requirements/page.tsx",
  "app/financial-solutions/revolut-personal-loan-requirements/page.tsx",
  "app/financial-solutions/santander-uk-credit-card-requirements/page.tsx",
  "app/financial-solutions/lloyds-bank-personal-loan/page.tsx",
  "app/financial-solutions/curve-credit-card-requirements/page.tsx",
  "app/financial-solutions/monzo-credit-card-requirements/page.tsx",
  "app/financial-solutions/natwest-credit-card/page.tsx",
  "app/financial-solutions/barclays-personal-loan/page.tsx",
  "app/financial-solutions/starling-bank-personal-loan-requirements/page.tsx",
  "app/financial-solutions/halifax-world-elite-mastercard/page.tsx",
  "app/financial-solutions/monzo-personal-loan/page.tsx",
  "app/financial-solutions/funding-xchange-personal-loan-requirements/page.tsx",
  "app/financial-solutions/hsbc-personal-loan/page.tsx",
  "app/financial-solutions/hsbc-personal-loan-requirements/page.tsx",
  "app/financial-solutions/virgin-money-credit-card-requirements/page.tsx",
  "app/financial-solutions/starling-bank-credit-card-requirements/page.tsx",
  "app/financial-solutions/halifax-world-elite-mastercard-requirements/page.tsx",
  "app/financial-solutions/lloyds-bank-credit-card/page.tsx",
  "app/financial-solutions/starling-bank-personal-loan/page.tsx",
  "app/financial-solutions/tsb-personal-loan-requirements/page.tsx",
  "app/financial-solutions/santander-uk-personal-loan/page.tsx",
  "app/financial-solutions/virgin-money-credit-card/page.tsx",
  "app/financial-solutions/halifax-personal-loan/page.tsx",
  "app/financial-solutions/monzo-credit-card/page.tsx",
  "app/financial-solutions/barclaycard-avios-plus/page.tsx",
  "app/financial-solutions/barclays-personal-loan-requirements/page.tsx",
  "app/financial-solutions/iwoca-personal-loan/page.tsx",
  "app/financial-solutions/halifax-personal-loan-requirements/page.tsx",
  "app/financial-solutions/funding-circle-personal-loan/page.tsx",
];

let successCount = 0;
let failCount = 0;
const errors = [];

console.log(
  "🚀 Starting Priority 2 Implementation: Removing excessive priority flags\n",
);
console.log(`📝 Processing ${filesToModify.length} files...\n`);

filesToModify.forEach((relativeFilePath, index) => {
  const filePath = path.join(process.cwd(), relativeFilePath);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(
        `⚠️  [${index + 1}/${filesToModify.length}] File not found: ${relativeFilePath}`,
      );
      failCount++;
      errors.push(`File not found: ${relativeFilePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;

    // Replace priority={true} with priority={false}
    content = content.replace(/priority=\{true\}/g, "priority={false}");

    // Add loading="lazy" if not present and priority was changed
    // This regex looks for Image components that don't have a loading attribute
    if (content !== originalContent) {
      // Find Image components that now have priority={false} but no loading attribute
      const imageComponentRegex = /<Image\s[^>]*>/g;
      content = content.replace(imageComponentRegex, (match) => {
        // If it has priority={false} and no loading attribute, add loading="lazy"
        if (match.includes("priority={false}") && !match.includes("loading=")) {
          // Add loading="lazy" before the closing >
          return match.replace(
            ">",
            '\n                  loading="lazy"\n                >',
          );
        }
        return match;
      });
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(
        `✅ [${index + 1}/${filesToModify.length}] Updated: ${relativeFilePath}`,
      );
      successCount++;
    } else {
      console.log(
        `⏭️  [${index + 1}/${filesToModify.length}] No changes needed: ${relativeFilePath}`,
      );
    }
  } catch (error) {
    console.error(
      `❌ [${index + 1}/${filesToModify.length}] Error processing ${relativeFilePath}:`,
      error.message,
    );
    failCount++;
    errors.push(`${relativeFilePath}: ${error.message}`);
  }
});

console.log("\n" + "=".repeat(60));
console.log("📊 Summary:");
console.log("=".repeat(60));
console.log(`✅ Successfully updated: ${successCount} files`);
console.log(`❌ Failed: ${failCount} files`);
console.log(`📁 Total processed: ${filesToModify.length} files`);

if (errors.length > 0) {
  console.log("\n❌ Errors encountered:");
  errors.forEach((err) => console.log(`  - ${err}`));
}

console.log("\n✨ Priority 2 implementation complete!");
console.log("🔍 Next step: Run build to verify changes");

process.exit(failCount > 0 ? 1 : 0);
