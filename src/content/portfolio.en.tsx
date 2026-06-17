import { Icons } from "@/components/icons";
import type { PortfolioData } from "./schema";
import {
  BriefcaseBusinessIcon,
  FileTextIcon,
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
    "Backend engineer designing Kotlin/Spring systems around data fitness, idempotency, and edge-case handling.",
  summary:
    "I can work full-stack, but my center of gravity is backend engineering. I validate requirements through data models and state transitions, design idempotent flows that tolerate retries and duplicate requests, and look for concurrency, missing-data, and inconsistency edge cases before they reach production.",
  avatarUrl: "/assets/img/youngwon.png",
  labels: {
    about: "About",
    services: "Operating Services",
    servicesTitle: "Backend systems shaped for operation",
    servicesDescription:
      "A compact map of work shaped around data models, API boundaries, asynchronous processing, and operating infrastructure.",
    skills: "Core Stack",
    work: "Career History",
    education: "Education",
    impact: "Architecture Impact",
    contact: "Contact",
    contactTitle: "Build with systems that hold up",
    contactDescription:
      "For deeper career details, the CV page expands the architecture, performance, and infrastructure stories.",
    cvTitle: "CV",
    cvSubtitle:
      "Career history with emphasis on data fitness, idempotent processing, and operational reliability.",
    localeToggle: "Korean",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/cv", icon: FileTextIcon, label: "CV" },
    { href: "/#projects", icon: BriefcaseBusinessIcon, label: "Projects" },
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
  strengths: [
    "Validates requirements through data models and state transitions to set storage and query boundaries that fit the domain.",
    "Designs idempotent processing so retries, duplicate requests, and asynchronous events do not change the final outcome.",
    "Builds operable backends by looking past the happy path into permissions, concurrency, missing data, and inconsistent states.",
  ],
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
    { name: "RAG Pipelines" },
  ],
  services: [
    {
      title: "Youngwon Platform",
      href: "https://youngwon.me",
      dates: "Operating",
      description:
        "A personal platform for backend APIs, server automation, and infrastructure managed across OCI and Kubernetes as one operating boundary.",
      technologies: ["OCI", "k3s", "Docker", "Nginx", "Terraform"],
      image: "/assets/img/server.png",
      links: [
        {
          type: "Live",
          href: "https://youngwon.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Server",
          href: "https://github.com/yw7148/server",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Backend Reliability Patterns",
      href: GITHUB_URL,
      dates: "Documenting",
      description:
        "A working set of backend design standards I reuse: data validation, transaction boundaries, idempotent request handling, and retry/duplicate-event safeguards.",
      technologies: ["Kotlin", "Spring Boot", "PostgreSQL", "Redis", "Kafka"],
      image: "/assets/img/server.png",
      links: [
        {
          type: "GitHub",
          href: GITHUB_URL,
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "AI/RAG Service Lab",
      href: GITHUB_URL,
      dates: "Evolving",
      description:
        "A service-pipeline workspace for prompt orchestration, retrieval experiments, and backend integration patterns around production-shaped AI features.",
      technologies: ["OpenAI", "Python", "FastAPI", "Vector Search", "Monitoring"],
      image: "/assets/img/mumuk.png",
      links: [
        {
          type: "GitHub",
          href: GITHUB_URL,
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  work: [
    {
      company: "Riiid",
      location: "Seoul",
      title: "Backend Engineer",
      start: "2025.01",
      end: "Present",
      description:
        "Builds backend foundations for learning products, including auth and gateway redevelopment, AI feature integration, service release work, and operational stabilization.",
    },
    {
      company: "CJ CheilJedang",
      location: "Seoul",
      title: "IT Development Researcher",
      logoUrl: "/assets/img/CJ_logo_small.jpg",
      start: "2022.01",
      end: "2025.01",
      description:
        "Built and operated computational biology platforms for AI/Data Science teams, improving search and integrated-query performance with Elasticsearch, Redis, CI/CD, and monitoring.",
    },
    {
      company: "SolidIT",
      location: "Seoul",
      title: "Graphics / Platform Developer",
      start: "2020.12",
      end: "2021.12",
      description:
        "Worked on OpenGL-based 3D tooling, restoring rendering performance and connecting graphics-heavy features with usable platform flows.",
    },
  ],
  education: [
    {
      school: "Ajou University",
      href: "https://www.ajou.ac.kr/en/index.do",
      degree: "B.S. in Software",
      logoUrl: "/assets/img/ajou_logo.png",
      start: "2016.03",
      end: "2022.02",
    },
  ],
  impacts: [
    {
      title: "Auth Server & Gateway Redevelopment",
      period: "Riiid",
      description:
        "Designed JWT-based authentication and gateway entry flows around safer service boundaries and clearer traffic routing.",
      tags: ["Kotlin", "Spring", "JWT", "Gateway"],
    },
    {
      title: "Learning Hub & TOEFL AI Features",
      period: "Riiid",
      description:
        "Integrated OpenAI-backed learning services with backend flows for recommendation delivery, prompt orchestration, and release readiness.",
      tags: ["OpenAI", "AI Pipeline", "Backend Integration"],
    },
    {
      title: "Computational Biology Platform",
      period: "CJ CheilJedang",
      description:
        "Reduced search latency from roughly 20 seconds to under 1 second and improved integrated lookup performance with Redis caching.",
      tags: ["Elasticsearch", "Redis", "Performance", "Monitoring"],
    },
    {
      title: "Concert Reservation Architecture",
      period: "Hanghae Plus",
      description:
        "Applied clean architecture, TDD, Redis distributed locking, and Kafka event flows to a traffic-heavy reservation domain.",
      tags: ["Clean Architecture", "TDD", "Redis", "Kafka"],
    },
    {
      title: "Personal OCI/k3s Platform",
      period: "Personal Infrastructure",
      description:
        "Operates public personal services through OCI, container automation, k3s orchestration, and deployment scripts.",
      tags: ["OCI", "k3s", "Docker", "Terraform"],
    },
    {
      title: "OpenGL 3D Interface Recovery",
      period: "SolidIT",
      description:
        "Improved rendering performance from near-unusable frame rates to a stable interactive range for 3D platform workflows.",
      tags: ["OpenGL", "Performance", "3D Platform"],
    },
  ],
} satisfies PortfolioData;
