# Next.js Configuration Updates for WordPress Integration

To ensure the Next.js application works correctly when integrated with WordPress, we need to make the following updates to the Next.js configuration.

## 1. Update `next.config.mjs`

The `next.config.mjs` file needs to be updated to properly handle asset prefixes and base paths when the application is running within the WordPress directory structure.

```javascript
// next.config.mjs
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  
  // Enable asset prefix for the WordPress integration
  assetPrefix: process.env.NODE_ENV === "production" 
    ? "/mx/topfinanzas-pages-mx" 
    : undefined,
  
  // Use standalone output for easier deployment
  output: "standalone",
  
  // Configure image optimization
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.topfinanzas.com",
        port: "",
        pathname: "/images/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["media.topfinanzas.com"],
    minimumCacheTTL: 60,
  },
  
  // Performance optimizations
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: true,
    optimizePackageImports: ["next/font"],
  },
  optimizeFonts: true,
  
  // Simplified eslint and typescript config for production
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
```

## 2. Update `middleware.ts`

The middleware needs to be updated to handle the WordPress integration path structure:

```typescript
import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to handle URL routing for TopFinanzas Mexico Next.js pages
 * integrated with WordPress
 */

// Map blog-style WordPress paths with -next suffix to their Next.js routes
const blogStylePathMappings = {
  "/mx/recomendador-de-tarjetas-de-credito-p1-next":
    "/recomendador-de-tarjetas-de-credito-p1-next",
  "/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next":
    "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",
  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next",
  "/mx/soluciones-financieras/tarjeta-plata-card-next":
    "/soluciones-financieras/tarjeta-plata-card-next",
  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",
  "/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",
};

// Without /mx prefix for direct access
const directBlogStyleMappings = {
  "/recomendador-de-tarjetas-de-credito-p1-next":
    "/recomendador-de-tarjetas-de-credito-p1-next",
  "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next":
    "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",
  "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next",
  "/soluciones-financieras/tarjeta-plata-card-next":
    "/soluciones-financieras/tarjeta-plata-card-next",
  "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",
  "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next":
    "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",
};

// Next.js middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Handle /mx/ prefix paths (WordPress integration)
  if (pathname.startsWith("/mx/")) {
    // Strip the /mx/ prefix for internal routing
    const pathWithoutPrefix = pathname.slice(3);
    
    // Check if this is a blog-style path with -next suffix
    const key = `/mx${pathWithoutPrefix}`;
    
    if (blogStylePathMappings[key]) {
      url.pathname = blogStylePathMappings[key];
      return NextResponse.rewrite(url);
    }
  } 
  // Handle direct access without /mx/ prefix
  else if (directBlogStyleMappings[pathname]) {
    url.pathname = directBlogStyleMappings[pathname];
    return NextResponse.rewrite(url);
  }

  // Continue normal Next.js routing for all other paths
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Run on WordPress paths with '-next' suffix
    "/mx/:path*-next",
    // Run on blog-style routes
    "/mx/soluciones-financieras/:path*",
    // Run on direct access paths
    "/recomendador-de-tarjetas-de-credito-p1-next",
    "/soluciones-financieras/:path*",
  ],
};
```

## 3. Create an Environment Configuration File

Create a new file `.env.production` in the project root:

```markdown
# Production environment configuration for WordPress integration
NODE_ENV=production
NEXT_PUBLIC_ASSET_PREFIX=/mx/topfinanzas-pages-mx
NEXT_PUBLIC_BASE_PATH=/mx
```

## 4. Update `package.json` Scripts

Modify the scripts in `package.json` to include configuration for the WordPress integration:

```json
{
  "scripts": {
    "dev": "next dev -p 3003",
    "build": "next build",
    "start": "next start -p 3003",
    "build:wordpress": "NODE_ENV=production NEXT_PUBLIC_WORDPRESS_INTEGRATION=true next build",
    "start:wordpress": "NODE_ENV=production NEXT_PUBLIC_WORDPRESS_INTEGRATION=true next start -p 3003",
    "lint": "next lint"
  }
}
```

## Implementation Process

1. Make the above changes to the configuration files
2. Test the changes in a development environment
3. Build the application with `npm run build:wordpress`
4. Deploy to the WordPress server using the integration script
5. Test the integration by accessing the URLs with the `-next` suffix

## Considerations

- **Image Loading**: With the asset prefix configured, image URLs will be properly resolved
- **API Routes**: API routes will be accessible under the `/mx/topfinanzas-pages-mx/api/` path
- **Static Assets**: CSS, JS, and other assets will be loaded from `/mx/topfinanzas-pages-mx/_next/`
- **Analytics**: Ensure analytics work correctly with the new URL structure
