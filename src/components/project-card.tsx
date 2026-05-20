import Link from "next/link";
import { TagList } from "@/components/tag-list";
import {
  formatDate,
  type ContentEntry,
  type ProjectFrontmatter,
} from "@/lib/content";

type ProjectCardProps = {
  project: ContentEntry<ProjectFrontmatter>;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const linkEntries = Object.entries(project.links).filter(([, href]) => href);

  return (
    <article className="group overflow-hidden rounded-lg border border-slate-800 bg-slate-900/45 transition hover:border-slate-700 hover:bg-slate-800/45">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-h-72 border-b border-slate-800 bg-[linear-gradient(135deg,#020617_0%,#0f172a_52%,#064e3b_52%,#0f766e_100%)] p-5 text-white lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>{project.type}</span>
              <span>{project.status}</span>
            </div>
            <div>
              <p className="font-mono text-xs text-emerald-300">CASE STUDY</p>
              <p className="mt-2 max-w-xs text-3xl font-black leading-tight">
                {project.title}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{project.role}</span>
            <span aria-hidden="true">/</span>
            <span>{project.period}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={project.date}>{formatDate(project.date)}</time>
          </div>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-normal text-slate-100">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-sm transition hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
            >
              {project.title}
            </Link>
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-400">{project.summary}</p>
          <dl className="mt-6 grid gap-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Problem
              </dt>
              <dd className="mt-1 text-sm leading-6 text-slate-400">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Result so far
              </dt>
              <dd className="mt-1 text-sm leading-6 text-slate-400">{project.outcome}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <TagList items={project.stack.slice(0, 6)} variant="dark" />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
            >
              阅读完整案例
            </Link>
            {linkEntries.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
              >
                打开 {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
