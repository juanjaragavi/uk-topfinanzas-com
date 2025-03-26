# Frontend Testing Guide for Next.js Implementation

This document provides instructions for testing the integrated Next.js pages from the frontend. The integration allows you to compare the original WordPress pages with their Next.js counterparts by using URLs with the "-next" suffix.

## Testing URLs

You can directly visit the following URLs in your browser to test the Next.js implementation:

### Main Credit Card Recommender Page

- **WordPress version:** [https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1](https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1)
- **Next.js version:** [https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next](https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next)

### Nu Bank Credit Card Guide

- **WordPress version:** [https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank](https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank)
- **Next.js version:** [https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next](https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank-next)

### Nu Bank Requirements

- **WordPress version:** [https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu](https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu)
- **Next.js version:** [https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next](https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu-next)

### Plata Card Guide

- **WordPress version:** [https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card](https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card)
- **Next.js version:** [https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next](https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card-next)

### BBVA Azul Credit Card Guide

- **WordPress version:** [https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva](https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva)
- **Next.js version:** [https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next](https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-azul-bbva-next)

## What to Compare

When testing, compare the following aspects between the WordPress and Next.js versions:

1. **Visual Appearance:**
   - Layout and formatting should be identical
   - Images should display correctly
   - Colors and styling should match
   - Responsive behavior on different screen sizes

2. **Functionality:**
   - All links should work properly
   - Interactive elements (accordions, tabs, forms) should function correctly
   - Call-to-action buttons should be functional

3. **Performance:**
   - Page load times (Next.js should be faster)
   - Smoothness of interactions
   - Network requests (check browser developer tools)

4. **SEO Elements:**
   - Check page titles, meta descriptions (view page source)
   - Verify proper heading structure (H1, H2, etc.)

## Testing Tools

For more detailed testing, you can use these browser tools:

1. **Browser Developer Tools (F12):**
   - Network tab to compare load times
   - Elements tab to inspect HTML structure
   - Console to check for any errors

2. **Lighthouse (in Chrome DevTools):**
   - Run Lighthouse audits on both versions
   - Compare performance, accessibility, SEO scores

3. **Web Vitals Extension:**
   - Install the Web Vitals Chrome extension
   - Compare Core Web Vitals metrics between versions

## A/B Testing with Google Ads

For the Google Ads campaigns, you'll want to:

1. Create duplicate campaigns with identical:
   - Ad copy
   - Keywords
   - Targeting settings
   - Bid strategies

2. Direct one campaign to the WordPress URLs and the other to the Next.js URLs with "-next" suffix

3. Track metrics in Google Analytics:
   - Bounce rate
   - Time on site
   - Conversion rate
   - Pages per session

## Reporting Issues

If you encounter any issues with the Next.js implementation:

1. Take screenshots of the problem
2. Note the URL where the issue occurs
3. Record any console errors (from browser developer tools)
4. Compare with the WordPress version to highlight differences

The Next.js pages should be functionally identical to their WordPress counterparts, with improved performance and loading times.
