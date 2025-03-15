/**
 * This file serves as an entry point for all page content
 * It re-exports the content from specific page modules for easy imports
 * This allows importing content from a single location: '@/lib/pages'
 */

// Credit Cards journey content
export * from "./credit-cards/main";
export * from "./credit-cards/citi-double-cash";
export * from "./credit-cards/recommendation";
export * from "./credit-cards/apply";
export * from "./credit-cards/apply-citi-double-cash";

// Add other journeys here as they are created
// Example:
// export * from './loans/main';
// export * from './loans/application';
