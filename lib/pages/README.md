# Page Content Management System

This directory contains the centralized content files for user journey pages in the TopFinanzas website. This approach extends our existing TypeScript-based content management system to include page content, making it programmatically modifiable similar to how we manage navigation, text elements, and images.

## Overview

The page content management system organizes content for each user journey section in dedicated subdirectories:

- `/credit-cards/` - Content for the credit card user journey
- `/loans/` (future) - Content for the loans user journey
- etc.

This structure allows us to:

1. **Programmatically edit** page content through the same mechanisms we use for other content types
2. **Maintain type safety** with TypeScript interfaces that ensure content structure remains valid
3. **Separate content from presentation** making it easier to update content without modifying component logic
4. **Create consistent user journeys** across different financial product types

## Implementation Approach

After analyzing our existing systems, we recommend using **TypeScript-based content files** rather than MDX for user journey pages. This recommendation is based on:

1. **Component-heavy structure**: User journey pages contain many interactive components (buttons, cards, animated elements) that integrate better with TS structure than MDX
2. **Consistent with existing patterns**: Follows the same pattern we use for navigation and text content
3. **Type safety benefits**: Strong typing ensures content structure remains valid
4. **Programmatic editing**: Easier to edit through API endpoints or CLI tools than MDX, which requires markdown parsing

## Content Structure Example

Each user journey section will have its own TypeScript file with a strongly-typed interface:

```typescript
// Example for credit-cards journey
export interface CreditCardPageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  featuredCard: {
    title: string;
    image: string;
    cardName: string;
    rating: number;
    reviewCount: number;
    description: string;
    ctaText: string;
    ctaLink: string;
    requirements: Array<{
      label: string;
      value: string;
    }>;
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
```

## Implementation Plan

### 1. Create Content Files

For each user journey page, extract the content into TS files:

```typescript
// lib/pages/credit-cards/main.ts
export const creditCardsPageContent: CreditCardPageContent = {
  metadata: {
    title: "Credit Card Recommender - TopFinanzas",
    description: "Find the perfect credit card with our personalized recommendations. Compare options and apply online.",
    keywords: "credit cards, card recommender, compare credit cards, apply for credit card, TopFinanzas",
  },
  hero: {
    title: "The Smart Way to Choose a Credit Card",
    description: "Ready to take charge of your finances? You may qualify for a credit card with the tools and flexibility you need. Here's why now is the perfect time to explore your options:",
    ctaText: "Accept recommendation",
    ctaLink: "/recommendation",
  },
  // ... rest of the content
};
```

### 2. Update Page Components

Modify the page components to consume content from the TS files:

```tsx
// app/page.tsx
import { creditCardsPageContent } from "@/lib/pages/credit-cards/main";

export const metadata = creditCardsPageContent.metadata;

export default function CreditCards() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedText as="h1" className="mb-4 text-secondary">
                {creditCardsPageContent.hero.title}
              </AnimatedText>

              <AnimatedText as="p" className="mb-6 text-gray-600" delay={0.1}>
                {creditCardsPageContent.hero.description}
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <Link
                  href={creditCardsPageContent.hero.ctaLink}
                  className="btn-primary inline-block"
                >
                  {creditCardsPageContent.hero.ctaText}
                </Link>
              </AnimatedText>
            </div>
            
            {/* ... rest of the component */}
          </div>
        </div>
      </section>
      
      {/* ... rest of the sections */}
      
      <Footer />
    </main>
  );
}
```

### 3. Create API Endpoints for Content Editing

Add API endpoints to allow modifying the content programmatically:

```typescript
// app/api/content/pages/route.ts
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const journey = searchParams.get('journey');
  const page = searchParams.get('page');
  
  if (!journey || !page) {
    return Response.json({ error: 'Missing journey or page parameter' }, { status: 400 });
  }
  
  const filePath = path.join(process.cwd(), `lib/pages/${journey}/${page}.ts`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return Response.json({ content });
  } catch (error) {
    return Response.json({ error: 'File not found' }, { status: 404 });
  }
}

export async function PUT(request: Request) {
  const { journey, page, content } = await request.json();
  
  if (!journey || !page || !content) {
    return Response.json({ error: 'Missing parameters' }, { status: 400 });
  }
  
  const filePath = path.join(process.cwd(), `lib/pages/${journey}/${page}.ts`);
  
  try {
    // Validate the content against the TypeScript interface
    // This would need additional implementation
    
    // Write the file
    fs.writeFileSync(filePath, content);
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
```

## Benefits Over MDX for User Journeys

While we use MDX for blog posts, TypeScript content files are better suited for user journey pages because:

1. **Component Integration**: User journey pages use many interactive UI components and animations that are easier to manage in TSX than MDX
2. **Structured Data**: User journeys contain more structured data (product details, requirements, FAQs) compared to the free-form content of blog posts
3. **Content Validation**: TypeScript interfaces enforce data structure, preventing errors when updating content
4. **API-friendly**: The structured format makes it easier to build editing tools and APIs
5. **Performance**: No need to compile MDX at runtime, potentially improving performance for complex pages
6. **Consistency**: Follows the same pattern we use for other dynamic content in the site

## Extending for New User Journeys

When adding new user journeys (e.g., Loans), follow this pattern:

1. Create a new subdirectory in `/lib/pages/` (e.g., `/lib/pages/loans/`)
2. Define TypeScript interfaces for the content structure
3. Create content files that implement those interfaces
4. Reference the content in the corresponding page components

This maintains consistency across the site while enabling easy content management for all user journeys.
