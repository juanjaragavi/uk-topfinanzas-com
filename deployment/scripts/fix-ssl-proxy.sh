#!/bin/bash

# Script to fix SSL proxy configuration for Next.js integration
# This script should be run on the server with sudo privileges

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
APACHE_CONF="/etc/apache2/conf-available/topfinanzas-next.conf"
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Step 1: Backup the current Apache configuration
log "Backing up current Apache configuration"
cp "$APACHE_CONF" "$APACHE_CONF.bak.$TIMESTAMP"
echo "Backup created at $APACHE_CONF.bak.$TIMESTAMP"

# Step 2: Update Apache configuration with SSL proxy support
log "Updating Apache configuration with SSL proxy support"

# Create a temporary file with the updated configuration
TEMP_CONF=$(mktemp)

cat >"$TEMP_CONF" <<'EOF'
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Enable SSL for proxy connections
    SSLProxyEngine On
    
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

# Step 3: Update the Apache configuration file
cat "$TEMP_CONF" >"$APACHE_CONF"
rm "$TEMP_CONF"

# Step 4: Ensure SSL module is enabled
log "Enabling SSL modules"
a2enmod ssl proxy_http headers expires
echo "SSL modules enabled"

# Step 5: Check Apache configuration
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

# Step 6: Restart Next.js application
log "Restarting Next.js application"
pm2 restart topfinanzas-next || echo "Failed to restart Next.js application, may need to be started manually"

log "SSL Proxy fix complete!"
echo "The Apache configuration has been updated to properly handle SSL proxy connections"
echo "Please test the URLs to verify the fix is working correctly"
echo "  Test URL: https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next"
