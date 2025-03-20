# Typography Refactoring Plan for TopFinanzas Next.js Project

## Overview

This document outlines a comprehensive plan to centralize and standardize all typography-related Tailwind CSS classes across the TopFinanzas Next.js project. The goal is to establish consistent text styling through centralized classes defined in `app/globals.css`, making future updates more efficient and ensuring visual consistency.

## Current Issues

1. Typography styles are scattered across individual component files
2. Inconsistent font sizes and colors are applied to similar elements
3. Manual updates require changes to multiple files
4. No standardized approach to responsive typography

## Refactoring Goals

1. Define centralized typography classes in `app/globals.css`
2. Apply consistent styling to all text elements across the application
3. Implement the article template typography guidelines:
   - H1: 16px bold, #234043 color
   - H2/H3: 12px, #234043 color
   - Paragraph/lists: 10px, #234043 color
   - Links: #222442 color
4. Create a maintainable system for future updates

## Implementation Plan

### Phase 1: Define Custom Typography Classes in globals.css

Add the following custom classes to `app/globals.css`:

```css
@layer components {
  /* Heading Typography */
  .text-h1 {
    @apply text-[16px] font-bold text-[#234043] leading-tight;
  }
  
  .text-h2 {
    @apply text-[12px] text-[#234043] leading-tight;
  }
  
  .text-h3 {
    @apply text-[12px] font-semibold text-[#234043] leading-tight;
  }
  
  /* Paragraph Typography */
  .text-body {
    @apply text-[10px] text-[#234043] leading-normal;
  }
  
  /* List Item Typography */
  .text-list {
    @apply text-[10px] text-[#234043] leading-normal;
  }
  
  /* Link Typography */
  .text-link {
    @apply text-[#222442] hover:underline;
  }
  
  /* Caption/Meta Typography */
  .text-meta {
    @apply text-[8px] text-[#234043] leading-tight;
  }
  
  /* Special Text Elements */
  .text-cta {
    @apply text-[12px] font-medium;
  }
  
  /* Default background for text overlay sections */
  .bg-text-overlay {
    @apply bg-white/90 p-3 rounded-md;
  }
  
  /* Container for article content with appropriate spacing */
  .article-container {
    @apply space-y-4 max-w-3xl mx-auto;
  }
  
  /* Special container for the GAM ad iframe */
  .gam-ad-container {
    @apply my-6 mx-auto flex justify-center;
  }
}
```

Additionally, update the base layer to ensure these styles are consistently applied by default:

```css
@layer base {
  h1 {
    @apply text-h1;
  }

  h2 {
    @apply text-h2;
  }

  h3 {
    @apply text-h3;
  }

  p {
    @apply text-body;
  }

  a {
    @apply text-link;
  }

  li {
    @apply text-list;
  }
}
```

### Phase 2: Identify and Refactor All Text-Containing Components

#### Blog Components

1. Update `components/mdx/blog-post.tsx`:
   - Replace inline text styling with custom classes
   - Ensure proper spacing between elements

2. Update `components/layout/blog-layout.tsx`:
   - Apply custom classes to all text elements
   - Ensure consistency in header, main content, and sidebar

#### Credit Card Pages

3. Update all files in `app/credit-cards/`:
   - Apply custom classes to headings, paragraphs, and links
   - Standardize component styling

#### Other Page Types

4. Update remaining pages in `app/`:
   - Apply consistent styling to match the article template
   - Ensure responsive behavior is maintained

### Phase 3: Update Component Libraries

1. Review and update all UI components in `components/ui/`:
   - Ensure any text-containing components use the custom classes
   - Update button texts, card headings, and other text elements

2. Review and update form components in `components/forms/`:
   - Standardize label and input text styling
   - Apply appropriate text sizes to form elements

### Phase 4: Create Typography Showcase Page

1. Create a new page at `app/style-guide/typography.tsx`:
   - Showcase all typography styles in one reference page
   - Include examples of each text style in context
   - Provide documentation for developers

### Phase 5: Testing and Validation

1. Visual Testing:
   - Review all pages on different screen sizes
   - Ensure text remains readable and visually appealing
   - Validate hierarchy and emphasis work as expected

2. Accessibility Testing:
   - Ensure color contrast meets WCAG guidelines
   - Verify text sizing is appropriate for readability
   - Test with screen readers to ensure proper semantics

## Implementation Strategy

### File-by-File Approach

1. Start with the most frequently viewed pages:
   - Homepage
   - Blog post template
   - Credit card main pages

2. Then proceed to less frequently accessed pages:
   - Application forms
   - Legal pages
   - Category listings

### Creating a Utility Function for Dynamic Text Styling

For components requiring dynamic text styling based on props, create a utility function in `lib/utils.ts`:

```typescript
export function getTextClass(type: 'h1' | 'h2' | 'h3' | 'body' | 'meta' | 'link' | 'list', variant?: 'default' | 'large' | 'small'): string {
  const baseClass = `text-${type}`;
  
  if (!variant || variant === 'default') {
    return baseClass;
  }
  
  if (variant === 'large') {
    // Apply larger text variant while maintaining consistency
    return `${baseClass} text-[calc(100%+2px)]`;
  }
  
  if (variant === 'small') {
    // Apply smaller text variant while maintaining consistency
    return `${baseClass} text-[calc(100%-1px)]`;
  }
  
  return baseClass;
}
```

## Timeline and Dependencies

### Estimated Timeline

- Phase 1 (Define Classes): 1 day
- Phase 2 (Component Refactoring): 3-4 days
- Phase 3 (Component Libraries): 1-2 days
- Phase 4 (Typography Showcase): 1 day
- Phase 5 (Testing): 1-2 days

### Dependencies

- Existing Tailwind configuration
- Current component structure
- Project typography requirements

## Potential Challenges and Mitigations

### Challenges

1. **Responsive Design Considerations:**
   - Small font sizes may be difficult to read on certain devices
   - Mitigation: Add subtle size increases for mobile vs. desktop

2. **Maintaining Visual Hierarchy:**
   - With reduced text size differences, visual hierarchy might be less clear
   - Mitigation: Use weight, color, and spacing to enhance hierarchy

3. **Browser Compatibility:**
   - Some browsers may render small text differently
   - Mitigation: Establish minimum font size thresholds

4. **Animation and Transition Effects:**
   - Text animations may need adjustment for smaller sizes
   - Mitigation: Test and adjust animation parameters

## Expected Benefits

1. Significantly improved consistency across all pages
2. Easier maintenance and updates to global styling
3. Faster implementation of design changes
4. Improved page load performance through class reuse
5. Better developer experience through standardized patterns

## Conclusion

This refactoring plan provides a systematic approach to standardizing text styling across the TopFinanzas application. By centralizing typography classes in `globals.css` and consistently applying them throughout the codebase, we'll create a more maintainable and visually consistent user experience that adheres to the specified article template guidelines.
