/**
 * Content for the Citi Double Cash Card Application page
 * This file centralizes all text, links, and metadata for the page,
 * allowing for programmatic editing without changing component structure
 */

// Define the interface for the Citi Double Cash application page content
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

// Page content implementation
export const citiDoubleCashApplicationPageContent: CitiDoubleCashApplicationPageContent =
  {
    metadata: {
      title: "Apply for Citi Double Cash Card - TopFinanzas",
      description:
        "Apply for the Citi Double Cash Card online. Earn up to 2% cash back on every purchase with no annual fee.",
      keywords:
        "Citi Double Cash Card, credit card application, 2% cash back, no annual fee, TopFinanzas",
    },
    hero: {
      title: "Citi Double Cash Card Application",
      description:
        "Apply for the Citi Double Cash Card today and start earning up to 2% cash back on every purchase: 1% when you buy, 1% when you pay.",
    },
    benefits: {
      title: "Why Apply for the Citi Double Cash Card?",
      items: [
        {
          text: "Up to 2% cash back on all purchases",
        },
        {
          text: "No annual fee",
        },
        {
          text: "0% intro APR on balance transfers for 18 months",
        },
        {
          text: "Flexible redemption options",
        },
      ],
    },
    requirements: {
      title: "Application Requirements",
      items: [
        {
          text: "Credit score of at least 670",
        },
        {
          text: "Must be 18 years or older",
        },
        {
          text: "Valid Social Security Number",
        },
        {
          text: "Proof of income",
        },
      ],
    },
  };
