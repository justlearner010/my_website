import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "项目",
  description: "Jay 的项目作品集，第一版重点展示 AI Reader。",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-dvh bg-[#0f172a] text-slate-300">
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-24">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
        >
          返回首页
        </Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-50 sm:text-5xl">
          项目作品集
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          这里按实习作品集的方式记录项目：先说明问题、我的角色、做出的东西和当前结果，再展开关键工程决策。
        </p>
        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
