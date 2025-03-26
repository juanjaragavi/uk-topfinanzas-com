#!/bin/bash

# Script to fix the .htaccess routing for Next.js integration
# This script should be run on the server with sudo privileges

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
HTACCESS_PATH="/var/www/html/mx/.htaccess"
BACKUP_DIR="/var/www/html/mx/htaccess-backups"
TIMESTAMP=$(date +%Y%m%d%H%M%S)
APACHE_CONF="/etc/apache2/conf-available/topfinanzas-next.conf"

# Step 1: Create backup directory if it doesn't exist
log "Creating backup directory"
mkdir -p "$BACKUP_DIR"

# Step 2: Backup the current .htaccess file
log "Backing up current .htaccess file"
cp "$HTACCESS_PATH" "$BACKUP_DIR/htaccess-$TIMESTAMP.bak"
echo "Backup created at $BACKUP_DIR/htaccess-$TIMESTAMP.bak"

# Step 3: Update Apache configuration if needed
log "Checking Apache configuration"
if [ -f "$APACHE_CONF" ]; then
    # Backup Apache config
    cp "$APACHE_CONF" "$APACHE_CONF.bak.$TIMESTAMP"

    # Update the ProxyPass directive to ensure it's properly configured
    cat >"$APACHE_CONF" <<EOF
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Preserve host header
    ProxyPreserveHost On
    
    # Enable the Proxy Engine
    SetEnv force-proxy-request-1.0 1
    SetEnv proxy-nokeepalive 1
    SetEnv proxy-initial-not-pooled
    
    # Proxy for Next.js app with -next suffix URLs
    ProxyPass /mx/topfinanzas-pages-mx/ http://localhost:3003/
    ProxyPassReverse /mx/topfinanzas-pages-mx/ http://localhost:3003/
    
    # Static assets configuration
    Alias /mx/_next/ /var/www/html/mx/topfinanzas-pages-mx/.next/
    <Directory /var/www/html/mx/topfinanzas-pages-mx/.next/>
        Options FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control "public, max-age=31536000, immutable"
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </Directory>
</IfModule>
EOF

    # Ensure proxy modules are enabled
    a2enmod proxy proxy_http headers expires
    echo "Updated Apache configuration"
else
    echo "Apache configuration file not found at $APACHE_CONF. Creating it..."
    cat >"$APACHE_CONF" <<EOF
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Preserve host header
    ProxyPreserveHost On
    
    # Enable the Proxy Engine
    SetEnv force-proxy-request-1.0 1
    SetEnv proxy-nokeepalive 1
    SetEnv proxy-initial-not-pooled
    
    # Proxy for Next.js app with -next suffix URLs
    ProxyPass /mx/topfinanzas-pages-mx/ http://localhost:3003/
    ProxyPassReverse /mx/topfinanzas-pages-mx/ http://localhost:3003/
    
    # Static assets configuration
    Alias /mx/_next/ /var/www/html/mx/topfinanzas-pages-mx/.next/
    <Directory /var/www/html/mx/topfinanzas-pages-mx/.next/>
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
    a2enmod proxy proxy_http headers expires
    echo "Created Apache configuration"
fi

# Step 4: Create new .htaccess rules
log "Creating new .htaccess rules for Next.js integration"

# Generate a temporary file with the new content
TEMP_RULES=$(mktemp)

cat >"$TEMP_RULES" <<'EOF'
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /mx/

# Important: These rules must come BEFORE the WordPress rules
# Route -next suffix URLs to the Next.js application using ProxyPass
RewriteRule ^recomendador-de-tarjetas-de-credito-p1-next(/.*)?$ topfinanzas-pages-mx/recomendador-de-tarjetas-de-credito-p1-next$1 [P,L]
RewriteRule ^soluciones-financieras/([^/]+)-next(/.*)?$ topfinanzas-pages-mx/soluciones-financieras/$1-next$2 [P,L]

# Handle Next.js _next directory (static assets)
RewriteRule ^_next/(.*)$ topfinanzas-pages-mx/_next/$1 [P,L]

# Handle Next.js API routes
RewriteRule ^api/(.*)$ topfinanzas-pages-mx/api/$1 [P,L]

# Standard WordPress rules - must come AFTER the Next.js rules
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /mx/index.php [L]
</IfModule>
# END WordPress
EOF

# Step 5: Update the .htaccess file
log "Updating .htaccess file"
cat "$TEMP_RULES" >"$HTACCESS_PATH"
rm "$TEMP_RULES"

# Step 6: Check Apache configuration
log "Testing Apache configuration"
if apache2ctl configtest; then
    log "Apache configuration is valid"
    systemctl reload apache2
    echo "Apache has been reloaded"
else
    log "ERROR: Apache configuration test failed"
    echo "Please check Apache error logs and fix any syntax issues"
    exit 1
fi

# Step 7: Restart Next.js application
log "Restarting Next.js application"
pm2 restart topfinanzas-next || echo "Failed to restart Next.js application, may need to be started manually"

log "Fix complete!"
echo "The .htaccess file has been updated to properly route -next URLs to the Next.js application"
echo "Please test the URLs to verify the fix is working correctly"
echo "  Test URL: https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next"
echo "  Test URL: https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next"
