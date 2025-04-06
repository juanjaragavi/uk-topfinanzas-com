/**
 * Navigation items and content for the footer component
 * Localized for the UK market
 * Easily modifiable by LLM agents to update site footer content
 */

export interface FooterNavigationItem {
  text: string;
  href: string;
}

export interface SocialMediaItem {
  platform: string;
  url: string;
  ariaLabel: string;
  svgPath: string;
}

export interface ContactItem {
  type: "email" | "address";
  value: string;
  href?: string;
  svgPath: string;
}

export const footerNavigation = {
  /** Main navigation section */
  mainNavItems: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Financial Solutions",
      href: "/financial-solutions",
    },
  ],

  /** Categories section */
  categoryItems: [
    {
      text: "Personal Finance",
      href: "/blog/category/personal-finance",
    },
    {
      text: "Credit Cards",
      href: "/blog/category/credit-cards",
    },
    {
      text: "Mortgages",
      href: "/blog/category/mortgages",
    },
    {
      text: "Investments & ISAs",
      href: "/blog/category/investing",
    },
    {
      text: "Budgeting",
      href: "/blog/category/budgeting",
    },
    {
      text: "Current Accounts",
      href: "/blog/category/current-accounts",
    },
  ],

  /** Blog posts section */
  blogItems: [
    {
      text: "Best Personal Loans UK",
      href: "/blog/post/best-personal-loans-uk",
    },
    {
      text: "UK Online Loan Guide",
      href: "/blog/post/tips-for-choosing-an-online-loan-uk",
    },
    {
      text: "UK Student Credit Cards",
      href: "/financial-solutions/natwest-credit-card-requirements",
    },
    {
      text: "Understanding UK Credit Ratings",
      href: "/blog/post/understanding-credit-ratings-uk",
    },
  ],

  /** Social media links */
  socialMedia: {
    title: "Follow us on social media",
    links: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/topfinance_uk/",
        ariaLabel: "Instagram",
        svgPath:
          "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/topfinance-uk",
        ariaLabel: "LinkedIn",
        svgPath:
          "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/topfinance_uk",
        ariaLabel: "Twitter",
        svgPath:
          "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      },
    ],
  },

  /** Contact information */
  contactInfo: [
    {
      type: "email",
      value: "uk-support@topfinance.co.uk",
      href: "mailto:uk-support@topfinance.co.uk",
      svgPath:
        "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      type: "address",
      value:
        "PANAMA, PANAMA CITY, AV. AQUILINO DE LA GUARDIA, OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
      svgPath:
        "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z|M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ],

  /** Legal links */
  legalLinks: [
    {
      text: "Terms and Conditions",
      href: "/terms",
    },
    {
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      text: "Cookie Policy",
      href: "/cookie-policy",
    },
    {
      text: "FCA Disclosure",
      href: "/financial-conduct-authority-disclosure",
    },
  ],
};
