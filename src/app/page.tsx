import Link from "next/link";
import { getFeaturedProjects, getPosts } from "@/lib/content";
import { isPlaceholderContact, siteConfig } from "@/site/config";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
];

const futureExperience = [
  {
    period: "Future",
    title: "Internship experience",
    body: "预留给未来实习经历：公司、团队、你负责的功能、产出和技术栈。",
  },
  {
    period: "Future",
    title: "Campus / open source work",
    body: "预留给课程项目、社团项目、开源贡献或比赛经历。",
  },
];

function PlaceholderTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
      {children}
    </span>
  );
}

export default function Home() {
  const projects = getFeaturedProjects();
  const posts = getPosts().slice(0, 3);
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
    <main className="min-h-dvh bg-[#0f172a] text-slate-300">
      <div className="mx-auto grid min-h-dvh max-w-6xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-0">
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Link
              href="/"
              className="text-5xl font-black tracking-normal text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
            >
              {siteConfig.name}
            </Link>
            <h1 className="mt-4 max-w-md text-xl font-semibold leading-8 text-slate-100">
              大一学生 / AI 工具构建者
            </h1>
            <p className="mt-4 max-w-sm text-base leading-7 text-slate-400">
              我正在构建 AI Reader，并把项目过程整理成面向实习申请的作品集。
            </p>

            <nav className="mt-12 hidden lg:block" aria-label="页面导航">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 transition hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
                    >
                      <span className="h-px w-8 bg-slate-600 transition group-hover:w-14 group-hover:bg-slate-100" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  {isPlaceholderContact(contact.value) ? (
                    <span className="inline-flex min-h-11 items-center rounded-md border border-slate-700 px-3 text-sm text-slate-500">
                      {contact.label} 待补充
                    </span>
                  ) : (
                    <a
                      href={contact.href}
                      className="inline-flex min-h-11 items-center rounded-md border border-slate-700 px-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-300 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
                    >
                      {contact.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="py-6 lg:py-24">
          <section id="about" className="scroll-mt-24 py-10 lg:py-16" aria-labelledby="about-title">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-200 lg:hidden">
              About
            </p>
            <h2 id="about-title" className="sr-only">
              About
            </h2>
            <div className="rounded-lg border border-slate-800 bg-slate-900/45 p-5">
              <p className="text-base leading-8 text-slate-300">
                About 内容预留给你自己写。这里建议用 2-3 段话说明：你是谁、你关注什么方向、为什么做 AI
                Reader、你希望通过作品集证明什么。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <PlaceholderTag>About 自填</PlaceholderTag>
                <PlaceholderTag>未来可加英文版</PlaceholderTag>
                <PlaceholderTag>可放简历链接</PlaceholderTag>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-24 py-10 lg:py-16"
            aria-labelledby="experience-title"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
              Experience
            </p>
            <h2 id="experience-title" className="sr-only">
              Experience
            </h2>
            <div className="space-y-4">
              {futureExperience.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-3 rounded-lg p-4 transition hover:bg-slate-800/45 sm:grid-cols-[8rem_1fr]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="scroll-mt-24 py-10 lg:py-16"
            aria-labelledby="projects-title"
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                  Projects
                </p>
                <h2 id="projects-title" className="sr-only">
                  Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
              >
                全部项目
              </Link>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block rounded-lg p-4 transition hover:bg-slate-800/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 sm:p-5"
                >
                  <article className="grid gap-4 sm:grid-cols-[8rem_1fr]">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      {project.period}
                    </p>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-100 transition group-hover:text-emerald-300">
                          {project.title}
                        </h3>
                        <span className="text-slate-500">/</span>
                        <span className="text-sm text-slate-400">{project.type}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.problem}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {project.outcome}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="项目技术栈">
                        {project.stack.slice(0, 6).map((item) => (
                          <li
                            key={item}
                            className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Link>
              ))}
              <div className="rounded-lg border border-dashed border-slate-700 p-5">
                <p className="text-sm font-semibold text-slate-300">Future project slot</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  预留给未来项目。建议每个项目都写清楚 Problem、Role、Technical depth 和 Result。
                </p>
              </div>
            </div>
          </section>

          <section
            id="writing"
            className="scroll-mt-24 py-10 lg:py-16"
            aria-labelledby="writing-title"
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                  Writing
                </p>
                <h2 id="writing-title" className="sr-only">
                  Writing
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
              >
                全部文章
              </Link>
            </div>
            <div className="space-y-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 rounded-lg p-4 transition hover:bg-slate-800/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 sm:grid-cols-[8rem_1fr]"
                >
                  <time className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {post.date.slice(0, 4)}
                  </time>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-slate-100 transition group-hover:text-emerald-300">
                        {post.title}
                      </h3>
                      <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300">
                        {post.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
              <div className="rounded-lg border border-dashed border-slate-700 p-5">
                <p className="text-sm font-semibold text-slate-300">Future writing slot</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  预留给未来技术文章、项目复盘、学习笔记和英文博客。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
