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

  // Handle direct access to blog-style URLs with -next suffix
  // Example: /mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next -> /soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next
  if (Object.prototype.hasOwnProperty.call(blogStylePathMappings, pathname)) {
    const nextJsPath =
      blogStylePathMappings[pathname as keyof typeof blogStylePathMappings];
    url.pathname = nextJsPath;
    return NextResponse.rewrite(url);
  }

  // If the URL ends with '-next', serve the Next.js page for the original site structure
  // Example: /mx/recomendador-de-tarjetas-de-credito-next -> /recommendation
  if (pathname.endsWith("-next")) {
    // Extract the WordPress path without the '-next' suffix
    const originalPath = pathname.slice(0, -5);

    // Check if the originalPath is a key in our pathMappings using type-safe approach
    if (Object.prototype.hasOwnProperty.call(pathMappings, originalPath)) {
      const nextJsPath =
        pathMappings[originalPath as keyof typeof pathMappings];
      url.pathname = nextJsPath;
      return NextResponse.rewrite(url);
    }
  }

  // For direct path access to the Next.js pages, redirect to the WordPress URL with '-next' suffix
  // This is only for Google Ads A/B testing purposes
  // Example: /recommendation -> /mx/recomendador-de-tarjetas-de-credito-next
  for (const [wpPath, nextJsPath] of Object.entries(pathMappings)) {
    if (pathname === nextJsPath) {
      url.pathname = `${wpPath}-next`;
      return NextResponse.redirect(url);
    }
  }

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
