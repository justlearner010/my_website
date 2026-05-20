import Link from "next/link";
import { formatDate, type BlogFrontmatter, type ContentEntry } from "@/lib/content";

type PostCardProps = {
  post: ContentEntry<BlogFrontmatter>;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/45 p-5 transition hover:border-slate-700 hover:bg-slate-800/45">
      <div className="flex flex-wrap items-center gap-3">
        <time className="text-sm text-slate-500" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
          {post.category}
        </span>
      </div>
      <h2 className="mt-3 text-xl font-bold leading-tight tracking-normal text-slate-100">
        <Link
          href={`/blog/${post.slug}`}
          className="rounded-sm transition hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-400">{post.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="标签">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
