import { Icons } from "@/components/icons";
import type { PortfolioData } from "./schema";
import { FileTextIcon, HomeIcon } from "lucide-react";

const SOURCE_URL = "https://github.com/yw7148/portfolio-frontend";
const GITHUB_URL = "https://github.com/yw7148";
const EMAIL_URL = "mailto:youngwon@youngwon.me";

export const portfolioKo = {
  name: "영원",
  initials: "YW",
  url: "https://youngwon.me",
  location: "대한민국 서울",
  locationLink: "https://www.google.com/maps/place/Seoul",
  description:
    "Kotlin, Spring, 시스템 아키텍처에 집중하는 백엔드 엔지니어",
  summary:
    "복잡도가 올라가도 이해 가능한 백엔드 시스템을 만듭니다. Kotlin/Spring 서비스, Redis/Kafka 기반 안정화 패턴, OCI와 k3s 운영, 실제 서비스로 배포하고 관찰할 수 있는 AI/RAG 파이프라인을 다룹니다.",
  avatarUrl: "/assets/img/youngwon.png",
  labels: {
    about: "소개",
    services: "운영 중인 서비스",
    servicesTitle: "개인 서비스를 하나의 시스템처럼 운영합니다",
    servicesDescription:
      "현재 운영하거나 적극적으로 발전시키는 공개 서비스와 인프라 표면을 압축해 보여줍니다.",
    skills: "핵심 스택",
    work: "경력",
    education: "학력",
    impact: "아키텍처 임팩트",
    contact: "Contact",
    contactTitle: "안정적인 시스템을 함께 만들고 싶다면",
    contactDescription:
      "더 자세한 경력, 아키텍처, 성능 개선, 인프라 이야기는 CV 페이지에서 확인할 수 있습니다.",
    cvTitle: "경력기술서",
    cvSubtitle:
      "시스템 아키텍처, 고성능 인프라, 고사용성 서비스를 중심으로 정리한 상세 경력입니다.",
    localeToggle: "English",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "홈" },
    { href: "/cv", icon: FileTextIcon, label: "CV" },
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
    "불확실한 제품 아이디어를 안정적인 서비스 경계와 전달 계획으로 정리합니다.",
    "캐싱, 인덱싱, 동시성 제어, 관찰 가능성을 통해 느리거나 불안정한 시스템을 개선합니다.",
    "백엔드, 인프라, AI 파이프라인을 연결해 프로토타입이 아니라 운영 가능한 서비스로 만듭니다.",
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
      dates: "운영 중",
      description:
        "포트폴리오, 백엔드 API, 서버 자동화, OCI와 Kubernetes 기반 인프라를 하나의 공개 서비스 표면으로 관리하는 개인 플랫폼입니다.",
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
      title: "Portfolio Frontend",
      href: SOURCE_URL,
      dates: "활성",
      description:
        "랜딩 페이지를 빽빽한 이력서가 아니라 운영 서비스, 아키텍처 작업, CV 상세 정보로 이어지는 이중 언어 프로젝트 허브로 구성합니다.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      image: "/assets/img/youngwon.png",
      links: [
        {
          type: "Source",
          href: SOURCE_URL,
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "AI/RAG Service Lab",
      href: GITHUB_URL,
      dates: "발전 중",
      description:
        "프롬프트 오케스트레이션, 검색 증강 실험, 운영형 AI 기능을 위한 백엔드 통합 패턴을 다루는 서비스 파이프라인 작업 공간입니다.",
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
      location: "서울",
      title: "Backend Engineer",
      start: "2025.01",
      end: "현재",
      description:
        "학습 제품을 위한 백엔드 기반을 구축합니다. 인증/게이트웨이 재개발, AI 기능 연동, 서비스 릴리스, 운영 안정화 작업을 수행했습니다.",
    },
    {
      company: "CJ 제일제당",
      location: "서울",
      title: "IT Development Researcher",
      logoUrl: "/assets/img/CJ_logo_small.jpg",
      start: "2022.01",
      end: "2025.01",
      description:
        "AI/Data Science 팀을 위한 Computational Biology 웹 플랫폼을 구축하고 운영했습니다. Elasticsearch, Redis, CI/CD, 모니터링으로 검색과 통합 조회 성능을 개선했습니다.",
    },
    {
      company: "SolidIT",
      location: "서울",
      title: "Web Developer / Graphics Developer",
      start: "2020.12",
      end: "2021.12",
      description:
        "웹과 OpenGL 기반 3D 인터페이스를 함께 다루며 렌더링 성능을 회복하고 그래픽 중심 도구를 사용 가능한 플랫폼 흐름과 연결했습니다.",
    },
  ],
  education: [
    {
      school: "아주대학교",
      href: "https://www.ajou.ac.kr/en/index.do",
      degree: "소프트웨어학과 학사",
      logoUrl: "/assets/img/ajou_logo.png",
      start: "2016.03",
      end: "2022.02",
    },
  ],
  impacts: [
    {
      title: "인증 서버 및 게이트웨이 재개발",
      period: "Riiid",
      description:
        "JWT 기반 인증과 게이트웨이 진입 흐름을 더 명확한 서비스 경계와 안전한 트래픽 라우팅 관점에서 설계했습니다.",
      tags: ["Kotlin", "Spring", "JWT", "Gateway"],
    },
    {
      title: "Learning Hub 및 TOEFL AI 기능",
      period: "Riiid",
      description:
        "OpenAI 기반 학습 서비스를 추천 전달, 프롬프트 오케스트레이션, 릴리스 준비 흐름과 연결했습니다.",
      tags: ["OpenAI", "AI Pipeline", "Backend Integration"],
    },
    {
      title: "Computational Biology Platform",
      period: "CJ 제일제당",
      description:
        "약 20초 수준의 검색 지연을 1초 미만으로 줄이고 Redis 캐싱으로 통합 조회 성능을 개선했습니다.",
      tags: ["Elasticsearch", "Redis", "Performance", "Monitoring"],
    },
    {
      title: "콘서트 예약 아키텍처",
      period: "항해 플러스",
      description:
        "트래픽이 몰리는 예약 도메인에 Clean Architecture, TDD, Redis 분산 락, Kafka 이벤트 흐름을 적용했습니다.",
      tags: ["Clean Architecture", "TDD", "Redis", "Kafka"],
    },
    {
      title: "개인 OCI/k3s 플랫폼",
      period: "개인 인프라",
      description:
        "OCI, 컨테이너 자동화, k3s 오케스트레이션, 배포 스크립트를 통해 공개 개인 서비스를 운영합니다.",
      tags: ["OCI", "k3s", "Docker", "Terraform"],
    },
    {
      title: "OpenGL 3D 인터페이스 성능 회복",
      period: "SolidIT",
      description:
        "거의 사용할 수 없던 프레임 수준의 렌더링 성능을 안정적인 상호작용이 가능한 범위로 개선했습니다.",
      tags: ["OpenGL", "Performance", "Web Platform"],
    },
  ],
} satisfies PortfolioData;
