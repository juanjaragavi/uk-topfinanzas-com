# Library Directory

This directory contains utilities, data, and configuration files for the TopFinance UK website. These files are organized by function and purpose, making them easy to locate and modify programmatically.

## Directory Structure

- `/ads` - Advertisement configuration files for UK-compliant ads.
- `/documents` - Supporting document files (e.g., `commit-message.txt`, 404 logs).
- `/images` - Image configuration (e.g., `logos.ts`).
- `/navigation` - Navigation configuration files (`headerNavigation.ts`, `footerNavigation.ts`).
- `/texts` - Static text content configuration (`header/content.ts`, `footer/content.ts`).
- `/uk` - UK-specific configurations or utilities including:
  - `/uk/strings` - UK-localized text strings
  - `/uk/constants` - UK-specific constants (e.g., FCA compliance text)
- `constants.ts` - Project-wide constants.
- `README-DYNAMIC-CONTENT.md` - Documentation for dynamic content handling.
- `README.md` - This file.
- `strings.ts` - String constants or localization strings.
- `utils.ts` - Utility functions (e.g., `cn` for class names).

## UK-Specific Content (`/uk`)

The `/uk` directory contains configurations and utilities specifically for the UK market:

### UK Strings (`/uk/strings`)

Contains localized text strings for the UK market, including:

- **constants.ts**: Common string constants used throughout the site
- **strings.ts**: Form strings and other UI text elements

These files ensure consistent UK English terminology and compliance with UK financial regulations in user-facing content.

## Navigation Configuration (`/navigation`)

### Header Navigation (`headerNavigation.ts`)

This file defines the main site navigation items, dropdown menus, and mega menu structure. All content is localized for the UK market with:

- UK financial product terminology
- Links to UK-specific financial solutions
- UK-focused blog categories and topics

Each navigation item includes:

- **text**: Display text for the navigation item
- **href**: URL for the navigation item

For dropdown menus, additional properties include:

- **items**: Array of navigation items

For mega menus, additional properties include:

- **columns**: Menu columns with title and items
- **featuredPosts**: Featured blog posts to display in the menu

Example modification:

```typescript
// Adding a new main navigation item
mainNavItems: [
  // ... existing items
  {
    text: "CURRENT ACCOUNTS",
    href: "/current-accounts",
  },
]
```

### Footer Navigation (`footerNavigation.ts`)

This file defines the footer navigation structure, including columns, links, and other footer content. All content follows UK spelling and terminology.

## Text Content (`/texts`)

### Header Content (`/texts/header/content.ts`)

Contains text content for the header section, using UK English and terminology.

### Footer Content (`/texts/footer/content.ts`)

Contains text content for the footer section, including copyright notices, disclaimers, and other static text with UK-specific legal terminology.

## Advertisement Configuration (`/ads`)

These files define advertisement placements and configurations for the site, ensuring compliance with UK advertising standards for financial products.

## Images Configuration (`/images`)

### Logos (`logos.ts`)

Contains references to logo images used throughout the site, including the UK-specific branding.

## Documents (`/documents`)

Contains supporting document files used by developers or scripts:

- `commit-message.txt` - Template for Git commit messages used by `git-workflow.sh`.
- `top-uk-ajustes.xlsx-404.csv` - Log of 404 errors identified on the site.
- UK-specific documentation and reference materials

## Utilities (`utils.ts`)

Contains utility functions used throughout the application, including:

- **cn**: A utility function for merging Tailwind CSS classes with conditional logic
- **formatCurrency**: Formats currency values according to UK standards (£)
- **formatDate**: Formats dates according to UK convention (day-month-year)

## Modifying Content Programmatically

These files are designed to be easily modified programmatically, either through direct file manipulation or through API endpoints. When updating these files:

1. **Maintain the existing structure**: Keep the existing file structure and object patterns
2. **Type safety**: Ensure new values conform to the TypeScript interfaces defined in the files
3. **UK localization**: Maintain UK English spelling, terminology, and formatting
4. **Testing**: Test changes to ensure they render correctly on the site

## Image URLs

Most images are hosted externally. When referencing images within configuration or content files, use the full URL, typically following patterns like:

- `https://media.topfinanzas.com/images/uk/credit-cards/[image-name].jpg` - Use the "uk" path prefix for UK-specific images
- `https://media.topfinanzas.com/images/ads/uk/[ad-image-name].png` - UK advertisements

When adding new images, ensure they represent UK financial products and UK-relevant imagery.
