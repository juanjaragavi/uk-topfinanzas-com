# Directory Structure Changes

This document tracks important changes to the directory structure in the TopFinanzas Mexico project.

## March 25, 2025 - Legal Pages Spanish Translation

### Summary

The legal pages directories have been translated from English to Spanish:

- `/app/privacy-policy/` → `/app/politica-de-privacidad/`
- `/app/terms/` → `/app/terminos/`

The corresponding page.tsx files have also been translated, with Spanish metadata and text. The original English directories and files remain for reference but should be deprecated in favor of the Spanish versions.

## March 25, 2025 - App Directory Cleanup

### Summary

The `/app/credit-cards/` directory and its subdirectories (`/apply` and `/recommendation`) were removed from the project as part of cleanup from the American version. These pages have been fully replaced by the blog-style URL structure implemented under `/app/soluciones-financieras/` and `/app/recomendador-de-tarjetas-de-credito-p1-next/`.

### Directories Removed

- `/app/credit-cards/` - Main credit card pages directory
  - `/app/credit-cards/apply/` - Credit card application pages
  - `/app/credit-cards/recommendation/` - Card recommendation pages

### Replacement Structure

These pages have been replaced with blog-style URL pages located at:

```markdown
/app/
  /soluciones-financieras/
    /guia-tarjeta-de-credito-nu-bank-next/
      page.tsx
    /tarjeta-plata-card-next/
      page.tsx
    /requisitos-tarjeta-de-credito-nu-next/
      page.tsx
    /requisitos-tarjeta-de-credito-azul-bbva-next/
      page.tsx
    /tarjeta-de-credito-azul-bbva-next/
      page.tsx
  /recomendador-de-tarjetas-de-credito-p1-next/
    page.tsx
    metadata.ts
```

### Related Updates

The following documentation files have been updated to reflect these changes:

1. `/app/README.md` - Updated directory structure and added cleanup notes
2. `/README.md` - Updated project structure section
3. `/blog-functionality-report.md` - Added note about directory removal
4. `/IMPLEMENTATION.md` - Updated file structure and added note about directory removal

### Content Management

Despite the removal of these directories, the content for credit card pages is still managed through the centralized content system in the `/lib/pages/credit-cards/` directory. This content is now consumed by the blog-style URL pages rather than the previous app router pages.

The content management system described in `/lib/pages/credit-cards/centralized-credit-card-user-journey-management-system-report.md` remains valid, though the component implementation has changed from app router pages to the blog-style URL pages.

### Middleware Changes

The middleware has been updated to handle the new URL structure, with mappings that redirect from the standard routes to the WordPress URLs with `-next` suffix for A/B testing purposes.
