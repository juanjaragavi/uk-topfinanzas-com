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
      href: "/financial-solutions/bbva-blue-credit-card-requirements",
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
        text: "Card Recommender",
        href: "/credit-card-recommender-p1",
      },
      {
        text: "Compare Cards",
        href: "/",
      },
      {
        text: "Plata Card",
        href: "/financial-solutions/plata-card",
      },
      {
        text: "BBVA Blue Credit Card",
        href: "/financial-solutions/bbva-blue-credit-card",
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
            text: "How to Choose Online Loans",
            href: "/blog/post/5-tips-for-choosing-an-online-loan",
          },
        ],
      },
    ],
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: "Your First Salary: A Complete Guide",
          href: "/blog/post/your-first-paycheck",
          image:
            "https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg",
          category: "Personal Finance",
          categoryHref: "/blog/category/personal-finance",
        },
        {
          title: "What is a Mortgage?",
          href: "/blog/post/what-is-a-home-mortgage",
          image:
            "https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg",
          category: "Mortgages",
          categoryHref: "/blog/category/mortgages",
        },
      ],
    },
  },
};
