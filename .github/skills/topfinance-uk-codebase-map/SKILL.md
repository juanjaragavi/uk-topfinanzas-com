---
name: topfinance-uk-codebase-map
description: "TopFinance UK repository operating map for safe implementation work. Use when modifying uk-topfinanzas-com architecture, routes, APIs, SEO, analytics, ads, content listings, env config, deployment scripts, or when coordinating parity with topnetworks-sync-orchestrator across TopNetworks properties."
---

# TopFinance UK Codebase Map

This skill is the implementation-oriented operating map for the TopFinance UK repository:
- Repo: /Users/macbookpro/GitHub/uk-topfinanzas-com
- Domain: https://uk.topfinanzas.com
- Market: United Kingdom (en-GB, GBP, FCA context)
- Runtime port: 3004

Use this skill to navigate, modify, and extend the system without rediscovering architecture, invariants, and operational workflows.

## Relationship to TopNetworks Orchestrator

This skill is repository-local. It is governed by the cross-repo orchestrator skill:
- /Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SKILL.md

Coordination contract:
1. Use this skill for UK-local implementation detail and safe editing.
2. Use the orchestrator skill for cross-repo parity work across US/UK/MX/BudgetBee.
3. Before propagating shared changes, classify scope using orchestrator taxonomy:
- shared architecture
- market-localized
- brand-localized
- repo-specific
4. Preserve UK adaptations when syncing:
- Canonical domain: uk.topfinanzas.com
- Locale: en-GB
- Currency: GBP
- FCA-compliant language and representative APR conventions
5. Do not commit/push/deploy during sync tasks unless explicitly requested.

Repository bridge files:
- docs/TOPNETWORKS_SYNC_WORKFLOW.md
- scripts/topnetworks-predeploy.mjs (wrapper around orchestrator deploy preflight for repoId topfinanzas-uk)

## Company and Portfolio Context (TopNetworks)

Source context comes from:
- TOPNETWORKS_COMPANY_PROFILE.md (UK-adapted company profile)
- /Users/macbookpro/GitHub/TopNetworks-Inc.md (parent company profile)

Key operational model to preserve:
- Performance publishing + traffic arbitrage economics (spread = revenue/session - cost/session)
- Multi-market portfolio (US, UK, MX, LatAm, brand variants)
- Stacked monetization: affiliate/CPA + ad-tech layers (AdZep, TopAds, System1 where applicable)
- Analytics and attribution continuity are business-critical

## System Boundaries and Purpose

TopFinance UK is a Next.js App Router financial comparison property for UK consumers with:
- Financial solutions pages (credit cards and loans)
- Personal finance editorial content
- Quiz/recommender flows
- Lead capture and subscription APIs
- SEO and structured data support
- GTM + ad stack integration

Out of scope for this repo skill:
- Non-UK brand assets/voice from sibling properties
- Cross-repo rollouts (handled by orchestrator)
- Production server operations beyond documented scripts

## High-Signal Architecture Map

### Application shell and rendering
- app/layout.tsx
- app/page.tsx + app/page-client.tsx
- middleware.ts

Observed implementation specifics:
- App Router with server metadata + client page components.
- GTM snippet is hardcoded in head/body (container GTM-MR76NXR3).
- Local Poppins font via next/font/local.
- Critical CSS is inlined from app/critical.css at runtime.
- Global providers include NavigationProvider and analytics helpers.
- AdZep feature flag currently hard-disabled in layout via ENABLE_ADZEP = false.

### Route families
- app/financial-solutions/** (product and requirements pages)
- app/personal-finance/**
- app/blog/**
- app/credit-card-recommender-p1, p2, p3
- app/quiz, app/quiz-2 (legacy/restricted)

### SEO and schema system
- lib/seo.ts
- lib/seo-route-registry.ts
- components/seo/json-ld.tsx
- app/sitemap.ts
- app/robots.ts

Observed specifics:
- Canonical base URL is https://uk.topfinanzas.com.
- Route metadata is generated from registry entries; unknown routes infer fallback metadata.
- Sitemap is built from getIndexableRoutes() and route categories.
- Robots disallow recommender/quiz/testing paths and allow major crawlers/AI crawlers.
- Middleware injects hreflang Link headers per request.

### Ads and analytics layers
- components/analytics/**
- lib/ads/**
- components/ads/**

Observed specifics:
- GTM and Google ad components load in layout.
- AdZep code path exists with SPA bridge and retry logic, but master enable switch is off in layout.
- Ad unit/container detection and excluded path logic are in lib/ads/config.ts and lib/ads/activate-adzep.ts.
- UTM persistence/injection flows are active in layout.

### API surface and integration points
- app/api/sheets/route.ts (Google Sheets write/upsert-like append with duplicate check)
- app/api/subscribe/route.ts (Brevo + ConvertKit dual write)
- app/api/contact/route.ts (Brevo contact + optional note)
- app/api/search/route.ts (Vertex AI Search)
- app/api/authors/route.ts (authors JSON)
- app/api/posts/route.ts (currently debug-oriented metadata existence scanner)
- app/api/webmanifest/route.ts (fallback manifest endpoint)

### Operational scripts
- scripts/git-workflow.sh
- scripts/deploy_update.sh
- scripts/sync-branches.sh
- scripts/topnetworks-predeploy.mjs
- scripts/test-brevo*.js

## Data and Content Flow Map

### Lead capture and attribution
1. Client forms capture personal + UTM context.
2. UTM normalizers persist attribution values (utm_* plus source/medium/campaign aliases).
3. APIs enrich payloads with static market-brand fields:
- Pais: Reino Unido
- Marca: Top Finanzas
4. Data sinks:
- Google Sheets (quiz/registration telemetry)
- Brevo (contact/subscription)
- ConvertKit (parallel subscription path)

### Content discovery and listing
Important implementation detail:
- Many listing pages are manually curated with hardcoded allPosts arrays in page-client files.
- This means adding/removing articles requires multi-file updates, not only creating route content.

Primary listing locations to verify after content edits:
- app/page-client.tsx
- app/blog/page-client.tsx
- app/personal-finance/page-client.tsx
- app/financial-solutions/page-client.tsx (and related category clients where present)
- components/mdx/blog-layout.tsx (recent articles/sidebar links)

### Financial solutions SEO content model
- Each product family typically has paired pages:
- benefits/product page
- requirements page
- SEO registry entries should include both routes for metadata and sitemap correctness.

## Environment and Runtime Configuration

Primary runtime config files:
- package.json
- next.config.mjs
- tsconfig.json
- tailwind.config.js

Relevant environment variables observed in code:
- GOOGLE_SERVICE_ACCOUNT_EMAIL (required for sheets endpoint)
- GOOGLE_PRIVATE_KEY (required; newline normalization handled)
- GOOGLE_SHEET_ID (required for sheets endpoint)
- BREVO_API_KEY (required for contact/subscribe)
- KIT_API_KEY (required for ConvertKit write path)
- KIT_API_URL (optional override for ConvertKit endpoint)
- VERTEX_AI_SEARCH_API_KEY (required for /api/search)
- NEXT_PUBLIC_ENABLE_LOGGING (optional logger override in production)

Additional env vars are referenced in project docs (for email and operational flows):
- SENDGRID_API_KEY
- SENDER_EMAIL
- RECIPIENT_EMAIL

## Build, Validation, and Deployment Workflow

Local development:
- pnpm dev (port 3004)
- pnpm build
- pnpm start (port 3004)
- pnpm lint
- pnpm format

Brevo integration tests:
- pnpm test:brevo
- pnpm test:brevo-direct
- pnpm test:brevo-api

Git/deploy process in this repo:
1. Commit message is expected in lib/documents/commit-message.txt.
2. scripts/git-workflow.sh automates add/commit/push on dev, then optional merge to main/backup.
3. scripts/deploy_update.sh is server-oriented and deploys from main using pnpm build + pm2 restart.

TopNetworks synchronized preflight:
- scripts/topnetworks-predeploy.mjs preflight --dry-run

## Non-Negotiable Guardrails

1. Keep UK localization consistent:
- en-GB copy and metadata
- GBP references
- FCA-aware regulatory language

2. Preserve GTM placement and container correctness in app/layout.tsx:
- hardcoded GTM script + noscript pattern
- dataLayer naming consistency

3. Do not break recommender lock routing behavior:
- cookie/localStorage lock contract in lib/navigation/recommender-lock.ts
- redirect behavior in middleware.ts for /quiz and /quiz-2 when lock exists

4. Maintain SEO integrity:
- update lib/seo-route-registry.ts when creating/removing meaningful pages
- verify sitemap/robots implications

5. Preserve listing parity for editorial changes:
- update all relevant allPosts arrays and sidebar recent links
- do not assume dynamic CMS indexing currently powers listings

6. Financial solutions layout standard is mandatory:
- follow .github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md
- preserve ad slots and required element order

7. Do not bypass orchestrator process for cross-repo propagation.

## Common Change Recipes

### Recipe: Add a new UK financial solution page pair
1. Create benefits and requirements route pages under app/financial-solutions/.
2. Follow required layout standard and ad slot placement.
3. Add/verify SEO registry entries in lib/seo-route-registry.ts for both routes.
4. Update category/listing allPosts arrays and any sidebar references.
5. Validate metadata, sitemap, and internal links.

### Recipe: Add a new personal finance article route
1. Add new route page under app/personal-finance/<slug>/.
2. Register/verify SEO metadata coverage.
3. Update all listing arrays (home, blog, personal finance).
4. Update sidebar recent article links if needed.
5. Validate robots/sitemap behavior and canonical domain.

### Recipe: Extend lead form payload fields
1. Update frontend form payload shape.
2. Update app/api/sheets/route.ts mapping and headers if needed.
3. Update app/api/subscribe/route.ts and app/api/contact/route.ts mapping.
4. Preserve UTM alias handling and brand static fields.
5. Test with pnpm test:brevo and manual form submission.

### Recipe: Modify ad/analytics behavior safely
1. Check app/layout.tsx global switches and script placement.
2. If touching AdZep behavior, verify lib/ads/config.ts and lib/ads/activate-adzep.ts assumptions.
3. Keep excluded paths and article-path logic intact unless explicitly changing policy.
4. Validate no regressions in UTM persistence/injection.

### Recipe: Cross-repo shared refactor (US/UK/MX/BudgetBee)
1. Pause and invoke topnetworks-sync-orchestrator skill.
2. Build a propagation matrix with localized adaptations.
3. Apply changes with UK constraints preserved.
4. Run orchestrator parity/validate commands before merge/deploy operations.

## Decision Matrix: Local vs Orchestrated Work

Use this repo skill only when:
- the change is UK-only
- implementation detail is specific to uk-topfinanzas-com
- no parity requirement exists across sibling repos

Use orchestrator when:
- shared components, SEO policies, analytics patterns, docs, or scripts should converge across properties
- parity audits are requested
- synchronized rollout is required

## Quick File Entry Points by Task

- App shell/global scripts: app/layout.tsx
- Route guard and hreflang headering: middleware.ts
- SEO route metadata: lib/seo.ts + lib/seo-route-registry.ts
- Sitemap/robots: app/sitemap.ts + app/robots.ts
- Lead ingestion: app/api/sheets/route.ts
- Subscriptions: app/api/subscribe/route.ts
- Contact pipeline: app/api/contact/route.ts
- Search endpoint: app/api/search/route.ts
- Brand constants: lib/constants.ts
- Logger strategy: lib/logger.ts
- AdZep runtime internals: components/analytics/adzep-spa-bridge.tsx + lib/ads/*
- Sync workflow handoff: docs/TOPNETWORKS_SYNC_WORKFLOW.md + scripts/topnetworks-predeploy.mjs

## Completion Checklist for Agents

Before finishing significant work, verify:
- Correct UK localization/compliance language
- No broken route-level metadata behavior
- Listing arrays updated where content changed
- API payload mappings consistent across sinks
- No accidental GTM/ad stack contract break
- Orchestrator handoff documented if the change has cross-repo impact

If the task potentially affects sibling properties, explicitly recommend invoking topnetworks-sync-orchestrator next.
