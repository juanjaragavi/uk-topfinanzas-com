# Quiz Page Ad Overlay Bug Fix

## Issue Description

**Problem**: Users completing the Quiz form experienced an overlay appearing after entering their name, preventing them from clicking the CTA button. Ad units were being served on Quiz pages despite ads being explicitly disabled.

**Root Cause**: The AdZep SPA Bridge was attempting to activate ads on ALL pages, including quiz pages where ads should never appear. The `<AdController disableAds={true} />` component only hides ad containers with CSS but doesn't prevent the AdZep activation logic from running.

**Screenshot Evidence**: Users reported overlay blocking the submit button immediately after form completion.

## Solution Implemented

### 1. Added Path Exclusion System

**File**: `/lib/ads/config.ts`

Added new configuration:

- `excludedPaths` array in `AdZepConfig` interface
- Helper function `isExcludedPath()` to check if current path should never show ads
- Configured `/quiz` and `/quiz-2` as excluded paths

```typescript
excludedPaths: ["/quiz", "/quiz-2"];
```

### 2. Updated AdZep SPA Bridge

**File**: `/components/analytics/adzep-spa-bridge.tsx`

**Critical Changes**:

- Import `isExcludedPath` helper
- Early exit in `handleRouteComplete()` if path is excluded
- Skip overlay display in `handleRouteStart()` for excluded paths
- Ensure overlay is explicitly hidden on excluded paths

**Flow Now**:

1. User navigates to `/quiz` or `/quiz-2`
2. `isExcludedPath()` returns `true`
3. AdZep activation is completely skipped
4. Overlay is explicitly hidden
5. No ad units are rendered or attempted

## Technical Details

### Before Fix

```typescript
// AdZep SPA Bridge attempted ads on ALL pages
const handleRouteComplete = async () => {
  // ... showed overlay
  // ... activated AdZep
  // ... waited for ad containers
};
```

### After Fix

```typescript
const handleRouteComplete = async () => {
  clearPending();

  // CRITICAL: Skip ad activation entirely on excluded paths
  if (isExcludedPath(pathname || "")) {
    hideOverlay(); // Ensure no overlay shown
    return; // Exit early - no ad activation
  }

  // ... rest of activation logic only for non-excluded pages
};
```

## Files Modified

1. **`/lib/ads/config.ts`**
   - Added `excludedPaths` property to `AdZepConfig` interface
   - Added quiz pages to exclusion list
   - Created `isExcludedPath()` helper function

2. **`/components/analytics/adzep-spa-bridge.tsx`**
   - Imported `isExcludedPath` helper
   - Added early exit check in `handleRouteComplete()`
   - Added exclusion check in `handleRouteStart()`
   - Explicitly hide overlay on excluded paths

## Testing Checklist

### Quiz Form Flow

- [x] Navigate to `/quiz`
- [x] Complete Step 1 (select preference)
- [x] Complete Step 2 (select income)
- [x] Enter name in Step 3
- [x] Verify NO overlay appears
- [x] Verify CTA button is clickable
- [x] Verify form submits successfully
- [x] Verify redirect to external link works

### Quiz-2 Form Flow

- [x] Navigate to `/quiz-2`
- [x] Complete multi-step form
- [x] Verify NO overlay appears
- [x] Verify NO ad units render
- [x] Verify form submission works

### Ad Activation on Other Pages

- [x] Navigate to blog article
- [x] Verify ads still load correctly
- [x] Navigate to financial solution page
- [x] Verify overlay appears only when ads present
- [x] Verify AdZep activation still works

## Benefits

1. **User Experience**: Quiz forms are now fully functional without ad interference
2. **Clean Separation**: Excluded paths list centralizes ad-free page configuration
3. **Performance**: No unnecessary ad activation attempts on quiz pages
4. **Maintainable**: Easy to add more excluded paths in the future
5. **Explicit Control**: Clear declaration of where ads should never appear

## Related Components

- **AdController** (`/components/ads/AdController.tsx`) - Still useful for hiding ad containers with CSS
- **Quiz Pages** (`/app/quiz/page.tsx`, `/app/quiz-2/page.tsx`) - Already use `disableAds={true}`
- **AdZep Config** (`/lib/ads/config.ts`) - Centralized ad configuration
- **Overlay Utilities** (`/lib/ads/overlay.ts`) - Manages overlay visibility

## Future Enhancements

Consider adding to `excludedPaths`:

- Registration flows
- Checkout/payment pages
- Privacy policy/legal pages
- Contact forms
- Account/profile pages

## Rollback Instructions

If issues arise:

```bash
git checkout dev -- lib/ads/config.ts
git checkout dev -- components/analytics/adzep-spa-bridge.tsx
```

Or manually:

1. Remove `excludedPaths` from `AdZepConfig` interface
2. Remove `isExcludedPath()` function
3. Remove exclusion checks from AdZep SPA Bridge

## Notes

- This fix works in conjunction with `<AdController disableAds={true} />`
- The overlay was part of the AdZep activation process, not an ad unit itself
- Quiz pages will now have zero ad-related activity
- AdZep script still loads globally but activation is skipped on excluded paths
- No impact on analytics tracking or form submission logic
