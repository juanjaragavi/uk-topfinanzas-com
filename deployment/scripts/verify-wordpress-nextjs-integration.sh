#!/bin/bash

# TopFinanzas WordPress-Next.js Integration Verification Script
# ============================================================
# This script performs comprehensive checks to verify that the WordPress
# and Next.js integration is working correctly.
#
# Usage: sudo ./verify-wordpress-nextjs-integration.sh

# Color codes for better readability
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variables
WP_DIR="/var/www/html/mx"
NEXT_DIR="$WP_DIR/topfinanzas-pages-mx"
APACHE_CONF="/etc/apache2/conf-available/topfinanzas-next.conf"
PORT="3003"
DOMAIN="topfinanzas.com"

# Utility functions
log() {
    echo -e "\n${BLUE}>> $1${NC}\n"
}

success() {
    echo -e "${GREEN}✓ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

error() {
    echo -e "${RED}✗ $1${NC}"
}

check_result() {
    if [ $1 -eq 0 ]; then
        success "$2"
        return 0
    else
        error "$3"
        return 1
    fi
}

# Step 1: Check Apache configuration
log "Checking Apache configuration"

# Check if Apache is running
if systemctl is-active --quiet apache2; then
    success "Apache is running"
else
    error "Apache is not running"
    systemctl status apache2
    exit 1
fi

# Check if the configuration file exists
if [ -f "$APACHE_CONF" ]; then
    success "Apache configuration file exists: $APACHE_CONF"
else
    error "Apache configuration file not found: $APACHE_CONF"
    exit 1
fi

# Check if the configuration is enabled
if [ -f "/etc/apache2/conf-enabled/topfinanzas-next.conf" ]; then
    success "Apache configuration is enabled"
else
    error "Apache configuration is not enabled"
    echo "Run: sudo a2enconf topfinanzas-next"
    exit 1
fi

# Check Apache syntax
if apache2ctl configtest &>/dev/null; then
    success "Apache configuration syntax is valid"
else
    error "Apache configuration has syntax errors"
    apache2ctl configtest
    exit 1
fi

# Check if required modules are enabled
for module in proxy proxy_http expires headers; do
    if [ -f "/etc/apache2/mods-enabled/${module}.load" ]; then
        success "Apache module $module is enabled"
    else
        error "Apache module $module is not enabled"
        echo "Run: sudo a2enmod $module"
        exit 1
    fi
done

# Step 2: Check .htaccess configuration
log "Checking .htaccess configuration"

if [ -f "$WP_DIR/.htaccess" ]; then
    success ".htaccess file exists: $WP_DIR/.htaccess"

    # Check if .htaccess contains Next.js routing rules
    if grep -q "topfinanzas-pages-mx" "$WP_DIR/.htaccess"; then
        success ".htaccess contains Next.js routing rules"
    else
        error ".htaccess does not contain Next.js routing rules"
        echo "Run the setup script again to configure .htaccess properly"
        exit 1
    fi
else
    error ".htaccess file not found: $WP_DIR/.htaccess"
    exit 1
fi

# Step 3: Check Next.js configuration
log "Checking Next.js configuration"

if [ -f "$NEXT_DIR/next.config.mjs" ]; then
    success "Next.js configuration file exists: $NEXT_DIR/next.config.mjs"

    # Check if the configuration contains the required settings
    if grep -q "assetPrefix:" "$NEXT_DIR/next.config.mjs" &&
        grep -q "basePath:" "$NEXT_DIR/next.config.mjs"; then
        success "Next.js configuration contains required settings"
    else
        warning "Next.js configuration may be missing required settings"
        echo "Check that assetPrefix and basePath are properly configured"
    fi
else
    error "Next.js configuration file not found: $NEXT_DIR/next.config.mjs"
    exit 1
fi

# Step 4: Check if Next.js application is built
log "Checking Next.js build"

if [ -d "$NEXT_DIR/.next" ]; then
    success "Next.js application is built: $NEXT_DIR/.next exists"
else
    error "Next.js application is not built: $NEXT_DIR/.next does not exist"
    echo "Run: cd $NEXT_DIR && npm run build"
    exit 1
fi

# Step 5: Check PM2 process
log "Checking PM2 process"

# Check if PM2 is installed
if command -v pm2 &>/dev/null; then
    success "PM2 is installed"

    # Check if the Next.js application is running under PM2
    if pm2 list | grep -q "topfinanzas-next"; then
        success "Next.js application is running under PM2"

        # Check if the process is online
        if pm2 list | grep -q "topfinanzas-next.*online"; then
            success "PM2 process is online"
        else
            error "PM2 process is not online"
            pm2 list
            exit 1
        fi
    else
        error "Next.js application is not running under PM2"
        echo "Run: sudo pm2 start $NEXT_DIR/start-nextjs.sh --name 'topfinanzas-next'"
        exit 1
    fi
else
    error "PM2 is not installed"
    echo "Run: npm install -g pm2"
    exit 1
fi

# Step 6: Check if the port is in use
log "Checking port $PORT"

if netstat -tuln | grep -q ":$PORT"; then
    success "Port $PORT is in use (application is listening)"
else
    error "Port $PORT is not in use. Application may not be listening."
    echo "Check PM2 logs: sudo pm2 logs topfinanzas-next"
    exit 1
fi

# Step 7: Test URL accessibility (if curl is available)
log "Testing URL accessibility"

if command -v curl &>/dev/null; then
    echo "Testing URLs (this may take a few moments)..."

    # Array of URLs to test
    WP_URLS=(
        "https://$DOMAIN/mx/"
        "https://$DOMAIN/mx/recomendador-de-tarjetas-de-credito-p1"
        "https://$DOMAIN/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank/"
    )

    NEXT_URLS=(
        "https://$DOMAIN/mx/recomendador-de-tarjetas-de-credito-p1-next"
        "https://$DOMAIN/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next"
        "https://$DOMAIN/mx/soluciones-financieras/tarjeta-plata-card-next"
    )

    # Test WordPress URLs
    echo "Testing WordPress URLs:"
    for url in "${WP_URLS[@]}"; do
        if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200\|301\|302"; then
            success "WordPress URL is accessible: $url"
        else
            warning "WordPress URL may not be accessible: $url"
        fi
    done

    # Test Next.js URLs
    echo "Testing Next.js URLs:"
    for url in "${NEXT_URLS[@]}"; do
        if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200\|301\|302"; then
            success "Next.js URL is accessible: $url"
        else
            warning "Next.js URL may not be accessible: $url"
            echo "Check Apache logs and PM2 logs for details"
        fi
    done
else
    warning "curl is not available, skipping URL accessibility tests"
    echo "Install curl or manually verify URL accessibility"
fi

# Step 8: Check for common issues
log "Checking for common issues"

# Check permissions
if [ -x "$NEXT_DIR/start-nextjs.sh" ]; then
    success "Start script is executable: $NEXT_DIR/start-nextjs.sh"
else
    error "Start script is not executable"
    echo "Run: chmod +x $NEXT_DIR/start-nextjs.sh"
fi

# Check static asset directory permissions
if [ -d "$NEXT_DIR/.next/static" ]; then
    if [ -r "$NEXT_DIR/.next/static" ]; then
        success "Static asset directory is readable: $NEXT_DIR/.next/static"
    else
        error "Static asset directory is not readable"
        echo "Run: chmod -R 755 $NEXT_DIR/.next/static"
    fi
else
    warning "Static asset directory not found: $NEXT_DIR/.next/static"
    echo "Rebuild the Next.js application"
fi

# Check logs for errors
log "Checking logs for errors"

# Check Apache error log
echo "Recent Apache error log entries:"
sudo tail -n 10 /var/log/apache2/error.log | grep -i "error\|warn" || echo "No recent errors found"

# Check PM2 logs
echo "Recent PM2 log entries:"
sudo pm2 logs topfinanzas-next --lines 10 --nostream | grep -i "error\|warn" || echo "No recent errors found"

# Final summary
log "Verification Summary"

echo "The WordPress and Next.js integration has been verified."
echo ""
echo "Key components:"
echo "- Apache Configuration: $APACHE_CONF"
echo "- WordPress Directory: $WP_DIR"
echo "- Next.js Directory: $NEXT_DIR"
echo "- PM2 Process: topfinanzas-next"
echo "- Port: $PORT"
echo ""
echo "Test URLs:"
echo "- WordPress: https://$DOMAIN/mx/recomendador-de-tarjetas-de-credito-p1"
echo "- Next.js: https://$DOMAIN/mx/recomendador-de-tarjetas-de-credito-p1-next"
echo ""
echo "If you encountered any issues, review the error messages and fix them accordingly."
echo "For detailed troubleshooting, check the full integration plan in:"
echo "- $NEXT_DIR/lib/documents/wordpress-nextjs-integration-plan.md"
