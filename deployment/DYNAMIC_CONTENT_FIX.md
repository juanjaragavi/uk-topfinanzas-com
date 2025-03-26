# Next.js Dynamic Content Rendering Fix

## Issue Description

The integration between WordPress and Next.js was not properly rendering dynamic content for pages with the "-next" suffix. The screenshot showed that the requests were being handled by WordPress instead of being proxied to the Next.js application.

## Root Cause Analysis

The issue was caused by incorrect configuration in two key files:

1. **Apache Configuration:** The `ProxyPass` and `ProxyPassReverse` directives in the Apache configuration were not correctly set up to forward requests to the Next.js application.

2. **.htaccess Rules:** The rewrite rules in the WordPress .htaccess file were not properly configured to handle URLs with "-next" suffix and route them to the Next.js application.

## Solution Implemented

We created and executed a comprehensive fix script (`fix-htaccess.sh`) that:

1. Updated the Apache configuration to properly set up the proxy directives:
   - Added proper `ProxyPass` and `ProxyPassReverse` settings
   - Enabled required Apache modules (proxy, proxy_http, headers, expires)
   - Set appropriate environment variables for the proxy

2. Modified the .htaccess file with improved rewrite rules:
   - Placed Next.js routing rules before WordPress rules to ensure proper precedence
   - Added explicit rules for "-next" suffix URLs
   - Added support for passing query parameters and paths
   - Used the `[P]` flag to proxy the requests properly

3. Restarted services:
   - Reloaded Apache to apply the configuration changes
   - Restarted the Next.js application to ensure it uses the latest settings

## Verification

To verify the fix is working properly, please visit the following URLs and check that:

1. [Recomendador Next.js Page](https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next)
2. [Tarjeta Plata Card Next.js Page](https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next)

The pages should now correctly display:

- Dynamic content components
- Proper styling and layout
- Interactive elements functioning correctly
- Images and assets loading properly

## Troubleshooting

If issues persist after applying this fix:

1. **Check Next.js Logs:**

   ```bash
   sudo pm2 logs topfinanzas-next --lines 100
   ```

2. **Check Apache Error Logs:**

   ```bash
   sudo tail -f /var/log/apache2/error.log
   ```

3. **Verify Apache Modules:**

   ```bash
   sudo apachectl -M | grep proxy
   ```

4. **Test .htaccess Rules:**

   ```bash
   curl -I https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next
   ```

## Future Considerations

To avoid similar issues in the future:

1. Always test both WordPress and Next.js versions of pages after configuration changes
2. Verify that dynamic content is rendering properly on all Next.js pages
3. Check browser developer tools for any 404 errors related to Next.js assets
4. Monitor Apache and Next.js logs for any proxy-related errors

For any additional integration issues, the `deployment/scripts/` directory contains multiple troubleshooting scripts to diagnose and fix problems.
