// src/content/site.ts
export type SiteNavItem = { 
    label: string;
    href: string 
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;            
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "Cambridge Squared",
  tagline: "Research in the intersection of economics, machine learning, and spatial data science.",
  description:
    "We are a capstone research group comprised of Harvard master's students in Data Science and Artificial Intelligence.",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "en",
  author: {
    name: "Cambridge Squared",
    url: "https://cambridgesquared.github.io",
    socials: {
      github: "https://github.com/CambridgeSquared",
    }
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "People", href: "/people" },
  ],
  seo: {
    ogImage: "/images/og/og-default.jpg",
    robots: "index,follow",
    themeColor: "#fbfbf9"
  }
};
