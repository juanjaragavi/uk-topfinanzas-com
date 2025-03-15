# Legal Content Directory

This directory contains legal documents for the Top Finanzas website in MDX format.

## Files

- `privacy-policy.mdx` - Privacy Policy document
- `terms-conditions.mdx` - Terms and Conditions document

## Content Format

Each legal document is written in MDX format with frontmatter metadata:

```mdx
---
title: "Document Title"
effectiveDate: "Date when the policy/terms came into effect"
lastUpdated: "Date when the document was last updated"
---

# Main Content

Document content in Markdown format...
```

## Updating Legal Documents

When updating legal documents:

1. Update the `lastUpdated` field in the frontmatter
2. Make necessary changes to the document content
3. Consider adding a "Change Log" section if making significant changes

## Pages

These MDX files are rendered at the following routes:

- Privacy Policy: `/privacy-policy`
- Terms & Conditions: `/terms`

The rendering is handled by:

- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`

## Navigation

The links to these pages are defined in `lib/navigation/footerNavigation.ts` under the `legalLinks` array.
