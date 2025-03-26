# TopFinanzas Mexico - WordPress Integration Guide

This document provides detailed instructions for integrating the Next.js application with the existing WordPress installation on Google Cloud Platform. The integration allows us to run A/B testing via Google Ads while maintaining the current WordPress site.

## Architecture Overview

```markdown
WordPress Installation (/var/www/html/mx/)
├── .htaccess                  # URL routing rules for WordPress + Next.js
├── wp-config.php              # WordPress configuration
├── wp-content/                # WordPress content
├── quiz/                      # Quiz Next.js application
└── topfinanzas-pages-mx/      # Our Next.js app (this repository)
    ├── .next/                 # Built Next.js application
    ├── app/                   # Next.js pages
    ├── components/            # React components
    ├── lib/                   # Utilities and configuration
    └── start-nextjs.sh        # Script to start the Next.js server
```

## URL Structure

We're maintaining two parallel URL structures:

1. **WordPress URLs**: The current site URLs (e.g., `/mx/recomendador-de-tarjetas-de-credito-p1`)
2. **A/B Testing URLs**: Same structure with "-next" suffix (e.g., `/mx/recomendador-de-tarjetas-de-credito-p1-next`)

Google Ads campaigns will direct users to the URLs with the "-next" suffix, which will be handled by the Next.js application.

## Deployment Prerequisites

Before deploying, ensure you have:

- SSH access to the Google Cloud Platform VM running Ubuntu 22.04 LTS
- Root or sudo access on the server
- Node.js 18+ installed (or NVM configured)
- PM2 process manager installed (recommended)
- Apache with mod_proxy, mod_proxy_http, mod_expires, and mod_headers modules

## Deployment Process

### 1. Server Preparation

Ensure Apache modules are enabled:

```bash
sudo a2enmod proxy proxy_http expires headers rewrite
sudo systemctl restart apache2
```

### 2. Repository Configuration

Before deployment, update the repository URL in `wordpress-integration.sh`:

1. Open the script: `nano wordpress-integration.sh`
2. Locate the line: `REPO_URL="https://github.com/yourusername/topfinanzas-pages-mx.git"`
3. Replace with your actual repository URL
4. Save and exit

### 3. Execute the Integration Script

```bash
# Copy the script to the server
scp wordpress-integration.sh user@your-server-ip:/tmp/

# SSH into the server
ssh user@your-server-ip

# Run the script
cd /tmp
chmod +x wordpress-integration.sh
sudo ./wordpress-integration.sh
```

The script will:

- Clone the repository to `/var/www/html/mx/topfinanzas-pages-mx`
- Set up the necessary Apache configurations
- Configure URL routing via .htaccess
- Set up PM2 to run the Next.js application
- Configure proper permissions

### 4. Verify the Integration

After deployment, test the following URLs:

- WordPress: `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1`
- Next.js: `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next`

Both should work properly, with the latter being served by the Next.js application.

## Monitoring and Maintenance

### Application Status

Check the status of the Next.js application:

```bash
pm2 status topfinanzas-next
```

### Logs

View application logs:

```bash
pm2 logs topfinanzas-next
```

### Updating the Application

To update the Next.js application after code changes:

```bash
cd /var/www/html/mx/topfinanzas-pages-mx
git pull
npm ci
npm run build
pm2 restart topfinanzas-next
```

## Troubleshooting

### URL Routing Issues

If URLs with the "-next" suffix are not working:

1. Check the .htaccess file:

   ```bash
   cat /var/www/html/mx/.htaccess
   ```

2. Ensure the rewrite rules for "-next" URLs are present
3. Check Apache error logs:

   ```bash
   tail -f /var/log/apache2/error.log
   ```

### Next.js Application Not Starting

If the Next.js application fails to start:

1. Check the PM2 logs:

   ```bash
   pm2 logs topfinanzas-next
   ```

2. Verify the Node.js version:

   ```bash
   node -v
   ```

3. Check for build errors:

   ```bash
   cd /var/www/html/mx/topfinanzas-pages-mx
   npm run build
   ```

### Static Assets Not Loading

If static assets (CSS, JavaScript, images) aren't loading:

1. Check the Apache configuration:

   ```bash
   cat /etc/apache2/conf-available/topfinanzas-next.conf
   ```

2. Verify the static assets directory exists:

   ```bash
   ls -la /var/www/html/mx/topfinanzas-pages-mx/.next/static
   ```

3. Check file permissions:

   ```bash
   find /var/www/html/mx/topfinanzas-pages-mx/.next/static -type f -exec stat -c "%a %n" {} \;
   ```

## Security Considerations

### Protecting Backend Routes

The integration ensures that WordPress admin areas and sensitive files are protected:

- WordPress admin is still accessible at `/mx/wp-admin/`
- Next.js API routes are not exposed directly
- Sensitive files like `.htaccess` and `wp-config.php` are protected

### SSL Configuration

Ensure SSL is properly configured for both WordPress and Next.js routes:

```bash
# Check if the SSL module is enabled
sudo a2enmod ssl

# Verify SSL configuration
cat /etc/apache2/sites-available/000-default-ssl.conf
```

## Analytics and Testing

### Google Analytics Setup

For accurate A/B testing analytics:

1. Ensure Google Analytics is configured to track both WordPress and Next.js pages
2. Create separate GA properties or views for WordPress vs Next.js traffic
3. Add UTM parameters to distinguish traffic sources

### Google Ads Campaign Setup

When creating Google Ads campaigns:

1. Use URLs with the "-next" suffix for the test group
2. Use original WordPress URLs for the control group
3. Maintain identical ad copy and targeting for valid comparison

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Apache Proxy Documentation](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html)
- [WordPress .htaccess Documentation](https://wordpress.org/documentation/article/htaccess/)
