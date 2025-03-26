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
      text: "RECOMENDADOR DE TARJETAS",
      href: "/recomendador-de-tarjetas-de-credito-p1-next",
    },
    {
      text: "SOLUCIONES FINANCIERAS",
      href: "/soluciones-financieras",
    },
    {
      text: "BLOG",
      href: "/blog",
    },
    {
      text: "SOLICITAR AHORA",
      href: "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORÍAS",
    items: [
      {
        text: "Soluciones Financieras",
        href: "/soluciones-financieras",
      },
      {
        text: "Recomendador de Tarjetas",
        href: "/recomendador-de-tarjetas-de-credito-p1-next",
      },
      {
        text: "Comparar Tarjetas",
        href: "/",
      },
      {
        text: "Tarjeta Plata Card",
        href: "/soluciones-financieras/tarjeta-plata-card-next",
      },
      {
        text: "Tarjeta de Crédito Azul BBVA",
        href: "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",
      },
    ],
  },

  /** Blog megamenu */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      {
        title: "Categorías",
        items: [
          {
            text: "Finanzas Personales",
            href: "/blog/category/personal-finance",
          },
          {
            text: "Hipotecas",
            href: "/blog/category/mortgages",
          },
          {
            text: "Tarjetas de Crédito",
            href: "/blog/category/credit-cards",
          },
          {
            text: "Inversiones",
            href: "/blog/category/investing",
          },
          {
            text: "Presupuestos",
            href: "/blog/category/budgeting",
          },
        ],
      },
      {
        title: "Temas Populares",
        items: [
          {
            text: "Guía de tu Primer Sueldo",
            href: "/blog/post/your-first-paycheck",
          },
          {
            text: "Guía de Hipotecas",
            href: "/blog/post/what-is-a-home-mortgage",
          },
          {
            text: "Explicación de Préstamos en Línea",
            href: "/blog/post/what-are-online-loans",
          },
          {
            text: "Cómo Elegir Préstamos en Línea",
            href: "/blog/post/5-tips-for-choosing-an-online-loan",
          },
        ],
      },
    ],
    featuredPosts: {
      title: "Artículos Destacados",
      posts: [
        {
          title: "Tu Primer Sueldo: Una Guía Completa",
          href: "/blog/post/your-first-paycheck",
          image:
            "https://media.topfinanzas.com/images/generated/1741659352997/sample_0.jpg",
          category: "Finanzas Personales",
          categoryHref: "/blog/category/personal-finance",
        },
        {
          title: "¿Qué es una Hipoteca?",
          href: "/blog/post/what-is-a-home-mortgage",
          image:
            "https://media.topfinanzas.com/images/generated/1741658237902/sample_0.jpg",
          category: "Hipotecas",
          categoryHref: "/blog/category/mortgages",
        },
      ],
    },
  },
};
