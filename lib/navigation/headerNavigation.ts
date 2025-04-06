/**
 * Navigation items for the header component
 * Easily modifiable by agents to update site navigation
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
      // Updated to a relevant UK product application page
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
        href: "/blog/post/best-personal-loans", // Corrected path
      },
      {
        text: "Card Recommender",
        href: "/credit-card-recommender-p1",
      },
      {
        text: "Visa Signature US Current",
        href: "/financial-solutions/visa-signature-us-current-credit-card-benefits",
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
            text: "Investments",
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
            text: "Mortgage Guide",
            href: "/blog/post/what-is-a-home-mortgage",
          },
          {
            text: "Online Loans Explained",
            href: "/blog/post/what-are-online-loans",
          },
          {
            text: "Choosing Online Loans",
            href: "/blog/post/tips-for-choosing-an-online-loan", // Corrected path
          },
          {
            text: "Best Personal Loans UK",
            href: "/blog/post/best-personal-loans", // Corrected path
          },
        ],
      },
    ],
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: "Best Personal Loans in the UK",
          href: "/blog/post/best-personal-loans", // Corrected path
          image:
            "https://media.topfinanzas.com/images/best-personal-loans.webp",
          category: "Loans",
          categoryHref: "/financial-solutions",
        },
      ],
    },
  },
};
