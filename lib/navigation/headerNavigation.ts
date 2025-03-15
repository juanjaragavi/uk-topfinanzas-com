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
      text: "CREDIT CARDS",
      href: "/credit-cards",
    },
    {
      text: "BLOG",
      href: "/blog",
    },
    {
      text: "APPLY NOW",
      href: "/credit-cards/apply/citi-double-cash",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Card Recommendations",
        href: "/credit-cards/recommendation",
      },
      {
        text: "Compare Cards",
        href: "/credit-cards",
      },
      {
        text: "Citi Double Cash",
        href: "/credit-cards/citi-double-cash",
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
            text: "Investing",
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
            text: "First Paycheck Guide",
            href: "/blog/post/your-first-paycheck",
          },
          {
            text: "Home Mortgage Guide",
            href: "/blog/post/what-is-a-home-mortgage",
          },
          {
            text: "Online Loans Explained",
            href: "/blog/post/what-are-online-loans",
          },
          {
            text: "Choosing Online Loans",
            href: "/blog/post/5-tips-for-choosing-an-online-loan",
          },
        ],
      },
    ],
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: "Your First Paycheck: A Complete Guide",
          href: "/blog/post/your-first-paycheck",
          image:
            "https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg",
          category: "Personal Finance",
          categoryHref: "/blog/category/personal-finance",
        },
        {
          title: "What Is a Home Mortgage?",
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
