# Blog Directory Guide

This directory contains the Next.js pages for the blog section of the Top Finanzas website. This README provides guidance for Assistants on how to create and manage blog posts.

## Directory Structure

```markdown
/app/blog/
├── category/         # Category pages
│   └── [slug]/       # Dynamic category routes
├── post/             # Blog post pages
│   └── [slug]/       # Dynamic post routes
├── page.tsx          # Main blog landing page
└── not-found.tsx     # 404 page for blog section
```

## Creating New Blog Posts

All blog posts are stored as MDX files in the `/content/blog/` directory. When creating a new blog post, use the existing `your-first-paycheck.mdx` file as a template.

### Step 1: Create a New MDX File

1. Create a new `.mdx` file in the `/content/blog/` directory
2. Name the file using kebab-case that matches the URL slug you want (e.g., `investing-basics.mdx` will be accessible at `/blog/post/investing-basics`)

### Step 2: Add Frontmatter Metadata

Each blog post requires frontmatter metadata at the top of the file:

```mdx
---
title: "Your Blog Post Title"
date: "Month Day, Year"
author: "Author Name"
authorImage: "https://media.topfinanzas.com/images/favicon.png"
readingTime: "X minute read"
categories:
  - name: "Category Name"
    slug: "category-slug"
# Example: featuredImage: "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.jpg"
featuredImage: "URL_TO_YOUR_FEATURED_IMAGE"
excerpt: "A brief summary of your post that will appear in previews and search results."
---
```

#### Frontmatter Fields Explained

- **title**: The title of your blog post
- **date**: Publication date in "Month Day, Year" format
- **author**: Author's name
- **authorImage**: URL to the author's profile image
- **readingTime**: Estimated reading time (e.g., "5 minute read")
- **categories**: Array of category objects, each with:
  - **name**: Display name of the category
  - **slug**: URL slug for that category (must match existing categories)
- **featuredImage**: URL to the featured image for the post
- **excerpt**: A short summary (1-2 sentences) that describes the post

### Step 3: Write the Blog Content

After the frontmatter, write your blog post content using Markdown and MDX:

```mdx
# Main Heading (H1)

Introductory paragraph that hooks the reader and explains what the article will cover.

## Section Heading (H2)

Content paragraphs with **bold text**, *italic text*, or [links](https://example.com).

### Subsection Heading (H3)

- Bullet points
- Another point

1. Numbered list
2. Second item

> Blockquote for important information or quotes

![Image alt text](https://media.topfinanzas.com/images/generated/TIMESTAMP/sample_1.jpg)
```

## MDX Rendering System

The blog posts are rendered using the Next.js MDX rendering system. Here's how it works:

1. The `app/blog/post/[slug]/page.tsx` file loads the MDX content based on the URL slug
2. It uses `compileMDX` from `next-mdx-remote/rsc` to compile the MDX into React components
3. The compiled content is passed to the `<BlogPost>` component (`components/mdx/blog-post.tsx`)
4. The `BlogPost` component wraps the content with the `BlogLayout` component
5. The MDX components defined in `mdx-components.tsx` at the root level determine how markdown elements are rendered

### Custom Components in MDX

The `mdx-components.tsx` file defines custom React components for markdown elements. When you use standard markdown syntax, it gets transformed into these custom components:

- Headings (`#`, `##`, etc.) → Custom heading components with proper styling
- Lists → Custom list components with bullet styling
- Images → Next.js `<Image>` component with optimization and styling
- Links → Next.js `<Link>` component
- Code blocks → Syntax highlighted code blocks
- Tables → Responsive table components

You can also use React components directly in your MDX:

```mdx
<Button>Click me</Button>

<div className="custom-class">
  Custom content
</div>
```

## Best Practices for Blog Posts

1. **Use a clear hierarchy of headings**:
   - Start with a single H1 (`#`) that matches or closely relates to the title
   - Use H2 (`##`) for main sections
   - Use H3 (`###`) for subsections

2. **Images**:
   - Always include a featured image in the frontmatter.
   - Use additional images throughout the post where relevant.
   - Most images are hosted externally (e.g., `https://media.topfinanzas.com/images/...`). Refer to existing components/posts for typical paths (e.g., `uk/credit-cards/`, `ads/`).
   - Always include descriptive alt text for accessibility.

3. **Content Structure**:
   - Start with an introduction that explains what the reader will learn
   - Organize content into logical sections with clear headings
   - End with a conclusion that summarizes the key points
   - Aim for 1000-2000 words for most posts

4. **Categories**:
   - Only use existing category slugs defined in the navigation/site configuration (e.g., `personal-finance`, `financial-solutions`, `mortgages`, `credit-cards`, `investing`, `budgeting`).
   - Ensure the `name` field matches the display name used elsewhere.
   - If a new category is needed, it must be added consistently across relevant configuration files (e.g., `lib/navigation/headerNavigation.ts`, `lib/navigation/footerNavigation.ts`) and potentially filtering logic in page components.

5. **SEO Optimization**:
   - Include relevant keywords in the title, headings, and content
   - Write a compelling excerpt that includes key terms
   - Use descriptive, keyword-rich image alt text

## Publishing Process

Blog posts will automatically appear on the site once they're added to the `/content/blog/` directory and pushed to the repository. The page for the post will be available at `/blog/post/[filename-without-extension]`.

The post will also appear in:

- The main blog listing page (`/blog`)
- Any category pages for categories it belongs to
- Popular articles sections if it gets enough views
