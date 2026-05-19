import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded-md bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
      : "inline-flex min-h-11 items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:border-stone-950 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
