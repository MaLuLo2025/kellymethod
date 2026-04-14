import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, children, ...props }) => {
      if (href && href.startsWith("/")) {
        return <Link href={href} {...props}>{children}</Link>;
      }
      return <a href={href} {...props}>{children}</a>;
    },
  };
}
