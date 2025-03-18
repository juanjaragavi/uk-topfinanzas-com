/**
 * Type definitions for the Credit Card Application page
 * These interfaces define the structure of content used by the page component
 */

export interface CreditCardApplicationPageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
  };
  benefits: {
    title: string;
    items: Array<{
      text: string;
    }>;
  };
}
