# WordPress and Next.js Integration for TopFinanzas Mexico

This document provides instructions for integrating the Next.js application (`/var/www/html/mx/topfinanzas-pages-mx/`) with the existing WordPress installation (`/var/www/html/mx/`). This integration enables A/B testing through Google Ads by directing users to either the WordPress site or the Next.js version with "-next" suffix URLs.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation Steps](#installation-steps)
4. [URL Structure](#url-structure)
5. [Verification](#verification)
6. [Troubleshooting](#troubleshooting)
7. [Google Ads Setup](#google-ads-setup)
8. [Maintenance](#maintenance)

## Overview

This integration allows:

- The WordPress site to continue serving pages at standard URLs (e.g., `/mx/recomendador-de-tarjetas-de-credito-p1`)
- The Next.js application to serve pages at URLs with the "-next" suffix (e.g., `/mx/recomendador-de-tarjetas-de-credito-p1-next`)
- Both versions to run side-by-side without interference
- Google Ads campaigns to direct traffic to either version for comparative testing

The integration uses:

- Apache with mod_proxy to route requests to the appropriate application
- PM2 to manage the Next.js process
- WordPress .htaccess to handle URL rewriting

## Prerequisites

Before proceeding with the integration, ensure you have:

- An Ubuntu 22.04 LTS server with Apache installed
- Node.js (version 18 or higher) installed
- PM2 installed globally (`npm install -g pm2`)
- The Next.js application code in `/var/www/html/mx/topfinanzas-pages-mx/`
- WordPress installed in `/var/www/html/mx/`
- Root or sudo access on the server

Required Apache modules:

- mod_proxy
- mod_proxy_http
- mod_rewrite
- mod_expires
- mod_headers

## Installation Steps

We've created a setup script that automates the entire installation process. To use it:

1. Navigate to the scripts directory:

   ```bash
   cd /var/www/html/mx/topfinanzas-pages-mx/deployment/scripts/
   ```

2. Make the script executable (if not already):

   ```bash
   chmod +x setup-wordpress-integration.sh
   ```

3. Run the setup script as root:

   ```bash
   sudo ./setup-wordpress-integration.sh
   ```

The script will:

- Build the Next.js application if needed
- Update Next.js configuration (`next.config.mjs`)
- Create Apache configuration
- Configure WordPress .htaccess for URL routing
- Set up PM2 process management
- Set appropriate permissions
- Reload Apache
- Verify the setup

## URL Structure

### WordPress URLs (Original)

- Homepage: `https://topfinanzas.com/mx/`
- Recommender: `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1`
- Nu Bank Guide: `https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank/`
- Plata Card: `https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card/`

### Next.js URLs (A/B Testing)

- Recommender: `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next`
- Nu Bank Guide: `https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next`
- Plata Card: `https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next`
- BBVA Azul Card: `https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next`

## Verification

After installation, verify that the integration is working correctly:

1. Run the verification script:

   ```bash
   sudo ./verify-wordpress-nextjs-integration.sh
   ```

This script performs comprehensive checks, including:

- Apache configuration
- WordPress .htaccess setup
- Next.js configuration
- PM2 process status
- URL accessibility
- Common issues

If any issues are found, the script will provide guidance on how to resolve them.

You can also manually verify by:

1. Opening WordPress URLs in a browser
2. Opening Next.js URLs in a browser
3. Checking browser console for any asset loading errors

## Troubleshooting

### Common Issues and Solutions

1. **404 errors for Next.js pages**
   - Check .htaccess rules
   - Verify Apache proxy configuration
   - Ensure PM2 process is running

   ```bash
   sudo pm2 status topfinanzas-next
   ```

2. **Static assets not loading**
   - Check browser console for specific errors
   - Verify the Alias directive in Apache configuration
   - Check permissions on `.next/static` directory

   ```bash
   sudo chmod -R 755 /var/www/html/mx/topfinanzas-pages-mx/.next/static/
   ```

3. **PM2 process crashes**
   - Check logs for errors

   ```bash
   sudo pm2 logs topfinanzas-next
   ```

   - Restart the process

   ```bash
   sudo pm2 restart topfinanzas-next
   ```

4. **Apache configuration issues**
   - Check syntax

   ```bash
   sudo apache2ctl configtest
   ```

   - Check error logs

   ```bash
   sudo tail -f /var/log/apache2/error.log
   ```

### Fix Script

For advanced troubleshooting, use our fix script:

```bash
sudo ./fix-integration-advanced.sh
```

This script performs diagnostics and fixes common issues with the integration.

## Google Ads Setup

To effectively A/B test the WordPress and Next.js versions:

1. **Create duplicate campaigns:**
   - One campaign pointing to WordPress URLs (original)
   - One campaign pointing to URLs with "-next" suffix (Next.js)

2. **Match all campaign settings except URLs:**
   - Same ad copy
   - Same keywords and targeting
   - Equal budgets
   - Identical bid strategies

3. **Configure Analytics:**
   - Set up Google Analytics to track both URL patterns
   - Configure conversion tracking for both versions
   - Create performance dashboards for easy comparison

4. **Key Metrics to Monitor:**
   - Bounce rate
   - Time on site
   - Page load performance
   - Conversion rate
   - Click-through rate (CTR)

## Maintenance

### Updating the Next.js Application

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

# Backup .htaccess
sudo cp /var/www/html/mx/.htaccess /var/www/html/mx/.htaccess.bak.$(date +%Y%m%d%H%M%S)
```

### Rollback Procedure

If you need to revert the integration:

1. Restore the original .htaccess file

   ```bash
   sudo cp /var/www/html/mx/.htaccess.bak.[TIMESTAMP] /var/www/html/mx/.htaccess
   ```

2. Disable the Apache configuration

   ```bash
   sudo a2disconf topfinanzas-next
   sudo systemctl reload apache2
   ```

3. Stop the PM2 process

   ```bash
   sudo pm2 stop topfinanzas-next
   sudo pm2 delete topfinanzas-next
   sudo pm2 save
   ```

## Documentation

For more detailed information, refer to:

- [Complete Integration Plan](wordpress-nextjs-integration-plan.md)
- [Apache Proxy Configuration](../deployment/apache-proxy-config.md)
- [WordPress .htaccess Configuration](../deployment/htaccess-config.md)
