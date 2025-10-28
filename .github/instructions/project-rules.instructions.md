---
applyTo: "**"
---

# Next.js Project Configuration Rules for TopFinance UK

## Project Overview

This Next.js project (uk-topfinanzas-com) is a UK-focused financial comparison website built with modern web technologies. The project specializes in credit cards, personal loans, and financial guidance tailored for the UK market.

## System Architecture

### Core Technologies

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Shadcn/UI with Radix UI primitives
- **State Management**: React hooks and context
- **MDX Support**: Next.js MDX for blog content
- **Analytics**: Google Tag Manager + AdZep integration

### Key Dependencies

- **UI/UX**: Radix UI, Framer Motion, Lucide React
- **Forms**: React Hook Form with Zod validation
- **Email**: SendGrid and Nodemailer
- **Data**: Google Sheets API integration
- **Performance**: Sharp for image optimization

## File Structure Guidelines

### Directory Organization

```markdown
├── app/ # Next.js App Router pages
│ ├── (routes)/ # Route groups
│ ├── api/ # API routes
│ ├── globals.css # Global styles
│ └── layout.tsx # Root layout
├── components/ # React components
│ ├── analytics/ # Analytics components
│ ├── forms/ # Form components
│ ├── layout/ # Layout components
│ ├── mdx/ # MDX components
│ ├── providers/ # Context providers
│ ├── steps/ # Multi-step components
│ └── ui/ # Shadcn/UI components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions
│ ├── contexts/ # React contexts
│ ├── data/ # Data utilities
│ ├── navigation/ # Navigation utilities
│ └── utils/ # Helper functions
├── public/ # Static assets
└── content/ # MDX content
```

## Development Rules

### 1. TypeScript Configuration

- **Strict Mode**: Always enabled
- **Path Aliases**: Use `@/` for root imports
- **Type Safety**: No `any` types without explicit reasoning
- **Component Types**: Use proper React component typing

### 2. Component Development

- **Functional Components**: Use function declarations
- **Hooks**: Follow React hooks rules
- **Props**: Use TypeScript interfaces
- **Styling**: Use Tailwind classes with `cn()` utility
- **Accessibility**: Include proper ARIA attributes

### 3. UI Component Standards

- **Shadcn/UI**: Use existing components when possible
- **Consistency**: Maintain design system patterns
- **Responsive**: Mobile-first approach
- **Performance**: Optimize for Core Web Vitals

### 4. API Development

- **Route Handlers**: Use App Router API routes
- **Validation**: Implement Zod schemas
- **Error Handling**: Consistent error responses
- **CORS**: Proper configuration for external requests

## Code Quality Standards

### 1. ESLint Configuration

- **Next.js Rules**: Follow Next.js ESLint config
- **TypeScript**: Strict TypeScript rules
- **React**: React-specific linting rules
- **Accessibility**: a11y linting enabled

### 2. Code Formatting

- **Prettier**: Consistent code formatting
- **Line Length**: 80 characters max
- **Semicolons**: Always use semicolons
- **Quotes**: Double quotes for strings

### 3. Import Organization

```typescript
// 1. React imports
import React from "react";
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

### 1. Image Optimization

- **Next.js Image**: Use `next/image` component
- **WebP Format**: Prioritize WebP images
- **Responsive Images**: Use responsive sizing
- **Lazy Loading**: Enable by default

### 2. Code Splitting

- **Dynamic Imports**: Use for heavy components
- **Route-Based**: Automatic with App Router
- **Component-Based**: Manual splitting when needed

### 3. Caching Strategy

- **Static Assets**: Long-term caching
- **API Routes**: Appropriate cache headers
- **Dynamic Content**: Strategic ISR usage

## UK Market Specifics

### 1. Localization

- **Language**: UK English (en-GB)
- **Currency**: GBP (£) formatting
- **Date Format**: DD/MM/YYYY
- **Address Format**: UK postcode system

### 2. Financial Compliance

- **APR Display**: UK regulatory format
- **Representative Examples**: FCA requirements
- **Terms & Conditions**: UK legal compliance
- **Data Protection**: GDPR compliance

### 3. Content Guidelines

- **Financial Terms**: UK-specific terminology
- **Regulatory Info**: FCA disclaimers
- **Contact Details**: UK phone numbers
- **Business Hours**: UK timezone (GMT/BST)

## Analytics Integration

### 1. Google Tag Manager

- **Container ID**: UK-specific GTM container
- **Event Tracking**: UK user interactions
- **Conversion Tracking**: UK-specific goals

### 2. AdZep Integration

- **Script Loading**: Optimized loading strategy
- **Function Calls**: Automatic activation
- **Performance**: Minimal impact
- **Debugging**: Development tools available

## Security Guidelines

### 1. Authentication

- **API Keys**: Environment variables only
- **Session Management**: Secure cookie handling
- **CSRF Protection**: Built-in Next.js protection

### 2. Data Protection

- **Input Validation**: Zod schema validation
- **Sanitization**: XSS prevention
- **HTTPS**: Enforce in production
- **Headers**: Security headers configured

## Testing Strategy

### 1. Unit Testing

- **Components**: Test component behavior
- **Hooks**: Test custom hooks
- **Utilities**: Test utility functions
- **API Routes**: Test API endpoints

### 2. Integration Testing

- **Form Flows**: Test complete form journeys
- **Navigation**: Test routing behavior
- **Analytics**: Test tracking implementation

## Deployment Guidelines

### 1. Environment Configuration

- **Development**: Local development setup
- **Staging**: Pre-production testing
- **Production**: Live environment

### 2. Build Optimization

- **Bundle Analysis**: Monitor bundle size
- **Performance**: Core Web Vitals tracking
- **Error Monitoring**: Production error tracking

### 3. CDN Configuration

- **Static Assets**: CDN optimization
- **Image Delivery**: Optimized image serving
- **Cache Strategy**: Appropriate cache headers

## Accessibility Standards

### 1. WCAG Compliance

- **Level AA**: Target compliance level
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels
- **Color Contrast**: Sufficient contrast ratios

### 2. Component Accessibility

- **Form Labels**: Proper label associations
- **Button States**: Clear interaction states
- **Focus Management**: Logical tab order
- **Error Messages**: Accessible error handling

## Content Management

### 1. MDX Content

- **Blog Posts**: Markdown with React components
- **Static Pages**: MDX for content pages
- **Component Usage**: Embedded React components
- **SEO**: Proper metadata for all content

### 2. Blog Post Integration

When creating new blog articles, they must be integrated across multiple locations:

- **Blog Listing**: Add to `app/blog/page.tsx` allPosts array
- **Homepage**: Consider featuring on main page
- **Sidebar**: Update recent articles in blog layout
- **Navigation**: Add to header featured posts if standout content
- **Mandatory Sync**: For every create, update, or delete in Personal Finance or Financial Solutions categories, immediately reflect the change in all `allPosts` arrays across the blog listing `page.tsx` files to keep rendered data accurate

**Reference**: See `/.github/instructions/BLOG_POST_INTEGRATION.instructions.md` for detailed procedures.

### 3. SEO Optimization

- **Meta Tags**: Comprehensive metadata
- **Schema Markup**: Structured data
- **Open Graph**: Social media optimization
- **Sitemap**: Dynamic sitemap generation

## Git Workflow

### 1. Branch Strategy

- **Main Branch**: Production-ready code
- **Dev Branch**: Development integration
- **Feature Branches**: Individual features
- **Backup Branch**: Automated backups

### 2. Commit Guidelines

- **Conventional Commits**: Structured commit messages
- **Small Commits**: Atomic changes
- **Documentation**: Update docs with changes
- **Testing**: Test before committing

### 3. Automated Workflows

- **Git Script**: Automated multi-branch deployment
- **Pre-commit**: Code quality checks
- **CI/CD**: Automated testing and deployment

## Monitoring and Maintenance

### 1. Performance Monitoring

- **Core Web Vitals**: Continuous monitoring
- **Error Tracking**: Production error monitoring
- **User Analytics**: UK user behavior tracking
- **Conversion Tracking**: Financial product conversions

### 2. Maintenance Tasks

- **Dependency Updates**: Regular updates
- **Security Patches**: Timely security updates
- **Performance Audits**: Regular performance reviews
- **Content Updates**: UK market updates

## Best Practices Summary

### 1. Code Quality

- Use TypeScript strictly
- Follow Next.js conventions
- Maintain consistent styling
- Implement proper error handling

### 2. Performance

- Optimize images and assets
- Use appropriate caching strategies
- Minimize bundle size
- Monitor Core Web Vitals

### 3. User Experience

- Mobile-first design
- Accessibility compliance
- Fast loading times
- Intuitive navigation

### 4. UK Market Focus

- Use UK-specific terminology
- Comply with UK regulations
- Target UK user behavior
- Optimize for UK search engines

This configuration ensures the Next.js project maintains high code quality, performance, and compliance with UK market requirements while providing an excellent user experience for UK financial service seekers.
