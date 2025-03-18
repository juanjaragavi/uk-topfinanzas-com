/**
 * Type definitions for the Credit Cards main page
 * These interfaces define the structure of content used by the page component
 */

export interface CreditCardPageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  featuredCard: {
    title: string;
    image: string;
    cardName: string;
    rating: {
      score: number;
      count: number;
    };
    description: string;
    ctaText: string;
    ctaLink: string;
    requirements: {
      title: string;
      items: Array<{
        label: string;
        value: string;
      }>;
      ctaText: string;
      ctaLink: string;
    };
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
