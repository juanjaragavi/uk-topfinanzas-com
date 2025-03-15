# Dynamic Content Management System

This directory contains files that define the dynamic content used throughout the TopFinanzas website. This document explains how the centralized content management system works and how to modify content programmatically.

## Overview

The dynamic content management system is organized into several subdirectories within the `lib/` folder, each responsible for a specific type of content:

- `/navigation/` - Navigation structure for header and footer
- `/texts/` - Text content for various components
- `/images/` - Image URLs and metadata
- `/ads/` - Advertisement configuration (if applicable)

By centralizing all content in TypeScript files with well-defined interfaces, we enable:

1. **Programmatic content editing** via API endpoints or direct file manipulation
2. **Type safety** with TypeScript interfaces that ensure content structure remains valid
3. **Easy updates** for dynamic content without modifying component logic
4. **Consistent content** across multiple components that use the same data

## Navigation Management (`/navigation/`)

### Header Navigation (`headerNavigation.ts`)

This file defines all navigation elements in the header component, including:

- **Main navigation items**: Primary links in the top navigation
- **Category dropdown**: Items in the categories dropdown menu
- **Blog mega menu**: Multi-column menu structure with categories, popular topics, and featured posts

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

To add a new main navigation item:

```typescript
// Find the mainNavItems array in headerNavigation.ts
mainNavItems: [
  // ... existing items
  {
    text: "LOANS",
    href: "/loans",
  },
]
```

### Footer Navigation (`footerNavigation.ts`)

This file defines all navigation elements in the footer component, including:

- **Main navigation items**: Primary links in the footer
- **Category items**: Links to blog categories
- **Blog items**: Links to popular blog posts
- **Social media links**: Social platform links with icons
- **Contact info**: Contact email and address
- **Legal links**: Terms & Conditions and Privacy Policy links

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

To add a new social media link:

```typescript
socialMedia: {
  title: "Follow us on social media",
  links: [
    // ... existing links
    {
      platform: "Twitter",
      url: "https://twitter.com/topfinance_en",
      ariaLabel: "Twitter",
      svgPath: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
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
- **Legal content**: Disclaimer text and copyright notice
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
  url: "https://media.topfinanzas.com/images/new-logo-2025.png",
  alt: "TopFinance New Logo",
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
    .filter(item => item.href === "/" || item.href === "/blog" || item.href.startsWith("/credit-cards"))
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
npm run update-content -- --type=navigation --file=headerNavigation --path=mainNavItems --content='[{"text":"NEW PAGE","href":"/new"}]'
```

## Best Practices for Content Updates

1. **Maintain existing structure**: Ensure any updates follow the established patterns
2. **Validate against interfaces**: Check that content updates conform to the TypeScript interfaces
3. **Test changes**: Verify that content displays correctly after updates
4. **Document changes**: Keep track of content modifications for reference
5. **Use standard URL patterns**: For images, use the standard format `https://media.topfinanzas.com/images/generated/[timestamp]/sample_0.jpg`

## Extending the System

As the site grows, you can extend this content management system by:

1. Adding new TypeScript files for additional content types
2. Creating more granular content files for specific sections
3. Adding new interfaces for specialized content structures
4. Developing more sophisticated content editing tools

This architecture makes it simple to add new content types while maintaining type safety and consistency across the site.
