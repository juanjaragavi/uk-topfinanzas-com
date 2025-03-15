import type { MDXComponents } from 'mdx/types'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => (\u003ch1 style={{ color: 'red', fontSize: '48px' }}>{children}\\u003c/h1>),
    // img: (props) => (
    //   \u003cImage
    //     sizes="100vw"
    //     style={{ width: '100%', height: 'auto' }}
    //     {...(props)}
    //   /\\u003e
    // ),
    ...components,
  }
}
