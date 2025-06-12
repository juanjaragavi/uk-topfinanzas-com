# Google Ad Manager (GPT) Ad Serving Improvements

## Overview

This document outlines the improvements made to address ad serving issues on requirements pages and secondary pages accessed via links from landing pages.

## Problem Statement

Ads were failing to display on requirements pages (or any secondary page accessed via a link from the first page) during the initial page load. The ads only appeared after the user manually refreshed their browser.

## Solutions Implemented

### 1. Enhanced Mobile Banner Ad Component (`enhanced-mobile-banner-ad.tsx`)

**Key Features:**

- **Retry Logic**: Implements automatic retry mechanism (up to 5 attempts) if GPT is not loaded
- **Path-based Re-initialization**: Monitors route changes and re-initializes ads accordingly
- **Proper Slot Management**: Destroys existing slots before creating new ones to prevent conflicts
- **Error Handling**: Comprehensive error states with visual feedback in development mode
- **Event Listeners**: Monitors GPT events for debugging (slotRenderEnded, impressionViewable)

**Usage:**

```tsx
import EnhancedMobileBannerAd from "@/components/ads/enhanced-mobile-banner-ad";

// Basic usage
<EnhancedMobileBannerAd />

// Custom configuration
<EnhancedMobileBannerAd 
  slotId="div-gpt-ad-custom-123"
  slotPath="/23062212598/custom_ad_unit"
  sizes={[[300, 250], [336, 280]]}
/>
```

### 2. GPT Script Manager (`gpt-script-manager.tsx`)

**Purpose:**

- Ensures proper GPT library loading order
- Initializes googletag command queue immediately
- Configures lazy loading for better performance
- Marks GPT as ready for other components to use

**Configuration:**

- Lazy loading with 500% fetch margin (5 viewports away)
- 200% render margin (2 viewports away)
- 2x mobile scaling for better mobile performance

### 3. Consent-Aware Ad Wrapper (`consent-aware-ad-wrapper.tsx`)

**Features:**

- Detects common Consent Management Platforms (CMPs):
  - Google Consent Mode
  - OneTrust
  - Cookiebot
  - Quantcast Choice (TCF v2)
- Falls back to generic consent cookie detection
- Shows appropriate placeholders while checking consent
- Automatically displays ads after 10 seconds if no CMP is detected

**Usage:**

```tsx
import ConsentAwareAdWrapper from "@/components/ads/consent-aware-ad-wrapper";

// Use instead of EnhancedMobileBannerAd when consent management is required
<ConsentAwareAdWrapper />
```

### 4. Ad Debugger (`ad-debugger.tsx`)

**Features:**

- Real-time GPT status monitoring
- Visual indicators for:
  - GPT loaded state
  - GPT ready state
  - Defined ad slots
  - Displayed ad slots
  - Current page path
- Error logging for GPT-related issues
- Quick link to Google Publisher Console

**Activation:**

- Automatically shown in development mode
- Can be enabled in production by adding `?debug-ads` to any URL

### 5. Layout Updates

**Changes to `app/layout.tsx`:**

1. Removed inline GPT initialization scripts
2. Added immediate googletag command queue initialization
3. Integrated GPTScriptManager component
4. Added AdDebugger component

## Implementation Checklist

### ✅ Completed Tasks

1. **Created Enhanced Components:**
   - [x] EnhancedMobileBannerAd with retry logic and proper cleanup
   - [x] GPTScriptManager for centralized script management
   - [x] ConsentAwareAdWrapper for GDPR/consent compliance
   - [x] AdDebugger for troubleshooting

2. **Updated Layout:**
   - [x] Removed conflicting inline scripts
   - [x] Added proper script initialization order
   - [x] Integrated debugging tools

3. **Updated All Financial Solutions Pages:**
   - [x] Replaced MobileBannerAd imports with EnhancedMobileBannerAd
   - [x] Updated component usage in all requirements pages

### 🔄 Recommended Next Steps

1. **Testing:**
   - Test ad serving on various requirements pages
   - Verify ads load on first visit without refresh
   - Test with different network speeds
   - Verify consent management integration

2. **Monitoring:**
   - Use AdDebugger to monitor ad serving in development
   - Check Google Publisher Console for any errors
   - Monitor ad fill rates and performance

3. **Optimization:**
   - Consider implementing ad refresh for long page sessions
   - Add performance metrics tracking
   - Implement A/B testing for ad placements

## Troubleshooting Guide

### Common Issues and Solutions

1. **Ads not loading on first visit:**
   - Check AdDebugger panel for GPT status
   - Verify no JavaScript errors in console
   - Ensure ad container div is present in DOM

2. **Consent-related issues:**
   - Use ConsentAwareAdWrapper for GDPR compliance
   - Check if CMP is properly integrated
   - Verify consent cookies are set correctly

3. **Slot already defined errors:**
   - Component automatically handles slot cleanup
   - Check for duplicate ad components with same slotId

4. **Performance issues:**
   - Lazy loading is enabled by default
   - Adjust fetch/render margins in GPTScriptManager if needed
   - Consider reducing number of ad slots per page

## Migration Guide

### Updating from `mobile-banner-ad` to `enhanced-mobile-banner-ad`

1. **Update imports:**

   ```tsx
   // Old
   import MobileBannerAd from "@/components/ads/mobile-banner-ad";
   
   // New
   import EnhancedMobileBannerAd from "@/components/ads/enhanced-mobile-banner-ad";
   ```

2. **Update component usage:**

   ```tsx
   // Old
   <MobileBannerAd />
   
   // New
   <EnhancedMobileBannerAd />
   ```

3. **For consent management:**

   ```tsx
   // Use ConsentAwareAdWrapper instead
   import ConsentAwareAdWrapper from "@/components/ads/consent-aware-ad-wrapper";
   
   <ConsentAwareAdWrapper />
   ```

## Performance Metrics

The enhanced implementation provides:

- **Faster initial load**: Lazy loading reduces initial page weight
- **Better error recovery**: Automatic retry mechanism
- **Improved user experience**: Ads load without manual refresh
- **GDPR compliance**: Consent-aware loading
- **Developer experience**: Built-in debugging tools

## Resources

- [Google Publisher Tag Documentation](https://developers.google.com/publisher-tag/guides/get-started)
- [GPT Best Practices](https://developers.google.com/publisher-tag/guides/best-practices)
- [Google Publisher Console](https://search.google.com/search-console/about)
