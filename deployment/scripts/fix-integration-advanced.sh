#!/bin/bash

# Advanced script to fix Next.js integration with WordPress
# This script addresses common issues and provides detailed diagnostics
# Run with sudo privileges

# Exit on error
set -e

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
NEXT_DIR="/var/www/html/mx/topfinanzas-pages-mx"
APACHE_CONF="/etc/apache2/conf-available/topfinanzas-next.conf"
START_SCRIPT="$NEXT_DIR/start-nextjs.sh"
PORT="3003" # Ensure this matches package.json

# Step 1: System diagnostics
log "Running system diagnostics"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "PM2 version: $(pm2 -v 2>/dev/null || echo 'Not installed')"
echo "Apache version: $(apache2 -v | head -1)"
echo "System memory: $(free -h | grep Mem)"
echo "Disk space: $(df -h / | tail -1)"

# Step 2: Fix the start script with absolute paths
log "Creating improved Next.js start script"
cat >"$START_SCRIPT" <<EOF
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

chmod +x "$START_SCRIPT"
echo "Start script created and made executable"

# Step 3: Check the package.json file
log "Checking package.json configuration"
if [ -f "$NEXT_DIR/package.json" ]; then
    echo "package.json exists"
    START_COMMAND=$(grep '"start"' "$NEXT_DIR/package.json" | head -1)
    echo "Start command: $START_COMMAND"
else
    echo "ERROR: package.json not found at $NEXT_DIR/package.json"
    exit 1
fi

# Step 4: Update Apache configuration
log "Updating Apache configuration"
if [ -f "$APACHE_CONF" ]; then
    # Backup the original config
    cp "$APACHE_CONF" "$APACHE_CONF.bak.$(date +%Y%m%d%H%M%S)"

    # Update the port in the ProxyPass directive
    sed -i "s|http://localhost:[0-9]\+/|http://localhost:$PORT/|g" "$APACHE_CONF"
    echo "Updated Apache configuration with port $PORT"

    # Ensure Apache modules are enabled
    for module in proxy proxy_http headers expires; do
        a2enmod $module
    done

    # Ensure the config is enabled
    a2enconf topfinanzas-next

    # Test Apache configuration
    echo "Testing Apache configuration..."
    apache2ctl configtest

    # Reload Apache
    systemctl reload apache2
    echo "Apache reloaded"
else
    echo "ERROR: Apache configuration file not found at $APACHE_CONF"
    log "Creating Apache configuration file"
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
    a2enconf topfinanzas-next
    systemctl reload apache2
fi

# Step 5: Check and update .htaccess
log "Checking .htaccess configuration"
HTACCESS="/var/www/html/mx/.htaccess"
if [ -f "$HTACCESS" ]; then
    # Check if Next.js routing rules exist
    if grep -q "topfinanzas-pages-mx" "$HTACCESS"; then
        echo ".htaccess contains Next.js routing rules"
    else
        echo "Adding Next.js routing rules to .htaccess"
        cp "$HTACCESS" "$HTACCESS.bak.$(date +%Y%m%d%H%M%S)"

        # Insert Next.js rules before the WordPress closing tag
        sed -i '/<\/IfModule>/i \
# Route -next suffix URLs to the Next.js application\
RewriteRule ^recomendador-de-tarjetas-de-credito-p1-next(/.*)?$ topfinanzas-pages-mx/recomendador-de-tarjetas-de-credito-p1-next [L,QSA]\
RewriteRule ^soluciones-financieras/([^/]+)-next(/.*)?$ topfinanzas-pages-mx/soluciones-financieras/$1-next [L,QSA]\
\
# Handle static assets from Next.js\
RewriteRule ^_next/(.*)$ topfinanzas-pages-mx/_next/$1 [L]\
\
# Handle Next.js API routes\
RewriteRule ^api/(.*)$ topfinanzas-pages-mx/api/$1 [L,QSA]' "$HTACCESS"
    fi
else
    echo "ERROR: .htaccess file not found at $HTACCESS"
fi

# Step 6: Restart PM2 process with proper configuration
log "Restarting Next.js application with PM2"
pm2 delete topfinanzas-next 2>/dev/null || true
(cd "$NEXT_DIR" && npm run build)
pm2 start "$START_SCRIPT" --name "topfinanzas-next" --time
pm2 save
echo "PM2 process restarted"

# Step 7: Verify the process is running
log "Verifying the Next.js application is running"
if pm2 status | grep -q "topfinanzas-next.*online"; then
    echo "✅ PM2 process is running: topfinanzas-next"

    # Check if the port is in use
    if netstat -tuln | grep -q ":$PORT"; then
        echo "✅ Port $PORT is in use (application is listening)"
    else
        echo "❌ Port $PORT is not in use. Application may not be listening."
        echo "Recent logs from PM2:"
        pm2 logs topfinanzas-next --lines 10 --nostream
    fi
else
    echo "❌ PM2 process is not running properly"
    echo "Recent logs from PM2:"
    pm2 logs topfinanzas-next --lines 10 --nostream
fi

log "Integration fix completed!"
echo "To verify the integration, try accessing:"
echo "https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next"
echo ""
echo "Additional troubleshooting commands:"
echo "- Check logs: sudo pm2 logs topfinanzas-next --lines 50"
echo "- Restart app: sudo pm2 restart topfinanzas-next"
echo "- Reload Apache: sudo systemctl reload apache2"
