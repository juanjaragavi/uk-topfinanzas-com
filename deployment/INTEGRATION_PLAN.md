# TopFinanzas Mexico - WordPress Integration Plan

This document provides a comprehensive overview of the plan to integrate the Next.js application with the existing WordPress installation for A/B testing through Google Ads.

## Overview

The integration allows us to:

1. Maintain the existing WordPress site at standard URLs (e.g., `/mx/recomendador-de-tarjetas-de-credito-p1`)
2. Serve Next.js pages at URLs with the "-next" suffix (e.g., `/mx/recomendador-de-tarjetas-de-credito-p1-next`)
3. Track performance of both versions through Google Ads campaigns
4. Enable direct comparison of user experience and conversion rates

## Architecture

```markdown
                                ┌───────────────────┐
                                │  Apache Server    │
                                │                   │
                                │  .htaccess rules  │
                                └─────────┬─────────┘
                                          │
                    ┌───────────────────────────────────────┐
                    │                                       │
            ┌───────▼─────────┐               ┌─────────────▼───────────┐
            │  WordPress      │               │  Next.js Application    │
            │                 │               │                         │
            │  Standard URLs  │               │  URLs with -next suffix │
            └─────────────────┘               └─────────────────────────┘
```

### Directory Structure

```markdown
/var/www/html/mx/ (WordPress root)
├── .htaccess                   # Rules for URL routing
├── wp-config.php               # WordPress configuration
├── wp-content/                 # WordPress content
├── quiz/                       # Quiz Next.js application
└── topfinanzas-pages-mx/       # Our Next.js app (this repo)
    ├── .next/                  # Built Next.js application
    ├── app/                    # Next.js pages
    │   └── soluciones-financieras/
    │       └── *-next/         # Pages with "-next" suffix
    ├── scripts/                # Utility scripts
    └── .env.production         # Environment configuration
```

## Integration Components

The integration consists of several key components:

1. **Apache Configuration**:
   - `.htaccess` rules to route "-next" URLs to the Next.js app
   - Apache proxy configuration to handle request forwarding

2. **Next.js Configuration**:
   - Updates to `next.config.mjs` for asset prefixes and base paths
   - Middleware for proper URL handling
   - Environment variables for production

3. **Deployment Scripts**:
   - `wordpress-integration.sh` to set up the Next.js app on the server
   - `deploy.sh` to manage the deployment process

## Deployment Workflow

The deployment follows these steps:

1. **Preparation**:
   - Clone repository or pull latest changes
   - Configure environment variables
   - Build the Next.js application

2. **WordPress Integration**:
   - Copy the Next.js app to the WordPress server
   - Set up Apache configuration for proxying
   - Configure URL routing via .htaccess

3. **Verification**:
   - Test WordPress URLs (original functionality)
   - Test Next.js URLs (A/B testing variants)
   - Verify analytics tracking

4. **Monitoring**:
   - Track performance metrics
   - Monitor server logs
   - Compare conversion rates

## Files and Their Purposes

| File | Purpose |
|------|---------|
| `wordpress-integration.sh` | Script to set up Next.js on WordPress server |
| `README.md` | Main documentation for the integration |
| `next-config-update.md` | Next.js configuration changes |
| `htaccess-config.md` | Apache .htaccess configuration details |
| `apache-proxy-config.md` | Apache proxy configuration guide |
| `verification-checklist.md` | Post-deployment verification steps |
| `.env.production.sample` | Sample environment variables |
| `deploy.sh` | Main deployment coordination script |

## Implementation Steps

1. **Prepare the Deployment Environment**:

   ```bash
   # Make the deployment script executable
   chmod +x deployment/deploy.sh
   
   # Update server details in the script
   nano deployment/deploy.sh
   ```

2. **Execute the Deployment**:

   ```bash
   # Run the deployment script
   ./deployment/deploy.sh
   ```

3. **Complete Server-Side Setup**:

   ```bash
   # SSH into the server
   ssh username@server-ip
   
   # Run the integration script
   sudo /tmp/wordpress-integration.sh
   ```

4. **Verify the Integration**:
   - Follow the steps in `verification-checklist.md`
   - Test both WordPress and Next.js URLs
   - Verify analytics tracking

## Google Ads Campaign Setup

For proper A/B testing:

1. **Create Duplicate Campaigns**:
   - One targeting original WordPress URLs
   - One targeting URLs with "-next" suffix

2. **Match Campaign Settings**:
   - Use identical ad copy, keywords, and targeting
   - Set equal budgets and bid strategies

3. **Track Performance**:
   - Set up conversion tracking for both URL sets
   - Monitor key metrics: bounce rate, time on site, conversion rate

## Troubleshooting

Common issues and solutions:

1. **404 Errors for Next.js URLs**:
   - Check .htaccess configuration
   - Verify Apache proxy setup
   - Ensure Next.js server is running

2. **Static Assets Not Loading**:
   - Verify asset prefix configuration
   - Check Apache alias configuration
   - Inspect browser console for errors

3. **WordPress Admin Issues**:
   - Ensure WordPress admin routes are not affected
   - Check for plugin conflicts

## Rollback Process

If needed, roll back the integration:

1. **Restore Original .htaccess**:

   ```bash
   cp /var/www/html/mx/.htaccess.bak.[timestamp] /var/www/html/mx/.htaccess
   ```

2. **Disable Apache Configuration**:

   ```bash
   sudo a2disconf topfinanzas-next
   sudo systemctl reload apache2
   ```

3. **Stop Next.js Server**:

   ```bash
   pm2 stop topfinanzas-next
   ```

## Conclusion

This integration provides a clean way to A/B test the Next.js application against the existing WordPress site without disrupting current functionality. By using URL suffixes and proper Apache configuration, we maintain all WordPress functionality while enabling side-by-side testing through Google Ads campaigns.

The modular approach allows for easy updates and potential full migration in the future if the Next.js version proves superior in performance and user experience.
