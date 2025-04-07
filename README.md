# Top Finanzas - Next.js Project

This is a Next.js project for Top Finanzas, a financial services website. It includes a blog, credit card comparison tools, and other financial services.

## Project Structure

The project follows a standard Next.js App Router structure with additional organization:

```markdown
/app                   - Next.js app router directory
  /blog                - Blog pages
    /category/[slug]   - Category pages (Note: Category definitions might be managed elsewhere)
    /post/[slug]       - Individual blog post pages
  /cookie-policy       - Cookie Policy page
  /credit-card-recommender-p1 - Card recommendation page
  /financial-solutions - Financial solutions pages (including product details)
  /privacy-policy      - Privacy Policy page
  /style-guide         - Style guide components
  /terms               - Terms and Conditions page
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
  /documents           - Document files (e.g., commit messages, 404 logs)
  /images              - Image configuration (e.g., logos)
  /navigation          - Navigation configuration (header, footer)
  /texts               - Static text content configuration (header, footer)
/public                - Static assets (e.g., robots.txt, sitemap.xml, favicon)
/scripts               - Shell scripts (e.g., deployment, git workflow)
```

## Content Structure

### Navigation

Site navigation is configured in:

- `/lib/navigation/headerNavigation.ts` - Main site navigation
- `/lib/navigation/footerNavigation.ts` - Footer links

### Images

- Most images are hosted externally (e.g., `https://media.topfinanzas.com/images/...`). Refer to existing components for typical paths (e.g., `uk/credit-cards/`, `ads/`).
- Blog post featured images are specified in the MDX frontmatter (`featuredImage`).
- Logo images are configured in `/lib/images/logos.ts`.
- The banner image on the homepage is set in `app/page.tsx`.

## Modifying Financial Product Information

Financial product details (like credit cards, loans) are primarily managed within their respective page components under `/app/financial-solutions/[product-slug]/page.tsx` and potentially requirement pages `/app/financial-solutions/[product-slug]-requirements/page.tsx`.

## Adding/Modifying Categories

Blog categories used for navigation and filtering are defined in configuration files like `/lib/navigation/headerNavigation.ts`, `/lib/navigation/footerNavigation.ts`, and potentially within page components like `app/page.tsx` for filtering logic. Ensure consistency when adding or modifying categories across these files.
