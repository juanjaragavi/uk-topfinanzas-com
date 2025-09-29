import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the appropriate text class based on type and variant
 * @param type The type of text element (h1, h2, etc.)
 * @param variant Optional size variant
 * @returns The class name string
 */
export function getTextClass(
  type: "h1" | "h2" | "h3" | "body" | "meta" | "link" | "list",
  variant?: "default" | "large" | "small",
): string {
  const baseClass = `text-${type}`;

  if (!variant || variant === "default") {
    return baseClass;
  }

  if (variant === "large") {
    // Apply larger text variant while maintaining consistency
    return `${baseClass} text-[calc(100%+2px)]`;
  }

  if (variant === "small") {
    // Apply smaller text variant while maintaining consistency
    return `${baseClass} text-[calc(100%-1px)]`;
  }

  return baseClass;
}
