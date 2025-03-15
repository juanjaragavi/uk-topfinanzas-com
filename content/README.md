# Content Directory

This directory contains the content for the Top Finanzas website, organized by type.

## Blog Content (`/blog`)

The `/blog` directory contains MDX files for blog posts. Each file represents a single blog post.

### Blog Post Format

Blog posts are written in MDX format, which combines Markdown with JSX (React components). Each blog post should have the following structure:

```mdx
---
title: "Post Title"
date: "Month Day, Year"
author: "Author Name"
authorImage: "URL to author image"
readingTime: "X minute read"
categories:
  - name: "Category Name"
    slug: "category-slug"
featuredImage: "URL to featured image"
excerpt: "A brief summary of the post for previews and SEO"
---

# Post content starts here

Your blog post content in Markdown format with optional JSX components.

## H2 Heading

### H3 Heading

- List items
- Another item

[Links](https://example.com)

![Image Alt Text](image-url.jpg)

And so on...

```

### Frontmatter Fields

The frontmatter section (between the `---` markers) contains metadata about the post:

- **title**: The post title (required)
- **date**: Publication date in "Month Day, Year" format (required)
- **author**: Author name (required)
- **authorImage**: URL to author's profile image (required)
- **readingTime**: Estimated reading time, e.g., "6 minute read" (required)
- **categories**: Array of category objects, each with `name` and `slug` (required)
- **featuredImage**: URL to featured image (required)
- **excerpt**: Brief summary of the post (required)
- **views**: View count (optional, defaults to 0)
- **commentCount**: Comment count (optional, defaults to 0)

### Images

For images in blog posts, use the following format:

```mdx
![Alt text](https://media.topfinanzas.com/images/generated/TIMESTAMP/sample_0.jpg)
```

Replace `TIMESTAMP` with the appropriate timestamp identifier.

## Adding New Blog Posts

To add a new blog post:

1. Create a new MDX file in the `/blog` directory
2. Name it using kebab-case based on the post title (e.g., `your-first-paycheck.mdx`)
3. Include all required frontmatter fields
4. Write your post content in MDX format
5. The post will be automatically available at `/blog/post/[filename-without-extension]`

## WordPress Import

The `lib/documents/TopFinance_WordPress_Export_Mar_15_2025.xml` file contains exported WordPress posts that can be converted to MDX format. Future tools may be developed to automate this conversion process.
