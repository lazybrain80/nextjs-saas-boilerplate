import type { DocsConfig } from "@/types";

export const getDocsConfig = (local: string): DocsConfig => {
  return {
    mainNav: [
      {
        title: "Documentation",
        href: `/${local}/docs`,
      },
      {
        title: "Guides",
        href: `/${local}/guides`,
      },
    ],
    sidebarNav: [
      {
        id: "docs",
        title: "Getting Started",
        items: [
          {
            title: "Introduction",
            href: `/${local}/docs`,
          },
        ],
      },
      {
        id: "documentation",
        title: "Documentation",
        items: [
          {
            title: "Introduction",
            href: `/${local}/docs/documentation`,
          },
          {
            title: "Contentlayer",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
          {
            title: "Components",
            href: `/${local}/docs/documentation/components`,
          },
          {
            title: "Code Blocks",
            href: `/${local}/docs/documentation/code-blocks`,
          },
          {
            title: "Style Guide",
            href: `/${local}/docs/documentation/style-guide`,
          },
        ],
      },
      {
        id: "blog",
        title: "Blog",
        items: [
          {
            title: "Introduction",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
        ],
      },
      {
        id: "dashboard",
        title: "Dashboard",
        items: [
          {
            title: "Introduction",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
          {
            title: "Layouts",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
          {
            title: "Server Components",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
          {
            title: "Authentication",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
          {
            title: "Database with Prisma",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
          {
            title: "API Routes",
            href: `/${local}/docs/in-progress`,
            disabled: true,
          },
        ],
      },
    ],
  };
};
