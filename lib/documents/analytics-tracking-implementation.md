# Google Tag Manager and UTM Parameter Tracking Implementation

This document outlines the implementation of Google Tag Manager (GTM) and UTM parameter persistence in the TopFinanzas Mexico project.

## Implementation Overview

We've integrated two key tracking capabilities:

1. **Google Tag Manager (GTM)**: For centralized management of all marketing and analytics tags
2. **UTM Parameter Persistence**: To maintain UTM parameters across user sessions on internal links

## Components Created

### 1. Google Tag Manager (`components/analytics/gtm.tsx`)

This component contains two exports:

- `GoogleTagManager`: Adds the GTM script to the document head
- `GoogleTagManagerNoScript`: Adds the fallback iframe for users with JavaScript disabled

The component uses Next.js `Script` component with the `afterInteractive` strategy to ensure optimal loading performance while maintaining analytics accuracy.

### 2. UTM Parameter Persistence (`components/analytics/utm-persister.tsx`)

This client-side component implements "sticky UTMs" with Next.js-optimized functionality:

- Uses sessionStorage to persist UTM parameters across page navigations
- Leverages Next.js hooks (usePathname, useSearchParams) for proper integration
- Intelligently differentiates between regular anchor tags and Next.js Link components
- Applies UTM parameters only to regular anchor tags, avoiding conflicts with Next.js routing
- Re-applies UTM parameters when the pathname changes (after client-side navigation)
- Uses a MutationObserver to handle dynamically added links
- Only processes valid URLs and internal links for security

## Integration in Layout

Both components are integrated in the root layout file (`app/layout.tsx`):

- The GTM script is added to the `<head>` section
- The GTM noscript iframe is added immediately after the opening `<body>` tag
- The UTM persister component is included in the body

## Best Practices Followed

1. **Performance Optimization**:
   - Scripts are loaded with appropriate strategy
   - UTM persister only processes links when UTM parameters exist

2. **Security Considerations**:
   - URL validation before modification
   - Only internal links are modified
   - Error handling for invalid URLs

3. **Maintainability**:
   - Components are modular and reusable
   - GTM ID is parameterized for easy updates
   - Code is well-commented for future reference

## Testing

To test the UTM persistence:

1. Navigate to any page with UTM parameters (e.g., `/?utm_source=test&utm_medium=email`)
2. Verify that UTM parameters are stored in sessionStorage
   - Open browser dev tools, go to Application tab > Storage > Session Storage
   - Check that UTM parameters are stored with their values
3. Navigate to another page using a regular link or the browser's address bar
4. Verify that the UTM parameters are still applied to regular links on the new page

To test GTM:

1. Open browser developer tools
2. Check the Network tab for requests to googletagmanager.com
3. Use the GTM Debug mode by appending `?gtm_debug=x` to any URL

## GTM Container Configuration

The GTM container ID `GTM-MR76NXR3` is configured in the GTM interface. This container should be set up with:

- Appropriate tags for analytics providers
- Triggers based on site events and page views
- Variables to capture UTM parameters and other data points

## Maintenance Notes

When updating the GTM container:

1. Make changes in the GTM interface
2. Test in preview mode before publishing
3. No code changes are needed unless the container ID changes

For UTM parameter updates:

- Edit the `utmParams` array in `utm-persister.tsx` if new UTM parameters need to be tracked

## Considerations for Next.js Link Components

The UTM persister handles Next.js Link components with special care:

1. **Direct manipulation avoidance**: The component doesn't directly modify Next.js Link components to avoid conflicts with the framework's routing system.

2. **sessionStorage persistence**: Instead of relying solely on URL parameters, UTM values are stored in sessionStorage, making them available across navigations even when the URL doesn't preserve them.

3. **Post-navigation reapplication**: After client-side navigation occurs (detected via the `usePathname` hook), the component reapplies UTM parameters to new regular links on the page.

This implementation ensures UTM parameters persist properly in both server-rendered and client-side navigation scenarios, which is essential for accurate campaign tracking in Next.js applications.
