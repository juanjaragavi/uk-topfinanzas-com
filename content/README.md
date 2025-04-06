# Content Directory

This directory contains the source content files for the TopFinance UK website, primarily in MDX format.

## Structure

- `/blog`: Contains MDX files for individual blog posts. Each file includes frontmatter for metadata and Markdown/MDX for the main content. See `app/blog/README.md` for detailed instructions on creating and formatting blog posts with UK-specific guidelines.
- `/legal`: Contains MDX files for legal pages like the Privacy Policy, Terms and Conditions, and Cookie Policy. These documents comply with UK regulations including GDPR and financial services requirements.

## UK Content Guidelines

All content in this directory should follow these guidelines for UK localization:

1. **UK English Language**: Use British English spelling, grammar, and terminology (e.g., "organisation" not "organization").

2. **UK Financial Terminology**:
   - Use "current account" instead of "checking account"
   - Use "ISA" (Individual Savings Account) instead of "401(k)" or "IRA"
   - Reference UK regulatory bodies like the FCA (Financial Conduct Authority)

3. **UK Currency Format**:
   - Use pound sterling symbol (£) before numbers without space: "£100"
   - Use "p" for pence: "50p" rather than "£0.50" for small amounts
   - Use commas as thousand separators: "£1,000,000"

4. **UK Date Format**:
   - Use day-month-year format: "15 April 2025"
   - For shortened dates, use "15/04/2025"

5. **UK Contact Information**:
   - UK phone number format: +44 20 1234 5678
   - UK postal codes format: AB12 3CD

## Adding Content

- **Blog Posts:** Add new `.mdx` files to the `/blog` directory following the UK localization guidelines in `app/blog/README.md`.

- **Legal Pages:** Add or modify `.mdx` files in the `/legal` directory. Ensure corresponding page components exist in the `/app` directory (e.g., `app/privacy-policy/page.tsx` for `content/legal/privacy-policy.mdx`). Legal content must comply with UK laws and regulations.

## Image Guidelines

For images referenced in content:

- Use UK-relevant imagery where possible
- Store images in paths that include the "uk" prefix (e.g., `https://media.topfinanzas.com/images/uk/credit-cards/...`)
- Include descriptive alt text for accessibility
- Ensure all displayed financial products are available in the UK market
