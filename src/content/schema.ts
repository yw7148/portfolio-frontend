import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type LinkItem = {
  label: string;
  href: string;
};

export type NavItem = {
  href: string;
  icon: IconComponent;
  label: string;
};

export type SocialItem = {
  name: string;
  url: string;
  icon: IconComponent;
  navbar: boolean;
};

export type SkillItem = {
  name: string;
  icon?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  links: LinkItem[];
};

export type CaseStudyItem = {
  id: string;
  title: string;
  context: string;
  role: string;
  problem: string;
  decision: string;
  outcome: string;
  technologies: string[];
  article?: LinkItem;
};

export type WritingItem = LinkItem & {
  description: string;
};

export type PortfolioData = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  labels: {
    about: string;
    cases: string;
    casesTitle: string;
    casesDescription: string;
    role: string;
    problem: string;
    decision: string;
    outcome: string;
    writing: string;
    writingDescription: string;
    blog: string;
    projects: string;
    projectsDescription: string;
    skills: string;
    contact: string;
    contactTitle: string;
    contactDescription: string;
    localeToggle: string;
  };
  navbar: NavItem[];
  contact: {
    email: string;
    social: Record<string, SocialItem>;
  };
  skills: SkillItem[];
  caseStudies: CaseStudyItem[];
  writing: WritingItem[];
  projects: ProjectItem[];
};
