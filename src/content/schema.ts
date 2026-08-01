import type { ComponentType, ReactNode } from "react";

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

export type ServiceItem = {
  title: string;
  href: string;
  dates: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  links: {
    type: string;
    href: string;
    icon: ReactNode;
  }[];
};

export type WorkItem = {
  company: string;
  href?: string;
  location: string;
  title: string;
  logoUrl?: string;
  start: string;
  end?: string;
  description: string;
};

export type EducationItem = {
  school: string;
  href: string;
  degree: string;
  logoUrl?: string;
  start: string;
  end: string;
};

export type ImpactItem = {
  title: string;
  period: string;
  description: string;
  tags: string[];
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
    services: string;
    servicesTitle: string;
    servicesDescription: string;
    skills: string;
    work: string;
    education: string;
    impact: string;
    contact: string;
    contactTitle: string;
    contactDescription: string;
    cvTitle: string;
    cvSubtitle: string;
    localeToggle: string;
  };
  navbar: NavItem[];
  contact: {
    email: string;
    social: Record<string, SocialItem>;
  };
  strengths: string[];
  skills: SkillItem[];
  services: ServiceItem[];
  work: WorkItem[];
  education: EducationItem[];
  impacts: ImpactItem[];
};
