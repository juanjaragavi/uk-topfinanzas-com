# TopFinanzas Mexico - Codebase Analysis

## Overview

This repository contains the codebase for the TopFinanzas Mexico website, adapted from its English version for the Mexican market. The project is built using Next.js, a React framework for web applications, and employs a centralized content management system to facilitate site updates and maintenance.

## Directory Structure

### Main Directories

- `/app`: Contains the routes and pages of the Next.js application
- `/components`: Contains reusable React components
- `/lib`: Contains utilities, data, and configuration files
- `/public`: Contains publicly available static files
- `/styles`: Contains global CSS files

### Detailed Focus on the `/lib` Directory

The `/lib` directory is crucial for understanding how the site's dynamic content is managed. It includes:

#### `/lib/ads`

- `advertisements.ts`: Defines the advertising configuration for the site

#### `/lib/documents`

- Contains reference documents, workflow configuration JSON files, and other documentation files
- Includes documents such as `partner-feedback-summary.md` and workflows like `TF_TOPFINANZAS_Application_Page_Deployer.json`

#### `/lib/images`

- `logos.ts`: Defines the logos used on the site, with URL, alt text, and dimensions

#### `/lib/navigation`

- `headerNavigation.ts`: Defines the header navigation structure, including main navigation items, dropdown menus, and mega menus
- `footerNavigation.ts`: Defines the footer navigation structure, category links, blog posts, social media, and contact information

#### `/lib/pages`

- Contains directories for different sections of the site
- `/lib/pages/credit-cards`: Contains files related to the credit cards section
- `/lib/pages/credit-cards/content`: JSON files that define the content for the credit card pages

#### `/lib/texts`

- Contains static texts and theme configurations
- `/lib/texts/header`: Texts for the header component
- `/lib/texts/footer`: Texts for the footer component

#### `/lib/utils.ts`

- Utility functions used throughout the application, such as `cn` for merging Tailwind CSS classes

## Centralized Content Management System

The project uses a centralized content management system where all content is defined in TypeScript or JSON files with well-defined interfaces. This allows for:

1. **Programmatic content editing**: through API endpoints or direct file manipulation
2. **Type safety**: with TypeScript interfaces that ensure content structure remains valid
3. **Easy updates**: for dynamic content without modifying component logic
4. **Consistent content**: across multiple components that use the same data

### Key Content Files

#### Navigation Files

- `headerNavigation.ts`: Defines the header navigation structure
- `footerNavigation.ts`: Defines the footer navigation structure

#### Credit Card Content Files

- `main.content.json`: Content for the main credit cards page
- `citi-double-cash.content.json`: Content for the Citi Double Cash card page
- `recommendation.content.json`: Content for the card recommendation page
- `apply.content.json`: Content for the general card application page
- `apply-citi-double-cash.content.json`: Content for the Citi Double Cash card application page

### Implementation in Components

The dynamic content is imported into the corresponding components:

```typescript
// Example import in a component
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";
import { headerContent } from "@/lib/texts/header/content";
```

## Adaptation to the Mexican Market

The adaptation to the Mexican market includes:

1. **Text Translation**: All texts have been translated from English to Mexican Spanish
2. **Cultural Changes**: Adaptation of financial concepts to Mexican financial culture
3. **Legal Compliance**: Updating legal terms and requirements to comply with Mexican regulations
4. **User Experience Changes**: Adaptations for local preferences
5. **URL Updates**: Changes in URL structures for Mexico-specific SEO

### Specific Changes Made

1. **Update of the `lang` attribute**: Changed from "en" to "es-mx" in the `RootLayout` component
2. **Translation of Credit Card Content**:
   - Translation of all JSON content files to Mexican Spanish
   - Adaptation of financial terms (e.g., "cash back" to "cashback")
   - Update of requirements (e.g., "Social Security Number" to "CURP/RFC")
3. **Translated Navigation**:
   - Translation of navigation elements in the header and footer
   - Adaptation of categories and popular topics

## Automated Tools and Workflows

The project uses n8n workflows to automate tasks such as:

1. **Content Generation**: Using LLMs to create initial content
2. **JSON Formatting**: Processing content into JSON format that complies with TypeScript interfaces
3. **Deployment**: Rebuilding the application and restarting services
4. **User Notification**: Sending emails with updated content summaries

These workflows are documented in the JSON files in the `/lib/documents/` directory.

## Best Practices for Working with the Codebase

1. **Maintain Existing Structure**: Ensure updates follow established patterns
2. **Validate Against Interfaces**: Check that content updates conform to TypeScript interfaces
3. **Test Changes**: Verify that content displays correctly after updates
4. **Document Changes**: Keep track of content modifications for reference
5. **Use Standard URL Patterns**: For images, use the standard format `https://media.topfinanzas.com/images/generated/[timestamp]/sample_0.jpg`

## Conclusion

The codebase is well-structured with a clear separation of concerns and a centralized content management system that facilitates updates. The adaptation to the Mexican market is primarily an exercise in translation and localization, maintaining the technical structure of the site intact.
