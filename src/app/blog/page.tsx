import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "博客",
  description: "Jay 关于 AI 工具、工程实践和学习过程的记录。",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-dvh bg-[#0f172a] text-slate-300">
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-24">
        <Link
          href="/#writing"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
        >
          返回首页
        </Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-50 sm:text-5xl">
          博客
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          这里会持续记录我做项目、学习工程和理解 AI 产品时遇到的问题。
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
