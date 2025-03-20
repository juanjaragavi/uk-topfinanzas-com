/**
 * Content for the Credit Card Apply page
 * This file centralizes all text, links, and metadata for the page.
 */

import { ApplyPageContent } from "./types/apply.types";
import { loadContent } from "./utils/content-loader";

export const applyPageContent: ApplyPageContent = loadContent<ApplyPageContent>(
  "lib/pages/credit-cards/content/apply.content.json"
);
