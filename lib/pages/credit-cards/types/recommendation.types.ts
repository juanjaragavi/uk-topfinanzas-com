/**
 * Type definitions for the Credit Card Recommendation page
 * These interfaces define the structure of content used by the page component
 */

export interface CreditCardRecommendationPageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
  };
  recommendedCard: {
    title: string;
    card: {
      image: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      name: string;
      rating: {
        score: number;
        count: number;
      };
      benefits: Array<{
        label: string;
        description: string;
      }>;
      learnMoreButton: {
        text: string;
        link: string;
      };
      applyButton: {
        text: string;
        link: string;
      };
    };
  };
  cashBackExplanation: {
    title: string;
    introduction: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    conclusion: string;
    buttonText: string;
    buttonLink: string;
  };
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
