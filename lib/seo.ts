import type { Metadata } from "next";
import {
  ROUTE_SEO_REGISTRY,
  type RouteSeoEntry,
} from "@/lib/seo-route-registry";

export const SEO_SITE = {
  name: "TopFinance UK",
  legalName: "TopNetworks Inc.",
  baseUrl: "https://uk.topfinanzas.com",
  locale: "en_GB",
  language: "en-GB",
  defaultTitle: "TopFinance UK | Your Guide to UK Credit Cards & Loans",
  titleTemplate: "%s | TopFinance UK",
  description:
    "Compare UK credit cards, personal loans, and financial solutions with TopFinance UK. Clear guides and tools for the UK market.",
  defaultImage: "https://media.topfinanzas.com/images/placeholder-image.webp",
  logo: "https://media.topfinanzas.com/images/logo-english.webp",
  email: "info@topfinanzas.com",
  socialProfiles: [
    "https://www.linkedin.com/company/top-networks-inc",
    "https://www.instagram.com/topfinance_en/",
  ],
  disclosure:
    "TopFinance UK provides information only and does not offer financial advice. Credit is subject to status, affordability, terms, and conditions. Representative APRs are variable where stated.",
} as const;

type SchemaValue = Record<string, unknown>;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SEO_SITE.baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function stripBrandSuffix(title: string) {
  return title
    .replace(/\s*\|\s*Top\s*Finance(?:\s*UK)?\s*$/i, "")
    .replace(/\s*\|\s*TopFinanzas(?:\s*UK)?\s*$/i, "")
    .replace(/\s*-\s*Top\s*Finance(?:\s*UK)?\s*$/i, "")
    .replace(/\s*-\s*TopFinanzas(?:\s*UK)?\s*$/i, "")
    .trim();
}

function titleFromSlug(pathname: string) {
  const slug = pathname.split("/").filter(Boolean).pop() ?? "topfinance-uk";
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function inferCategory(pathname: string): RouteSeoEntry["category"] {
  if (pathname.startsWith("/financial-solutions/")) return "financial-solutions";
  if (pathname.startsWith("/personal-finance/")) return "personal-finance";
  return "static";
}

function inferContentType(
  pathname: string,
  title: string,
): RouteSeoEntry["contentType"] {
  const haystack = `${pathname} ${title}`.toLowerCase();

  if (pathname.startsWith("/personal-finance/")) return "article";
  if (haystack.includes("loan")) return "loan";
  if (
    haystack.includes("card") ||
    haystack.includes("credit") ||
    haystack.includes("mastercard") ||
    haystack.includes("barclaycard") ||
    haystack.includes("american express")
  ) {
    return "credit-card";
  }

  return pathname.startsWith("/financial-solutions/")
    ? "financial-product"
    : "webpage";
}

export function getRouteSeo(pathname: string): RouteSeoEntry {
  const normalizedPath = pathname === "" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  const found = ROUTE_SEO_REGISTRY[normalizedPath];

  if (found) return found;

  const title = titleFromSlug(normalizedPath);

  return {
    pathname: normalizedPath,
    title,
    description: `${title} from TopFinance UK: a clear UK-focused guide for better financial decisions.`,
    image: SEO_SITE.defaultImage,
    category: inferCategory(normalizedPath),
    contentType: inferContentType(normalizedPath, title),
  };
}

export function createRouteMetadata(pathname: string): Metadata {
  const route = getRouteSeo(pathname);
  const canonical = absoluteUrl(route.pathname);
  const title = stripBrandSuffix(route.title);
  const image = route.image || SEO_SITE.defaultImage;
  const isArticle =
    route.contentType === "article" ||
    route.contentType === "credit-card" ||
    route.contentType === "loan" ||
    route.contentType === "financial-product";

  return {
    title: {
      absolute: route.pathname === "/" ? SEO_SITE.defaultTitle : `${title} | ${SEO_SITE.name}`,
    },
    description: route.description,
    alternates: {
      canonical,
      languages: {
        [SEO_SITE.language]: canonical,
        en: canonical,
        "en-US": canonical.replace("https://uk.topfinanzas.com", "https://us.topfinanzas.com"),
        "es-MX": "https://topfinanzas.com",
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description: route.description,
      url: canonical,
      siteName: SEO_SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SEO_SITE.name}`,
        },
      ],
      locale: SEO_SITE.locale,
      type: isArticle ? "article" : "website",
      ...(isArticle && route.date
        ? {
            publishedTime: parseDate(route.date).toISOString(),
            modifiedTime: parseDate(route.date).toISOString(),
            authors: ["TopFinance UK Editorial Team"],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: route.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createNoIndexMetadata(
  title: string,
  description = "This TopFinance UK page is not intended for search indexing.",
): Metadata {
  return {
    title: {
      absolute: `${stripBrandSuffix(title)} | ${SEO_SITE.name}`,
    },
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export function generateOrganizationSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_SITE.name,
    legalName: SEO_SITE.legalName,
    url: SEO_SITE.baseUrl,
    logo: SEO_SITE.logo,
    sameAs: SEO_SITE.socialProfiles,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SEO_SITE.email,
      availableLanguage: ["English", "en-GB"],
    },
  };
}

export function generateWebSiteSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_SITE.name,
    url: SEO_SITE.baseUrl,
    inLanguage: SEO_SITE.language,
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_SITE.baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateWebPageSchema(pathname: string): SchemaValue {
  const route = getRouteSeo(pathname);
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);

  return {
    "@context": "https://schema.org",
    "@type": route.contentType === "collection" ? "CollectionPage" : "WebPage",
    name: title,
    description: route.description,
    url: canonical,
    inLanguage: SEO_SITE.language,
    isPartOf: {
      "@type": "WebSite",
      name: SEO_SITE.name,
      url: SEO_SITE.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
  };
}

export function generateBreadcrumbSchema(route: RouteSeoEntry): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SEO_SITE.baseUrl,
    },
  ];

  if (route.category === "financial-solutions") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Financial Solutions",
      item: absoluteUrl("/financial-solutions"),
    });
  } else if (route.category === "personal-finance") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Personal Finance",
      item: absoluteUrl("/personal-finance"),
    });
  }

  if (route.pathname !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: itemListElement.length + 1,
      name: title,
      item: absoluteUrl(route.pathname),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function generateArticleSchema(route: RouteSeoEntry): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);
  const image = route.image || SEO_SITE.defaultImage;
  const date = parseDate(route.date);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: route.description,
    image,
    url: canonical,
    inLanguage: SEO_SITE.language,
    datePublished: date.toISOString(),
    dateModified: date.toISOString(),
    author: {
      "@type": "Organization",
      name: "TopFinance UK Editorial Team",
      url: SEO_SITE.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export function generateFinancialProductSchema(route: RouteSeoEntry): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);
  const image = route.image || SEO_SITE.defaultImage;
  const schemaType =
    route.contentType === "credit-card"
      ? "CreditCard"
      : route.contentType === "loan"
        ? "LoanOrCredit"
        : "FinancialProduct";

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    description: route.description,
    url: canonical,
    image,
    category:
      route.contentType === "credit-card"
        ? "Credit card"
        : route.contentType === "loan"
          ? "Personal or business loan"
          : "Financial product",
    provider: {
      "@type": "Organization",
      name: SEO_SITE.name,
      url: SEO_SITE.baseUrl,
    },
    offers: {
      "@type": "Offer",
      url: canonical,
      availability: "https://schema.org/InStock",
      priceCurrency: "GBP",
      description: `${route.description} ${SEO_SITE.disclosure}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export function createRouteStructuredData(pathname: string): SchemaValue[] {
  const route = getRouteSeo(pathname);

  if (route.category === "financial-solutions") {
    return [generateBreadcrumbSchema(route), generateFinancialProductSchema(route)];
  }

  if (route.category === "personal-finance") {
    return [generateBreadcrumbSchema(route), generateArticleSchema(route)];
  }

  return [generateBreadcrumbSchema(route), generateWebPageSchema(pathname)];
}

export function getIndexableRoutes() {
  return Object.values(ROUTE_SEO_REGISTRY).filter((route) => {
    if (route.category === "financial-solutions") return true;
    if (route.category === "personal-finance") return true;
    return [
      "/",
      "/blog",
      "/financial-solutions",
      "/personal-finance",
      "/credit-cards",
      "/personal-loans",
      "/about-us",
      "/contact-us",
      "/privacy-policy",
      "/terms",
      "/cookie-policy",
    ].includes(route.pathname);
  });
}

export function parseDate(date?: string) {
  if (!date) return new Date("2025-10-24T00:00:00Z");
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime())
    ? new Date("2025-10-24T00:00:00Z")
    : parsed;
}
