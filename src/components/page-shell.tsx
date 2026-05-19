import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
