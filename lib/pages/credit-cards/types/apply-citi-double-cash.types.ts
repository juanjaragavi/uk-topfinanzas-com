/**
 * Type definitions for the Citi Double Cash Card Application page
 * These interfaces define the structure of content used by the page component
 */

export interface CitiDoubleCashApplicationPageContent {
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
  requirements: {
    title: string;
    items: Array<{
      text: string;
    }>;
  };
}
