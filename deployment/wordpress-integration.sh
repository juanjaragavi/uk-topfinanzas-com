#!/bin/bash

# ========================================================
# TopFinanzas Mexico - Next.js to WordPress Integration Script
# ========================================================
# This script prepares the Next.js app for integration with WordPress:
# 1. Clones the repository into /var/www/html/mx/topfinanzas-pages-mx
# 2. Configures URL routing via .htaccess
# 3. Sets up PM2 process management
# 4. Configures Apache proxying
# ========================================================

# Exit on error
set -e

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
WP_DIR="/var/www/html/mx"
NEXT_DIR="$WP_DIR/topfinanzas-pages-mx"
REPO_URL="https://github.com/juanjaragavi/top-finanzas-pages-mx.git" # Replace with actual repository URL
BRANCH="main"
NODE_VERSION="18"
NEXT_PORT="3003" # Match port in package.json

# Step 1: Check if we have the required permissions
log "Checking permissions for $WP_DIR"
if [ ! -w "$WP_DIR" ]; then
    echo "Error: You don't have write permission for $WP_DIR"
    echo "Please run this script with sudo or as a user with appropriate permissions"
    exit 1
fi

# Step 2: Clone or update the NextJS repository
if [ -d "$NEXT_DIR" ]; then
    log "Updating existing NextJS app"
    cd "$NEXT_DIR"
    git pull origin $BRANCH
else
    log "Cloning the repository"
    git clone $REPO_URL "$NEXT_DIR"
    cd "$NEXT_DIR"
    git checkout $BRANCH
fi

# Step 3: Install dependencies and build the app
log "Setting up Node environment"
# Use nvm if available or use system node
if command -v nvm &>/dev/null; then
    nvm use $NODE_VERSION || nvm install $NODE_VERSION
else
    # Check if system node is available and has correct version
    node_ver=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
    if [ "$node_ver" -lt "$NODE_VERSION" ]; then
        echo "Node.js version $NODE_VERSION or higher is required."
        echo "Please install it manually or install nvm."
        exit 1
    fi
fi

log "Installing dependencies"
npm ci

log "Building the Next.js app"
NODE_ENV=production npm run build

# Step 4: Create/update .htaccess file for URL rewriting
# This is crucial for routing specific URLs to the Next.js app
log "Creating .htaccess file for URL rewrites"

# Backup existing .htaccess if it exists
if [ -f "$WP_DIR/.htaccess" ]; then
    cp "$WP_DIR/.htaccess" "$WP_DIR/.htaccess.bak.$(date +%Y%m%d%H%M%S)"
fi

# Create new .htaccess with WordPress + Next.js routing rules
cat >"$WP_DIR/.htaccess" <<'EOF'
# BEGIN WordPress with Next.js Integration
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /mx/

# Protect .htaccess and other sensitive files
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

# Step 5: Set correct permissions
log "Setting correct permissions"
find "$NEXT_DIR" -type d -exec chmod 755 {} \;
find "$NEXT_DIR" -type f -exec chmod 644 {} \;

# Make executable files executable
chmod +x "$NEXT_DIR/scripts/"*.sh 2>/dev/null || true

# Step 6: Create a script to run the Next.js server using PM2
log "Creating PM2 startup script"
cat >"$NEXT_DIR/start-nextjs.sh" <<EOF
#!/bin/bash
cd "$(dirname "$0")"
NODE_ENV=production npm run start
EOF

chmod +x "$NEXT_DIR/start-nextjs.sh"

# Step 7: Configure PM2 for process management if installed
if command -v pm2 &>/dev/null; then
    log "Setting up PM2 process"
    pm2 delete topfinanzas-next 2>/dev/null || true
    pm2 start "$NEXT_DIR/start-nextjs.sh" --name "topfinanzas-next"
    pm2 save

    log "Creating Apache proxy configuration"
    # Create an Apache proxy configuration file
    cat >"/etc/apache2/conf-available/topfinanzas-next.conf" <<EOF
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Preserve host header
    ProxyPreserveHost On
    
    # Proxy for Next.js app - handles requests to the app
    <Location /mx/topfinanzas-pages-mx/>
        ProxyPass http://localhost:$NEXT_PORT/
        ProxyPassReverse http://localhost:$NEXT_PORT/
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

    log "Enabling Apache modules and configuration"
    a2enmod proxy proxy_http expires headers
    a2enconf topfinanzas-next

    log "Testing Apache configuration"
    apache2ctl configtest && systemctl reload apache2
else
    log "PM2 not installed. Manual setup required"
    echo "To start the Next.js app, run: $NEXT_DIR/start-nextjs.sh"
    echo "You'll need to set up a process manager and configure Apache manually"
fi

log "Deployment completed successfully!"
echo ""
echo "Important paths:"
echo "  - WordPress root: $WP_DIR"
echo "  - Next.js app: $NEXT_DIR"
echo ""
echo "To manually restart the Next.js server:"
echo "  pm2 restart topfinanzas-next"
echo ""
echo "URLs for testing:"
echo "  - https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next"
echo "  - https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next"
