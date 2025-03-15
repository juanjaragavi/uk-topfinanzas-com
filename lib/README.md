# Library Directory

This directory contains utilities, data, and configuration files for the Top Finanzas website. These files are organized by function and purpose, making them easy to locate and modify programmatically.

## Directory Structure

- `/ads` - Advertisement configuration
- `/documents` - Document files (WordPress exports, etc.)
- `/images` - Image configuration
- `/navigation` - Navigation configuration
- `/texts` - Text content
- `utils.ts` - Utility functions

## Navigation Configuration (`/navigation`)

### Header Navigation (`headerNavigation.ts`)

This file defines the main site navigation items, dropdown menus, and mega menu structure. Each navigation item includes:

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
    text: "NEW SECTION",
    href: "/new-section",
  },
]
```

### Footer Navigation (`footerNavigation.ts`)

This file defines the footer navigation structure, including columns, links, and other footer content.

## Text Content (`/texts`)

### Header Content (`/texts/header/content.ts`)

Contains text content for the header section.

### Footer Content (`/texts/footer/content.ts`)

Contains text content for the footer section, including copyright notices, disclaimers, and other static text.

## Advertisement Configuration (`/ads`)

These files define advertisement placements and configurations for the site.

## Images Configuration (`/images`)

### Logos (`logos.ts`)

Contains references to logo images used throughout the site.

## Documents (`/documents`)

Contains document files used by the application:

- `TopFinance_WordPress_Export_Mar_15_2025.xml` - WordPress export file containing blog posts to be imported

## Utilities (`utils.ts`)

Contains utility functions used throughout the application, including:

- **cn**: A utility function for merging Tailwind CSS classes with conditional logic

## Modifying Content Programmatically

These files are designed to be easily modified programmatically, either through direct file manipulation or through API endpoints. When updating these files:

1. **Maintain the existing structure**: Keep the existing file structure and object patterns
2. **Type safety**: Ensure new values conform to the TypeScript interfaces defined in the files
3. **Testing**: Test changes to ensure they render correctly on the site

## Image URLs

When adding or updating image references, use the following URL pattern:

```
https://media.topfinanzas.com/images/generated/[timestamp]/sample_0.jpg
```

Replace `[timestamp]` with the appropriate timestamp identifier.
