/**
 * Content for the Credit Card Recommendation page
 * This file centralizes all text, links, and metadata for the page,
 * allowing for programmatic editing without changing component structure
 */

// Define the interface for the recommendation page content
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

// Page content implementation
export const creditCardRecommendationPageContent: CreditCardRecommendationPageContent =
  {
    metadata: {
      title: "Your Credit Card Recommendation - TopFinanzas",
      description:
        "View your personalized credit card recommendation based on your financial profile.",
      keywords:
        "credit card recommendation, personalized recommendation, credit card match, TopFinanzas",
    },
    hero: {
      title: "Your Credit Card Recommendation",
      description:
        "Based on your profile, we've selected the best credit card option to match your needs.",
    },
    recommendedCard: {
      title: "Our Top Pick For You",
      card: {
        image: {
          src: "https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg",
          alt: "Citi Double Cash Credit Card",
          width: 320,
          height: 200,
        },
        name: "Citi Double Cash Credit Card",
        rating: {
          score: 4.7,
          count: 2120,
        },
        benefits: [
          {
            label: "Up to 2% Cash Back",
            description: "Earn 1% when you buy, plus 1% when you pay.",
          },
          {
            label: "No Restrictions",
            description:
              "Earn cash back on every purchase, with no categories to track.",
          },
          {
            label: "No Annual Fee",
            description: "Enjoy all the benefits without the cost.",
          },
          {
            label: "Intro APR on Balance Transfers",
            description: "0% for 18 months to pay down debt.",
          },
        ],
        learnMoreButton: {
          text: "View Card Details",
          link: "/credit-cards/citi-double-cash",
        },
        applyButton: {
          text: "Check Eligibility Requirements",
          link: "/credit-cards/apply/citi-double-cash",
        },
      },
    },
    cashBackExplanation: {
      title: "How the Cash Back Works",
      introduction:
        "One of the standout features of the Citi Double Cash Card is its unique cash-back structure. You don't have to worry about quarterly sign-ups, rotating categories, or making specific purchases to earn high rewards. Here's how it breaks down:",
      features: [
        {
          title: "1% when you buy",
          description:
            "On every dollar you spend, you earn 1% cash back right away.",
        },
        {
          title: "1% when you pay",
          description:
            "The second 1% comes when you make a payment towards your balance.",
        },
        {
          title: "No limit on cash back",
          description:
            "You can continue earning rewards no matter how much you spend.",
        },
      ],
      conclusion:
        "This system is ideal for those who use their credit card for a wide variety of purchases and want to avoid the complexity of other rewards programs. The Citi Double Cash Card ensures that every purchase, no matter how small or large, gives you value.",
      buttonText: "See Comparison Results",
      buttonLink: "/credit-cards/citi-double-cash",
    },
    callToAction: {
      title: "Ready to take advantage of these benefits?",
      description:
        "Apply for the Citi Double Cash Credit Card today and start earning cash back on every purchase. Our simple application process takes just minutes to complete.",
      buttonText: "Discover Your Options",
      buttonLink: "/credit-cards/apply/citi-double-cash",
    },
  };
