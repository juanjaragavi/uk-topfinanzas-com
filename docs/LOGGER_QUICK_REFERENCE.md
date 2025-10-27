# Logger Quick Reference

## Import

```typescript
// Default logger
import { logger } from "@/lib/logger";

// Scoped loggers (recommended)
import {
  analyticsLogger, // For analytics components
  apiLogger, // For API routes
  adzepLogger, // For AdZep components
  utmLogger, // For UTM tracking
  formLogger, // For forms
  validationLogger, // For validation
} from "@/lib/logger";
```

## Log Levels

```typescript
logger.trace("Very detailed debugging");
logger.debug("Development debugging", { data });
logger.info("General information", { userId });
logger.warn("Warning condition", { count });
logger.error("Error occurred", error, { context });
logger.fatal("Critical failure", error);
```

## Common Patterns

### Analytics Components

```typescript
import { analyticsLogger } from "@/lib/logger";

analyticsLogger.info("Event tracked", {
  event: "page_view",
  pathname: "/example",
});
```

### API Routes

```typescript
import { apiLogger } from "@/lib/logger";

export async function POST(request: Request) {
  apiLogger.info("Request received", { endpoint: "/api/example" });

  try {
    // logic
    apiLogger.info("Request successful");
  } catch (error) {
    apiLogger.error("Request failed", error, { endpoint: "/api/example" });
  }
}
```

### Error Logging

```typescript
try {
  await operation();
} catch (error) {
  logger.error("Operation failed", error, {
    operation: "updateUser",
    userId: user.id,
  });
}
```

## Migration Checklist

- [ ] Import appropriate scoped logger
- [ ] Replace console.log → logger.debug or logger.info
- [ ] Replace console.warn → logger.warn
- [ ] Replace console.error → logger.error
- [ ] Add context objects instead of multiple arguments
- [ ] Remove sensitive data from logs
- [ ] Test in development mode

## Environment

- **Development**: Logging enabled (colorized output)
- **Production**: Logging disabled (no overhead)
- **Force in Production**: Set `NEXT_PUBLIC_ENABLE_LOGGING=true`

## Resources

- Full Guide: `/docs/LOGGER_MIGRATION_GUIDE.md`
- Implementation Summary: `/docs/CONSOLE_LOG_MIGRATION_SUMMARY.md`
- Logger Source: `/lib/logger.ts`
