# Google Ad Manager Components

## Overview

This directory contains React components for integrating Google Ad Manager (GAM) ads into the application.

## Components

### 1. MobileBannerAd (`mobile-banner-ad.tsx`)

Basic banner ad implementation with minimal configuration.

**Usage:**

```tsx
import MobileBannerAd from '@/components/ads/mobile-banner-ad';

// In your component
<MobileBannerAd />
```

### 2. EnhancedMobileBannerAd (`enhanced-mobile-banner-ad.tsx`)

Advanced banner ad with error handling, retry logic, and debugging features.

**Usage:**

```tsx
import EnhancedMobileBannerAd from '@/components/ads/enhanced-mobile-banner-ad';

// Default usage
<EnhancedMobileBannerAd />

// Custom configuration
<EnhancedMobileBannerAd
  slotId="custom-div-id"
  slotPath="/your-account/your-ad-unit"
  sizes={[[300, 250], [336, 280]]}
/>
```

**Features:**

- Automatic retry on GPT loading failure
- Visual loading states
- Error handling and display
- Slot cleanup on unmount
- Event listeners for debugging
- Route change support

### 3. MobileInterstitialAd (`mobile-interstitial-ad.tsx`)

Full-screen interstitial ad with multiple display triggers.

### 4. MobileOfferwallAd (`mobile-offerwall-ad.tsx`)

Offerwall ad component with flexible positioning and display triggers.

**Usage:**

```tsx
import MobileInterstitialAd from '@/components/ads/mobile-interstitial-ad';

// Immediate display
<MobileInterstitialAd displayTrigger="immediate" />

// Delayed display (3 seconds)
<MobileInterstitialAd 
  displayTrigger="delay" 
  delaySeconds={3} 
/>

// Scroll-triggered (at 50% scroll)
<MobileInterstitialAd 
  displayTrigger="scroll" 
  scrollPercentage={50} 
/>

// Manual control
const [showAd, setShowAd] = useState(false);
<MobileInterstitialAd 
  displayTrigger="manual"
  isVisible={showAd}
  onClose={() => setShowAd(false)}
/>
```

**Props:**

- `slotId`: Unique identifier for the ad slot
- `slotPath`: GAM ad unit path
- `sizes`: Ad dimensions (default: [[1, 1]] for interstitials)
- `zIndex`: Z-index for the modal overlay
- `displayTrigger`: When to show the ad ("immediate", "delay", "scroll", "manual")
- `delaySeconds`: Delay in seconds (for "delay" trigger)
- `scrollPercentage`: Scroll percentage trigger (for "scroll" trigger)
- `onClose`: Callback when ad is closed
- `onAdLoaded`: Callback when ad loads successfully
- `onAdError`: Callback when ad fails to load

**Features:**

- Modal overlay with backdrop
- Close button
- Multiple display triggers
- Automatic GPT script loading
- Error handling
- Proper cleanup

## Implementation Notes

### GPT Script Loading

The interstitial component automatically loads the GPT script if not present:

```javascript
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossorigin="anonymous"></script>
```

### Ad Slot Configuration

Each component defines its ad slot programmatically:

```javascript
googletag.defineSlot(slotPath, sizes, slotId)
  .addService(googletag.pubads());
```

### Best Practices

1. **One Ad Per Page**: Avoid displaying multiple interstitials on the same page
2. **User Experience**: Use appropriate delays and triggers to avoid disrupting user experience
3. **Error Handling**: Always implement error callbacks for production
4. **Performance**: Lazy load ads when possible
5. **Cleanup**: Components properly destroy slots on unmount to prevent memory leaks

## Debugging

In development mode, the enhanced components display:

- Loading states
- Error messages
- Slot information
- Console logs for ad events

## Ad Unit Reference

| Component | Ad Unit Path | Slot ID | Default Sizes |
|-----------|--------------|---------|---------------|
| Mobile Banner | /23062212598/uk.topfinanzas_com_mob_1 | div-gpt-ad-1749568543258-0 | [[250, 250], [336, 280], [300, 250]] |
| Mobile Interstitial | /23062212598/uk.topfinanzas_com_mob_interstitial | div-gpt-ad-1749831510729-0 | [[1, 1]] |
| Mobile Offerwall | /23062212598/uk.topfinanzas_com_mob_offerwall | div-gpt-ad-1749832817468-0 | [[1, 1]] |

## Troubleshooting

### Ad Not Displaying

1. Check browser console for errors
2. Verify ad blocker is disabled
3. Ensure GPT script is loaded
4. Check network tab for ad requests

### Memory Leaks

- Components automatically clean up on unmount
- Use React DevTools to verify proper cleanup

### Multiple Ad Requests

- Enable single request mode is handled automatically
- Avoid creating duplicate slots
