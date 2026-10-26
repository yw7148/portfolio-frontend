import { Icons } from "@/components/icons";
import type { PortfolioData } from "./schema";
import {
  BookOpenIcon,
  BriefcaseBusinessIcon,
  HomeIcon,
  MailIcon,
} from "lucide-react";

const SOURCE_URL = "https://github.com/yw7148/portfolio-frontend";
const GITHUB_URL = "https://github.com/yw7148";
const EMAIL_URL = "mailto:youngwon@youngwon.me";

export const portfolioEn = {
  name: "Youngwon Kim",
  initials: "YK",
  url: "https://youngwon.me",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  description:
    "Kotlin/Spring backend engineer who investigates problems deeply and considers the consequences of each design choice.",
  summary:
    "I build backends for payment and learning services. I start by defining what must hold, then work through data migrations and recommendation-model changes while preserving existing data and a consistent user experience.",
  avatarUrl: "/assets/img/youngwon.png",
  labels: {
    about: "About",
    cases: "Selected project cases",
    casesTitle: "Design decisions shaped by real constraints",
    casesDescription: "My role, the reasons behind each choice, and the results I could verify.",
    role: "My role",
    problem: "Problem and constraints",
    decision: "Decision and trade-offs",
    outcome: "Results and verification",
    writing: "Engineering questions and solutions",
    writingDescription: "Focused explorations of design choices and their limits, alongside the broader project cases.",
    blog: "All blog posts",
    projects: "Public projects I operate",
    projectsDescription: "Infrastructure I configure and operate, with public artifacts to explore.",
    skills: "Core Stack",
    contact: "Contact",
    contactTitle: "Build with systems that hold up",
    contactDescription:
      "Get in touch to discuss the requirements, constraints, and design decisions behind your next service.",
    localeToggle: "Korean",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: BriefcaseBusinessIcon, label: "Projects" },
    { href: "/#writing", icon: BookOpenIcon, label: "Writing" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    email: "youngwon@youngwon.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: GITHUB_URL,
        icon: Icons.github,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: EMAIL_URL,
        icon: Icons.email,
        navbar: true,
      },
      Source: {
        name: "Source",
        url: SOURCE_URL,
        icon: Icons.globe,
        navbar: true,
      },
    },
  },
  skills: [
    { name: "Kotlin", icon: "/assets/img/skills/Kotlin-Dark.svg" },
    { name: "Java", icon: "/assets/img/skills/Java-Dark.svg" },
    { name: "Spring Boot", icon: "/assets/img/skills/Spring-Dark.svg" },
    { name: "Python", icon: "/assets/img/skills/Python-Dark.svg" },
    { name: "FastAPI", icon: "/assets/img/skills/FastAPI.svg" },
    { name: "Redis", icon: "/assets/img/skills/Redis-Dark.svg" },
    { name: "Kafka", icon: "/assets/img/skills/Kafka.svg" },
    { name: "RabbitMQ", icon: "/assets/img/skills/RabbitMQ-Dark.svg" },
    { name: "PostgreSQL", icon: "/assets/img/skills/PostgreSQL-Dark.svg" },
    { name: "MySQL", icon: "/assets/img/skills/MySQL-Dark.svg" },
    { name: "Docker", icon: "/assets/img/skills/Docker.svg" },
    { name: "Kubernetes", icon: "/assets/img/skills/Kubernetes.svg" },
    { name: "Terraform" },
    { name: "OCI" },
  ],
  caseStudies: [
    {
      id: "payment-migration",
      title: "Following a payment migration through the next renewal",
      context: "Socra AI · Payment migration",
      role: "Owned source-data analysis, identifier mapping, migration execution and tracking, and payment integration changes in the service.",
      problem: "With limited documentation and no original owner available, historical records had to move while future subscription events still resolved to existing orders.",
      decision: "Separated subscription identity from individual payment identity and recorded processing stages. Temporarily restricted new payments while protecting existing users’ access during cutover.",
      outcome: "Reconciled financial totals across both servers and followed subsequent renewal events. Resolved 19 subscriptions with uncertain identifiers using evidence from their next renewals.",
      technologies: ["Kotlin", "Spring Boot", "Python", "Data Migration"],
    },
    {
      id: "recommendation-v2",
      title: "Preserving learning history as the recommendation model changes",
      context: "Santa TOEFL · Recommendation v2 transition",
      role: "Implemented recommendation integration, snapshot models, and consumer changes across TOEFL and LearningHub.",
      problem: "Recommendations moved from skills to scores and weaknesses. Existing recommendations still needed to be readable while both versions coexisted.",
      decision: "Kept learning-sequence ownership in TOEFL and left information absent from historical recommendations unknown. Both versions shared the same storage slot and lock key.",
      outcome: "Separated legacy snapshot conversion from new recommendations and validated baseline ownership. Removed TOEFL’s v1 call paths after migrating consumers.",
      technologies: ["Kotlin", "Spring Boot", "PostgreSQL", "Redis"],
    },
    {
      id: "search-performance",
      title: "Finding bottlenecks in search and data access",
      context: "CJ CheilJedang · Search and query performance",
      role: "Analyzed search data and implemented search indexing and caching for aggregated queries.",
      problem: "Substring search took about 20 seconds in the worst case; fetching and combining distributed data took about 6 seconds.",
      decision: "Applied Elasticsearch indexing for search and Redis caching with expiration policies tailored to the aggregated data.",
      outcome: "Reduced search response time from about 20 seconds to 0.7 seconds and aggregated queries from about 6 seconds to 0.5 seconds on cache hits. The latter result is conditional on a cache hit.",
      technologies: ["Java", "Spring Boot", "Elasticsearch", "Redis"],
    },
  ],
  writing: [
    {
      label: "When splitting a transaction changes what an event can see",
      href: "https://blog.youngwon.me/posts/transaction-boundaries-and-events/",
      description: "Revisiting the completed state an event represents and data visibility after changing transaction boundaries. Written in Korean.",
    },
    {
      label: "Idempotency alone cannot protect learning history",
      href: "https://blog.youngwon.me/posts/api-idempotency-boundaries/",
      description: "Giving learning attempts an identity and state transitions to distinguish duplicate requests from genuine retakes. Written in Korean.",
    },
    {
      label: "Does a real-time leaderboard need to be fully real-time?",
      href: "https://blog.youngwon.me/posts/realtime-ranking-with-snapshot/",
      description: "Exploring accuracy, query cost, and a consistent user experience with snapshot-based rankings. Written in Korean.",
    },
  ],
  projects: [
    {
      title: "Personal service platform",
      description: "Operates an OCI k3s runtime and a home-node Argo CD management cluster, with deployment and configuration managed through GitOps.",
      technologies: ["OCI", "k3s", "Argo CD", "Terraform"],
      links: [{ label: "Infrastructure repository", href: "https://github.com/yw7148/server" }],
    },
  ],
} satisfies PortfolioData;
