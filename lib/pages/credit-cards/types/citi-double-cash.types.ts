/**
 * Type definitions for the Citi Double Cash Credit Card page
 * These interfaces define the structure of content used by the page component
 */

export interface CitiDoubleCashPageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
    rating: {
      score: number;
      count: number;
    };
    applyButtonText: string;
    applyButtonLink: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  requirements: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  eligibilityCriteria: string;
  applicationRequirements: string;
  benefitsList: {
    title: string;
    items: string[];
  };
  requirementsList: {
    items: string[];
  };
  applicationSteps: {
    title: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
    buttonText: string;
    buttonLink: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
