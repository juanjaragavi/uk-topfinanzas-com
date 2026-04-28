# TopFinance UK — SEO, LLM Indexing & Crawler Optimization Report

**Project:** `uk-topfinanzas-com` · UK financial education and comparison platform
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS
**Scope:** Metadata, structured data, semantic markup, sitemap, robots, AI crawler manifest
**Baseline:** Optimized TopFinanzas US SEO architecture
**Prepared:** 28/04/2026

## Executive Summary

TopFinance UK has been refactored to align with the optimized TopFinanzas SEO and LLM-indexing architecture while preserving the existing App Router structure, analytics, UTM handling, AdZep/TopAds behaviour, and UK market localisation.
The implementation centralises route metadata and structured data generation, adds server-rendered JSON-LD, improves crawler controls, excludes quiz/recommender routes from the sitemap, improves server-visible archive markup, and adds an `llms.txt` manifest for AI systems.

## Baseline Gaps Identified

### Root Metadata and Schema

- `app/layout.tsx` used a flat global title instead of a reusable title template.
- A hardcoded viewport meta tag duplicated the exported `viewport` object.
- `maximumScale: 1` restricted mobile zoom.
- Organization JSON-LD contained placeholder/non-UK address data.
- WebSite schema with `SearchAction` was missing.

### Content Metadata

- Content routes had inconsistent route-level metadata.
- Canonical URLs, OpenGraph metadata, Twitter metadata, and route-specific robots directives were not standardised across content pages.
- Static archive and core routes needed server wrappers to expose metadata from server components without removing existing client interactivity.

### Structured Data

- Detail pages lacked route-specific BreadcrumbList plus Article or FinancialProduct schema.
- Product pages needed UK-localised schema details, including GBP currency and credit-disclosure language.

### Crawler Efficiency

- No programmatic `app/robots.ts` existed.
- `app/sitemap.ts` included non-indexable quiz/recommender/invite routes.
- No public `llms.txt` manifest existed for AI crawler discovery.

### Semantic Markup

- Most detail routes already used `<article>`.
- Archive surfaces needed server-visible primary content wrappers so crawlers and LLMs could parse page intent without waiting for client hydration.

## Implemented Changes

### Shared UK SEO Layer

Added `lib/seo.ts` and `lib/seo-route-registry.ts` to centralise:

- TopFinance UK constants, canonical URL generation, and route metadata.
- UK locale settings: `en-GB`, `en_GB`, GBP schema currency, and UK-focused disclosure language.
- Organization, WebSite, WebPage, CollectionPage, BreadcrumbList, BlogPosting, CreditCard, LoanOrCredit, and FinancialProduct schema helpers.
- Registry-backed sitemap filtering through `getIndexableRoutes()`.
  The registry contains 141 indexable route entries: 11 static/core routes, 100 financial-solution detail routes, and 30 personal-finance detail routes.

### Server-Rendered JSON-LD

Added `components/seo/json-ld.tsx`, which renders escaped `application/ld+json` directly in server output. This avoids depending on client hydration for structured data discovery.

### Root Layout Refactor

Updated `app/layout.tsx` to:

- Use shared `SEO_SITE` constants.
- Add a title template and consistent default title.
- Set root canonical, language alternates, authors, publisher, robots, OpenGraph, and Twitter metadata.
- Remove the duplicate hardcoded viewport tag.
- Remove `maximumScale: 1`.
- Replace placeholder Organization schema with UK-relevant Organization and WebSite JSON-LD.
- Preserve existing GTM, Google Ads, GAM, TopAds, UTM, analytics validation, navigation provider, local font, critical CSS, and logging behaviour.

### Route Metadata and Structured Data

Updated all content detail routes under:

- `app/financial-solutions/*/page.tsx`
- `app/personal-finance/*/page.tsx`
  Each detail route now uses shared metadata from `createRouteMetadata(pathname)` and has a colocated route layout that injects BreadcrumbList plus either FinancialProduct/CreditCard/LoanOrCredit or BlogPosting JSON-LD.
  Client-heavy core routes were split into server metadata wrappers while preserving their interactive implementations in colocated client components:
- `app/page.tsx` → `app/page-client.tsx`
- `app/blog/page.tsx` → `app/blog/page-client.tsx`
- `app/financial-solutions/page.tsx` → `app/financial-solutions/page-client.tsx`
- `app/personal-finance/page.tsx` → `app/personal-finance/page-client.tsx`
- `app/credit-cards/page.tsx` → `app/credit-cards/page-client.tsx`
- `app/personal-loans/page.tsx` → `app/personal-loans/page-client.tsx`
- `app/about-us/page.tsx` → `app/about-us/page-client.tsx`
- `app/contact-us/page.tsx` → `app/contact-us/page-client.tsx`
  Legal/policy pages now use shared metadata and route-level WebPage JSON-LD:
- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`
- `app/cookie-policy/page.tsx`

### Semantic Markup

Archive pages now render primary content inside server-visible `<article>` wrappers:

- `app/financial-solutions/page-client.tsx`
- `app/personal-finance/page-client.tsx`
- `app/credit-cards/page-client.tsx`
- `app/personal-loans/page-client.tsx`
  The financial archive, credit card archive, and personal loan archive no longer server-render only a loading skeleton, improving crawler and LLM access to page content.

### Robots, Sitemap, and Noindex Headers

Added `app/robots.ts` to:

- Allow normal indexing of public content.
- Explicitly allow major search and AI crawler user agents including GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, YouBot, cohere-ai, CCBot, Googlebot, Google-Extended, and Bingbot.
- Disallow non-indexable routes such as `/api/`, `/admin/`, quiz pages, recommender pages, invite routes, UTM test routes, and short redirect surfaces.
  Updated `app/sitemap.ts` to use the shared registry and exclude non-indexable quiz/recommender/invite routes.
  Updated `next.config.mjs` with `X-Robots-Tag: noindex, nofollow` headers for:
- `/credit-card-recommender-p1`
- `/credit-card-recommender-p2`
- `/credit-card-recommender-p3`
- `/quiz`
- `/quiz-2`
- `/quiz-results`
- `/invit-credit-card-rec-uk`
- `/utm-test`

### AI Content Manifest

Added `public/llms.txt` with:

- Core page references.
- Featured UK financial-solution pages.
- Featured personal-finance guides.
- Legal/policy pages.
- UK financial disclosure and AI usage guidance.

## Validation Log

### Build

Command:
`npm --prefix /Users/macbookpro/GitHub/uk-topfinanzas-com run build`
Result:

- Passed.
- Compiled successfully.
- Generated 161/161 static pages.

### Lint

Command:
`npm --prefix /Users/macbookpro/GitHub/uk-topfinanzas-com run lint`
Result:

- Passed.
- No ESLint warnings or errors.

### Generated HTML Inspection

Representative financial product page:
`/financial-solutions/barclaycard-avios-plus`
Generated output confirmed:

- `application/ld+json`: present
- `BreadcrumbList`: present
- `CreditCard`: present
- canonical tag: present
- `og:title`: present
- `<article>`: present
  Representative personal finance page:
  `/personal-finance/best-personal-loans`
  Generated output confirmed:
- `application/ld+json`: present
- `BreadcrumbList`: present
- `BlogPosting`: present
- canonical tag: present
- `og:title`: present
- `<article>`: present
  Representative archive pages:
- `/financial-solutions`
- `/personal-finance`
- `/credit-cards`
- `/personal-loans`
  Generated output confirmed:
- `application/ld+json`: present
- `BreadcrumbList`: present
- canonical tag: present
- `og:title`: present
- `<article>`: present

### Robots and Sitemap Inspection

Generated `robots.txt` confirmed:

- GPTBot, ClaudeBot, Google-Extended, and other AI/search crawler rules are present.
- `/quiz` and `/credit-card-recommender-p1` are disallowed.
- Sitemap reference points to `https://uk.topfinanzas.com/sitemap.xml`.
  Generated `sitemap.xml` confirmed:
- `https://uk.topfinanzas.com/financial-solutions/barclaycard-avios-plus` is present.
- `https://uk.topfinanzas.com/personal-finance/best-personal-loans` is present.
- `https://uk.topfinanzas.com/credit-card-recommender-p1` is excluded.
- `https://uk.topfinanzas.com/quiz` is excluded.
- Sitemap contains 141 URLs.

### Lighthouse and Rich Results

Lighthouse CLI is not installed globally or locally in this repository, so numeric Lighthouse scores were not captured during local validation.
Google Rich Results Test cannot be executed fully against local static output from this environment. Post-deployment validation should be run against production URLs for:

- BreadcrumbList
- BlogPosting
- CreditCard / LoanOrCredit / FinancialProduct
- Organization
- WebSite

## Post-Deployment Checklist

- Submit the updated sitemap in Google Search Console and Bing Webmaster Tools.
- Validate representative production URLs in Google Rich Results Test and Schema Markup Validator.
- Run PageSpeed Insights or Lighthouse against deployed production pages to capture LCP, CLS, and INP diagnostics.
- Monitor Search Console coverage for excluded quiz/recommender/invite routes.
- Monitor AI referral traffic and citations from Perplexity, ChatGPT browsing, Claude, Google AI Overviews, and Bing/Copilot surfaces.
