# Ad Serving Testing Guide

This guide provides step-by-step instructions for testing the enhanced ad serving implementation on the TopFinance UK website.

## Prerequisites

- Access to the development/staging environment
- Chrome DevTools or similar browser developer tools
- Basic understanding of JavaScript console

## Testing Procedures

### 1. Basic Ad Loading Test

**Objective:** Verify ads load on first visit without manual refresh

**Steps:**

1. Clear browser cache and cookies
2. Navigate to any main financial solutions page (e.g., `/financial-solutions/barclaycard-avios-plus`)
3. Click through to the requirements page (e.g., `/financial-solutions/barclaycard-avios-plus-requirements`)
4. Verify that ads appear without needing to refresh the page

**Expected Result:**

- Ad should display within 1-5 seconds
- No manual refresh required
- Ad container should show loading state briefly

### 2. Debug Mode Testing

**Objective:** Use the Ad Debugger to verify GPT status

**Steps:**

1. Add `?debug-ads` to any page URL (e.g., `https://uk.topfinanzas.com/financial-solutions/barclaycard-avios-plus-requirements?debug-ads`)
2. Look for the Ad Debug Panel in the bottom-right corner
3. Verify the following indicators:
   - GPT Loaded: Green indicator
   - GPT Ready: Green indicator
   - Defined Slots: Should show at least 1 slot
   - Displayed Slots: Should match defined slots after loading

**Expected Result:**

- All indicators should be green
- No errors in the error section
- Current path should match the page URL

### 3. Console Testing

**Objective:** Verify no GPT errors in browser console

**Steps:**

1. Open Chrome DevTools (F12)
2. Navigate to Console tab
3. Filter by "GPT" or "googletag"
4. Navigate through several pages

**Expected Result:**

- No red error messages related to GPT
- Should see console logs like:
  - "GPT script loaded successfully"
  - "Ad slot div-gpt-ad-1750179025531-0 initialized and displayed"
  - "Ad render ended" messages

### 4. Network Speed Testing

**Objective:** Verify ads load properly on slow connections

**Steps:**

1. Open Chrome DevTools
2. Go to Network tab
3. Select "Slow 3G" from throttling dropdown
4. Navigate to a requirements page
5. Monitor ad loading behavior

**Expected Result:**

- Ads should still load (may take longer)
- Loading placeholder should be visible
- No timeout errors

### 5. Navigation Testing

**Objective:** Verify ads work correctly during navigation

**Steps:**

1. Start on `/financial-solutions`
2. Click on a credit card link
3. Click on the requirements link
4. Use browser back button
5. Click on a different product
6. Verify ads load each time

**Expected Result:**

- Ads should load on each page
- No duplicate slot errors
- Smooth transitions

### 6. Consent Testing (if CMP is implemented)

**Objective:** Verify consent-aware ad loading

**Steps:**

1. Clear all cookies
2. Navigate to the site
3. If consent banner appears, reject advertising cookies
4. Navigate to a page with ads
5. Accept advertising cookies
6. Verify ad behavior changes

**Expected Result:**

- Before consent: Placeholder message should appear
- After consent: Ads should load normally

## Common Issues and Solutions

### Issue: "Slot already defined" error

**Solution:** This is automatically handled by the enhanced component, but if it persists:

- Check for duplicate ad components on the same page
- Ensure each ad has a unique slotId

### Issue: Ads not loading but no errors

**Possible Causes:**

1. Ad blocker enabled - disable and retry
2. Network issues - check network tab
3. No ad inventory - this is normal, not an error

### Issue: "googletag is not defined" error

**Solution:**

- Verify GPTScriptManager is included in layout
- Check that scripts are loading in correct order
- May need to increase retry delay in component

## Performance Checklist

- [ ] Ads load within 5 seconds on normal connection
- [ ] No layout shift when ads load
- [ ] Page remains interactive during ad loading
- [ ] Console shows no GPT errors
- [ ] Memory usage remains stable during navigation

## Reporting Issues

When reporting ad serving issues, please include:

1. **Page URL** where issue occurred
2. **Browser and version**
3. **Screenshot** of Ad Debug Panel (if available)
4. **Console errors** (filtered by GPT/googletag)
5. **Network tab** screenshot showing failed requests
6. **Steps to reproduce** the issue

## Advanced Debugging

### Using Google Publisher Console

1. Add `?googfc` to any page URL
2. This opens the Google Publisher Console
3. Provides detailed GPT debugging information
4. Shows ad request details and responses

### Manual GPT Commands

Open browser console and try:

```javascript
// Check GPT status
console.log('GPT Ready:', window.googletag && window.googletag.pubadsReady);

// List all defined slots
if (window.googletag) {
  const slots = window.googletag.pubads().getSlots();
  console.log('Defined slots:', slots.map(s => s.getSlotElementId()));
}

// Force refresh all ads (use sparingly)
if (window.googletag) {
  window.googletag.pubads().refresh();
}
```

## Success Criteria

The ad serving implementation is considered successful when:

1. ✅ Ads load on first visit to requirements pages
2. ✅ No manual refresh needed
3. ✅ No console errors related to GPT
4. ✅ Ads survive navigation between pages
5. ✅ Debug tools provide useful information
6. ✅ Performance impact is minimal
7. ✅ Consent management works (if applicable)

## Next Steps

After testing is complete:

1. Document any issues found
2. Report findings to development team
3. Monitor ad performance metrics
4. Consider A/B testing different configurations
5. Set up automated monitoring for ad errors
