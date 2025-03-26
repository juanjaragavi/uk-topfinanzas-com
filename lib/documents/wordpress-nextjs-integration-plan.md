# WordPress and Next.js Integration Plan for TopFinanzas Mexico

This document outlines a comprehensive plan for integrating the Next.js application located in `/var/www/html/mx/topfinanzas-pages-mx/` with the existing WordPress installation in `/var/www/html/mx/`, enabling both to run side-by-side while maintaining distinct URL structures for Google Ads A/B testing.

## Integration Architecture

```
                      ┌───────────────────────┐
                      │                       │
                      │    Apache Server      │
                      │    (topfinanzas.com)  │
                      │                       │
                      └───────────┬───────────┘
                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
    ┌────────────▼────────────┐     ┌─────────────▼──────────────┐
    │                         │     │                            │
    │  WordPress Installation │     │  Next.js Application       │
    │  /var/www/html/mx/     │     │  /var/www/html/mx/         │
    │                         │     │  topfinanzas-pages-mx/     │
    │  Standard URLs:         │     │                            │
    │  /mx/recomendador...    │     │  URLs with -next suffix:   │
    │                         │     │  /mx/recomendador...-next  │
    └─────────────────────────┘     └────────────────────────────┘
```

## Implementation Steps

### 1. Configure Apache for Next.js Proxying

Apache needs to be configured to correctly route requests to either WordPress or the Next.js application based on URL patterns.

#### 1.1 Create Apache Configuration File

Create a file at `/etc/apache2/conf-available/topfinanzas-next.conf`:

```apache
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Preserve host header
    ProxyPreserveHost On
    
    # Proxy for Next.js app - handles requests to the app
    <Location /mx/topfinanzas-pages-mx/>
        ProxyPass http://localhost:3003/
        ProxyPassReverse http://localhost:3003/
    </Location>
    
    # Static assets configuration
    Alias /mx/_next/ /var/www/html/mx/topfinanzas-pages-mx/.next/static/
    <Directory /var/www/html/mx/topfinanzas-pages-mx/.next/static/>
        Options FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control "public, max-age=31536000, immutable"
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </Directory>
</IfModule>
```

#### 1.2 Enable Apache Configuration

```bash
# Enable required Apache modules
sudo a2enmod proxy proxy_http expires headers

# Enable the configuration
sudo a2enconf topfinanzas-next

# Test the configuration
sudo apache2ctl configtest

# Reload Apache if the test passes
sudo systemctl reload apache2
```

### 2. Configure WordPress .htaccess

The `.htaccess` file in `/var/www/html/mx/` needs to be updated to route specific URLs to the Next.js application.

```apache
# BEGIN WordPress with Next.js Integration
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /mx/

# Protect .htaccess, wp-config.php, and other sensitive files
<FilesMatch "^(\.htaccess|wp-config\.php|xmlrpc\.php|wp-admin/includes/.*\.php)">
    Order deny,allow
    Deny from all
</FilesMatch>

# Allow direct access to specific files that don't need to be processed by WordPress
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg|eot)$">
    Order allow,deny
    Allow from all
</FilesMatch>

# Route -next suffix URLs to the Next.js application
# These are the URLs used in Google Ads for testing
RewriteRule ^recomendador-de-tarjetas-de-credito-p1-next(/.*)?$ topfinanzas-pages-mx/recomendador-de-tarjetas-de-credito-p1-next [L,QSA]
RewriteRule ^soluciones-financieras/([^/]+)-next(/.*)?$ topfinanzas-pages-mx/soluciones-financieras/$1-next [L,QSA]

# Handle static assets from Next.js
RewriteRule ^_next/(.*)$ topfinanzas-pages-mx/_next/$1 [L]

# Handle Next.js API routes
RewriteRule ^api/(.*)$ topfinanzas-pages-mx/api/$1 [L,QSA]

# Default WordPress handling for all other requests
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /mx/index.php [L]
</IfModule>
# END WordPress with Next.js Integration
```

### 3. Configure Next.js Application

#### 3.1 Update next.config.mjs

The Next.js configuration needs to be updated to handle URL paths correctly:

```javascript
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Output configuration for standalone mode
  output: "standalone",
  // Set the correct asset prefix for WordPress integration
  assetPrefix: process.env.NODE_ENV === "production" 
    ? "/mx/topfinanzas-pages-mx" 
    : undefined,
  // Enable production base path for subpath integration
  basePath: process.env.NODE_ENV === "production" 
    ? "/mx/topfinanzas-pages-mx" 
    : "",
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
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: true,
    optimizePackageImports: ["next/font"],
  },
  optimizeFonts: true,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
```

#### 3.2 Update middleware.ts

The middleware needs to handle URLs for both WordPress integration and direct access:

```typescript
import { NextRequest, NextResponse } from "next/server";

// Blog-style path mappings
const blogStylePathMappings = {
  "/mx/recomendador-de-tarjetas-de-credito-p1-next": "/recomendador-de-tarjetas-de-credito-p1-next",
  "/recomendador-de-tarjetas-de-credito-p1-next": "/recomendador-de-tarjetas-de-credito-p1-next",
  
  // Soluciones Financieras pages
  "/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next": "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",
  "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next": "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next",
  
  "/mx/soluciones-financieras/tarjeta-plata-card-next": "/soluciones-financieras/tarjeta-plata-card-next",
  "/soluciones-financieras/tarjeta-plata-card-next": "/soluciones-financieras/tarjeta-plata-card-next",
  
  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next": "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next",
  "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next": "/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next",
  
  "/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next": "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",
  "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next": "/soluciones-financieras/tarjeta-de-credito-azul-bbva-next",
  
  "/mx/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next": "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",
  "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next": "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next",
  
  // Add all other pages that need to be accessible with -next suffix
  "/mx/soluciones-financieras/requisitos-tarjeta-plata-card-next": "/soluciones-financieras/requisitos-tarjeta-plata-card-next",
  "/soluciones-financieras/requisitos-tarjeta-plata-card-next": "/soluciones-financieras/requisitos-tarjeta-plata-card-next",
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
  
  // Handle direct access to blog-style URLs with -next suffix
  // Clean the pathname for checking against our mappings
  let cleanPathname = pathname;
  
  if (isProduction && isWordPressIntegration) {
    // Remove the /mx/topfinanzas-pages-mx prefix for WordPress integration
    cleanPathname = pathname.replace(/^\/mx\/topfinanzas-pages-mx/, "");
  } else if (pathname.startsWith("/mx")) {
    // For direct access through Apache, remove just the /mx prefix
    cleanPathname = pathname.slice(3);
  }
  
  // Find a matching path in our mappings
  const directBlogStyleKey = Object.keys(blogStylePathMappings).find(
    (key) => key === pathname || key === cleanPathname
  );

  if (directBlogStyleKey) {
    const nextJsPath = blogStylePathMappings[directBlogStyleKey as keyof typeof blogStylePathMappings];
    
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
    // Run on blog-style routes
    "/recomendador-de-tarjetas-de-credito-p1-next",
    "/soluciones-financieras/:path*",
    // WordPress integration paths
    "/mx/topfinanzas-pages-mx/:path*",
    // Run on WordPress paths with '-next' suffix
    "/mx/:path*-next",
  ],
};
```

### 4. Set Up PM2 for Process Management

Create a startup script for PM2 at `/var/www/html/mx/topfinanzas-pages-mx/start-nextjs.sh`:

```bash
#!/bin/bash

# Next.js start script for WordPress integration

# Change to the Next.js app directory
cd /var/www/html/mx/topfinanzas-pages-mx

# Set environment variables
export NODE_ENV=production
export PORT=3003

# Start the Next.js server
echo "Starting Next.js server at $(date)"
exec npm run start
```

Make the script executable:

```bash
chmod +x /var/www/html/mx/topfinanzas-pages-mx/start-nextjs.sh
```

Configure PM2 to manage the application:

```bash
# Start the application
pm2 start /var/www/html/mx/topfinanzas-pages-mx/start-nextjs.sh --name "topfinanzas-next"

# Save the PM2 configuration
pm2 save

# Ensure PM2 starts on system boot
pm2 startup
```

### 5. Complete Implementation Script

Create a full implementation script that automates the entire setup process:

```bash
#!/bin/bash

# TopFinanzas WordPress-Next.js Integration Script
# This script sets up the integration between WordPress and Next.js

# Exit on error
set -e

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
WP_DIR="/var/www/html/mx"
NEXT_DIR="$WP_DIR/topfinanzas-pages-mx"
APACHE_CONF="/etc/apache2/conf-available/topfinanzas-next.conf"
PORT="3003"

# Check for root privileges
if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root. Please use sudo."
    exit 1
fi

# Step 1: Ensure the Next.js app is built and ready
log "Verifying Next.js application build"
if [ ! -d "$NEXT_DIR/.next" ]; then
    log "Building the Next.js application"
    cd "$NEXT_DIR"
    npm ci
    NODE_ENV=production npm run build
else
    log "Next.js app is already built at $NEXT_DIR/.next"
fi

# Step 2: Create Apache configuration
log "Creating Apache configuration"
cat >"$APACHE_CONF" <<EOF
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Preserve host header
    ProxyPreserveHost On
    
    # Proxy for Next.js app - handles requests to the app
    <Location /mx/topfinanzas-pages-mx/>
        ProxyPass http://localhost:$PORT/
        ProxyPassReverse http://localhost:$PORT/
    </Location>
    
    # Static assets configuration
    Alias /mx/_next/ /var/www/html/mx/topfinanzas-pages-mx/.next/static/
    <Directory /var/www/html/mx/topfinanzas-pages-mx/.next/static/>
        Options FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control "public, max-age=31536000, immutable"
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </Directory>
</IfModule>
EOF

# Step 3: Configure .htaccess
log "Configuring .htaccess"
if [ -f "$WP_DIR/.htaccess" ]; then
    cp "$WP_DIR/.htaccess" "$WP_DIR/.htaccess.bak.$(date +%Y%m%d%H%M%S)"
fi

cat >"$WP_DIR/.htaccess" <<'EOF'
# BEGIN WordPress with Next.js Integration
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /mx/

# Protect .htaccess, wp-config.php, and other sensitive files
<FilesMatch "^(\.htaccess|wp-config\.php|xmlrpc\.php|wp-admin/includes/.*\.php)">
    Order deny,allow
    Deny from all
</FilesMatch>

# Allow direct access to specific files that don't need to be processed by WordPress
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg|eot)$">
    Order allow,deny
    Allow from all
</FilesMatch>

# Route -next suffix URLs to the Next.js application
# These are the URLs used in Google Ads for testing
RewriteRule ^recomendador-de-tarjetas-de-credito-p1-next(/.*)?$ topfinanzas-pages-mx/recomendador-de-tarjetas-de-credito-p1-next [L,QSA]
RewriteRule ^soluciones-financieras/([^/]+)-next(/.*)?$ topfinanzas-pages-mx/soluciones-financieras/$1-next [L,QSA]

# Handle static assets from Next.js
RewriteRule ^_next/(.*)$ topfinanzas-pages-mx/_next/$1 [L]

# Handle Next.js API routes
RewriteRule ^api/(.*)$ topfinanzas-pages-mx/api/$1 [L,QSA]

# Default WordPress handling for all other requests
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /mx/index.php [L]
</IfModule>
# END WordPress with Next.js Integration
EOF

# Step 4: Create PM2 start script
log "Creating PM2 start script"
cat >"$NEXT_DIR/start-nextjs.sh" <<EOF
#!/bin/bash

# Next.js start script for WordPress integration

# Change to the Next.js app directory
cd "$NEXT_DIR"

# Set environment variables
export NODE_ENV=production
export PORT=$PORT

# Start the Next.js server
echo "Starting Next.js server at \$(date)"
exec npm run start
EOF

chmod +x "$NEXT_DIR/start-nextjs.sh"

# Step 5: Enable Apache modules and configuration
log "Enabling Apache modules and configuration"
a2enmod proxy proxy_http expires headers
a2enconf topfinanzas-next
apache2ctl configtest && systemctl reload apache2

# Step 6: Set correct permissions
log "Setting correct permissions"
find "$NEXT_DIR" -type d -exec chmod 755 {} \;
find "$NEXT_DIR" -type f -exec chmod 644 {} \;
find "$NEXT_DIR/scripts" -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true
chmod +x "$NEXT_DIR/start-nextjs.sh"

# Step 7: Configure PM2
log "Setting up PM2 process"
if command -v pm2 &>/dev/null; then
    pm2 delete topfinanzas-next 2>/dev/null || true
    pm2 start "$NEXT_DIR/start-nextjs.sh" --name "topfinanzas-next"
    pm2 save
    
    # Create a systemd service for PM2 if it doesn't exist
    if [ ! -f /etc/systemd/system/pm2-topfinanzas.service ]; then
        pm2 startup systemd -u www-data --hp /var/www
        systemctl enable pm2-www-data
    fi
else
    log "ERROR: PM2 is not installed. Please install it with: npm install -g pm2"
    exit 1
fi

# Step 8: Verify the setup
log "Verifying setup"
echo "Apache configuration test: $(apache2ctl configtest 2>&1 | grep 'Syntax OK' || echo 'Failed')"
echo "PM2 process running: $(pm2 list | grep topfinanzas-next || echo 'Not running')"
echo "Next.js port in use: $(netstat -tuln | grep ":$PORT" || echo 'Not in use')"

# Step 9: Final instructions
log "Integration completed successfully!"
echo ""
echo "The Next.js application has been integrated with WordPress."
echo ""
echo "Test URLs:"
echo "- WordPress (original): https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1"
echo "- Next.js (A/B test): https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next"
echo ""
echo "To manage the Next.js application:"
echo "- View logs: sudo pm2 logs topfinanzas-next"
echo "- Restart app: sudo pm2 restart topfinanzas-next"
echo "- Stop app: sudo pm2 stop topfinanzas-next"
echo ""
echo "If you encounter issues, run the fix script: sudo ./deployment/scripts/fix-integration-advanced.sh"
```

### 6. Verification Process

After implementing the integration, use the following verification checklist:

1. **WordPress URLs still work properly**:
   - `https://topfinanzas.com/mx/`
   - `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1`
   - `https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank/`

2. **Next.js URLs with `-next` suffix work**:
   - `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next`
   - `https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next`
   - `https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next`

3. **Static assets load properly**:
   - Check browser console for 404 errors
   - Verify CSS styles are applied correctly
   - Confirm images load properly

4. **PM2 process is running**:
   ```bash
   sudo pm2 status topfinanzas-next
   ```

5. **Apache is properly configured**:
   ```bash
   sudo apache2ctl configtest
   ```

## Google Ads Setup for A/B Testing

To properly A/B test the WordPress and Next.js versions:

1. **Create duplicate campaigns**:
   - One campaign pointing to WordPress URLs
   - One campaign pointing to URLs with `-next` suffix

2. **Match all settings except URLs**:
   - Same ad copy, keywords, and targeting
   - Equal budgets
   - Identical bid strategies

3. **Track performance separately**:
   - Configure Google Analytics to track both URL patterns
   - Set up conversion tracking for both versions
   - Monitor key metrics (bounce rate, conversion rate, time on site)

## Troubleshooting

### Common Issues and Solutions

1. **404 errors for Next.js pages**:
   - Check .htaccess rules are correct
   - Verify Apache proxy configuration
   - Ensure PM2 process is running

2. **Static assets not loading**:
   - Check browser console for specific errors
   - Verify the Alias directive in Apache configuration
   - Confirm permissions on the `.next/static` directory

3. **PM2 process crashes**:
   - Check PM2 logs: `sudo pm2 logs topfinanzas-next`
   - Verify Node.js version compatibility
   - Check for memory issues: `free -h`

### Useful Commands

```bash
# View Apache error logs
sudo tail -f /var/log/apache2/error.log

# Check PM2 logs
sudo pm2 logs topfinanzas-next

# Restart the Next.js application
sudo pm2 restart topfinanzas-next

# Test Apache configuration
sudo apache2ctl configtest

# Reload Apache
sudo systemctl reload apache2

# Check if port is in use
sudo netstat -tuln | grep ":3003"
```

## Maintenance and Updates

When updating the Next.js application:

1. Pull the latest changes
   ```bash
   cd /var/www/html/mx/topfinanzas-pages-mx
   git pull origin main
   ```

2. Rebuild the application
   ```bash
   npm ci
   NODE_ENV=production npm run build
   ```

3. Restart the PM2 process
   ```bash
   sudo pm2 restart topfinanzas-next
   ```

## Summary

This implementation plan enables:

1. The existing WordPress site to continue functioning normally at standard URLs
2. The Next.js application to serve pages at URLs with the `-next` suffix
3. Google Ads campaigns to direct traffic to either version for A/B testing
4. Performance and conversion tracking for both versions

The integration is designed to be non-disruptive to the existing WordPress site while providing a path for testing and potentially migrating to the Next.js application in the future.
