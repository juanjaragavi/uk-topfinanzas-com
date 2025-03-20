/**
 * Content for the Apply Citi Double Cash Credit Card page
 * This file centralizes all text, links, and metadata for the page.
 */

import { ApplyCitiDoubleCashPageContent } from "./types/apply-citi-double-cash.types";
import { loadContent } from "./utils/content-loader";

export const applyCitiDoubleCashPageContent: ApplyCitiDoubleCashPageContent = loadContent<ApplyCitiDoubleCashPageContent>(
  "lib/pages/credit-cards/content/apply-citi-double-cash.content.json"
);
