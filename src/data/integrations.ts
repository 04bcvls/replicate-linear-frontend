export type Integration = Readonly<{
  slug: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  external: boolean;
}>;

export const integrations = [
  {
    slug: "github",
    name: "GitHub",
    description:
      "Connect GitHub to automate PR workflows, review code in Linear, sync issues and understand your codebase with Linear Agent",
    icon: "/integrations/github-white.png",
    href: "https://linear.app/integrations/github",
    external: true,
  },
  {
    slug: "slack",
    name: "Slack",
    description: "Create issues from Slack messages and sync threads",
    icon: "/integrations/slack.png",
    href: "https://linear.app/integrations/slack",
    external: true,
  },
  {
    slug: "gitlab",
    name: "GitLab",
    description: "Automate your Merge Request workflow",
    icon: "/integrations/gitlab.png",
    href: "https://linear.app/integrations/gitlab",
    external: true,
  },
  {
    slug: "figma",
    name: "Figma",
    description: "Create and link issues directly from Figma",
    icon: "/integrations/figma.png",
    href: "https://linear.app/integrations/figma",
    external: true,
  },
  {
    slug: "intercom",
    name: "Intercom",
    description:
      "Keep a tight feedback loop with customers and streamline bug reports",
    icon: "/integrations/intercom.png",
    href: "https://linear.app/integrations/intercom",
    external: true,
  },
  {
    slug: "google-sheets",
    name: "Google Sheets",
    description:
      "Build custom dashboards and analytics from issue and project data",
    icon: "/integrations/google-sheets.png",
    href: "https://linear.app/integrations/google-sheets",
    external: true,
  },
] satisfies readonly Integration[];