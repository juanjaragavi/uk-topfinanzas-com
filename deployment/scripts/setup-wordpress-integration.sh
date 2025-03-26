#!/bin/bash

# TopFinanzas WordPress-Next.js Integration Script
# ===============================================
# This script sets up the integration between WordPress and Next.js
# to enable A/B testing through Google Ads campaigns.
#
# - WordPress serves original pages at standard URLs
# - Next.js serves pages at URLs with "-next" suffix
# - Both run side-by-side without interference
#
# Usage: sudo ./setup-wordpress-integration.sh

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

# Step 2: Update Next.js configuration
log "Updating Next.js configuration"
if [ -f "$NEXT_DIR/next.config.mjs" ]; then
    # Backup the original configuration
    cp "$NEXT_DIR/next.config.mjs" "$NEXT_DIR/next.config.mjs.bak.$(date +%Y%m%d%H%M%S)"

    # Update the configuration
    sed -i 's|// assetPrefix:|assetPrefix:|g' "$NEXT_DIR/next.config.mjs"
    sed -i 's|//     ? "https://topfinanzas.com/mx/topfinanzas-pages-mx"|    ? "/mx/topfinanzas-pages-mx"|g' "$NEXT_DIR/next.config.mjs"

    # Add basePath configuration if it doesn't exist
    if ! grep -q "basePath:" "$NEXT_DIR/next.config.mjs"; then
        sed -i '/assetPrefix:/a \  // Enable production base path for subpath integration\n  basePath: process.env.NODE_ENV === "production" \n    ? "/mx/topfinanzas-pages-mx" \n    : "",' "$NEXT_DIR/next.config.mjs"
    fi

    log "Next.js configuration updated"
else
    log "ERROR: Next.js configuration file not found at $NEXT_DIR/next.config.mjs"
    exit 1
fi

# Step 3: Create Apache configuration
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

# Step 4: Configure .htaccess
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

# Step 5: Create PM2 start script
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

# Step 6: Enable Apache modules and configuration
log "Enabling Apache modules and configuration"
a2enmod proxy proxy_http expires headers
a2enconf topfinanzas-next
apache2ctl configtest && systemctl reload apache2

# Step 7: Set correct permissions
log "Setting correct permissions"
find "$NEXT_DIR" -type d -exec chmod 755 {} \;
find "$NEXT_DIR" -type f -exec chmod 644 {} \;
find "$NEXT_DIR/scripts" -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true
chmod +x "$NEXT_DIR/start-nextjs.sh"

# Step 8: Configure PM2
log "Setting up PM2 process"
if command -v pm2 &>/dev/null; then
    pm2 delete topfinanzas-next 2>/dev/null || true
    pm2 start "$NEXT_DIR/start-nextjs.sh" --name "topfinanzas-next"
    pm2 save

    # Create a systemd service for PM2 if it doesn't exist
    if [ ! -f /etc/systemd/system/pm2-www-data.service ]; then
        pm2 startup systemd -u www-data --hp /var/www
        systemctl enable pm2-www-data
    fi
else
    log "ERROR: PM2 is not installed. Please install it with: npm install -g pm2"
    exit 1
fi

# Step 9: Verify the setup
log "Verifying setup"
echo "Apache configuration test: $(apache2ctl configtest 2>&1 | grep 'Syntax OK' || echo 'Failed')"
echo "PM2 process running: $(pm2 list | grep topfinanzas-next || echo 'Not running')"
echo "Next.js port in use: $(netstat -tuln | grep ":$PORT" || echo 'Not in use')"

# Step 10: Final instructions
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
