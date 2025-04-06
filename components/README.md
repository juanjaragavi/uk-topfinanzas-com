# Components Directory

This directory contains React components for the TopFinance UK website. The components are organized by function and purpose.

## Directory Structure

- `/forms` - Form components for user input and data collection
- `/layout` - Layout components (header, footer, etc.)
- `/mdx` - MDX-related components for blog rendering
- `/ui` - Reusable UI components

## Layout Components

### Blog Layout (`/layout/blog-layout.tsx`)

Main layout component for blog pages. It includes:

- Header and footer with UK-specific navigation
- Blog post metadata display (title, author, date, etc.)
- Social sharing buttons
- Sidebar with recent UK-focused articles, categories, and newsletter signup
- Advertisement placeholders for UK financial products

Usage:

```tsx
<BlogLayout metadata={postMetadata}>
  {/* Blog content */}
</BlogLayout>
```

## MDX Components

### Blog Post (`/mdx/blog-post.tsx`)

Component for rendering individual blog posts. It takes post metadata and content as props and renders them using the BlogLayout component.

Usage:

```tsx
<BlogPost metadata={postMetadata}>
  {compiledMdxContent}
</BlogPost>
```

### Blog Layout (MDX Version) (`/mdx/blog-layout.tsx`)

A specialized version of the blog layout used for rendering MDX content in the blog section. It includes:

- UK-specific header and footer
- Content area with proper typography for UK English content
- Sidebar with recent articles, categories, and newsletter signup

## UI Components

The `/ui` directory contains reusable UI components for the site. These follow a consistent pattern and are generally based on the shadcn/ui component library.

### Key UI Components

- **AdPlaceholder** (`/ui/ad-placeholder.tsx`) - Component for displaying UK advertisement placeholders
- **Button** (`/ui/button.tsx`) - Reusable button component
- **Card** (`/ui/card.tsx`) - Card component for displaying content in a container
- **Image-related components** - Components for displaying images with rounded corners and animations
- **CurrencyDisplay** - Properly formats GBP (£) currency values

## Modifying Components for UK Market

When modifying components, consider the following UK-specific guidelines:

1. **Maintain consistency**: Keep styles consistent with the UK website branding.
2. **Preserve functionality**: Ensure that components continue to work as expected with UK content.
3. **Use Tailwind classes**: The project uses Tailwind CSS for styling.
4. **Responsive design**: Ensure components work well on all screen sizes.
5. **UK Currency**: Use the proper GBP (£) currency symbol and formatting.
6. **UK Date Format**: Display dates in the UK format (day-month-year).
7. **UK Compliance**: Ensure components displaying financial information comply with UK regulations and terminology.

### Financial Components

Components that display financial information should use:

- GBP currency format: `£1,234.56`
- APR displayed according to UK standards: `24.9% APR (variable)`
- UK-specific terms like "representative example" where required by regulations

### Image Components

All image components should include the `rounded-xl` class for consistent styling. When creating or modifying image containers, ensure they also have this class.

## Adding New Components

When adding new components:

1. Create a new file in the appropriate subdirectory
2. Use the existing component pattern as a guide
3. Export the component so it can be imported elsewhere
4. Add appropriate JSDoc comments for better developer experience
5. Follow UK localization standards for any text or formatting
