# Fixing the Next.js WordPress Integration

We've successfully set up the Next.js application within the WordPress environment, but there may be some configuration issues that need to be fixed. This document provides step-by-step instructions for troubleshooting and fixing the integration.

## Issue: Next.js Application Not Accessible

If you're seeing 503 Service Unavailable errors or the Next.js application is not accessible through the WordPress URLs with the "-next" suffix, the most common issues are:

1. Incorrect port configuration in the PM2 startup script
2. Mismatch between the port in the Next.js application and Apache proxy configuration
3. PM2 process not running properly

## Solution: Running the Fix Script

We've created a fix script that addresses these common issues. To apply it:

1. Copy the fix script to the server:

    ```bash
    gcloud compute scp deployment/scripts/fix-port-config.sh topfinanzas-com:/tmp/ --zone=us-central1-a
    ```

2. Make the script executable and run it on the server:

    ```bash
    gcloud compute ssh topfinanzas-com --zone=us-central1-a --command="sudo chmod +x /tmp/fix-port-config.sh && sudo /tmp/fix-port-config.sh"
    ```

This script will:

- Fix the start script to ensure it uses the correct port (3003)
- Update the Apache configuration to match the port
- Restart the services to apply the changes

## Verifying the Fix

After applying the fix, you can verify that the integration is working properly:

1. Run the verification script:

    ```bash
    ./deployment/scripts/verify-integration.sh
    ```

2. Check the URLs directly:
   - WordPress URL: <https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1>
   - Next.js URL: <https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next>

## Manual Fixes

If the automated script doesn't solve the issue, you may need to perform these steps manually on the server:

### 1. Fix the Next.js Start Script

```bash
sudo bash -c 'cat > /var/www/html/mx/topfinanzas-pages-mx/start-nextjs.sh << EOF
#!/bin/bash
cd /var/www/html/mx/topfinanzas-pages-mx
export NODE_ENV=production
export PORT=3003
npm run start
EOF'

sudo chmod +x /var/www/html/mx/topfinanzas-pages-mx/start-nextjs.sh
```

### 2. Update Apache Configuration

```bash
sudo sed -i 's|http://localhost:[0-9]\+/|http://localhost:3003/|g' /etc/apache2/conf-available/topfinanzas-next.conf
sudo a2enconf topfinanzas-next
sudo systemctl reload apache2
```

### 3. Restart PM2 Process

```bash
sudo pm2 delete topfinanzas-next
sudo pm2 start /var/www/html/mx/topfinanzas-pages-mx/start-nextjs.sh --name "topfinanzas-next"
sudo pm2 save
```

### 4. Check the Logs

If issues persist, check the PM2 logs for errors:

```bash
sudo pm2 logs topfinanzas-next --lines 50
```

## Google Ads Setup

Once the integration is working properly, you can set up Google Ads campaigns:

1. Create duplicate campaigns:
   - One targeting original WordPress URLs
   - One targeting URLs with "-next" suffix

2. Match campaign settings:
   - Use identical ad copy, keywords, and targeting
   - Set equal budgets and bid strategies

3. Track performance:
   - Set up conversion tracking for both URL sets
   - Monitor key metrics: bounce rate, time on site, conversion rate

## Rollback Process

If needed, you can roll back the integration:

1. Restore original .htaccess:

    ```bash
    sudo cp /var/www/html/mx/.htaccess.bak.[timestamp] /var/www/html/mx/.htaccess
    ```

2. Disable Apache configuration:

    ```bash
    sudo a2disconf topfinanzas-next
    sudo systemctl reload apache2
    ```

3. Stop Next.js server:

    ```bash
    sudo pm2 stop topfinanzas-next
