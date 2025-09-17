---
applyTo: "**"
---

# AdZep Integration Guide

## Overview

The AdZep tag has been successfully integrated into this Next.js project with a comprehensive implementation that handles both script loading and function invocation requirements.

## Components

### 1. Main AdZep Component (`/components/analytics/adzep.tsx`)

The core AdZep implementation includes:

- **AdZep**: Main component that loads the AdZep script
- **useAdZep**: Hook for manual AdZep activation
- **AdZepLinkHandler**: Automatic link click tracking
- **AdZepNavigationHandler**: Navigation-based activation

### 2. Enhanced Trackers (`/components/analytics/adzep-trackers.tsx`)

Additional tracking components for specific use cases:

- **AdZepLinkTracker**: Enhanced link interaction tracking
- **AdZepFormTracker**: Form submission and interaction tracking
- **AdZepPageTracker**: Page visibility change tracking

### 3. Manual Triggers (`/components/analytics/adzep-trigger.tsx`)

### 4. SPA Bridge and Activation Utilities (New)

- `/components/analytics/adzep-spa-bridge.tsx`: SPA-safe coordination that waits for ad containers, triggers activation with retries after navigation, and manages a lightweight overlay for article pages without covering interstitials.
- `/lib/ads/activate-adzep.ts`: Singleton activation utility with guarded state (activated, activationInProgress, lastActivation, activationAttempts), `pageHasAdUnits`, `waitForContainers`, and `hasRenderedCreative` helpers.
- `/lib/ads/overlay.ts`: Minimal overlay utilities `ensureOverlay`, `showOverlay`, `hideOverlay` used on article pages while ad units initialize.
- `/lib/ads/config.ts`: Central configuration for container selectors, timeouts, and retry counts. Update this to add/remove container selectors as needed.

Components for manual AdZep activation:

- **AdZepTrigger**: Wrapper component for custom trigger events
- **AdZepButton**: Pre-configured button with AdZep activation
- **AdZepLink**: Pre-configured link with AdZep activation

## Implementation Details

### Global Setup

The AdZep script is loaded globally in `app/layout.tsx`:

```tsx
import AdZep from "@/components/analytics/adzep";
import AdZepSPABridge from "@/components/analytics/adzep-spa-bridge";

// In the head section:
<ClientOnly>
  <GoogleTagManager />
  <AdZep />
</ClientOnly>

// In the body section:
<NavigationProvider>
  <Suspense fallback={null}>
    <UtmPersister />
    <AdZepSPABridge />
    {process.env.NODE_ENV === "development" && <UtmMonitor />}
  </Suspense>
  {children}
</NavigationProvider>
```

### Script Loading

The AdZep script is loaded with Next.js optimization:

- Uses `strategy="afterInteractive"` for optimal performance
- Preserves the original `data-cfasync="false"` attribute
- Includes error handling and performance monitoring
- Integrates with the existing analytics infrastructure

### Function Invocation

The `window.AdZepActivateAds()` function is called automatically via the SPA bridge and activation utility with stateful guarding:

1. **On page load**: When the page initially loads
2. **On navigation**: When users navigate between pages
3. **After containers mount**: Post-navigation, after known ad containers are present
4. **With retries**: If no creatives render, the system re-attempts activation a few times with backoff
5. **On custom events**: When manually triggered via `useAdZep()`

The SPA bridge uses timeouts from `lib/ads/config.ts` and ensures no duplicate or overlapping calls. If a page has no ad units, it exits quickly without showing the overlay unnecessarily.

Interstitial Coordination: The overlay uses `pointer-events: none` and a z-index lower than typical interstitials to avoid covering them. The overlay auto-hides once activation starts verifying or after a short grace period.

## Usage Examples

### Basic Usage (Automatic)

The AdZep system works automatically once integrated into the layout. No additional setup is required for basic functionality.

### Enhanced Page Tracking

For pages that need enhanced tracking, add the tracker components:

```tsx
import AdZepLinkTracker, {
  AdZepFormTracker,
} from "@/components/analytics/adzep-trackers";

export default function MyPage() {
  return (
    <main>
      <AdZepLinkTracker />
      <AdZepFormTracker />
      {/* Your page content */}
    </main>
  );
}
```

### Manual Activation

For programmatic control:

```tsx
import { useAdZep } from "@/components/analytics/adzep";

function MyComponent() {
  const { activateAds } = useAdZep();

  const handleSpecialEvent = () => {
    // Your custom logic
    activateAds(); // Manually trigger AdZep
  };

  return <button onClick={handleSpecialEvent}>Special Action</button>;
}
```

### Custom Trigger Components

For specific elements that need AdZep activation:

```tsx
import AdZepTrigger, { AdZepButton, AdZepLink } from "@/components/analytics/adzep-trigger";

// Wrapper approach
<AdZepTrigger trigger="hover">
  <div>Hover to activate ads</div>
</AdZepTrigger>

// Pre-configured components
<AdZepButton onClick={handleClick}>Click Me</AdZepButton>
<AdZepLink href="/some-page">Navigate and Activate</AdZepLink>
```

## Integration with Existing Systems

### UTM Tracking

AdZep works seamlessly with the existing UTM tracking system:

- UTM parameters are preserved during navigation
- AdZep activation doesn't interfere with UTM parameter persistence
- Both systems can track user interactions independently

### Google Tag Manager

AdZep is loaded alongside GTM:

- Both scripts use appropriate loading strategies
- Performance monitoring tracks both systems
- Error handling is independent for each system

### Navigation System

AdZep integrates with the Next.js navigation system properly:

- Router changes trigger AdZep activation using `usePathname()` hook
- Back/forward navigation is handled via `popstate` events
- Client-side navigation is properly tracked on every route change
- Initial page load activation is handled separately
- All navigation types (internal links, browser navigation, direct URL access) trigger ads

## Performance Considerations

### Script Loading Strategy

- Uses Next.js `Script` component with `afterInteractive` strategy
- Script is loaded after the page becomes interactive
- Includes performance monitoring and error handling

### Event Handling

- Passive event listeners where appropriate
- Efficient event delegation for link tracking
- Minimal performance impact on page interactions

### Memory Management

- Proper cleanup of event listeners
- Component unmounting is handled correctly
- No memory leaks in the tracking system

## Development and Debugging

### Development Mode

In development mode, the system provides detailed logging:

```javascript
// Console output examples:
"AdZep: Link interaction detected" { type: "A", href: "/some-page", text: "Link text" }
"AdZep: Form submission detected"
"AdZep: Page became visible"
"AdZep: Manual trigger activated (click)"
```

### Error Handling

All AdZep operations include try-catch blocks:

- Script loading errors are logged
- Function call errors are handled gracefully
- System continues to work even if AdZep fails

### Performance Monitoring

Performance marks are created for monitoring:

- `adzep-start`: When component mounts
- `adzep-loaded`: When script finishes loading
- `adzep-execution`: Measure from start to loaded

## Best Practices

### When to Use Enhanced Tracking

Use enhanced tracking components on:

- High-interaction pages (forms, quizzes, recommenders)
- Important conversion pages
- Pages with complex user flows

### When to Use Manual Triggers

Use manual triggers for:

- Custom events not covered by automatic tracking
- Specific business logic requirements
- A/B testing scenarios

### Performance Optimization

- Only load enhanced trackers on pages that need them
- Use manual triggers sparingly
- Monitor performance impact in production

## Troubleshooting

### Common Issues

1. **Script not loading**: Check network connectivity and script URL
2. **Function not available**: Ensure script has loaded before calling
3. **Multiple activations**: This is expected and handled gracefully

### Debugging Steps

1. Check browser console for AdZep-related logs
2. Verify script is loaded in Network tab
3. Test `window.AdZepActivateAds()` manually in console
4. Check performance marks for timing issues

## Future Enhancements

### Potential Improvements

- A/B testing integration
- Advanced event filtering
- Custom event tracking
- Analytics dashboard integration

### Configuration Options

Consider adding configuration for:

- Activation frequency limits
- Event type filtering
- Environment-specific behavior
- Custom activation triggers

This implementation provides a robust, Next.js-optimized solution for AdZep integration that maintains performance while ensuring reliable ad activation across your site.
