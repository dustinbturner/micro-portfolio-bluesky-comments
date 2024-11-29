import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Dustin Turner",
  DESCRIPTION: "I design and build scalable, efficient software solutions that provide tangible value to your business.",
  EMAIL: "dustin@dustinturner.io",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I design and build scalable, efficient software solutions that provide tangible value to your business.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles that cover a mix of personal essays, business insights, and technical how-to's",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Bluesky",
    HREF: "https://bsky.app/profile/dustinturner.io",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/dustinbturner",
  },
];
