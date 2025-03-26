# TopFinanzas Mexico - Next.js Deployment with WordPress Integration

This document outlines the deployment process for integrating the Next.js application with the existing WordPress site for A/B testing purposes using Google Ads.

## Architecture Overview

The deployment architecture uses Next.js alongside the existing WordPress installation, with URL redirects configured to handle parallel testing:

```markdown
WordPress Site               Next.js App (A/B Testing)
+-----------------+          +------------------+
| /mx/            |          | /recommendation  |
| /mx/page1       |  ------> | /credit-cards    |
| /mx/page2       |          | /apply           |
+-----------------+          +------------------+
                                     ^
                                     |
                                     |
                            +------------------+
                            | /mx/page1-next   |
                            | /mx/page2-next   |
                            +------------------+
                               Google Ads URLs
```

## URL Structure Implementation

### WordPress URLs to Next.js Mapping

The system maps between WordPress URLs and Next.js routes as follows:

| WordPress URL | Next.js Route | Google Ads Test URL |
|---------------|---------------|---------------------|
| `/mx/recomendador-de-tarjetas-de-credito-p1` | `/recommendation` | `/mx/recomendador-de-tarjetas-de-credito-p1-next` |
| `/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank` | `/credit-cards` | `/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next` |
| `/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu` | `/apply` | `/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next` |
| `/mx/soluciones-financieras/tarjeta-plata-card` | `/citi-double-cash` | `/mx/soluciones-financieras/tarjeta-plata-card-next` |
| `/mx/soluciones-financieras/requisitos-tarjeta-plata-card` | `/apply/citi-double-cash` | `/mx/soluciones-financieras/requisitos-tarjeta-plata-card-next` |

### How URLs Are Handled

1. **Google Ads Traffic**: Google Ads campaigns will direct users to URLs with the `-next` suffix
2. **URL Handling**: The Next.js middleware will:
   - Rewrite URLs with `-next` suffix to the appropriate Next.js route
   - Redirect direct access to Next.js routes to the WordPress URL with `-next` suffix for proper analytics tracking

## Technical Implementation

The implementation consists of three main components:

1. **Next.js Middleware**: Handles URL routing and rewrites
2. **Next.js Configuration**: `next.config.mjs` settings for asset prefixes and output formats
3. **Server Configuration**: `.htaccess` rules and Nginx settings for proper request routing

### 1. Next.js Middleware (`middleware.ts`)

The middleware handles URL mapping between WordPress paths and Next.js routes. It:

- Rewrites URLs with `-next` suffix to serve the appropriate Next.js page
- Redirects direct access to Next.js routes to the WordPress URL with `-next` suffix
- Contains path mappings to ensure correct routing

### 2. Next.js Configuration (`next.config.mjs`)

The configuration is set up to:

- Use standalone output for easier deployment
- Set asset prefixes for production
- Configure image optimization settings

### 3. Deployment Script (`scripts/deploy-to-wordpress.sh`)

The deployment script handles:

- Cloning/updating the repository in the WordPress directory
- Building the Next.js application
- Setting up `.htaccess` rules for URL handling
- Configuring Nginx for proxying requests to the Next.js server
- Setting up PM2 for process management

## Deployment Instructions

### Prerequisites

- SSH access to the WordPress server
- Node.js 18 or higher (preferably with NVM)
- PM2 process manager (recommended)
- Git
- Write access to `/var/www/html/mx/`

### Deployment Steps

1. **Update Repository URL**:
   Edit `scripts/deploy-to-wordpress.sh` and replace `[REPLACE_WITH_YOUR_REPO_URL]` with your actual Git repository URL.

2. **Execute the Deployment Script**:

   ```bash
   # On the WordPress server
   cd /path/to/script
   chmod +x deploy-to-wordpress.sh
   sudo ./deploy-to-wordpress.sh
   ```

3. **Verify the Installation**:
   - Check that the Next.js server is running: `pm2 list`
   - Test a URL with the `-next` suffix: `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next`

4. **Configure Google Ads**:
   - Update your Google Ads campaigns to direct traffic to the `-next` suffix URLs
   - Ensure Google Analytics is configured to track both the original and `-next` URLs

## Maintenance and Updates

### Updating the Next.js Application

```bash
# On the WordPress server
cd /var/www/html/mx/topfinanzas-pages-mx
git pull
npm ci
npm run build
pm2 restart topfinanzas-next
```

### Monitoring

- **Process Status**: `pm2 status topfinanzas-next`
- **Logs**: `pm2 logs topfinanzas-next`
- **Resource Usage**: `pm2 monit`

## Troubleshooting

### Common Issues

1. **URL Rewriting Not Working**:
   - Check the `.htaccess` file in `/var/www/html/mx/`
   - Ensure mod_rewrite is enabled: `sudo a2enmod rewrite`
   - Restart Apache: `sudo systemctl restart apache2`

2. **Next.js Server Not Starting**:
   - Check Node.js version: `node -v`
   - Verify standalone output exists: `ls -la /var/www/html/mx/topfinanzas-pages-mx/.next/standalone`
   - Check logs: `pm2 logs topfinanzas-next`

3. **Static Assets Not Loading**:
   - Verify symbolic link: `ls -la /var/www/html/mx/topfinanzas-pages-mx-static`
   - Check Nginx configuration for static asset routing

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx Reverse Proxy Documentation](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
