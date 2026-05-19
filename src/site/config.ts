export const siteConfig = {
  name: "Jay",
  url: "https://example.com",
  description:
    "大一学生，正在构建 AI Reader 等实用 AI 工具，并记录产品、工程和学习过程。",
  nav: [
    { href: "/", label: "首页" },
    { href: "/projects", label: "项目" },
    { href: "/blog", label: "博客" },
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
  },
} as const;

export function isPlaceholderContact(value: string) {
  return value.includes("your-") || value.includes("example.com");
}
