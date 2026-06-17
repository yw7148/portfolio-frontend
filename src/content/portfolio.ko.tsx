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

export const portfolioKo = {
  name: "김영원",
  initials: "YK",
  url: "https://youngwon.me",
  location: "대한민국 서울",
  locationLink: "https://www.google.com/maps/place/Seoul",
  description:
    "데이터 적합성, 멱등성, 엣지 케이스를 기준으로 Kotlin/Spring 백엔드를 설계하는 엔지니어입니다.",
  summary:
    "풀스택을 다룰 수 있지만 중심은 백엔드입니다. 요구사항을 데이터 모델과 상태 전이 관점에서 검증하고, 재시도와 중복 요청에도 흔들리지 않는 멱등한 흐름, 동시성/누락 데이터 같은 엣지 케이스까지 고려해 운영 가능한 시스템을 만듭니다.",
  avatarUrl: "/assets/img/youngwon.png",
  labels: {
    about: "소개",
    services: "운영 중인 서비스",
    servicesTitle: "백엔드 시스템을 운영 가능한 형태로 다듬습니다",
    servicesDescription:
      "데이터 모델, API 경계, 비동기 처리, 운영 인프라를 함께 고려해 만든 작업들을 압축해 보여줍니다.",
    skills: "핵심 스택",
    work: "경력",
    education: "학력",
    impact: "아키텍처 임팩트",
    contact: "연락",
    contactTitle: "안정적인 시스템을 함께 만들고 싶다면",
    contactDescription:
      "더 자세한 경력, 아키텍처, 성능 개선, 인프라 이야기는 CV 페이지에서 확인할 수 있습니다.",
    cvTitle: "경력기술서",
    cvSubtitle:
      "데이터 적합성, 멱등한 처리 흐름, 운영 안정성을 중심으로 정리한 상세 경력입니다.",
    localeToggle: "English",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "홈" },
    { href: "/cv", icon: FileTextIcon, label: "CV" },
    { href: "/#projects", icon: BriefcaseBusinessIcon, label: "프로젝트" },
    { href: "/#contact", icon: MailIcon, label: "연락" },
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
    "요구사항을 데이터 모델과 상태 전이 관점에서 검증해 도메인에 맞는 저장/조회 경계를 잡습니다.",
    "재시도, 중복 요청, 비동기 이벤트가 들어와도 결과가 흔들리지 않도록 멱등한 처리 흐름을 설계합니다.",
    "정상 경로 밖의 권한, 동시성, 누락/불일치 데이터까지 먼저 의심하며 운영 가능한 백엔드를 만듭니다.",
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
        "백엔드 API, 서버 자동화, OCI와 Kubernetes 기반 인프라를 하나의 운영 경계 안에서 관리하는 개인 플랫폼입니다.",
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
      dates: "정리 중",
      description:
        "데이터 검증, 트랜잭션 경계, 멱등한 요청 처리, 재시도/중복 이벤트 대응처럼 반복해서 적용하는 백엔드 설계 기준을 정리합니다.",
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
        "AI/Data Science 팀을 위한 Computational Biology 플랫폼을 구축하고 운영했습니다. Elasticsearch, Redis, CI/CD, 모니터링으로 검색과 통합 조회 성능을 개선했습니다.",
    },
    {
      company: "SolidIT",
      location: "서울",
      title: "Graphics / Platform Developer",
      start: "2020.12",
      end: "2021.12",
      description:
        "OpenGL 기반 3D 도구의 렌더링 성능을 회복하고 그래픽 중심 기능을 안정적으로 사용할 수 있는 플랫폼 흐름과 연결했습니다.",
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
      tags: ["OpenGL", "Performance", "3D Platform"],
    },
  ],
} satisfies PortfolioData;
