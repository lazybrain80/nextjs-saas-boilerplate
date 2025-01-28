import type { PageNavConfig } from "@/types";

export const getDocsConfig = (local: string): PageNavConfig => {
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
          {
            title: "Installation",
            href: `/${local}/docs/installation`,
          },
        ],
      },
      {
        id: "authentication",
        title: "Authentication",
        href: `/${local}/docs/authentication`,
        items: [
          {
            title: "NextAuth Setup",
            href: `/${local}/docs/authentication/nextAuth`,
          },
          {
            title: "Email Login",
            href: `/${local}/docs/authentication/magicLinkLogin`,
          },
          {
            title: "Google Login",
            href: `/${local}/docs/authentication/googleLogin`,
          },
          {
            title: "GitHub Login",
            href: `/${local}/docs/authentication/githubLogin`,
          },
        ],
      },
      // {
      //   id: "blog",
      //   title: "Blog",
      //   items: [
      //     {
      //       title: "Introduction",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //   ],
      // },
      // {
      //   id: "dashboard",
      //   title: "Dashboard",
      //   items: [
      //     {
      //       title: "Introduction",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //     {
      //       title: "Layouts",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //     {
      //       title: "Server Components",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //     {
      //       title: "Authentication",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //     {
      //       title: "Database with Prisma",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //     {
      //       title: "API Routes",
      //       href: `/${local}/docs/in-progress`,
      //       disabled: true,
      //     },
      //   ],
      // },
    ],
  };
};
