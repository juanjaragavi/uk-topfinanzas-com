# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UK TopFinanzas is a Next.js 15+ financial comparison website targeting the UK market. The site specializes in credit card comparisons, personal loans, and financial guidance with comprehensive analytics tracking and multi-step user flows.

## Development Commands

```bash
# Development server (runs on port 3004 with Turbo)
npm run dev

# Production build
npm run build

# Production server (port 3004)
npm run start

# Linting
npm run lint

# Code formatting
npm run format

# Brevo API testing
npm run test:brevo
npm run test:brevo-direct
npm run test:brevo-api
```

## Git Workflow (CRITICAL)

**ALWAYS use the automated git workflow script for commits and deployments:**

```bash
bash ./scripts/git-workflow.sh
```

This script:

- Reads commit messages from `/lib/documents/commit-message.txt`
- Commits to dev branch first
- Optionally merges to main and backup branches
- Handles merge conflicts automatically
- **NEVER commit directly without using this script**

The project uses three branches:

- `dev` - Development branch (work here)
- `main` - Production-ready code
- `backup` - Automated backups

## Architecture

### Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Library**: Shadcn/UI + Radix UI primitives
- **Forms**: React Hook Form + Zod validation
- **Content**: MDX for blog posts
- **Analytics**: GTM, Google Ads, AdZep, TopAds
- **Data**: Google Sheets API integration
- **Email**: SendGrid, Nodemailer, Brevo

### Directory Structure

```
app/
├── (routes)/              # Route groups and pages
├── api/                   # API endpoints
│   ├── sheets/           # Google Sheets integration
│   ├── contact/          # Contact form
│   ├── subscribe/        # Newsletter subscription
│   └── brevo-contact/    # Brevo integration
├── blog/                 # Blog listing
├── personal-finance/     # Personal finance category
├── financial-solutions/  # Financial solutions category
├── credit-card-recommender-p{1,2,3}/  # Multi-step recommender
└── layout.tsx            # Root layout with analytics

components/
├── analytics/            # Analytics integration (GTM, AdZep, TopAds)
├── forms/                # Form components
├── layout/               # Layout components (header, footer, nav)
├── mdx/                  # Custom MDX components
├── providers/            # React context providers
├── steps/                # Multi-step form components
└── ui/                   # Shadcn/UI components

lib/
├── contexts/             # React contexts
├── data/                 # Data utilities
├── navigation/           # Navigation utilities
│   └── recommender-lock.ts  # Recommender state persistence
└── utils/                # Helper functions

content/                  # MDX blog content
scripts/                  # Automation scripts
middleware.ts             # Middleware for redirects, hreflang headers
```

### Key Architectural Patterns

#### 1. Analytics Integration

The site has sophisticated multi-platform analytics:

- **GTM (Google Tag Manager)**: Primary analytics container
- **Google Ads**: Conversion tracking
- **AdZep**: Ad network integration (controlled by `ENABLE_ADZEP` flag in layout.tsx)
- **TopAds**: Alternative ad network
- **SPA Handlers**: Components that handle analytics on client-side navigation
- **Development Tools**: Validation panels and test components in dev mode

All analytics components are in `components/analytics/` and are loaded in the root layout. Scripts are wrapped in `ClientOnly` components for proper hydration.

#### 2. Middleware System

`middleware.ts` handles:

- **Recommender Lock**: Prevents users from accessing old quiz paths (`/quiz`, `/quiz-2`) if they have an active recommender session
- **Hreflang Headers**: Adds Link headers for SEO with canonical and alternate language URLs
- Uses cookie + localStorage dual persistence for recommender state

#### 3. Multi-Step Forms

Credit card recommender flows use a multi-step pattern:

- `/credit-card-recommender-p1` → `/credit-card-recommender-p2` → `/credit-card-recommender-p3`
- State persisted via `recommender-lock.ts` system
- Forms use React Hook Form + Zod validation
- Step components in `components/steps/`

#### 4. Content Management

**Blog System**: Two main categories with separate listing pages:

- `/blog` - All posts
- `/personal-finance` - Personal finance posts
- `/financial-solutions` - Financial solutions posts

Each category listing page has an `allPosts` array that must be kept in sync with actual blog content. **When adding/updating/deleting blog posts, you MUST update the corresponding `allPosts` arrays in the listing pages.**

MDX content uses custom components from `components/mdx/` and is processed via `@next/mdx`.

#### 5. Environment Configuration

Multiple environment files in use:

- `.env` - Base configuration
- `.env.production` - Production overrides
- `.env.local` - Local overrides
- `.env.example` - Template for required variables

Required environment variables:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Google Sheets API
- `GOOGLE_PRIVATE_KEY` - Google Sheets API (escaped newlines: `\\n`)
- SendGrid, Brevo, Kit.com API keys for email services

Production environment files are stored in `/opt/app/` with strict permissions.

## UK Market Specifics

### Localization

- Language: UK English (`en-GB`)
- Currency: GBP (£)
- Date format: DD/MM/YYYY
- Timezone: GMT/BST

### Financial Compliance

- FCA (Financial Conduct Authority) regulatory requirements
- APR display in UK format
- Representative examples for financial products
- Regulatory disclaimers required on financial content
- GDPR compliance for data handling

### Content Guidelines

- Use UK-specific financial terminology
- Include proper regulatory warnings
- UK-specific contact details and business hours
- Target UK-specific keywords for SEO

## Code Standards

### TypeScript

- Strict mode enabled
- Use `@/` path alias for imports
- No `any` types without justification
- Proper React component typing with interfaces

### Component Patterns

```tsx
// Preferred function component style
export default function ComponentName({ prop }: ComponentProps) {
  return <div className={cn("base-classes", className)} />;
}

// Shadcn/UI forwarded ref pattern
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("base-styles", className)} ref={ref} {...props} />
  ),
);
Component.displayName = "Component";
```

### Styling

- Mobile-first Tailwind approach
- Use `cn()` utility from `@/lib/utils` for class merging
- Consistent spacing and color tokens from Tailwind config
- Local font loading (Poppins) to avoid external requests

### Import Order

```tsx
// 1. React imports
import { useState } from "react";

// 2. Next.js imports
import Link from "next/link";
import Image from "next/image";

// 3. Third-party imports
import { Button } from "@/components/ui/button";

// 4. Local imports
import { cn } from "@/lib/utils";
import { CustomComponent } from "./custom-component";
```

## Performance Optimization

### Image Handling

- Use Next.js `Image` component
- WebP/AVIF format prioritization
- Remote patterns configured for:
  - `media.topfinanzas.com`
  - `us.topfinanzas.com`
  - `storage.googleapis.com`
  - `cdn.prod.website-files.com`
- Minimum cache TTL: 1 year (31536000s)

### Caching Strategy

- Static assets: Long-term caching (1 year)
- Next.js image optimization: Immutable cache
- Critical CSS inlined in layout
- Preconnect to media domain
- Resource hints in `components/resource-hints.tsx`

### Build Optimization

Enabled in `next.config.mjs`:

- `webpackBuildWorker: true`
- `parallelServerBuildTraces: true`
- `parallelServerCompiles: true`
- `optimizeCss: true`
- Package import optimization for: `next/font`, `framer-motion`, `lucide-react`

## API Routes

All API routes follow Next.js App Router pattern at `app/api/*/route.ts`:

- `/api/sheets` - Google Sheets integration for form submissions
- `/api/contact` - Contact form endpoint
- `/api/subscribe` - Newsletter subscription (Kit.com)
- `/api/brevo-contact` - Brevo email service integration
- `/api/posts` - Blog post search/listing
- `/api/authors` - Author data
- `/api/webmanifest` - Dynamic manifest generation

Error handling and response formatting should be consistent across all API routes.

## Testing

Available test scripts for Brevo integration:

- `npm run test:brevo` - New contact test
- `npm run test:brevo-direct` - Direct API test
- `npm run test:brevo-api` - Integration test

## SEO & Metadata

### Page Metadata Pattern

```tsx
export const metadata: Metadata = {
  title: "UK-specific title",
  description: "FCA-compliant description",
  openGraph: {
    /* UK-specific OG tags */
  },
  twitter: {
    /* UK-specific Twitter cards */
  },
};
```

### Structured Data

Root layout includes Organization schema with:

- UK-specific contact details
- Company address
- Social media links

### Hreflang Implementation

Middleware adds Link headers for:

- Canonical URL
- `en-gb` and `en` alternates
- `x-default` fallback

## Common Gotcas

1. **Port Configuration**: Dev server runs on port 3004, not 3000
2. **Analytics Loading**: GTM loads before AdZep/TopAds in layout
3. **AdZep Control**: Currently disabled via `ENABLE_ADZEP` flag (line 69 in layout.tsx)
4. **Form Navigation**: Call `window.scrollTo(0, 0)` on step changes
5. **Git Workflow**: NEVER bypass the automated script
6. **Blog Sync**: Always update `allPosts` arrays when modifying blog content
7. **Environment**: Google private key requires escaped newlines (`\\n`)
8. **Middleware**: Static files bypass middleware via early return

## Deployment

The project uses standalone output mode configured in `next.config.mjs`. Production deployment managed via PM2:

```bash
pm2 start ecosystem.config.js --env production
```

Build settings:

- `output: "standalone"`
- `reactStrictMode: true`
- `typescript.ignoreBuildErrors: true` (for deployment speed)
- `eslint.ignoreDuringBuilds: true` (for deployment speed)

## Security Headers

Configured in `next.config.mjs`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- CSP for SVG images
- HTTPS enforcement in production

## Additional Documentation

Reference these files for specific scenarios:

- `GEMINI.md` - Comprehensive project rules and patterns
- `WARP.md` - Additional development guidelines
- `.github/copilot-instructions.md` - Detailed architecture and patterns
- `README.md` - Basic setup and deployment instructions
