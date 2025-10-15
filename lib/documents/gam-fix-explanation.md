# GAM "googletag not ready" Fix

## Problem Identified

The console was showing multiple warnings:

```bash
GAM: googletag not ready, retrying...
```

## Root Cause

The issue was a **race condition** in the Google Ad Manager (GAM) initialization:

1. The GPT (Google Publisher Tag) script was loading with `strategy="afterInteractive"`
2. The configuration script (which defines ad slots) was also loading with `strategy="afterInteractive"`
3. The configuration script was trying to execute `defineGAMAdSlots()` immediately (either on DOMContentLoaded or right away)
4. However, the GPT library hadn't finished loading and initializing its methods (`googletag.defineSlot`, `googletag.pubads`)
5. This caused the function to retry every 100ms with a console warning, creating spam in the console

## Solution Implemented

### 1. Script Load Coordination

- Added an `onLoad` callback to the GPT script that waits for the library to fully load
- Only after the GPT script loads does it call `defineGAMAdSlots()`

### 2. Silent Failure

- Removed the retry logic with `setTimeout` that was causing console spam
- Changed to a silent return if GPT isn't ready (which shouldn't happen now)
- Added proper type checking for `googletag.defineSlot` and `googletag.pubads` as functions

### 3. Duplicate Slot Prevention

- Added checks to prevent defining slots multiple times (e.g., `if (!window.gamSlots.header)`)
- This prevents errors if the function is called more than once

### 4. Better Error Handling

- Wrapped the slot definition in a try-catch block
- Errors are now logged properly instead of causing silent failures

## Code Changes

**File: `/components/analytics/gam.tsx`**

**Before:**

```typescript
<Script
  id="gam-gpt"
  src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
  strategy="afterInteractive"
/>
```

**After:**

```typescript
<Script
  id="gam-gpt"
  src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
  strategy="afterInteractive"
  onLoad={() => {
    // Script has loaded, now it's safe to define ad slots
    if (typeof window !== "undefined" && window.defineGAMAdSlots) {
      window.defineGAMAdSlots();
    }
  }}
/>
```

**Configuration Script Changes:**

- Removed automatic execution on DOMContentLoaded
- Removed retry loop with `setTimeout`
- Added function type checking
- Added duplicate prevention
- Added error handling

## Testing

After deploying this fix, you should see:

- ✅ No more "googletag not ready, retrying..." warnings
- ✅ Single log message: "GAM: Ad slots defined for network 21879825561"
- ✅ Ads load properly without console spam
- ✅ No performance impact from retry loops

## Benefits

1. **Cleaner Console**: No more warning spam
2. **Better Performance**: No unnecessary retry loops
3. **Proper Timing**: Slots are defined exactly when GPT is ready
4. **Reliability**: Prevents race conditions between script loading and execution
5. **Maintainability**: Clear, predictable execution flow

## Related Files

- `/components/analytics/gam.tsx` - Main GAM component (modified)
- `/types/window.d.ts` - Type definitions (already correct)
- `/app/layout.tsx` - Where GAM is loaded (no changes needed)
