import { NextRequest, NextResponse } from "next/server";

// Blog-style path mappings
const blogStylePathMappings = {
  "/mx/recomendador-de-tarjetas-de-credito-p1-next":
    "/recomendador-de-tarjetas-de-credito-p1-next",
  "/recomendador-de-tarjetas-de-credito-p1-next":
    "/recomendador-de-tarjetas-de-credito-p1-next",

  // Soluciones Financieras pages
  "/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next":
    "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",
  "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next":
    "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",

  "/mx/soluciones-financieras/tarjeta-plata-card-next":
    "/soluciones-financieras/tarjeta-plata-card-next",
  "/soluciones-financieras/tarjeta-plata-card-next":
    "/soluciones-financieras/tarjeta-plata-card-next",

  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next",
  "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next",

  "/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",
  "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",

  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",
  "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",

  // Add all other pages that need to be accessible with -next suffix
  "/mx/soluciones-financieras/requisitos-tarjeta-plata-card-next":
    "/soluciones-financieras/requisitos-tarjeta-plata-card-next",
  "/soluciones-financieras/requisitos-tarjeta-plata-card-next":
    "/soluciones-financieras/requisitos-tarjeta-plata-card-next",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Handle basePath differences between development and production
  // In production, Next.js will be accessed through /mx/topfinanzas-pages-mx/
  const isProduction = process.env.NODE_ENV === "production";

  // Detect if we're in WordPress integration or direct Vercel access
  // WordPress integration will have URLs like /mx/topfinanzas-pages-mx/...
  const isWordPressIntegration = pathname.includes("/mx/topfinanzas-pages-mx");
  const isVercel = process.env.VERCEL === "1";

  // Handle direct access to blog-style URLs with -next suffix
  // Clean the pathname for checking against our mappings
  let cleanPathname = pathname;

  if (isProduction && isWordPressIntegration) {
    // Remove the /mx/topfinanzas-pages-mx prefix for WordPress integration
    cleanPathname = pathname.replace(/^\/mx\/topfinanzas-pages-mx/, "");
  } else if (pathname.startsWith("/mx")) {
    // For direct access through Apache, remove just the /mx prefix
    cleanPathname = pathname.slice(3);
  } else if (isVercel) {
    // For Vercel deployments, use the pathname as is
    cleanPathname = pathname;
  }

  // Find a matching path in our mappings
  const directBlogStyleKey = Object.keys(blogStylePathMappings).find(
    (key) => key === pathname || key === cleanPathname
  );

  if (directBlogStyleKey) {
    const nextJsPath =
      blogStylePathMappings[
        directBlogStyleKey as keyof typeof blogStylePathMappings
      ];

    // Set the correct destination path
    if (isProduction && isWordPressIntegration) {
      // For WordPress integration, we need to maintain the base path
      url.pathname = `/mx/topfinanzas-pages-mx${nextJsPath}`;
    } else {
      url.pathname = nextJsPath;
    }

    return NextResponse.rewrite(url);
  }

  // Continue normal Next.js routing for all other paths
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Run on all paths for Vercel deployments
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Run on blog-style routes
    "/recomendador-de-tarjetas-de-credito-p1-next",
    "/soluciones-financieras/:path*",
    // WordPress integration paths
    "/mx/topfinanzas-pages-mx/:path*",
    // Run on WordPress paths with '-next' suffix
    "/mx/:path*-next",
  ],
};
