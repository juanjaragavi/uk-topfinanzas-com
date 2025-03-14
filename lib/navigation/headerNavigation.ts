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

export const headerNavigation = {
  /** Main navigation items */
  mainNavItems: [
    {
      text: "CREDIT CARDS",
      href: "/credit-cards"
    },
    {
      text: "APPLY NOW",
      href: "/credit-cards/apply/citi-double-cash"
    }
  ],
  
  /** Dropdown categories */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Card Recommendations",
        href: "/credit-cards/recommendation"
      },
      {
        text: "Compare Cards",
        href: "/credit-cards"
      },
      {
        text: "Citi Double Cash",
        href: "/credit-cards/citi-double-cash"
      }
    ]
  }
};
