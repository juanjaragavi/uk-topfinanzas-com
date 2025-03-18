# Dynamic Content Management System - Implementation Guide

This document explains the refactored content management system that enables LLM-based agents to programmatically update page content without modifying component code.

## Architecture Overview

The system separates content into three main parts:

1. **Type Definitions**: TypeScript interfaces that define the structure of the content
2. **Content Data**: JSON files containing the actual content (text, links, metadata)
3. **Content Loaders**: TypeScript modules that load and validate JSON content

This separation allows agents to update just the content data without touching component code or type definitions.

## Directory Structure

The Credit Cards User Journey has been fully implemented with this pattern:

```markdown
lib/pages/credit-cards/
├── types/                             # Type definitions
│   ├── recommendation.types.ts        # Recommendation page interfaces
│   ├── main.types.ts                  # Main listing page interfaces
│   ├── citi-double-cash.types.ts      # Product page interfaces
│   ├── apply.types.ts                 # Application page interfaces
│   └── apply-citi-double-cash.types.ts # Product-specific application interfaces
├── content/                           # Content data files
│   ├── recommendation.content.json    # Recommendation page content
│   ├── main.content.json              # Main listing page content
│   ├── citi-double-cash.content.json  # Product page content
│   ├── apply.content.json             # Application page content
│   └── apply-citi-double-cash.content.json # Product-specific application content
├── utils/                             # Utility functions
│   └── content-loader.ts              # Content loading utility
├── recommendation.ts                  # Recommendation page bridge module
├── main.ts                            # Main listing page bridge module
├── citi-double-cash.ts                # Product page bridge module
├── apply.ts                           # Application page bridge module
└── apply-citi-double-cash.ts          # Product-specific application bridge module
```

## How It Works

### 1. Type Definitions

Type definition files define the structure of the content using TypeScript interfaces:

```typescript
// lib/pages/credit-cards/types/recommendation.types.ts
export interface CreditCardRecommendationPageContent {
  metadata: {
    title: string;
    description: string;
    // ...other fields
  };
  // ...other sections
}
```

### 2. Content Data

Content data is stored in JSON files that conform to the TypeScript interfaces:

```json
// lib/pages/credit-cards/content/recommendation.content.json
{
  "metadata": {
    "title": "Your Credit Card Recommendation - TopFinanzas",
    "description": "View your personalized credit card recommendation...",
    // ...other fields
  },
  // ...other sections
}
```

### 3. Content Loading

The `content-loader.ts` utility loads and validates JSON content against TypeScript interfaces:

```typescript
// lib/pages/credit-cards/utils/content-loader.ts
export function loadContent<T>(contentPath: string): T {
  // Read and parse JSON file
  // Return typed content
}
```

### 4. Bridge Module

The original TypeScript module acts as a bridge, importing the type and loading the content:

```typescript
// lib/pages/credit-cards/recommendation.ts
import { CreditCardRecommendationPageContent } from './types/recommendation.types';
import { loadContent } from './utils/content-loader';

export const creditCardRecommendationPageContent: CreditCardRecommendationPageContent = 
  loadContent<CreditCardRecommendationPageContent>(
    'lib/pages/credit-cards/content/recommendation.content.json'
  );

// Re-export the interface
export type { CreditCardRecommendationPageContent } from './types/recommendation.types';
```

## Updating Content Programmatically

### API Endpoints

The system includes an API endpoint for programmatically updating content:

```bash
PATCH /api/content/pages
```

Request body:

```json
{
  "path": "lib/pages/credit-cards/content/recommendation.content.json",
  "content": { ... } // Full updated content object
}
```

### n8n Workflow Integration

LLM-based agents can update content through the following steps:

1. Generate new content based on specific needs
2. Validate content against the TypeScript interface structure
3. Use the API endpoint to update the content JSON file
4. Trigger a rebuild of the Next.js application

Example n8n workflow steps:

1. AI Agent generates updated content
2. HTTP Request node calls the PATCH endpoint with the new content
3. Execute Command node triggers the rebuild process
4. If necessary, restart the Node server

## Benefits of This Approach

1. **Type Safety**: All content is validated against TypeScript interfaces
2. **Separation of Concerns**: Content is separate from component code
3. **Programmatic Updates**: Content can be updated via API without code changes
4. **Backward Compatibility**: Existing components still import content from the same module
5. **Developer Experience**: Clear separation of content, types, and loading logic

## Adding New Content Pages

To add a new content-managed page:

1. Create the type definition file in `types/`
2. Create the initial content JSON file in `content/`
3. Create a bridge module that imports and exports the content
4. Import the bridge module in your page component

## Complete Credit Cards User Journey Implementation

The entire Credit Cards User Journey has been implemented using this pattern, covering five key pages:

1. **Main Credit Cards Page** (`main.ts`):
   - Entry point to the credit cards section
   - Showcases different card options and benefits
   - Provides navigation to specific card pages

2. **Recommendation Page** (`recommendation.ts`):
   - Presents personalized card recommendations
   - Details benefits specific to recommended cards
   - Includes call-to-action elements for application

3. **Citi Double Cash Product Page** (`citi-double-cash.ts`):
   - Detailed information about a specific credit card
   - Comprehensive benefits and features description
   - Application requirements and eligibility criteria

4. **General Application Page** (`apply.ts`):
   - Generic application form and process
   - Benefits of applying through TopFinanzas
   - Security and privacy information

5. **Product-Specific Application Page** (`apply-citi-double-cash.ts`):
   - Tailored application for a specific card
   - Card-specific benefits highlighted
   - Special application requirements

Each page follows the same pattern of separation between:

- TypeScript interfaces (types/)
- JSON content (content/)
- Bridge modules (*.ts)

This implementation ensures consistency across the entire user journey while enabling programmatic content updates for any step in the process.

## Best Practices

1. **Keep types stable**: Don't modify type definitions frequently, as this requires code changes
2. **Validate content**: Always validate generated content against the defined structure
3. **Handle errors gracefully**: Implement proper error handling for content loading
4. **Version control**: Track changes to content files in version control
5. **Audit trail**: Log content updates for traceability
6. **Consistent naming conventions**: Maintain consistent naming across types, content files, and bridge modules
7. **User journey completeness**: When implementing this pattern, ensure all pages in a user journey are covered
8. **Content organization**: Group related content fields logically in both types and JSON files
9. **Documentation**: Keep documentation updated whenever new content types are added
10. **Testing**: Validate content changes don't break page rendering before deploying

This architecture ensures a robust, type-safe system for programmatically managing content across the TopFinanzas website, with particular emphasis on maintaining consistency throughout complete user journeys.
