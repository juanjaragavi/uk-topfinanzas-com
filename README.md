# Top Finanzas - Next.js Project

This is a Next.js project for Top Finanzas, a financial services website. It includes a blog, credit card comparison tools, and other financial services.

## Project Structure

The project follows a standard Next.js App Router structure with additional organization:

```markdown
/app                   - Next.js app router directory
  /blog                - Blog pages 
    /category/[slug]   - Category pages
    /post/[slug]       - Individual blog post pages
  /credit-cards        - Credit card pages
    /apply             - Application pages
    /recommendation    - Recommendation pages
/components            - React components
  /forms               - Form components
  /layout              - Layout components
  /mdx                 - MDX rendering components
  /ui                  - UI components
/content               - Content files
  /blog                - Blog content in MDX format
/hooks                 - Custom React hooks
/lib                   - Utility libraries 
  /ads                 - Advertisement configuration
  /documents           - Document files (WordPress exports, etc.)
  /images              - Image configuration
  /navigation          - Navigation configuration
  /texts               - Text content
/public                - Static assets
/styles                - Global styles
```

## Content Structure

### Blog Posts

Blog posts are stored as MDX files in the `/content/blog` directory. Each post has a frontmatter section with metadata and MDX content for the body:

```mdx
---
title: "Post Title"
date: "Date"
author: "Author Name"
authorImage: "Image URL"
readingTime: "X minute read"
categories:
  - name: "Category Name"
    slug: "category-slug"
featuredImage: "Featured Image URL"
excerpt: "Short excerpt of the post"
---

# Post content in Markdown/MDX format
```

### Navigation

Site navigation is configured in:

- `/lib/navigation/headerNavigation.ts` - Main site navigation
- `/lib/navigation/footerNavigation.ts` - Footer links

### Images

- Images should use the format: `https://media.topfinanzas.com/images/generated/[timestamp]/sample_0.jpg`
- Blog post featured images are specified in the MDX frontmatter
- The banner image on the homepage can be changed in the page component

## MDX Components

Custom MDX components are defined in `mdx-components.tsx` at the root level. These components control how markdown elements are rendered in the blog posts.

## Adding New Blog Posts

To add a new blog post:

1. Create a new `.mdx` file in `/content/blog`
2. Add the required frontmatter with metadata
3. Write the post content in MDX format
4. The post will be automatically rendered via the dynamic route

## Modifying Credit Card Information

Credit card information is stored in page components in the `/app/credit-cards` directory.

## Adding/Modifying Categories

Blog categories are currently defined in the array in `app/blog/category/[slug]/page.tsx`.
