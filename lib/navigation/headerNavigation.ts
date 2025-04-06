/**
 * Navigation items for the header component
 * Localized for the UK market
 * Easily modifiable by LLM agents to update site navigation
 */

export interface NavigationItem {
  text: string;
  href: string;
}

export interface DropdownItem {
  text: string;
  items: NavigationItem[];
}

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenu {
  title: string;
  columns: MegaMenuColumn[];
  featuredPosts?: {
    title: string;
    posts: Array<{
      title: string;
      href: string;
      image: string;
      category: string;
      categoryHref: string;
    }>;
  };
}

export const headerNavigation = {
  /** Main navigation items */
  mainNavItems: [
    {
      text: "CARD RECOMMENDER",
      href: "/credit-card-recommender-p1",
    },
    {
      text: "FINANCIAL SOLUTIONS",
      href: "/financial-solutions",
    },
    {
      text: "BLOG",
      href: "/blog",
    },
    {
      text: "APPLY NOW",
      href: "/financial-solutions/barclaycard-avios-plus-requirements",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Financial Solutions",
        href: "/financial-solutions",
      },
      {
        text: "Credit Cards",
        href: "/financial-solutions",
      },
      {
        text: "Personal Loans",
        href: "/blog/post/best-personal-loans-uk",
      },
      {
        text: "Card Recommender",
        href: "/credit-card-recommender-p1",
      },
      {
        text: "Current Accounts",
        href: "/blog/category/current-accounts",
      },
    ],
  },

  /** Blog megamenu */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      {
        title: "Categories",
        items: [
          {
            text: "Personal Finance",
            href: "/blog/category/personal-finance",
          },
          {
            text: "Financial Solutions",
            href: "/blog/category/financial-solutions",
          },
          {
            text: "Mortgages",
            href: "/blog/category/mortgages",
          },
          {
            text: "Credit Cards",
            href: "/blog/category/credit-cards",
          },
          {
            text: "Investments & ISAs",
            href: "/blog/category/investing",
          },
          {
            text: "Budgeting",
            href: "/blog/category/budgeting",
          },
        ],
      },
      {
        title: "Popular Topics",
        items: [
          {
            text: "Your First Salary Guide",
            href: "/blog/post/your-first-paycheck",
          },
          {
            text: "UK Mortgage Guide",
            href: "/blog/post/what-is-a-home-mortgage-uk",
          },
          {
            text: "Online Loans in the UK",
            href: "/blog/post/what-are-online-loans-uk",
          },
          {
            text: "Choosing UK Online Loans",
            href: "/blog/post/tips-for-choosing-an-online-loan-uk",
          },
          {
            text: "Best Personal Loans UK",
            href: "/blog/post/best-personal-loans-uk",
          },
        ],
      },
    ],
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: "Best Personal Loans in the UK (2025)",
          href: "/blog/post/best-personal-loans-uk",
          image:
            "https://media.topfinanzas.com/images/uk/loans/best-personal-loans-uk.webp",
          category: "Personal Loans",
          categoryHref: "/financial-solutions",
        },
        {
          title: "UK Credit Card Comparison Guide",
          href: "/blog/post/uk-credit-card-comparison-guide",
          image:
            "https://media.topfinanzas.com/images/uk/credit-cards/uk-credit-card-comparison.webp",
          category: "Credit Cards",
          categoryHref: "/financial-solutions",
        },
      ],
    },
  },
};
