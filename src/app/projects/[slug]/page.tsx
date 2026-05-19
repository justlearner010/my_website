import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { TagList } from "@/components/tag-list";
import { getProject, getProjects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const linkEntries = Object.entries(project.links).filter(([, href]) => href);

  return (
    <main className="min-h-dvh bg-[#0f172a] text-slate-300">
      <article>
        <header className="border-b border-slate-800">
          <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-24">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
            >
              返回 Projects
            </Link>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Project case study
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-normal text-slate-50 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              {project.summary}
            </p>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Role", project.role],
                ["Timeline", project.period],
                ["Status", project.status],
                ["Type", project.type],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-800 bg-slate-900/45 p-4"
                >
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold leading-6 text-slate-100">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <TagList items={project.stack} variant="dark" />
            </div>
            {linkEntries.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {linkEntries.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex min-h-11 items-center rounded-md border border-slate-700 px-4 text-sm font-semibold text-slate-300 transition hover:border-emerald-300 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
          <dl className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900/45 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                Problem
              </dt>
              <dd className="mt-3 text-base leading-7 text-slate-400">
                {project.problem}
              </dd>
            </div>
            <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-5">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                Result so far
              </dt>
              <dd className="mt-3 text-base leading-7 text-slate-200">
                {project.outcome}
              </dd>
            </div>
          </dl>

          <section className="mt-6 rounded-lg border border-slate-800 bg-slate-900/45 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              Technical depth
            </p>
            <ul className="mt-4 grid gap-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l-2 border-emerald-300 pl-4 text-sm leading-6 text-slate-400"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 border-t border-slate-800 pt-10">
            <MdxContent source={project.content} variant="dark" />
          </div>
        </div>
      </article>
    </main>
  );
}
