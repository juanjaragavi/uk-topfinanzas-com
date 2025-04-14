/**
 * Text content for the header
 * Contains all static text and theme elements that may need to be modified by agents
 */

export const headerContent = {
  /** Placeholder text for search functionality */
  search: {
    placeholder: "Search...",
  },

  /** Mobile menu section labels */
  mobileMenu: {
    navigateLabel: "NAVIGATE",
    categoriesLabel: "CATEGORIES",
    blogCategories: "BLOG CATEGORIES",
    popularArticles: "POPULAR ARTICLES",
    allArticles: "ALL BLOG ARTICLES",
  },

  /** Theme colors for easier updating */
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    gray: {
      light: "#f8f9fa",
      medium: "#e9ecef",
      dark: "#343a40",
    },
  },

  /** Animation settings that can be modified by agents */
  animation: {
    duration: 0.2,
    initialHeight: 0,
    initialOpacity: 0,
    finalHeight: "auto",
    finalOpacity: 1,
  },

  /** Blog mega menu content */
  blogMegaMenu: {
    viewAllText: "View all articles",
    featuredArticlesTitle: "FEATURED ARTICLES",
  },
};
