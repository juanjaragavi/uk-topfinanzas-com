# UTM Parameter Issue - Root Cause Analysis

## Problem Statement

Form submissions **with UTM parameters** fail in production but work without them.

## Test Results - Local Environment ✅

Both scenarios work perfectly in local development:

- ✅ Without UTM: Google Sheets + Brevo both work
- ✅ With UTM: Google Sheets + Brevo both work

## Production Behavior ❌

- ❌ **With UTM parameters**: Form fails with 500 error
- ✅ **Without UTM parameters**: Form works correctly

## Root Cause Hypotheses

### 1. 🎯 Most Likely: Environment Variable Format Issue

**Theory**: The Google Sheets private key in production has formatting issues that only manifest when processing certain payloads (like those with many fields/UTM params).

**Why UTM params trigger it**:

- More fields = larger payload
- Longer request body might expose encoding issues
- Private key with incorrect newlines might fail intermittently

**How to verify**:

```bash
# Check if private key in production has proper \n escaping
# Wrong: actual newlines in the string
# Correct: \n as literal characters
```

### 2. 🔐 Google API Quota/Rate Limiting

**Theory**: Production might be hitting API quotas when processing larger payloads.

**Why UTM params trigger it**:

- With UTM: 10 fields total
- Without UTM: 5 fields total
- Doubled field count could push over limit

**How to verify**:
Check Google Cloud Console for API quota errors

### 3. 📏 Field Length/Size Limits

**Theory**: Some hosting platforms have request size limits.

**Why UTM params trigger it**:

- UTM values can be long (campaign IDs like "22524445886")
- Combined field length exceeds platform limit

### 4. 🔤 Special Character Encoding

**Theory**: UTM parameter values contain characters that aren't properly encoded.

**Production URL had**:

```bash
utm_campaign=22524445886
utm_content=banner
utm_term=open
```

These look clean, but production might not be properly encoding them.

### 5. 🐛 Async/Timing Issue

**Theory**: When UTM params are present, the form processes slower, causing a timeout.

**Why**:

- More fields to process
- sessionStorage reads (5 extra reads for UTM params)
- Might hit request timeout

## Diagnostic Plan

### Step 1: Add Detailed Logging to Production API

Add this to `/app/api/sheets/route.ts`:

```typescript
export async function POST(req: Request) {
  const body = await req.json();

  // ADD THIS LOGGING
  console.log("[Sheets API] Request received:", {
    hasEmail: !!body.email,
    hasFirstName: !!body.firstName,
    hasUTMSource: !!body.utm_source,
    hasUTMMedium: !!body.utm_medium,
    hasUTMCampaign: !!body.utm_campaign,
    bodyKeys: Object.keys(body),
    bodySize: JSON.stringify(body).length,
  });

  try {
    const emailInput =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailInput) {
      console.log("[Sheets API] Missing email");
      return NextResponse.json(
        { error: "Email is required to upsert quiz registration" },
        { status: 400 },
      );
    }

    // ADD THIS BEFORE AUTH
    console.log("[Sheets API] Environment check:", {
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    console.log("[Sheets API] Auth created successfully");

    // ... rest of code
  } catch (error) {
    // UPDATE ERROR LOGGING
    console.error("[Sheets API] Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      hasUTMParams: !!(body.utm_source || body.utm_medium),
    });

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to add data to sheet", details: errorMessage },
      { status: 500 },
    );
  }
}
```

### Step 2: Test Production with Different Payloads

Use the production test script with variations:

```bash
# Test 1: No UTM
# Test 2: Short UTM values
# Test 3: Long UTM values
# Test 4: Special characters in UTM
```

### Step 3: Check Production Environment Variables

Verify the private key format in production:

```bash
# The key should be ONE line with \n escape sequences
# Check: Does it have actual newlines or \n characters?
```

## Temporary Workaround

While debugging, you could:

1. **Make UTM optional**: Allow form to submit even if UTM fails
2. **Retry without UTM**: If submission fails, retry without UTM params
3. **Log to alternative storage**: Send UTM params to a separate API if main submission fails

## Recommended Fix Path

### Quick Test (5 minutes)

1. Check production logs during a failed submission with UTM
2. Look for specific error message
3. This will tell us exactly what's failing

### If it's Environment Variable Issue (10 minutes)

1. Re-format the GOOGLE_PRIVATE_KEY in production
2. Ensure it's one line with \\n (double backslash + n)
3. Redeploy

### If it's Payload Size Issue (15 minutes)

1. Increase request size limit in hosting platform
2. Or split into two API calls (one for data, one for UTM)

### If it's API Quota Issue (30 minutes)

1. Check Google Cloud Console quotas
2. Increase quota limits
3. Or implement request batching

## Next Actions

**Immediate**:

1. Add logging to production API route
2. Deploy
3. Test with UTM parameters
4. Check production logs
5. Error message will reveal the exact issue

**Then**:
Based on the error message, apply the appropriate fix from above.

---

**Key Insight**: The fact that it works without UTM and fails with UTM is a HUGE clue. The issue is definitely related to:

- Payload size
- Field count
- Or environmental configuration that only fails with larger requests
