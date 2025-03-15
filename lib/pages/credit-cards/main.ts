/**
 * Content for the Credit Cards main page
 * This file centralizes all text, links, and metadata for the page
 * allowing for programmatic editing without changing component structure
 */

// Define the interface for the Credit Cards page content
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

// Page content implementation
export const creditCardsPageContent: CreditCardPageContent = {
  metadata: {
    title: "Credit Card Recommender - TopFinanzas",
    description:
      "Find the perfect credit card with our personalized recommendations. Compare options and apply online.",
    keywords:
      "credit cards, card recommender, compare credit cards, apply for credit card, TopFinanzas",
  },
  hero: {
    title: "The Smart Way to Choose a Credit Card",
    description:
      "Ready to take charge of your finances? You may qualify for a credit card with the tools and flexibility you need. Here's why now is the perfect time to explore your options:",
    ctaText: "Accept recommendation",
    ctaLink: "/credit-cards/recommendation",
  },
  benefits: {
    title: "Why Choose Our Card Recommender?",
    items: [
      {
        title: "Personalized options",
        description:
          "Get tailored recommendations based on your financial profile and needs.",
      },
      {
        title: "100% free to explore",
        description:
          "No fees or commitments to browse our recommendations and find your perfect match.",
      },
      {
        title: "Expert guidance",
        description:
          "Make smarter choices with our data-driven insights and financial expertise.",
      },
    ],
  },
  featuredCard: {
    title: "Our Top Pick For You",
    image: "https://media.topfinanzas.com/images/generated/1741732471632/sample_0.jpg",
    cardName: "Citi Double Cash Credit Card",
    rating: {
      score: 4.7,
      count: 2120,
    },
    description:
      "Unlock Financial Freedom with our top-rated card. No Credit Check Required and Flexible Cashback between 1% and 20%.",
    ctaText: "Find Out More",
    ctaLink: "/credit-cards/citi-double-cash",
    requirements: {
      title: "Requirements for the Citi Double Cash Credit Card",
      items: [
        {
          label: "Credit Score",
          value: "Recommended minimum score of 670",
        },
        {
          label: "Age Requirement",
          value: "Must be 18 years or older",
        },
        {
          label: "Social Security Number",
          value: "Required for identity verification",
        },
        {
          label: "Income Documentation",
          value: "Proof of income or employment details may be necessary",
        },
      ],
      ctaText: "Learn how to apply",
      ctaLink: "/credit-cards/apply",
    },
  },
  faq: {
    title: "FAQs",
    questions: [
      {
        question: "How can a low APR benefit me?",
        answer:
          "A low APR means you'll pay less interest on your balance, saving you money over time if you carry a balance from month to month.",
      },
      {
        question: "What are the perks of a no-annual-fee card?",
        answer:
          "No-annual-fee cards save you money each year and are often ideal for occasional users or those building credit.",
      },
      {
        question: "How do points and cashback differ?",
        answer:
          "Points can be redeemed for various rewards like travel or merchandise, while cashback gives you a percentage of your spending back as cash.",
      },
      {
        question: "What factors should I consider when choosing a credit card?",
        answer:
          "Consider your spending habits, credit score, fees, interest rates, rewards programs, and any additional benefits that align with your lifestyle.",
      },
    ],
  },
  callToAction: {
    title: "Take control of your finances today",
    description:
      "Find the credit card that fits your needs with our expert guidance. We'll help you make informed choices to match your goals and set you on the path to a brighter financial future.",
    buttonText: "Apply now",
    buttonLink: "/credit-cards/apply",
  },
};
