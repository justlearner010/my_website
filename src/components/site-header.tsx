import Link from "next/link";
import { siteConfig } from "@/site/config";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-h-11 rounded-md py-2 text-base font-bold tracking-normal text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="主导航">
          <ul className="flex items-center gap-1 sm:gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-stone-600 transition hover:bg-white hover:text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
