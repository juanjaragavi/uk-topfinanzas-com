import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to handle URL routing for TopFinanzas Mexico Next.js pages
 *
 * This middleware implements the following rules:
 * 1. Allows access to Next.js pages with the '-next' suffix
 * 2. Routes specific WordPress paths to the corresponding Next.js pages
 * 3. Preserves the URL structure while rendering Next.js pages
 */

// Regular expression to match URLs for the credit card recommendation user journey paths
const recommendationPaths = [
  "/mx/recomendador-de-tarjetas-de-credito-p1",
  "/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank",
  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu",
  "/mx/soluciones-financieras/tarjeta-plata-card",
  "/mx/soluciones-financieras/requisitos-tarjeta-plata-card",
];

// Map WordPress paths to the corresponding Next.js app routes
const pathMappings = {
  "/mx/recomendador-de-tarjetas-de-credito-p1": "/recommendation",
  "/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank": "/credit-cards",
  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu": "/apply",
  "/mx/soluciones-financieras/tarjeta-plata-card": "/citi-double-cash",
  "/mx/soluciones-financieras/requisitos-tarjeta-plata-card":
    "/apply/citi-double-cash",
};

// Map WordPress URLs with -next suffix to their actual Next.js routes
// These are for direct access to the new URLs with -next suffix
const blogStylePathMappings = {
  "/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next":
    "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",
  "/mx/soluciones-financieras/tarjeta-plata-card-next":
    "/soluciones-financieras/tarjeta-plata-card-next",
};

// Next.js middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Vercel deployment - handle direct access to blog-style URLs
  // For Vercel, we don't need the /mx prefix since we're on a separate domain
  const cleanPathname = pathname.startsWith("/mx")
    ? pathname.slice(3)
    : pathname;

  // Handle direct access to blog-style URLs with -next suffix
  // Example: /soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next -> /soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next
  const directBlogStyleKey = Object.keys(blogStylePathMappings).find(
    (key) => key === pathname || key === cleanPathname
  );

  if (directBlogStyleKey) {
    const nextJsPath =
      blogStylePathMappings[
        directBlogStyleKey as keyof typeof blogStylePathMappings
      ];
    url.pathname = nextJsPath;
    return NextResponse.rewrite(url);
  }

  // If the URL ends with '-next', serve the Next.js page for the original site structure
  // Example: /recomendador-de-tarjetas-de-credito-next -> /recommendation
  if (cleanPathname.endsWith("-next")) {
    // Extract the path without the '-next' suffix
    const originalPath = cleanPathname.slice(0, -5);

    // Find the matching path with or without /mx prefix
    const pathKey = Object.keys(pathMappings).find(
      (key) => key === originalPath || key === `/mx${originalPath}`
    );

    if (pathKey) {
      const nextJsPath = pathMappings[pathKey as keyof typeof pathMappings];
      url.pathname = nextJsPath;
      return NextResponse.rewrite(url);
    }
  }

  // For direct path access to the Next.js pages, we'll just serve them directly in Vercel
  // instead of redirecting to WordPress paths as we did in the WordPress integration

  // Continue normal Next.js routing for all other paths
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Run middleware on Next.js app routes
    "/recommendation",
    "/credit-cards",
    "/apply",
    "/apply/:path*",
    "/citi-double-cash",
    // Run on WordPress paths with '-next' suffix
    "/mx/:path*-next",
    // Run on blog-style routes
    "/soluciones-financieras/:path*",
  ],
};
