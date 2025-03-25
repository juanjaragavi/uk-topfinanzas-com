#!/bin/bash

# ========================================================
# TopFinanzas Mexico - Next.js to WordPress Deployment Script
# ========================================================
# This script deploys the Next.js app to the WordPress server
# It handles cloning the repository, building the app,
# and setting up the necessary redirects for URL handling.
# ========================================================

# Exit on error
set -e

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
WP_DIR="/var/www/html/mx"
NEXT_DIR="$WP_DIR/top-finanzas-pages-mx"
REPO_URL="https://github.com/juanjaragavi/top-finanzas-pages-mx.git"
BRANCH="main"
NODE_VERSION="18"

# Step 1: Check if we have the required permissions
log "Checking permissions for $WP_DIR"
if [ ! -w "$WP_DIR" ]; then
    echo "Error: You don't have write permission for $WP_DIR"
    echo "Please run this script with sudo or as a user with appropriate permissions"
    exit 1
fi

# Step 2: Create or update the NextJS directory
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

# Step 4: Create .htaccess file for URL rewriting
log "Creating .htaccess file for URL rewrites"
cat >"$WP_DIR/.htaccess" <<'EOF'
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /mx/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Route requests to -next paths to the Next.js application
RewriteRule ^(.+)-next(/.*)?$ top-finanzas-pages-mx/$1-next [L]

# Default WordPress handling for all other requests
RewriteRule . /mx/index.php [L]
</IfModule>
# END WordPress
EOF

# Step 5: Set correct permissions
log "Setting correct permissions"
find "$NEXT_DIR" -type d -exec chmod 755 {} \;
find "$NEXT_DIR" -type f -exec chmod 644 {} \;
# Make sure the standalone output directory is writable
chmod -R 755 "$NEXT_DIR/.next/standalone"

log "Creating symbolic links for static assets"
ln -sf "$NEXT_DIR/.next/static" "$WP_DIR/top-finanzas-pages-mx-static"

# Step 6: Create a script to run the Next.js server using PM2
log "Creating PM2 startup script"
cat >"$NEXT_DIR/start-nextjs.sh" <<'EOF'
#!/bin/bash
cd "$(dirname "$0")"
cd .next/standalone
NODE_ENV=production PORT=3001 node server.js
EOF

chmod +x "$NEXT_DIR/start-nextjs.sh"

# Step 7: Configure PM2 for process management if installed
if command -v pm2 &>/dev/null; then
    log "Setting up PM2 process"
    pm2 delete topfinanzas-next 2>/dev/null || true
    pm2 start "$NEXT_DIR/start-nextjs.sh" --name "topfinanzas-next"
    pm2 save

    log "Configuring Apache proxy for Next.js"
    # Create an Apache VirtualHost configuration file
    cat >"/etc/apache2/conf-available/topfinanzas-next.conf" <<'EOF'
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    ProxyRequests Off
    ProxyPreserveHost On
    
    # Proxy for Next.js app
    <Location /mx/top-finanzas-pages-mx/>
        ProxyPass http://localhost:3001/
        ProxyPassReverse http://localhost:3001/
    </Location>
    
    # Static assets
    Alias /mx/top-finanzas-pages-mx-static/ /var/www/html/mx/top-finanzas-pages-mx/.next/static/
    <Directory /var/www/html/mx/top-finanzas-pages-mx/.next/static/>
        Options FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control "public, max-age=2592000"
        ExpiresActive On
        ExpiresDefault "access plus 30 days"
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
echo "Your Next.js app is now deployed at: https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-next"
echo ""
echo "Important paths:"
echo "  - WordPress root: $WP_DIR"
echo "  - Next.js app: $NEXT_DIR"
echo "  - Next.js standalone output: $NEXT_DIR/.next/standalone"
echo ""
echo "To manually restart the Next.js server:"
echo "  pm2 restart topfinanzas-next"
