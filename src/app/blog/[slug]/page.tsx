import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { formatDate, getPost, getPosts } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-[#0f172a] text-slate-300">
      <article className="mx-auto max-w-3xl px-6 py-14 sm:px-8 lg:py-24">
        <Link
          href="/#writing"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
        >
          返回 Writing
        </Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
          Writing
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal text-slate-50 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="文章标签">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-slate-800 pt-10">
          <MdxContent source={post.content} variant="dark" />
        </div>
      </article>
    </main>
  );
}
