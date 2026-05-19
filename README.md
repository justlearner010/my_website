# Personal Website

中文为主的个人作品集和博客网站，用于展示 AI Reader 等项目，并服务未来实习申请。

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- MDX content files via `gray-matter` and `next-mdx-remote`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Projects live in `content/projects/*.mdx`.
Blog posts live in `content/blog/*.mdx`.

Each file must include the required frontmatter fields enforced by `src/lib/content.ts`.

## Verification

```bash
npm run lint
npm run build
```

The project is intended to deploy on Vercel.
