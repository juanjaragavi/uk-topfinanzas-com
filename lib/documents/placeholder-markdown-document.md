# Placeholder Markdown Document

## **Project Objective:**

Migrate relevant content from the US TopFinanzas blog (`us.topfinanzas.com`) to the new UK-specific site (`uk.topfinanzas.com`), implementing the defined content strategy and fixing broken internal links, starting with Credit Card product pages.

**Background:**

* The TopFinanzas blog provides personal finance advice, unbiased financial product recommendations, and expert articles.
* A UK-tailored version of the blog is being launched.
* Content migration from the US WordPress site is required.
* A TOFU/MOFU/BOFU (Top/Middle/Bottom of Funnel) content strategy will be employed moving forward.

**Key Resources:**

1. **Content Strategy Document:** @/lib/documents/marketing-funnel-framework-tofu-mofu-and-bofu-summary-and-analysis.md
    * Provides an overview of the TOFU, MOFU, and BOFU content framework.
2. **Content Export File:** @/lib/documents/TopFinance_WordPress_Export_Mar_15_2025.xml
    * Contains the full export of articles from the US WordPress blog.

**Tasks:**

1. **Review Documentation:** Familiarize yourself with the content strategy outlined in the `.md` file and the structure of the content within the `.xml` export file.
2. **Analyze BOFU Content:** Examine the existing financial product pages within the @/app/financial-solutions/ directory. These pages serve as our Bottom-of-Funnel (BOFU) content, intended for monetization.
3. **Identify Broken Links:** Within these BOFU product pages, identify any broken or dead links that are intended to point to informational blog posts or articles (TOFU content).
4. **Locate Missing TOFU Content:** Cross-reference the identified broken links against the content available in the `TopFinance_WordPress_Export_Mar_15_2025.xml` file. Locate the source articles corresponding to the broken links.
5. **Create Missing TOFU Articles:**
    * Extract the relevant content for the missing articles from the XML export.
    * Create these articles as new content entries (e.g., blog posts/pages) on the UK site, placing them in their appropriate categories as per the site structure and content strategy.
6. **Prioritize Credit Cards:** Begin this process by focusing specifically on the initial **9 Credit Card product pages** found within @/app/financial-solutions/.
7. **Implement Internal Linking:** Update the BOFU Credit Card product pages by adding or correcting links to point to the newly created TOFU articles. Ensure these links are functional and contextually relevant.
