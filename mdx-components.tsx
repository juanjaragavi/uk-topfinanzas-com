import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headers
    h1: ({ className, ...props }) => (
      <h1
        className={cn("text-4xl font-bold mt-8 mb-4 text-gray-900", className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn("text-3xl font-bold mt-8 mb-4 text-gray-900", className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-2xl font-semibold mt-8 mb-4 text-gray-900",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "text-xl font-semibold mt-8 mb-4 text-gray-900",
          className
        )}
        {...props}
      />
    ),

    // Paragraph
    p: ({ className, ...props }) => (
      <p
        className={cn("mb-4 text-gray-700 leading-relaxed", className)}
        {...props}
      />
    ),

    // Lists
    ul: ({ className, ...props }) => (
      <ul
        className={cn("mb-6 list-disc pl-8 text-gray-700", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn("mb-6 list-decimal pl-8 text-gray-700", className)}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("mb-1", className)} {...props} />
    ),

    // Blockquote
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "border-l-4 border-blue-500 pl-4 py-1 mb-4 italic text-gray-700 bg-blue-50 rounded-r",
          className
        )}
        {...props}
      />
    ),

    // Image
    img: (props) => {
      // If there's a src property with an absolute URL, use standard img tag
      if (
        props.src &&
        (props.src.startsWith("http://") || props.src.startsWith("https://"))
      ) {
        return (
          <span className="block my-6">
            <img
              className="rounded-lg mx-auto"
              alt={props.alt || ""}
              {...props}
            />
            {props.alt && (
              <span className="block text-center text-sm text-gray-500 mt-2">
                {props.alt}
              </span>
            )}
          </span>
        );
      }

      // For local images, use Next.js Image component
      return (
        <span className="block my-6">
          <Image
            src={props.src || "/placeholder.jpg"}
            alt={props.alt || ""}
            width={props.width ? Number(props.width) : 800}
            height={props.height ? Number(props.height) : 450}
            className="rounded-lg mx-auto"
          />
          {props.alt && (
            <span className="block text-center text-sm text-gray-500 mt-2">
              {props.alt}
            </span>
          )}
        </span>
      );
    },

    // Links
    a: ({ className, href, ...props }) => {
      // Ensure href is a valid string and not undefined
      const linkHref = href || "#";

      return (
        <Link
          href={linkHref}
          className={cn(
            "text-blue-600 hover:text-blue-800 hover:underline",
            className
          )}
          {...props}
        />
      );
    },

    // Code blocks
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "p-4 bg-gray-900 rounded-lg mb-6 overflow-x-auto text-white",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "bg-gray-100 rounded px-1 py-0.5 text-gray-800 font-mono text-sm",
          className
        )}
        {...props}
      />
    ),

    // Table
    table: ({ className, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table
          className={cn("min-w-full divide-y divide-gray-200", className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-gray-50", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn("divide-y divide-gray-200", className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn("", className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("px-4 py-3 text-sm text-gray-700", className)}
        {...props}
      />
    ),

    // Horizontal rule
    hr: ({ className, ...props }) => (
      <hr
        className={cn("my-8 border-t border-gray-200", className)}
        {...props}
      />
    ),

    // Custom components
    Button,

    // Merge with any other components passed in
    ...components,
  };
}
