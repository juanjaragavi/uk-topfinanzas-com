/**
 * Content for the Credit Card Recommendation page
 * This file centralizes all text, links, and metadata for the page,
 * allowing for programmatic editing without changing component structure
 *
 * IMPORTANT: This file acts as a bridge between the JSON content files
 * and the page components. The actual content is stored in a separate JSON file
 * that can be programmatically edited by LLM-based agents.
 */

// Import the type definitions
import { CreditCardRecommendationPageContent } from "./types/recommendation.types";

// Import the content loader utility
import { loadContent } from "./utils/content-loader";

// Load the content from the JSON file
// This content is stored separately so it can be updated by agents
export const creditCardRecommendationPageContent: CreditCardRecommendationPageContent =
  loadContent<CreditCardRecommendationPageContent>(
    "lib/pages/credit-cards/content/recommendation.content.json"
  );

// Re-export the interface for use in other files
export type { CreditCardRecommendationPageContent } from "./types/recommendation.types";
