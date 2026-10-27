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

export const portfolioKo = {
  name: "영원",
  initials: "YW",
  url: "https://youngwon.me",
  location: "대한민국 서울",
  locationLink: "https://www.google.com/maps/place/Seoul",
  description:
    "해결할 문제를 정의하고, 그에 맞는 설계 기준을 세우는 Kotlin/Spring 백엔드 엔지니어입니다.",
  summary:
    "요구사항의 목적을 파악해 시스템이 지켜야 할 조건과 완료의 기준을 정합니다. 구현 이후의 데이터와 후속 처리까지 추적해, 의도한 결과에 도달했는지 확인합니다.",
  avatarUrl: "/assets/img/youngwon.png",
  labels: {
    about: "소개",
    cases: "대표 프로젝트 사례",
    casesTitle: "문제와 제약에서 출발한 설계 결정",
    casesDescription: "각 작업에서 맡은 역할, 선택의 이유와 확인한 결과를 정리했습니다.",
    role: "맡은 역할",
    problem: "문제와 제약",
    decision: "선택과 판단",
    outcome: "결과와 검증",
    writing: "기술적 고민과 문제 해결",
    writingDescription: "프로젝트에서 만난 질문을 더 작은 단위로 파고들고, 설계의 선택과 한계를 기록합니다.",
    blog: "블로그 전체 글",
    projects: "공개 운영 프로젝트",
    projectsDescription: "직접 구성하고 운영하는 인프라와 공개 결과물입니다.",
    skills: "핵심 스택",
    contact: "Contact",
    contactTitle: "안정적인 시스템을 함께 만들고 싶다면",
    contactDescription:
      "서비스의 요구사항과 제약부터 함께 고민하고 싶다면 이메일로 연락해 주세요.",
    localeToggle: "English",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "홈" },
    { href: "/#projects", icon: BriefcaseBusinessIcon, label: "프로젝트" },
    { href: "/#writing", icon: BookOpenIcon, label: "글" },
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
      title: "결제 데이터 이전의 완료 기준을 다음 갱신까지",
      context: "Socra AI · 결제 마이그레이션",
      role: "기존 데이터 분석, 식별키 선정, 이전 실행·상태 추적과 서비스 결제 연동 변경을 담당했습니다.",
      problem: "담당자와 문서가 부족한 상황에서 과거 데이터를 이전하고, 이후 구독 이벤트가 기존 주문과 연결되도록 해야 했습니다.",
      decision: "구독과 개별 결제의 식별 기준을 나누고 처리 단계를 기록했습니다. 전환 중에는 신규 결제를 제한하는 대신 기존 사용자의 이용 권한을 보호했습니다.",
      outcome: "두 서버의 정산 결과를 대조하고 이후 갱신 이벤트까지 추적했습니다. 식별 근거가 부족했던 예외 구독 19건은 다음 갱신 시점에 확인해 보정을 마쳤습니다.",
      technologies: ["Kotlin", "Spring Boot", "Python", "Data Migration"],
    },
    {
      id: "recommendation-v2",
      title: "추천 모델이 바뀌어도 과거 학습의 의미를 지키기",
      context: "Santa TOEFL · 추천학습 v2 전환",
      role: "TOEFL과 LearningHub의 추천 연동, 스냅샷 모델과 소비처 전환을 구현했습니다.",
      problem: "skill 중심 추천이 점수·취약 영역 중심으로 바뀌면서 기존 추천을 새 화면에서 조회하고 신·구 경로를 함께 지원해야 했습니다.",
      decision: "학습 회차는 TOEFL이 소유하도록 경계를 정하고, 과거 추천에 없던 정보는 추정하지 않았습니다. 두 버전이 같은 추천을 다룰 때 저장 위치와 락 키를 공유했습니다.",
      outcome: "과거 스냅샷 변환과 신규 추천 경로를 구분하고, 기준점의 사용자 소유권을 검증했습니다. 소비처 전환 후 TOEFL의 v1 호출 경로를 제거했습니다.",
      technologies: ["Kotlin", "Spring Boot", "PostgreSQL", "Redis"],
    },
    {
      id: "search-performance",
      title: "검색 방식과 데이터 특성에서 병목 찾기",
      context: "CJ 제일제당 · 검색·통합 조회 성능 개선",
      role: "검색 데이터 유형을 분석하고 검색 인덱스와 통합 조회 캐시를 설계·적용했습니다.",
      problem: "부분 문자열 검색은 최악의 경우 약 20초, 여러 데이터를 조회해 재가공하는 API는 약 6초가 걸렸습니다.",
      decision: "검색에는 Elasticsearch 인덱싱을 적용하고, 통합 조회에는 데이터 특성에 맞춘 Redis 캐시와 만료 정책을 적용했습니다.",
      outcome: "검색 응답을 약 20초에서 0.7초로, 캐시 적중 시 통합 조회를 약 6초에서 0.5초로 개선했습니다. 통합 조회 수치는 캐시 적중 조건의 결과입니다.",
      technologies: ["Java", "Spring Boot", "Elasticsearch", "Redis"],
    },
  ],
  writing: [
    {
      label: "트랜잭션을 나눴더니 이벤트는 데이터를 잃었다",
      href: "https://blog.youngwon.me/posts/transaction-boundaries-and-events/",
      description: "트랜잭션 경계를 바꿀 때 이벤트가 보장하는 완료 상태와 데이터 가시성까지 다시 살펴본 과정입니다.",
    },
    {
      label: "멱등성만으로는 학습 기록을 지킬 수 없다",
      href: "https://blog.youngwon.me/posts/api-idempotency-boundaries/",
      description: "중복 요청과 실제 재학습을 구분하기 위해 학습 시도의 식별자와 상태 전이를 설계합니다.",
    },
    {
      label: "실시간 랭킹은 정말 실시간이어야 할까",
      href: "https://blog.youngwon.me/posts/realtime-ranking-with-snapshot/",
      description: "스냅샷 기반 랭킹에서 정확성, 조회 비용, 사용자가 보는 일관성 사이의 선택을 살펴봅니다.",
    },
  ],
  projects: [
    {
      title: "개인 서비스 운영 플랫폼",
      description: "OCI의 k3s 런타임과 홈 노드의 Argo CD를 구성하고, GitOps로 배포와 운영 설정을 관리합니다.",
      technologies: ["OCI", "k3s", "Argo CD", "Terraform"],
      links: [{ label: "인프라 구성 저장소", href: "https://github.com/yw7148/server" }],
    },
  ],
} satisfies PortfolioData;
