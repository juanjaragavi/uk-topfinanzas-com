# Partner Feedback Summary (from Agentic AI Transcript)

This document summarizes key feedback and action items from the meeting with partners, extracted from the `agentic-ai-transcript.md` file.

## Key Stakeholders

* **Juan Hoyos:** Provides significant feedback and direction.
* **Francis Lock:** Provides feedback and asks clarifying questions.
* **Sebastián Ramírez:** Provides technical explanations and suggestions.
* **Manuel Sánchez:** Asks questions and provides input.
* **Juan Miguel Jaramillo Gaviria:** Asks questions and provides input.

## Design and Structure

* **Replicate Existing Design:** The primary goal is to replicate the existing design and structure of the current website, particularly emulating the WordPress site. This includes:
  * Diagramming
  * CSS
  * Button sizes and colors
  * Text colors and sizes
  * Page structure
  * Margins, interline spacing and padding.
* **Page Types:** The application includes different page types:
  * Recommendation pages
  * Product pages (with benefits and requirements sections)
  * Requirement pages
  * Blog posts (with various templates)
  * Homepage
  * Category pages
* **UI Elements:**
  * Emulate button styles from Google Ads.
  * Consider using a more compact design for text and options.
* **WordPress:**
  * Copy the UI of the current WordPress website.
  * Replicate different content templates from WordPress.

## Content and SEO

* **SEO Optimization:** Ensure content is optimized for Google search, including:
  * Metadata (titles, descriptions, keywords)
  * Link building
  * Cornerstone content methodology
  * Compliance with Google policies
* **Content Strategy:**
  * Content should guide users through the funnel, from awareness to conversion.
  * Content should be tailored to different audiences (users and search engines).
  * Content should be consistent across different countries/languages (with adjustments for tone and local regulations).
* **Blog Posts:** Blog posts should follow a consistent structure and be optimized for SEO.

## Technical Considerations

* **Google Tag Manager (GTM):**
  * Implement GTM for tracking and analytics.
  * Consider how to handle different GTM containers for different countries/subdomains.
  * Ensure proper implementation of pixels and tracking codes.
* **Active Campaign:**
  * Integrate with Active Campaign for user registration and data management.
  * Consider how to handle user registration and data privacy.
* **URLs:**
  * Establish a clear taxonomy for URLs to improve tagging and analytics.
* **Ad Insertion:**
  * Need to understand how Adinserter (mentioned in the transcript) works to manage ads.
  * Consider how to make ad IDs editable by agents.

## Action Items

* **Replicate Design:** Create a design that closely mirrors the existing WordPress site.
* **Content Templates:** Identify and replicate different content templates from WordPress.
* **GTM Implementation:** Implement Google Tag Manager and ensure proper tracking.
* **Active Campaign Integration:** Integrate with Active Campaign for user registration.
* **URL Taxonomy:** Define a clear URL structure.
* **Ad Management:** Investigate Adinserter and develop a solution for ad management.
* **SEO:** Optimize all pages and content for search engines.
* **Copy UI:** Copy the UI of the current WordPress website.

## Additional Feedback

* **Cookies:** Implement a cookie to prevent users from re-registering within 30 days.
* **Registration Process:**
  * Consider separating first name and last name fields.
  * Evaluate the need for capturing phone numbers.
  * Include a disclaimer on the registration page.
* **UTM Parameters:**
  * Capture and maintain UTM parameters throughout the user journey, including during registration.
  * Use hidden form fields to store UTMs.
* **Webhooks:** Use webhooks to integrate with Active Campaign.
* **Pre-loading:** Address the topic of pre-loading (details unclear from the transcript).
