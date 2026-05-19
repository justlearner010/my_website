import { MDXRemote } from "next-mdx-remote/rsc";

type MdxContentProps = {
  source: string;
  variant?: "light" | "dark";
};

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} />
  ),
};

export function MdxContent({ source, variant = "light" }: MdxContentProps) {
  return (
    <div className={variant === "dark" ? "prose-site-dark" : "prose-site"}>
      <MDXRemote source={source} components={components} />
    </div>
  );
}
