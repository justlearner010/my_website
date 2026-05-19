import { isPlaceholderContact, siteConfig } from "@/site/config";

export function SiteFooter() {
  const contacts = [
    {
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    { label: "GitHub", value: siteConfig.contact.github, href: siteConfig.contact.github },
    {
      label: "LinkedIn",
      value: siteConfig.contact.linkedin,
      href: siteConfig.contact.linkedin,
    },
  ];

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-stone-600 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-semibold text-stone-950">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl">{siteConfig.description}</p>
        </div>
        <ul className="flex flex-wrap gap-3 md:justify-end">
          {contacts.map((contact) => (
            <li key={contact.label}>
              {isPlaceholderContact(contact.value) ? (
                <span className="inline-flex min-h-11 items-center rounded-md border border-stone-200 px-3 text-stone-500">
                  {contact.label} 待补充
                </span>
              ) : (
                <a
                  className="inline-flex min-h-11 items-center rounded-md border border-stone-200 px-3 font-medium text-stone-800 transition hover:border-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
                  href={contact.href}
                >
                  {contact.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
