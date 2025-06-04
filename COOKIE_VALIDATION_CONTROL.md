# Quiz Cookie Validation Control System

## Overview

This system provides secure and temporary control over the 30-day cookie validation in the Quiz system, allowing administrators to temporarily disable user registration validation while maintaining security and data integrity.

## Current Status

🔴 **Cookie validation is currently DISABLED**

## How It Works

### Environment Variables

Two environment variables control the cookie validation behavior:

1. **`NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED`**
   - `true` (default): Full 30-day cookie validation is active
   - `false`: Cookie validation is disabled, users can retake quiz

2. **`NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION`**
   - Number of days for cookie expiration when validation is disabled
   - Default: `1` day
   - Used only when `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false`

### Behavior Changes

#### When Validation is ENABLED (Normal Operation)

- Users who complete the quiz are blocked from retaking it for 30 days
- Returning users skip Step 3 (email form) and use saved data
- Cookies expire after 30 days

#### When Validation is DISABLED (Current State)

- Users can retake the quiz immediately
- All users go through the complete 3-step process
- Cookies expire after 1 day (or configured short expiration)
- User data is still saved but with temporary mode markers

## Security Features

### Data Integrity Protection

- API calls still function normally
- User data is still properly saved to Kit API
- Temporary mode is logged for monitoring
- Timestamps are added when validation is disabled

### Audit Trail

- Console logs indicate current validation status
- Cookie data includes `_temporaryMode` and `_timestamp` flags
- Easy identification of temporary vs normal operation

## Usage Instructions

### To DISABLE Cookie Validation (Current State)

1. Set environment variables:

   ```bash
   NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false
   NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1
   ```

2. Restart the application
3. Users can now retake the quiz immediately

### To ENABLE Cookie Validation (Restore Normal Operation)

1. Set environment variables:

   ```bash
   NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true
   # NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION is ignored when enabled
   ```

2. Restart the application
3. 30-day validation is restored

### Environment File Locations

- **Development**: `.env.local`
- **Production**: `.env.production`
- **Both files have been updated with the new variables**

## Deployment Instructions

### For Immediate Deployment

1. The system is ready to deploy as-is with validation DISABLED
2. Build and deploy normally:

   ```bash
   npm run build
   npm start
   ```

### For Future Re-enablement

1. Change `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true` in production environment
2. Redeploy the application
3. Cookie validation will be restored to full 30-day operation

## Monitoring and Debugging

### Console Logs

The system provides helpful console logs:

- `[QUIZ] Cookie validation temporarily disabled` - When validation is off
- `[QUIZ] Cookie validation: disabled, expiration: 1 days` - Status confirmation

### Cookie Data Structure

When validation is disabled, cookies include additional metadata:

```json
{
  "email": "user@example.com",
  "firstName": "John",
  "_temporaryMode": true,
  "_timestamp": "2025-06-04T10:30:00.000Z"
}
```

## Rollback Plan

If any issues occur:

1. Set `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true`
2. Redeploy
3. System immediately returns to normal 30-day validation

## Testing Recommendations

1. Test with validation disabled (current state)
2. Verify users can retake quiz immediately
3. Confirm API calls still work properly
4. Test re-enabling validation
5. Verify 30-day blocking works after re-enablement

## Important Notes

- Changes require application restart/redeploy
- Environment variables are prefixed with `NEXT_PUBLIC_` to be available in browser
- All user data continues to be properly saved regardless of validation state
- The system maintains full API functionality in both modes

---
*Last updated: June 4, 2025*
*System status: Cookie validation DISABLED*
