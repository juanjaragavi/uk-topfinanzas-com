/**
 * Content for the Credit Card Application page
 * This file centralizes all text, links, and metadata for the page,
 * allowing for programmatic editing without changing component structure
 */

// Define the interface for the application page content
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

// Page content implementation
export const creditCardApplicationPageContent: CreditCardApplicationPageContent =
  {
    metadata: {
      title: "Apply for a Credit Card - TopFinanzas",
      description:
        "Apply for a credit card online. Quick and secure application process with fast approval.",
      keywords:
        "credit card application, apply for credit card, online application, TopFinanzas",
    },
    hero: {
      title: "Credit Card Application",
      description:
        "Complete the form below to apply for your selected credit card. Your information is secure and will only be used for processing your application.",
    },
    benefits: {
      title: "Why Choose TopFinanzas?",
      items: [
        {
          text: "Secure application process",
        },
        {
          text: "Fast approval decisions",
        },
        {
          text: "No impact on credit score to check rates",
        },
        {
          text: "Expert support throughout the process",
        },
      ],
    },
  };
