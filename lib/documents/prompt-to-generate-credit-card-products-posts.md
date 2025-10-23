<!-- markdownlint-disable MD033 MD041 MD036 -->

# Financial Product Page Generation Request

Generate a financial product page pair (benefits and requirements), following these rules:

**IMPORTANT**: Before proceeding, read and apply all instructions from the System Prompt file located at `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md` in the workspace. Follow all guidelines, structures, and compliance rules defined in that file.

<ProductPageRequest>

## Product Classification

- **Blog Post Category:** Financial Solutions
- **Product Category:** Credit Cards (or Personal Loans)
- **Product Name:** Bip Credit Card
- **Provider:** Bip
- **Official Product URL:** <https://bip.credit/>
- **Main Keywords:** Credit Cards, Bip Credit Card
- **Page Title:** Discover the Benefits of Bip Credit Card
- **Content Focus:** Product features, benefits, eligibility, application process
- **SEO Intent Type:** Commercial/Transactional
- **Funnel Stage:** MOFU/BOFU (Consideration/Decision)
- **Market:** United Kingdom
- **Language:** English (United Kingdom)

## Brand and Visual Assets

- **Brand Color:** #8050f2 (hex color code for primary brand buttons/accents)
- **Hero Image URL:** {Full URL to product hero image from CSV or CDN}
- **Requirements Image URL:** {Full URL to requirements page image from CSV or CDN}

## Data Sources

**IMPORTANT**: Extract all product information from the official product URL first, then supplement with CSV data.

### Primary Data Source

**Official Product Website**

- **URL**: <https://bip.credit/>
- **Access method**: Use `fetch_webpage` tool
- **Priority**: Highest - always prioritize for current rates, fees, terms
- **Extract**:
  - Product features and benefits
  - Representative APR and interest rates
  - Annual fees, application fees, and other charges
  - Eligibility criteria (age, residency, income requirements, credit score)
  - Welcome bonuses or introductory offers
  - Reward structures and earning rates
  - Special terms, conditions, or promotional offers
  - FCA-required risk warnings and representative examples

### Secondary Data Source

**CSV Topic Outline Database**

- **Location**: `lib/documents/topfinanzas-us-topic-outline.csv`
- **Access method**: Use `fetch_txt` tool
- **Purpose**: Supplement official data, provide SEO metadata, brand colors, image URLs
- **Extract**:
  - Product category and provider
  - Keywords and page titles
  - Brand color hex codes
  - Hero and requirements image URLs
  - Content focus and suggested angles
  - Suggested internal links

### Internal Linking Resource

**UK Site Sitemap**

- **Location**: <https://uk.topfinanzas.com/sitemap.xml>
- **Access method**: Use `fetch_txt` tool
- **Purpose**: Identify existing articles and pages for internal linking opportunities
- **Usage**: Add 2-3 relevant internal links per page using Next.js Link component

</ProductPageRequest>

<Instructions>

1. **Read System Prompt**: First, locate and read the complete system prompt at `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md` to understand all requirements, structures, and compliance rules.

2. **Browse the Official Product URL**: Navigate to <https://bip.credit/> using `fetch_webpage` and extract all relevant information:
   - Product features and benefits (minimum 4 key features)
   - APR rates and interest rate information
   - Annual fees, application fees, and other charges
   - Eligibility criteria (age, residency, income requirements, credit score)
   - Welcome bonuses or introductory offers
   - Reward structures (e.g., Bip Credit Card earning rates)
   - Any special terms, conditions, or promotional offers
   - FCA-required representative APR examples and risk warnings

3. **Supplement with CSV Data**: Use `fetch_txt` to access the CSV at `lib/documents/topfinanzas-us-topic-outline.csv`. Cross-reference the extracted information with the corresponding product row to ensure:
   - Brand color hex code is available
   - Hero and requirements image URLs are provided
   - SEO metadata (keywords, page title) is complete
   - Content focus and suggested angles are noted

4. **Retrieve UK Sitemap**: Use `fetch_txt` to access <https://uk.topfinanzas.com/sitemap.xml> and identify:
   - Related credit card product pages
   - Relevant Personal Finance articles (e.g., credit card guides, rewards strategies)
   - Financial Solutions category pages
   - Plan 2-3 internal links per page

5. **Data Synthesis and Validation**:
   - Compare official website data with CSV data
   - Prioritize official website for current rates, fees, and terms
   - Ensure all critical information is accurate and FCA-compliant
   - Flag any contradictions or missing information

6. **Generate Content**: Create TWO complete Next.js page components (.tsx files) with:
   - Production-ready TypeScript code
   - British English throughout
   - FCA-compliant representative APR examples and risk warnings
   - SEO metadata (title, description, keywords)
   - Brand-colored CTAs using provided hex code
   - Hero images from CSV or CDN
   - Ad placeholders (`uk_topfinanzas_3`, `uk_topfinanzas_4`)
   - Internal links using Next.js `<Link>` component
   - Cross-links between benefits and requirements pages
   - `AIContentDisclaimer` component at the end of each page

7. **Directory Placement**: Create files at:
   - `/app/financial-solutions/bip-credit-card/page.tsx` (benefits page)
   - `/app/financial-solutions/bip-credit-card-requirements/page.tsx` (requirements page)

8. **Content Length**: Follow guidelines based on product type:
   - Credit Card Benefits Page: 800-1,200 words
   - Credit Card Requirements Page: 600-900 words

</Instructions>

<OutputRequired>

TWO complete Next.js page components:

1. **Main Product Benefits Page**
   - **File**: `/app/financial-solutions/bip-credit-card/page.tsx`
   - **Focus**: Features, benefits, rewards, value propositions
   - **Sections**: Introduction, key features, detailed benefits, CTAs
   - **Links**: Requirements page, related products, relevant guides

2. **Requirements Page**
   - **File**: `/app/financial-solutions/bip-credit-card-requirements/page.tsx`
   - **Focus**: Eligibility, application process, costs, documentation
   - **Sections**: Qualification criteria, required docs, costs/fees, application steps, FAQs
   - **Links**: Benefits page, related products, personal finance guides

Both files must:

- Use `data-category="credit-cards"` attribute
- Include complete `generateMetadata()` function
- Apply brand color (#8050f2) to buttons and accents
- Contain FCA-compliant disclaimers and representative APR examples
- Follow existing template structure and styling patterns
- Be production-ready with no placeholders or TODOs

</OutputRequired>

<TemplateReferences>

Review these existing pages for structure and styling patterns:

- `/app/financial-solutions/curve-credit-card/page.tsx` (if it exists)
- `/app/financial-solutions/hsbc-personal-loan/page.tsx`
- Any other credit card product pages in `/app/financial-solutions/`

</TemplateReferences>

<ExampleURLsForReference>

Additional UK financial product URLs for pattern reference:

- HSBC Rewards Credit Card: <https://www.hsbc.co.uk/credit-cards/products/rewards/>
- NatWest Credit Card: <https://www.natwest.com/credit-cards.html>
- Santander Personal Loan: <https://www.santander.co.uk/personal/loans/personal-loan>

</ExampleURLsForReference>
