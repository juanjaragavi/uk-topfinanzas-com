# Content Directory

This directory contains the source content files for the Top Finanzas UK website, primarily in MDX format.

## Structure

- `/blog`: Contains MDX files for individual blog posts. Each file includes frontmatter for metadata and Markdown/MDX for the main content. See `app/blog/README.md` for detailed instructions on creating and formatting blog posts.
- `/legal`: Contains MDX files for legal pages like the Privacy Policy, Terms and Conditions, and Cookie Policy.

## Adding Content

- **Blog Posts:** Add new `.mdx` files to the `/blog` directory following the guidelines in `app/blog/README.md`.
- **Legal Pages:** Add or modify `.mdx` files in the `/legal` directory. Ensure corresponding page components exist in the `/app` directory (e.g., `app/privacy-policy/page.tsx` for `content/legal/privacy-policy.mdx`).
