# Dynamic Content Management System - UK

This directory contains files that define the dynamic content used throughout the TopFinance UK website. This document explains how the centralized content management system works and how to modify content programmatically with UK-specific guidelines.

## Overview

The dynamic content management system is organized into several subdirectories within the `lib/` folder, each responsible for a specific type of content:

- `/navigation/` - Navigation structure for header and footer
- `/texts/` - Text content for various components
- `/images/` - Image URLs and metadata
- `/ads/` - Advertisement configuration
- `/uk/` - UK-specific content and configurations

By centralizing all content in TypeScript files with well-defined interfaces, we enable:

1. **Programmatic content editing** via API endpoints or direct file manipulation
2. **Type safety** with TypeScript interfaces that ensure content structure remains valid
3. **Easy updates** for dynamic content without modifying component logic
4. **Consistent content** across multiple components that use the same data
5. **UK localization** with centralized management of UK-specific terminology and content

## UK Localization Guidelines

When modifying dynamic content for the UK site, follow these guidelines:

1. **UK English**: Use British English spelling and terminology (e.g., "organisation" not "organization")
2. **UK Currency**: Use pound sterling (£) for all monetary values
3. **UK Financial Terms**: Use UK-specific financial terminology:
   - "Current account" instead of "checking account"
   - "ISA" (Individual Savings Account) instead of "401(k)" or "IRA"
   - "Credit rating" instead of "credit score" where appropriate
4. **UK Regulatory References**: Reference UK regulatory bodies:
   - Financial Conduct Authority (FCA)
   - Prudential Regulation Authority (PRA)
   - Financial Ombudsman Service
5. **UK Date Format**: Use day-month-year format (e.g., "15 April 2025")

## Navigation Management (`/navigation/`)

### Header Navigation (`headerNavigation.ts`)

This file defines all navigation elements in the header component, including:

- **Main navigation items**: Primary links in the top navigation
- **Category dropdown**: Items in the categories dropdown menu
- **Blog mega menu**: Multi-column menu structure with categories, popular topics, and featured posts

All navigation items reflect the UK site structure and UK financial terminology.

#### Structure

```typescript
headerNavigation = {
  mainNavItems: Array<NavigationItem>,
  categoryDropdown: {
    text: string,
    items: Array<NavigationItem>
  },
  blogMegaMenu: {
    title: string,
    columns: Array<MegaMenuColumn>,
    featuredPosts?: {
      title: string,
      posts: Array<{
        title: string,
        href: string,
        image: string,
        category: string,
        categoryHref: string
      }>
    }
  }
}
```

#### Example Modification

To add a new main navigation item for a UK-specific product:

```typescript
// Find the mainNavItems array in headerNavigation.ts
mainNavItems: [
  // ... existing items
  {
    text: "PERSONAL LOANS",
    href: "/financial-solutions",
  },
]
```

### Footer Navigation (`footerNavigation.ts`)

This file defines all navigation elements in the footer component, including:

- **Main navigation items**: Primary links in the footer
- **Category items**: Links to blog categories
- **Blog items**: Links to popular blog posts
- **Social media links**: Social platform links with icons
- **Contact info**: UK contact email and address
- **Legal links**: UK Terms & Conditions and Privacy Policy links

#### Structure

```typescript
footerNavigation = {
  mainNavItems: Array<NavigationItem>,
  categoryItems: Array<NavigationItem>,
  blogItems: Array<NavigationItem>,
  socialMedia: {
    title: string,
    links: Array<SocialMediaItem>
  },
  contactInfo: Array<ContactItem>,
  legalLinks: Array<NavigationItem>
}
```

#### Example Modification

To add a new social media link for the UK audience:

```typescript
socialMedia: {
  title: "Follow us on social media",
  links: [
    // ... existing links
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/topfinance-uk",
      ariaLabel: "LinkedIn",
      svgPath: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    },
  ],
}
```

## Text Content Management (`/texts/`)

### Header Content (`header/content.ts`)

This file contains static text and theme elements for the header component, including:

- **Search placeholder**: Text for the search input
- **Mobile menu labels**: Section headings for the mobile menu
- **Theme colors**: Color variables for consistent theming
- **Animation settings**: Configuration for animations
- **Mega menu content**: Additional text for mega menus

All texts follow UK English conventions and terminology.

#### Structure

```typescript
headerContent = {
  search: {
    placeholder: string
  },
  mobileMenu: {
    categoriesLabel: string,
    blogCategories: string,
    popularArticles: string,
    allArticles: string
  },
  colors: {
    primary: string,
    secondary: string,
    gray: {
      light: string,
      medium: string,
      dark: string
    }
  },
  animation: {
    duration: number,
    initialHeight: number,
    initialOpacity: number,
    finalHeight: string,
    finalOpacity: number
  },
  blogMegaMenu: {
    viewAllText: string,
    featuredArticlesTitle: string
  }
}
```

### Footer Content (`footer/content.ts`)

This file contains static text for the footer component, including:

- **Section headings**: Labels for footer sections
- **Company information**: Company name and product information
- **Legal content**: UK-compliant disclaimer text and copyright notice
- **Theme colors**: Color variables for consistent theming

#### Structure

```typescript
footerContent = {
  headings: {
    navigate: string,
    categories: string,
    contact: string
  },
  companyInfo: {
    name: string,
    productLabel: string
  },
  legal: {
    disclaimer: {
      label: string,
      text: string
    },
    copyright: {
      text: string,
      year: string
    }
  },
  colors: {
    primary: string,
    accent: string
  }
}
```

## UK-Specific Content (`/uk/`)

### UK Strings (`/uk/strings/`)

This directory contains UK-specific string constants:

- **constants.ts**: Common string constants used throughout the UK site
- **strings.ts**: Strings for form elements, steps, and validation messages

These files ensure that all user-facing text follows UK English conventions and complies with UK financial regulations.

## Image Management (`/images/`)

### Logos (`logos.ts`)

This file defines logo URLs, alt text, and dimensions for the site logo in different contexts:

- **Color logo**: For light backgrounds (header)
- **White logo**: For dark backgrounds (footer)

#### Structure

```typescript
logos = {
  colorLogo: {
    url: string,
    alt: string,
    width: number,
    height: number
  },
  whiteLogo: {
    url: string,
    alt: string,
    width: number,
    height: number
  }
}
```

#### Example Modification

To update the logo URL:

```typescript
colorLogo: {
  url: "https://media.topfinanzas.com/images/uk/logos/topfinance-uk-logo-2025.png",
  alt: "TopFinance UK Logo",
  width: 200,
  height: 53
}
```

## Implementation in Components

The dynamic content from these files is imported into the corresponding components:

### Header Component (`components/layout/header.tsx`)

```typescript
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";
import { headerContent } from "@/lib/texts/header/content";
```

The component uses these imports to render the navigation structure and content:

```tsx
<button
  ref={(el) => setMenuButtonRef(el, "categories")}
  className="text-gray-600 hover:text-primary flex items-center space-x-1"
  onClick={() => toggleMegaMenu("categories")}
  aria-expanded={activeMegaMenu === "categories"}
>
  <span>{headerNavigation.categoryDropdown.text}</span>
  <ChevronDown
    className={`w-4 h-4 transition-transform ${
      activeMegaMenu === "categories" ? "rotate-180" : ""
    }`}
  />
</button>
```

### Footer Component (`components/layout/footer.tsx`)

```typescript
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";
```

The component uses these imports to render the footer structure and content:

```tsx
<h2 className="text-xl font-semibold mb-5 text-[#7BDC54]">
  {footerContent.headings.navigate}
</h2>
<ul className="space-y-3">
  {footerNavigation.mainNavItems
    .filter(item => item.href === "/" || item.href === "/blog" || item.href.startsWith("/financial-solutions"))
    .map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className="text-white hover:text-[#55B9FF] hover:underline transition-colors"
        >
          {item.text}
        </Link>
      </li>
    ))}
</ul>
```

## Updating Content Programmatically

The centralized content files can be modified programmatically in several ways:

### 1. Direct File Manipulation

For basic updates, directly edit the TypeScript files in the appropriate directories.

### 2. API Endpoints

Create API endpoints that read and write to these files:

```typescript
// Example API route in app/api/content/route.ts
export async function PATCH(request: Request) {
  const { type, path, content } = await request.json();
  
  // Validate the content structure against TypeScript interfaces
  // ...
  
  // Write to the appropriate file
  const filePath = `lib/${type}/${path}`;
  await fs.writeFile(filePath, content);
  
  return Response.json({ success: true });
}
```

### 3. Command-Line Tools

Develop CLI tools that update specific parts of the content:

```bash
# Example CLI command
npm run update-content -- --type=navigation --file=headerNavigation --path=mainNavItems --content='[{"text":"ISA ACCOUNTS","href":"/isa-accounts"}]'
```

## Best Practices for UK Content Updates

1. **Maintain existing structure**: Ensure any updates follow the established patterns
2. **Validate against interfaces**: Check that content updates conform to the TypeScript interfaces
3. **UK compliance**: Ensure all financial content complies with UK regulations, particularly:
   - Financial Conduct Authority (FCA) guidelines for advertising financial products
   - Consumer Credit Act requirements for credit-related content
   - GDPR and ePrivacy requirements for data collection references
4. **UK terminology**: Maintain consistent use of UK financial terms
5. **Test changes**: Verify that content displays correctly after updates
6. **Document changes**: Keep track of content modifications for reference
7. **Use standard URL patterns**: For images, use full URLs with the UK path prefix:
   - `https://media.topfinanzas.com/images/uk/credit-cards/[image-name].jpg`
   - `https://media.topfinanzas.com/images/uk/loans/[image-name].jpg`

## Extending the System for UK Market

As the UK site grows, you can extend this content management system by:

1. Adding new TypeScript files for additional UK-specific content types
2. Creating more granular content files for UK financial products
3. Adding new interfaces for specialized UK financial product structures
4. Developing UK-specific content validation rules

This architecture makes it simple to add new content types while maintaining type safety, UK compliance, and consistency across the site.
