import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

type LinkMap = Record<string, string>;

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  role: string;
  period: string;
  type: string;
  problem: string;
  outcome: string;
  highlights: string[];
  stack: string[];
  status: string;
  date: string;
  links: LinkMap;
  featured: boolean;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type ContentEntry<T extends { date: string }> = T & {
  slug: string;
  content: string;
};

function assertString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing or invalid frontmatter field: ${field}`);
  }
}

function assertStringArray(value: unknown, field: string): asserts value is string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`Missing or invalid frontmatter field: ${field}`);
  }
}

function assertBoolean(value: unknown, field: string): asserts value is boolean {
  if (typeof value !== "boolean") {
    throw new Error(`Missing or invalid frontmatter field: ${field}`);
  }
}

function assertLinkMap(value: unknown, field: string): asserts value is LinkMap {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value) ||
    Object.values(value).some((item) => typeof item !== "string")
  ) {
    throw new Error(`Missing or invalid frontmatter field: ${field}`);
  }
}

function readCollection<T extends { date: string }>(
  collection: "projects" | "blog",
  validate: (data: Record<string, unknown>, slug: string) => T,
) {
  const directory = path.join(contentRoot, collection);
  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .sort();

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        content,
        ...validate(data, slug),
      };
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

function validateProject(data: Record<string, unknown>, slug: string): ProjectFrontmatter {
  assertString(data.title, `projects/${slug}.title`);
  assertString(data.summary, `projects/${slug}.summary`);
  assertString(data.role, `projects/${slug}.role`);
  assertString(data.period, `projects/${slug}.period`);
  assertString(data.type, `projects/${slug}.type`);
  assertString(data.problem, `projects/${slug}.problem`);
  assertString(data.outcome, `projects/${slug}.outcome`);
  assertStringArray(data.highlights, `projects/${slug}.highlights`);
  assertStringArray(data.stack, `projects/${slug}.stack`);
  assertString(data.status, `projects/${slug}.status`);
  assertString(data.date, `projects/${slug}.date`);
  assertLinkMap(data.links, `projects/${slug}.links`);
  assertBoolean(data.featured, `projects/${slug}.featured`);

  return {
    title: data.title,
    summary: data.summary,
    role: data.role,
    period: data.period,
    type: data.type,
    problem: data.problem,
    outcome: data.outcome,
    highlights: data.highlights,
    stack: data.stack,
    status: data.status,
    date: data.date,
    links: data.links,
    featured: data.featured,
  };
}

function validateBlog(data: Record<string, unknown>, slug: string): BlogFrontmatter {
  assertString(data.title, `blog/${slug}.title`);
  assertString(data.description, `blog/${slug}.description`);
  assertString(data.date, `blog/${slug}.date`);
  assertStringArray(data.tags, `blog/${slug}.tags`);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
  };
}

export function getProjects() {
  return readCollection("projects", validateProject);
}

export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getPosts() {
  return readCollection("blog", validateBlog);
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
