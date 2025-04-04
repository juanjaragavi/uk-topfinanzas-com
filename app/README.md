# App Directory

This directory contains the Next.js app router pages and routing structure for the Top Finance website. The app directory follows the Next.js app router conventions, where each folder represents a route segment.

## Directory Structure

- `/blog` - Blog-related pages
  - `/category/[slug]` - Dynamic category pages
  - `/post/[slug]` - Dynamic blog post pages
- `/privacy-policy` - Privacy policy page
- `/credit-card-recommender-p1` - Card recommendation page
- `/financial-solutions` - Financial solutions content
  - Various credit card guides and information pages
- `/style-guide` - Style guide and reference components
- `/terms` - Terms and conditions page
- `globals.css` - Global CSS styles
- `layout.tsx` - Root layout component
- `page.tsx` - Homepage

## Cleanup Updates (March 30, 2025)

The following directories have been renamed as part of the UK localization project:

- `/politica-de-privacidad` → `/privacy-policy` - Privacy policy page
- `/recomendador-de-tarjetas-de-credito-p1-next` → `/credit-card-recommender-p1` - Card recommendation page
- `/soluciones-financieras` → `/financial-solutions` - Financial solutions content
- `/terminos` → `/terms` - Terms and conditions page

Additionally, the "-next" suffix has been removed from all page directory names to maintain a cleaner URL structure.

## Page Types

### Static Pages

Static pages like the homepage (`page.tsx`) contain the content and components for that specific route. These files export a React component that renders the page content.

### Dynamic Pages

Dynamic pages use square brackets in their folder names, like `/blog/post/[slug]/page.tsx`. These pages receive parameters from the URL path and render content accordingly.

#### Blog Post Pages (`/blog/post/[slug]/page.tsx`)

This page renders individual blog posts. It:

1. Gets the slug from the URL parameters
2. Finds the corresponding MDX file in `/content/blog`
3. Compiles the MDX content
4. Renders the blog post with metadata

#### Category Pages (`/blog/category/[slug]/page.tsx`)

This page renders blog category pages. It:

1. Gets the category slug from the URL parameters
2. Finds posts matching that category
3. Renders a list of posts in that category

## Modifying Pages

When modifying page files:

1. **Preserve routing structure**: Don't change folder names or move files unless you intend to change the URL structure
2. **Maintain metadata**: Ensure `generateMetadata` functions return appropriate SEO metadata
3. **Component consistency**: Use the same layout and UI components as the rest of the site

### Example: Adding Content to the Homepage

To modify the homepage content, edit `page.tsx`:

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* Your modified content here */}
      <section className="hero">
        <h1>New Headline</h1>
        <p>New description text.</p>
      </section>
    </main>
  );
}
```

### Example: Adding a New Static Page

To add a new static page:

1. Create a new folder in the app directory, e.g., `/app/about`
2. Add a `page.tsx` file inside that folder:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>About page content...</p>
    </main>
  );
}
```

## WordPress Import Process

The WordPress export file (`lib/documents/TopFinance_WordPress_Export_Mar_15_2025.xml`) contains blog posts that need to be converted to MDX format:

1. Parse the WordPress XML export
2. Extract post content, metadata, and images
3. Convert HTML content to MDX format
4. Generate frontmatter with required metadata
5. Save each post as an MDX file in `/content/blog`

This process will be implemented in a future iteration through API endpoints or direct file manipulation tools.
