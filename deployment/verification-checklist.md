# Integration Verification Checklist

Use this checklist to verify that the Next.js application has been successfully integrated with the WordPress installation.

## Initial Setup Verification

- [ ] Repository cloned to `/var/www/html/mx/topfinanzas-pages-mx`
- [ ] Next.js application built successfully
- [ ] PM2 process running (`pm2 status topfinanzas-next`)
- [ ] `.htaccess` file contains the correct rewrite rules
- [ ] Apache proxy configuration added and enabled
- [ ] Required Apache modules enabled (proxy, proxy_http, expires, headers, rewrite)

## URL Access Verification

Test the following URLs to ensure they are accessible and working correctly:

### WordPress URLs (Original)

- [ ] <https://topfinanzas.com/mx/> (WordPress homepage)
- [ ] <https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank/>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu/>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card/>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-plata-card/>

### Next.js URLs (A/B Testing)

- [ ] <https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva-next>
- [ ] <https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next>

## Content and Functionality Verification

For each Next.js page, verify:

- [ ] Page content loads completely
- [ ] Images display correctly
- [ ] Interactive elements function properly (buttons, forms, accordions)
- [ ] Navigation links work correctly (including internal links)
- [ ] Metadata is correctly set (view page source to verify)
- [ ] Responsive design works on multiple screen sizes

## Asset Loading Verification

- [ ] CSS files load correctly (check Network tab in browser dev tools)
- [ ] JavaScript files load correctly
- [ ] Images load from the correct path
- [ ] Fonts load correctly
- [ ] No 404 errors for static assets in the console

## WordPress Integration Verification

- [ ] WordPress admin area still accessible and functional (/mx/wp-admin/)
- [ ] WordPress REST API endpoints functioning (/mx/wp-json/)
- [ ] WordPress plugins still work correctly
- [ ] Quiz functionality (in /mx/quiz/) still works

## Analytics Verification

- [ ] Google Tag Manager script loads on Next.js pages
- [ ] Google Analytics records page views for Next.js pages
- [ ] UTM parameters are preserved and tracked correctly
- [ ] Events are triggered and recorded correctly

## Performance Verification

- [ ] Next.js pages load quickly (under 3 seconds)
- [ ] Core Web Vitals are within acceptable ranges:
  - [ ] Largest Contentful Paint (LCP): < 2.5s
  - [ ] First Input Delay (FID): < 100ms
  - [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Performance is consistent across different devices and browsers

## Security Verification

- [ ] HTTPS works correctly for all URLs
- [ ] Sensitive WordPress files are not accessible
- [ ] No sensitive environment variables are exposed
- [ ] Content Security Policy headers are properly set

## Error Handling Verification

- [ ] 404 pages work correctly for both WordPress and Next.js
- [ ] Server errors are properly handled and logged
- [ ] Client-side error boundaries work as expected

## Google Ads Integration

- [ ] Google Ads tracking pixels fire correctly on Next.js pages
- [ ] Conversion tracking works correctly
- [ ] Landing pages load quickly and correctly from ad clicks

## Post-Deployment Monitoring

Items to monitor after deployment:

- [ ] PM2 logs for any runtime errors
- [ ] Apache error logs for any server issues
- [ ] Google Analytics for traffic patterns
- [ ] Server resource usage (CPU, memory, disk)
- [ ] Application performance metrics

## Final Approval

- [ ] All tests passed
- [ ] Documentation updated with final configuration
- [ ] Team has reviewed and approved the integration
- [ ] Google Ads campaigns updated to use new URLs
