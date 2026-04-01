import { useEffect, useState } from 'react'
import './App.css'

type Locale = 'en' | 'ko'
type View = 'home' | 'cv'

type ScreenState = {
  locale: Locale
  view: View
}

type Metric = {
  value: string
  title: string
  detail: string
}

type Strength = {
  code: string
  title: string
  body: string
}

type ProjectCard = {
  name: string
  summary: string
  stack: string[]
  image: string
  alt: string
}

type ExperienceRow = {
  company: string
  period: string
  role: string
}

type ContactItem = {
  label: string
  href: string
}

type SkillGroup = {
  label: string
  items: string[]
}

type BioItem = {
  label: string
  value?: string
  tags?: string[]
}

type CvSnapshotItem = {
  label: string
  value: string
}

type ProjectLog = {
  title: string
  tags: string[]
  status: string
  tone: 'primary' | 'tertiary'
  bullets: string[]
}

type HomeStrengthItem = {
  title: string
  summary: string
}

type HomeProjectItem = {
  status: string
  category: string
  title: string
  summary: string
  stack: string[]
  links: ContactItem[]
  image: string
  alt: string
}

type HomePageData = {
  brand: string
  nav: {
    home: string
    cv: string
    projects: string
    contact: string
  }
  hero: {
    status: string
    titlePrefix: string
    titleAccent: string
    titleSuffix: string
    summary: string
    primaryAction: string
    secondaryAction: string
    schemaLabel: string
  }
  strengths: {
    title: string
    matrixLabel: string
    items: HomeStrengthItem[]
  }
  projects: {
    title: string
    summary: string
    items: HomeProjectItem[]
  }
  ecosystem: {
    title: string
    summary: string
    signals: string[]
    stack: string[]
  }
  cta: {
    title: string
    summary: string
    action: string
  }
  footer: {
    statusText: string
    networkLabel: string
    links: Array<{
      label: string
      href: string
    }>
  }
}

type LocaleContent = {
  nav: {
    home: string
    cv: string
    github: string
    email: string
    source: string
  }
  home: {
    watermark: string
    kicker: string
    titlePrefix: string
    titleAccent: string
    titleSuffix: string
    summary: string
    quote: string
    metricsHeading: string
    metrics: Metric[]
    strengths: Strength[]
    selectedWorkLabel: string
    selectedWorkTitle: string
    selectedWorkHint: string
    projects: ProjectCard[]
    projectAction: string
    bridgeTitle: string
    bridgeBody: string
    bridgeAction: string
  }
  cv: {
    title: string
    status: string
    summary: string
    snapshot: CvSnapshotItem[]
    contactTitle: string
    stackTitle: string
    bioTitle: string
    experienceTitle: string
    experienceMeta: string
    experience: ExperienceRow[]
    logsTitle: string
    logsMeta: string
    contacts: ContactItem[]
    skills: SkillGroup[]
    bio: BioItem[]
    logs: ProjectLog[]
  }
  footer: {
    statusText: string
    documentation: string
    source: string
    status: string
  }
}

const DEFAULT_SCREEN: ScreenState = {
  locale: 'en',
  view: 'home',
}

const GITHUB_URL = 'https://github.com/yw7148'
const SOURCE_URL = 'https://github.com/yw7148/portfolio-frontend'
const EMAIL_URL = 'mailto:youngwon@youngwon.me'
const CURRENT_YEAR = new Date().getFullYear()

// Placeholder until the backend delivers the home payload.
const mockHomeData: Record<Locale, HomePageData> = {
  en: {
    brand: 'Youngwon',
    nav: {
      home: 'Home',
      cv: 'CV',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      status: 'Status: Systems Active',
      titlePrefix: 'Turning uncertain ideas into ',
      titleAccent: 'functional products.',
      titleSuffix: '',
      summary:
        '5th-year full-stack architect specializing in high-availability backend systems and seamless 0-to-1 product development. I build the infrastructure that scales with your ambition.',
      primaryAction: 'Contact',
      secondaryAction: 'View CV & Projects',
      schemaLabel: 'System_Schema_v4.0.1',
    },
    strengths: {
      title: 'Core Strengths',
      matrixLabel: 'Capabilities_Matrix',
      items: [
        {
          title: '0→1 Product Development',
          summary:
            'Lead uncertain ideas all the way to working products, from early architecture and implementation to launch-ready delivery.',
        },
        {
          title: 'Concurrency & Reliability',
          summary:
            'Design concurrency control, caching, and monitoring architectures that keep services stable even under heavy traffic.',
        },
        {
          title: 'Learn, Challenge, Deliver',
          summary:
            'When a project needs a capability I do not have yet, I learn fast, take responsibility, and keep the product moving forward.',
        },
      ],
    },
    projects: {
      title: 'Project Archive',
      summary: 'Two representative builds spanning application and infrastructure ownership.',
      items: [
        {
          status: 'Active',
          category: '01 / Personal Platform',
          title: 'Portfolio Server',
          summary:
            'A personal platform managed as one delivery surface: Terraform-based infrastructure, Kubernetes server operations, a backend in progress, and this frontend client.',
          stack: ['Terraform', 'Kubernetes', 'Backend(WIP)', 'Frontend'],
          links: [
            { label: 'Terraform', href: 'https://github.com/yw7148/terraform' },
            { label: 'server (k8s)', href: 'https://github.com/yw7148/server' },
            { label: 'backend (WIP)', href: 'https://github.com/yw7148/portfolio' },
            { label: 'frontend', href: SOURCE_URL },
          ],
          image: '/assets/img/youngwon.png',
          alt: 'Portfolio server preview',
        },
        {
          status: 'Complete',
          category: '02 / Smart Apartment Service',
          title: 'danjinae',
          summary:
            'A capstone smart apartment project connecting backend APIs and an application layer into one resident-facing product experience.',
          stack: ['Backend', 'Application', 'IoT Service'],
          links: [
            { label: 'backend', href: 'https://github.com/Danjinae/Backend' },
            { label: 'APP', href: 'https://github.com/Danjinae/Application' },
          ],
          image: '/assets/img/danjinae.jpg',
          alt: 'Danjinae smart apartment preview',
        },
      ],
    },
    ecosystem: {
      title: 'Technical Ecosystem',
      summary:
        'The stack I use most often when taking products from backend architecture to frontend delivery and infrastructure operations.',
      signals: ['0→1 Delivery', 'Backend Architecture'],
      stack: ['Kotlin', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'TypeScript', 'React', 'Redis', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'NCP', 'OCI'],
    },
    cta: {
      title: 'Interested in working together?',
      summary:
        'If you are planning a new product or improving an existing system, I would be happy to talk it through with you.',
      action: 'Start a conversation',
    },
    footer: {
      statusText: `© ${CURRENT_YEAR} Young-won Kim. Backend Engineer.`,
      networkLabel: 'youngwon.me',
      links: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'Email', href: EMAIL_URL },
        { label: 'Source', href: SOURCE_URL },
      ],
    },
  },
  ko: {
    brand: 'YOUNGWON',
    nav: {
      home: 'Home',
      cv: 'CV',
      projects: '프로젝트',
      contact: '문의',
    },
    hero: {
      status: '상태: 시스템 가동 중',
      titlePrefix: '불확실한 아이디어를 ',
      titleAccent: '작동하는 제품',
      titleSuffix: '으로 전환합니다.',
      summary:
        '고가용성 백엔드 시스템과 0-to-1 제품 개발에 강한 5년차 백엔드 엔지니어입니다. 아이디어가 서비스로 자라나는 데 필요한 인프라를 설계하고 구현합니다.',
      primaryAction: 'Contact',
      secondaryAction: '이력서',
      schemaLabel: 'System_Schema_v4.0.1',
    },
    strengths: {
      title: 'Core Strengths',
      matrixLabel: 'Capabilities_Matrix',
      items: [
        {
          title: '0→1 제품 개발 주도',
          summary:
            '불확실한 아이디어를 실제 동작하는 제품으로 만들기 위해 설계, 구현, 출시까지 전 과정을 주도합니다.',
        },
        {
          title: '동시성·캐시·모니터링 설계',
          summary:
            '대규모 트래픽에도 안정적으로 동작하도록 동시성 제어, 캐싱, 모니터링 아키텍처를 설계하고 구현합니다.',
        },
        {
          title: '학습과 도전을 주저하지 않음',
          summary:
            '부족하거나 새롭게 필요한 역량이 있다면 빠르게 학습하고 도전하며, 필요한 만큼 직접 책임지고 해결합니다.',
        },
      ],
    },
    projects: {
      title: 'Project Archive',
      summary: '애플리케이션과 인프라를 함께 보여주는 대표 프로젝트 2개입니다.',
      items: [
        {
          status: 'Active',
          category: '01 / 개인 플랫폼',
          title: 'Portfolio Server',
          summary:
            'Terraform 기반 인프라, Kubernetes 서버 운영, 개발 중인 백엔드, 현재 포트폴리오 프론트엔드까지 하나의 흐름으로 관리하는 개인 플랫폼입니다.',
          stack: ['Terraform', 'Kubernetes', 'Backend (WIP)', 'Frontend'],
          links: [
            { label: 'Terraform', href: 'https://github.com/yw7148/terraform' },
            { label: 'server (k8s)', href: 'https://github.com/yw7148/server' },
            { label: 'backend (WIP)', href: 'https://github.com/yw7148/portfolio' },
            { label: 'frontend', href: SOURCE_URL },
          ],
          image: '/assets/img/youngwon.png',
          alt: 'Portfolio server preview',
        },
        {
          status: 'Complete',
          category: '02 / 스마트 아파트 서비스',
          title: 'danjinae',
          summary:
            '백엔드와 애플리케이션 레이어를 함께 구축해 사용자 경험으로 연결한 캡스톤 스마트 아파트 프로젝트입니다.',
          stack: ['Backend', 'Application', 'IoT Service'],
          links: [
            { label: 'backend', href: 'https://github.com/Danjinae/Backend' },
            { label: 'APP', href: 'https://github.com/Danjinae/Application' },
          ],
          image: '/assets/img/danjinae.jpg',
          alt: 'Danjinae smart apartment preview',
        },
      ],
    },
    ecosystem: {
      title: 'Technical Ecosystem',
      summary:
        '백엔드 설계부터 프론트엔드 구현, 배포와 운영까지 실제로 자주 사용하는 기술 스택입니다.',
      signals: ['0→1 제품화', '백엔드 설계'],
      stack: ['Kotlin', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'TypeScript', 'React', 'Redis', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'NCP', 'OCI'],
    },
    cta: {
      title: '함께 이야기 나눠볼까요?',
      summary:
        '새로운 제품을 준비 중이거나 기존 시스템을 개선하려는 계획이 있다면, 편하게 연락 주세요.',
      action: 'Contact',
    },
    footer: {
      statusText: `© ${CURRENT_YEAR} 김영원. 백엔드 엔지니어.`,
      networkLabel: 'youngwon.me',
      links: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: '이메일', href: EMAIL_URL },
        { label: '소스', href: SOURCE_URL },
      ],
    },
  },
}

const portfolioContent: Record<Locale, LocaleContent> = {
  en: {
    nav: {
      home: 'Home',
      cv: 'CV',
      github: 'GitHub',
      email: 'Email',
      source: 'Source',
    },
    home: {
      watermark: 'KIM',
      kicker: 'Systems Architect // Backend Specialist',
      titlePrefix: 'Young-won Kim: Engineering ',
      titleAccent: 'Clarity',
      titleSuffix: ', Speed, and Reliability.',
      summary:
        'A 5th-year backend engineer specializing in legacy rescue, performance tuning, and delivery ownership.',
      quote: 'Built for teams that need clarity, speed, and delivery discipline.',
      metricsHeading: 'System_Performance_Metrics',
      metrics: [
        {
          value: '30x',
          title: 'Search performance',
          detail: 'Latency reduction / Index optimization',
        },
        {
          value: '12x',
          title: 'Integrated query',
          detail: 'Join optimization / Cache layer impl',
        },
        {
          value: '20fps+',
          title: '3D rendering recovered',
          detail: 'GPU threading / Memory management',
        },
      ],
      strengths: [
        {
          code: 'SYS',
          title: 'Clarify The System',
          body: 'Simplifying complex requirements into production-ready structures. Designing for scale before the first line of code is written.',
        },
        {
          code: 'FIX',
          title: 'Fix The Bottleneck',
          body: 'Turning slow, unstable systems into measurable performance gains through deep profiling and observability.',
        },
        {
          code: 'OPS',
          title: 'Ship To Production',
          body: 'Connecting implementation to deployment, documentation, and operations so the work stays useful after launch.',
        },
      ],
      selectedWorkLabel: '[02] SELECTED_WORK',
      selectedWorkTitle: 'Engineering Portfolio',
      selectedWorkHint: 'Scroll to explore // View detailed narratives',
      projectAction: 'View Detail',
      projects: [
        {
          name: 'MUMUK',
          summary: 'Recommendation product focused on user intent parsing and high-availability data delivery.',
          stack: ['Python', 'FastAPI', 'PostgreSQL'],
          image: '/assets/img/mumuk.png',
          alt: 'MUMUK recommendation system preview',
        },
        {
          name: 'SolidIT 3D/Web',
          summary: 'Performance-first graphics platform bridge between browser-based frontends and native 3D engines.',
          stack: ['C++', 'WebGL', 'Rust'],
          image: '/assets/img/solidIT-web.png',
          alt: 'SolidIT graphics platform preview',
        },
        {
          name: 'Danjine (단지네)',
          summary: 'Capstone smart apartment service integrating IoT sensors with high-concurrency event processing.',
          stack: ['Node.js', 'IoT', 'MQTT'],
          image: '/assets/img/danjinae.jpg',
          alt: 'Danjine smart apartment preview',
        },
      ],
      bridgeTitle: 'Need a deeper dive?',
      bridgeBody:
        'View my full career history and project narratives on the CV screen. I document the how as much as the what.',
      bridgeAction: 'Full Career CV',
    },
    cv: {
      title: 'Career Log',
      status: '[SYSTEM_STATUS: ACTIVE_CONTRIBUTOR]',
      summary:
        'Backend engineer focused on reliable systems, launch ownership, and turning uncertain ideas into production-ready products.',
      snapshot: [
        { label: 'Current', value: 'Backend Engineer at Socra AI' },
        { label: 'Strength', value: 'Ability to identify the root cause of bottlenecks, make informed trade-offs, and deliver well-structured systems to production' },
      ],
      contactTitle: 'Communications',
      stackTitle: 'Stack.json',
      bioTitle: 'Bio_Data',
      experienceTitle: 'Experience Lifecycle',
      experienceMeta: 'Table_v2.1',
      experience: [
        {
          company: 'Socra AI',
          period: '2025 — Present',
          role: 'Backend Engineer.',
        },
        {
          company: 'CJ CheilJedang',
          period: '2022 — 2025',
          role: 'IT Development Researcher.',
        },
        {
          company: 'SolidIT',
          period: '2020 — 2021',
          role: 'Web Engineer / OpenGL 3D Interface Engineering.',
        },
      ],
      logsTitle: 'Project Logs',
      logsMeta: 'Detailed_Manifest',
      contacts: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'Email', href: EMAIL_URL },
      ],
      skills: [
        {
          label: '// BACKEND',
          items: ['Kotlin', 'Java', 'Spring Boot', 'Python', 'JPA'],
        },
        {
          label: '// INFRASTRUCTURE',
          items: ['Docker', 'Jenkins', 'Nginx', 'Airflow', 'OCI', 'NCP'],
        },
        {
          label: '// DATA_LAYER',
          items: ['MySQL', 'Redis', 'Elasticsearch'],
        },
      ],
      bio: [
        { label: 'Education', value: 'Ajou University' },
        { label: 'Languages', value: 'TOEIC 935 / IM1 / Business English' },
        {
          label: 'Certifications',
          value: 'Engineer Information Processing (정보처리기사) / SQL Developer (SQLD)',
        },
        {
          label: 'Geographic Nodes',
          tags: ['New Zealand', 'Japan', 'Estonia'],
        },
      ],
      logs: [
        {
          title: 'Socra AI: Learning Hub & TOEFL AI Features',
          tags: ['OPENAI', 'LEARNING_HUB', 'TOEFL'],
          status: '2026_LAUNCH_PREP',
          tone: 'primary',
          bullets: [
            'Integrated the platform with Learning Hub, an AI and analytics server that manages OpenAI API integrations, prompt orchestration, and content serving for the next TOEFL learning products.',
            'Prepared the launch of new TOEFL Recommendation Learning and TOEFL Voca services by coordinating backend flows across recommendation delivery, service integration, and release-readiness work.',
          ],
        },
        {
          title: 'Riiid: Billing Migration & Billing Expansion',
          tags: ['QMS', 'PAYMENT_MIGRATION', 'AUTOBILLING'],
          status: '2025_PAYMENT_MIGRATION',
          tone: 'tertiary',
          bullets: [
            'Migrated valid active subscriptions and 2025 payment data into the unified payment platform while keeping renewal flows operating normally after cutover.',
            'Rebuilt billing operations around webhook-driven payment processing and monitoring to improve reliability and shorten issue detection time.',
            'Expanded localized subscription billing by adding Korea-specific AutoBilling support.',
          ],
        },
        {
          title: 'Riiid: Auth Server & Gateway Redevelopment',
          tags: ['AUTHENTICATION', 'JWT', 'REDIS'],
          status: 'PROD_REDEPLOY',
          tone: 'tertiary',
          bullets: [
            'Engineered a scalable authentication architecture using JWT and a server-side token store to handle rapid user growth.',
            'Re-architected the API Gateway to optimize traffic routing and enhance security protocols between microservices.',
          ],
        },
        {
          title: 'CJ CheilJedang: Computational Biology Web Platform',
          tags: ['ELASTICSEARCH', 'PERFORMANCE', 'BIG_DATA'],
          status: 'PERF_OPTIMIZED',
          tone: 'primary',
          bullets: [
            'Optimized Elasticsearch queries, reducing complex search time from 20 seconds to 0.7 seconds.',
            'Implemented Redis-backed concurrency caching to keep the platform stable under heavy analytical loads.',
          ],
        },
        {
          title: 'Hanghae Plus: Concert Reservation System',
          tags: ['TDD', 'CLEAN_ARCHITECTURE', 'REDIS'],
          status: '63X_THROUGHPUT',
          tone: 'tertiary',
          bullets: [
            'Applied Clean Architecture and TDD to keep the booking domain maintainable with complete core-logic coverage.',
            'Used Redis distributed locking to improve reservation throughput by 63x during peak traffic simulations.',
          ],
        },
        {
          title: 'Portfolio & Public Server',
          tags: ['OCI', 'PLATFORM', 'SELF_HOSTED'],
          status: 'INFRA_ADMIN',
          tone: 'primary',
          bullets: [
            'Owns the Oracle Cloud Infrastructure stack with custom CI/CD, container orchestration, and automated monitoring that keeps public services at 99.9% uptime.',
          ],
        },
      ],
    },
    footer: {
      statusText: '© 2024 TERMINAL_ARCHITECT. ALL_SYSTEMS_OPERATIONAL.',
      documentation: 'Documentation',
      source: 'Source',
      status: 'Status',
    },
  },
  ko: {
    nav: {
      home: '홈',
      cv: '경력기술서',
      github: 'GitHub',
      email: '이메일',
      source: '소스',
    },
    home: {
      watermark: 'KIM',
      kicker: '시스템 아키텍트 // 백엔드 스페셜리스트',
      titlePrefix: '김영원: 시스템의 ',
      titleAccent: '명확성',
      titleSuffix: ', 속도, 그리고 신뢰를 설계합니다.',
      summary:
        '레거시 시스템 개선, 성능 튜닝 및 프로젝트 완수를 전문으로 하는 5년차 백엔드 엔지니어입니다.',
      quote: '명확한 구조, 빠른 실행력, 그리고 책임감 있는 딜리버리가 필요한 팀을 위해 일합니다.',
      metricsHeading: 'System_Performance_Metrics',
      metrics: [
        {
          value: '30배',
          title: '검색 성능 개선',
          detail: '응답 지연 감소 / 인덱스 최적화',
        },
        {
          value: '12배',
          title: '통합 쿼리 가속화',
          detail: '조인 최적화 / 캐시 계층 도입',
        },
        {
          value: '20fps+',
          title: '3D 렌더링 복구',
          detail: 'GPU 스레딩 / 메모리 관리 최적화',
        },
      ],
      strengths: [
        {
          code: 'SYS',
          title: '시스템 명확화 (Clarify)',
          body: '복잡한 요구사항을 단순하고 견고한 프로덕션 구조로 바꿉니다. 첫 줄의 코드를 작성하기 전, 확장을 고려한 설계를 우선합니다.',
        },
        {
          code: 'FIX',
          title: '병목 지점 해결 (Fix)',
          body: '느리고 불안정한 시스템을 수치로 증명 가능한 성능 개선으로 바꿉니다. 프로파일링과 관측성으로 장애 지점을 찾아냅니다.',
        },
        {
          code: 'OPS',
          title: '실제 배포 및 운영 (Ship)',
          body: '단순 구현을 넘어 배포, 문서화, 운영 환경까지 연결합니다. 작성된 코드가 실제 서비스 가치로 이어지게 합니다.',
        },
      ],
      selectedWorkLabel: '[02] 엄선_프로젝트',
      selectedWorkTitle: '엔지니어링 포트폴리오',
      selectedWorkHint: '스크롤하여 탐색 // 상세 내러티브 확인',
      projectAction: '상세 보기',
      projects: [
        {
          name: 'MUMUK',
          summary: '사용자 의도 분석과 고가용성 데이터 전달에 집중한 추천 시스템 제품입니다.',
          stack: ['Python', 'FastAPI', 'PostgreSQL'],
          image: '/assets/img/mumuk.png',
          alt: 'MUMUK 추천 시스템 미리보기',
        },
        {
          name: 'SolidIT 3D/Web',
          summary: '브라우저 기반 프론트엔드와 네이티브 3D 엔진을 연결하는 성능 중심의 그래픽 플랫폼 브릿지입니다.',
          stack: ['C++', 'WebGL', 'Rust'],
          image: '/assets/img/solidIT-web.png',
          alt: 'SolidIT 그래픽 플랫폼 미리보기',
        },
        {
          name: '단지네 (Danjine)',
          summary: 'IoT 센서와 고성능 이벤트 처리를 통합한 캡스톤 스마트 아파트먼트 서비스입니다.',
          stack: ['Node.js', 'IoT', 'MQTT'],
          image: '/assets/img/danjinae.jpg',
          alt: '단지네 스마트 아파트 미리보기',
        },
      ],
      bridgeTitle: '더 자세한 이력이 궁금하신가요?',
      bridgeBody:
        "경력기술서에서 전체 커리어 히스토리와 프로젝트 상세 내러티브를 확인하실 수 있습니다. 저는 결과만큼이나 '과정'을 기록하는 데 집중합니다.",
      bridgeAction: '전체 경력 확인하기',
    },
    cv: {
      title: '경력 로그',
      status: '[시스템_상태: 활성_기여자]',
      summary:
        '신뢰성 높은 백엔드 시스템, AI 제품화, 그리고 출시까지 책임지는 실행력을 중심으로 일하는 백엔드 엔지니어입니다.',
      snapshot: [
        { label: '현재', value: 'Socra AI Backend Engineer' },
        { label: '강점', value: '병목의 본질을 파악하는 분석력, 그리고 Trade-off를 고려한 구조적 설계 및 출시까지 완수하는 실행력' },
      ],
      contactTitle: 'Communications',
      stackTitle: 'Stack.json',
      bioTitle: 'Bio_Data',
      experienceTitle: '경력 생애주기',
      experienceMeta: 'Table_v2.1',
      experience: [
        {
          company: 'Socra AI',
          period: '2025 — 현재',
          role: 'Backend Engineer',
        },
        {
          company: 'CJ 제일제당',
          period: '2022 — 2025',
          role: 'IT 개발 연구원',
        },
        {
          company: 'SolidIT',
          period: '2020 — 2021',
          role: '웹 개발 및 OpenGL 기반 3D 인터페이스 엔지니어링.',
        },
      ],
      logsTitle: '프로젝트 로그',
      logsMeta: '상세_명세',
      contacts: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'Email', href: EMAIL_URL },
      ],
      skills: [
        {
          label: '// Backend',
          items: ['Kotlin', 'Java', 'Spring Boot', 'Python', 'JPA'],
        },
        {
          label: '// Infrastructure',
          items: ['Docker', 'Jenkins', 'Nginx', 'Airflow', 'OCI', 'NCP'],
        },
        {
          label: '// Data Layer',
          items: ['MySQL', 'Redis', 'RabbitMQ', 'Kafka', 'Elasticsearch'],
        },
      ],
      bio: [
        { label: '학력', value: '아주대학교 (Ajou University)' },
        { label: '어학', value: 'TOEIC 935 / IM1 / Business English' },
        { label: '자격증', value: '정보처리기사 / SQLD' },
        {
          label: '글로벌 경험',
          tags: ['뉴질랜드', '일본', '에스토니아'],
        },
      ],
      logs: [
        {
          title: 'Socra AI: Learning Hub 및 TOEFL AI 기능',
          tags: ['OPENAI', 'LEARNING_HUB', 'TOEFL'],
          status: '2026_런칭_준비',
          tone: 'primary',
          bullets: [
            'OpenAI API 연동, 프롬프팅, 콘텐츠 서빙, 분석 기능을 담당하는 Learning Hub 서버와 Santa 백엔드를 연동해 차세대 토플 학습 기능의 기반을 구축했습니다.',
            '새로운 토플 추천학습과 TOEFL Voca 서비스의 런칭을 준비하며 추천 로직, 콘텐츠 전달 흐름, 서비스 연동 포인트를 정비했습니다.',
          ],
        },
        {
          title: '뤼이드: 결제 Migration 및 Billing Expansion',
          tags: ['QMS', 'PAYMENT_MIGRATION', 'AUTOBILLING'],
          status: '2025_결제_마이그레이션',
          tone: 'tertiary',
          bullets: [
            '유효한 활성 구독과 2025년 결제 데이터를 통합 결제 플랫폼으로 마이그레이션하고, 전환 이후에도 구독 갱신 흐름이 정상 동작하도록 안정화했습니다.',
            'Webhook 기반 결제 처리와 모니터링 체계를 재정비해 결제 운영 신뢰도를 높이고 이슈 감지 시간을 단축했습니다.',
            '한국 시장에 AutoBilling 기반 구독 결제를 추가해 로컬 결제 플로우와 정기결제 확장을 지원했습니다.',
          ],
        },
        {
          title: '뤼이드: 인증 서버 및 게이트웨이 재구축',
          tags: ['인증', 'JWT', 'REDIS'],
          status: '운영_배포_완료',
          tone: 'tertiary',
          bullets: [
            '급격한 사용자 성장에 대응하기 위해 JWT와 서버 사이드 토큰 저장소를 활용한 확장 가능한 인증 아키텍처를 설계하고 구현했습니다.',
            '마이크로서비스 간 보안 프로토콜을 강화하고 트래픽 라우팅을 효율화하기 위해 API 게이트웨이를 전면 재설계했습니다.',
          ],
        },
        {
          title: 'CJ 제일제당: 계산 생물학 웹 플랫폼',
          tags: ['ELASTICSEARCH', '성능최적화', '빅데이터'],
          status: '성능_최적화_완료',
          tone: 'primary',
          bullets: [
            'Elasticsearch 쿼리 성능을 개선해 복잡한 검색 소요 시간을 20초에서 0.7초로 단축했습니다.',
            '대규모 분석 부하 환경에서도 안정성을 유지하기 위해 Redis 기반 동시성 캐싱 전략을 도입했습니다.',
          ],
        },
        {
          title: '항해 플러스: 콘서트 예약 시스템',
          tags: ['TDD', '클린아키텍처', 'REDIS'],
          status: '처리량_63배_향상',
          tone: 'tertiary',
          bullets: [
            '클린 아키텍처와 TDD 원칙을 적용해 핵심 예약 로직의 유지보수성과 높은 테스트 신뢰도를 확보했습니다.',
            'Redis 분산 락을 활용해 피크 트래픽 시뮬레이션에서 예약 처리량을 기존 대비 63배 향상했습니다.',
          ],
        },
        {
          title: '포트폴리오 및 퍼블릭 서버 운영',
          tags: ['OCI', '플랫폼', '셀프호스팅'],
          status: '인프라_관리',
          tone: 'primary',
          bullets: [
            'Oracle Cloud Infrastructure 기반 인프라 스택 전체를 운영하며 커스텀 CI/CD, 컨테이너 오케스트레이션, 자동화 모니터링으로 대외 서비스 99.9% 가동률을 유지했습니다.',
          ],
        },
      ],
    },
    footer: {
      statusText: '© 2024 TERMINAL_ARCHITECT. 모든 시스템 정상 작동 중.',
      documentation: '문서화',
      source: '소스코드',
      status: '시스템 상태',
    },
  },
}

function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'ko'
}

function isView(value: string | undefined): value is View {
  return value === 'home' || value === 'cv'
}

function readScreenFromHash(): ScreenState {
  if (typeof window === 'undefined') {
    return DEFAULT_SCREEN
  }

  const hash = window.location.hash.replace(/^#\/?/, '')
  const [locale, view] = hash.split('/')

  return {
    locale: isLocale(locale) ? locale : DEFAULT_SCREEN.locale,
    view: isView(view) ? view : DEFAULT_SCREEN.view,
  }
}

function buildHash(screen: ScreenState) {
  return `#${screen.locale}/${screen.view}`
}

function scrollToSection(sectionId: string) {
  if (typeof document === 'undefined') {
    return
  }

  const section = document.getElementById(sectionId)
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.58 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  )
}

function LocaleSwitch({
  locale,
  onChangeLocale,
}: {
  locale: Locale
  onChangeLocale: (locale: Locale) => void
}) {
  return (
    <div className="locale-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={locale === 'ko' ? 'locale-button is-active' : 'locale-button'}
        onClick={() => onChangeLocale('ko')}
      >
        KR
      </button>
      <button
        type="button"
        className={locale === 'en' ? 'locale-button is-active' : 'locale-button'}
        onClick={() => onChangeLocale('en')}
      >
        EN
      </button>
    </div>
  )
}

function HeaderIconLinks() {
  return (
    <div className="header-icon-links">
      <a
        className="header-icon-button"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub profile"
      >
        <GitHubIcon />
      </a>
      <a
        className="header-icon-button"
        href={EMAIL_URL}
        aria-label="Send email"
      >
        <EmailIcon />
      </a>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState<ScreenState>(() => readScreenFromHash())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const normalizedScreen = readScreenFromHash()
    const normalizedHash = buildHash(normalizedScreen)

    if (window.location.hash !== normalizedHash) {
      window.history.replaceState(null, '', normalizedHash)
    }

    const syncScreen = () => {
      setScreen(readScreenFromHash())
    }

    window.addEventListener('hashchange', syncScreen)

    return () => {
      window.removeEventListener('hashchange', syncScreen)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [screen.locale, screen.view])

  const content = portfolioContent[screen.locale]
  const homeData = mockHomeData[screen.locale]

  const navigate = (view: View, locale = screen.locale) => {
    if (typeof window === 'undefined') {
      return
    }

    const nextScreen = { locale, view }
    const nextHash = buildHash(nextScreen)

    if (window.location.hash === nextHash) {
      setScreen(nextScreen)
      window.scrollTo(0, 0)
      return
    }

    window.location.hash = nextHash
  }

  return (
    <div className="app-shell">
      {screen.view === 'home' ? (
        <HomeScreen
          data={homeData}
          locale={screen.locale}
          onOpenCv={() => navigate('cv')}
          onChangeLocale={(locale) => navigate('home', locale)}
        />
      ) : (
        <>
          <TopBar
            screen={screen}
            onNavigate={navigate}
          />
          <CVScreen content={content} />
          <Footer footer={homeData.footer} />
        </>
      )}
    </div>
  )
}

function TopBar({
  screen,
  onNavigate,
}: {
  screen: ScreenState
  onNavigate: (view: View, locale?: Locale) => void
}) {
  return (
    <header className="topbar">
      <div className="container topbar-row">
        <button
          type="button"
          className="brand"
          onClick={() => onNavigate('home')}
          aria-label="Open portfolio home"
        >
          Youngwon
        </button>

        <nav className="topbar-nav" aria-label="Primary">
          <button
            type="button"
            className={screen.view === 'home' ? 'nav-link is-active' : 'nav-link'}
            onClick={() => onNavigate('home')}
          >
            HOME
          </button>
          <button
            type="button"
            className={screen.view === 'cv' ? 'nav-link is-active' : 'nav-link'}
            onClick={() => onNavigate('cv')}
          >
            CV
          </button>
        </nav>

        <div className="topbar-actions">
          <LocaleSwitch
            locale={screen.locale}
            onChangeLocale={(locale) => onNavigate(screen.view, locale)}
          />
          <HeaderIconLinks />
        </div>
      </div>
    </header>
  )
}

function HomeScreen({
  data,
  locale,
  onOpenCv,
  onChangeLocale,
}: {
  data: HomePageData
  locale: Locale
  onOpenCv: () => void
  onChangeLocale: (locale: Locale) => void
}) {
  const [isTechExpanded, setIsTechExpanded] = useState(false)
  const mobileVisibleTechCount = 5
  const hiddenTechCount = Math.max(0, data.ecosystem.stack.length - mobileVisibleTechCount)
  const techToggleLabel = isTechExpanded
    ? locale === 'ko' ? '접기' : 'Show Less'
    : locale === 'ko' ? `${hiddenTechCount}개 더 보기` : `Show ${hiddenTechCount} More`

  return (
    <div className="terminal-home-shell">
      <header className="terminal-home-topbar">
        <div className="container terminal-home-topbar-row">
          <button
            type="button"
            className="terminal-home-brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {data.brand}
          </button>

          <nav className="terminal-home-nav" aria-label="Primary">
            <button type="button" className="terminal-home-nav-link is-active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              HOME
            </button>
            <button type="button" className="terminal-home-nav-link" onClick={onOpenCv}>
              CV
            </button>
          </nav>

          <div className="terminal-home-topbar-actions">
            <LocaleSwitch locale={locale} onChangeLocale={onChangeLocale} />
            <HeaderIconLinks />
          </div>
        </div>
      </header>

      <main className="terminal-home-main">
        <section className="terminal-home-hero">
          <div className="container terminal-home-hero-grid">
            <div className="terminal-home-hero-copy">
              <div className="terminal-home-status-pill">
                {data.hero.status}
              </div>

              <h1 className="terminal-home-title">
                {data.hero.titlePrefix}
                <span>{data.hero.titleAccent}</span>
                {data.hero.titleSuffix}
              </h1>

              <p className="terminal-home-summary">{data.hero.summary}</p>

              <div className="terminal-home-actions">
                <button
                  type="button"
                  className="terminal-home-primary-button"
                  onClick={() => scrollToSection('home-contact')}
                >
                  {data.hero.primaryAction}
                </button>
                <button
                  type="button"
                  className="terminal-home-secondary-button"
                  onClick={onOpenCv}
                >
                  {data.hero.secondaryAction}
                </button>
              </div>
            </div>

            <div className="terminal-home-schema-card">
              <img
                className="terminal-home-schema-photo"
                src="/assets/img/youngwon.png"
                alt="Portrait of Youngwon"
              />
              <div className="terminal-home-schema-grid" aria-hidden="true" />
              <p>{data.hero.schemaLabel}</p>
            </div>
          </div>
        </section>

        <section className="terminal-home-strengths">
          <div className="container">
            <div className="terminal-home-section-heading">
              <div>
                <h2>{data.strengths.title}</h2>
                <div className="terminal-home-divider" />
              </div>
              <p>{data.strengths.matrixLabel}</p>
            </div>

            <div className="terminal-home-strength-grid">
              {data.strengths.items.map((item) => (
                <article key={item.title} className="terminal-home-strength-card">
                  <span className="terminal-home-strength-icon" aria-hidden="true">
                    +
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terminal-home-projects" id="home-projects">
          <div className="container">
            <div className="terminal-home-project-heading">
              <h2>{data.projects.title}</h2>
              <p>{data.projects.summary}</p>
            </div>

            <div className="terminal-home-project-grid">
              {data.projects.items.map((project) => (
                <article key={project.title} className="terminal-home-project-card">
                  <div className="terminal-home-project-media">
                    <img src={project.image} alt={project.alt} />
                    <span>{project.status}</span>
                  </div>

                  <div className="terminal-home-project-layout">
                    <div className="terminal-home-project-meta">
                      <p>{project.category}</p>
                      <div className="terminal-home-stack">
                        {project.stack.map((item) => (
                          <span key={`${project.title}-${item}`}>{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="terminal-home-project-copy">
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>

                      <div className="terminal-home-project-links">
                        {project.links.map((link) => (
                          <a key={`${project.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
                            <span>{link.label}</span>
                            <span aria-hidden="true">-&gt;</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terminal-home-ecosystem">
          <div className="container terminal-home-ecosystem-grid">
            <div className="terminal-home-ecosystem-copy">
              <h2>{data.ecosystem.title}</h2>
              <p>{data.ecosystem.summary}</p>

              <div className="terminal-home-signals">
                {data.ecosystem.signals.map((signal) => (
                  <div key={signal} className="terminal-home-signal">
                    <span aria-hidden="true" />
                    <p>{signal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={isTechExpanded ? 'terminal-home-tech-stack-shell is-expanded' : 'terminal-home-tech-stack-shell'}>
              <div id="home-tech-grid" className="terminal-home-tech-grid">
                {data.ecosystem.stack.map((item) => (
                  <article key={item} className="terminal-home-tech-chip">
                    <span aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>

              {hiddenTechCount > 0 ? (
                <button
                  type="button"
                  className="terminal-home-tech-toggle"
                  onClick={() => setIsTechExpanded((value) => !value)}
                  aria-controls="home-tech-grid"
                  aria-expanded={isTechExpanded}
                >
                  {techToggleLabel}
                </button>
              ) : null}
            </div>
          </div>
        </section>

        <section className="terminal-home-cta" id="home-contact">
          <div className="container terminal-home-cta-inner">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.summary}</p>
            <a href={EMAIL_URL} className="terminal-home-primary-button">
              {data.cta.action}
            </a>
          </div>
        </section>
      </main>

      <Footer footer={data.footer} />
    </div>
  )
}

function CVScreen({ content }: { content: LocaleContent }) {
  return (
    <main className="screen screen-cv">
      <div className="container">
        <header className="cv-header">
          <div className="cv-header-copy">
            <span className="cv-status-pill">{content.cv.status}</span>
            <h1>{content.cv.title}</h1>
            <p className="cv-summary">{content.cv.summary}</p>
          </div>

          <div className="cv-snapshot-list">
            {content.cv.snapshot.map((item) => (
              <article key={item.label} className="cv-snapshot-item">
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </header>

        <div className="cv-grid">
          <div className="cv-content">
            <section className="content-block">
              <div className="section-heading section-heading--compact">
                <h2 className="section-title-large">{content.cv.experienceTitle}</h2>
                <p className="section-hint">{content.cv.experienceMeta}</p>
              </div>

              <div className="cv-panel timeline-list" aria-label={content.cv.experienceTitle}>
                {content.cv.experience.map((entry) => (
                  <article key={`${entry.company}-${entry.period}`} className="timeline-item">
                    <div className="timeline-copy">
                      <strong>{entry.company}</strong>
                      <p>{entry.role}</p>
                    </div>
                    <span className="timeline-period">{entry.period}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-block">
              <div className="section-heading section-heading--compact">
                <h2 className="section-title-large">{content.cv.logsTitle}</h2>
                <p className="section-hint">{content.cv.logsMeta}</p>
              </div>

              <div className="log-list">
                {content.cv.logs.map((log) => (
                  <article key={log.title} className={`log-card tone-${log.tone}`}>
                    <div className="log-meta">
                      <span className="status-pill">{log.status}</span>
                      <p className="tag-line">{log.tags.map((tag) => `#${tag}`).join(' ')}</p>
                    </div>
                    <div className="log-main">
                      <h3>{log.title}</h3>
                      <ul className="log-points">
                        {log.bullets.map((bullet, index) => (
                          <li key={`${log.title}-${index}`}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="sidebar">
            <section className="sidebar-card">
              <div className="sidebar-section sidebar-section--flush">
                <h2 className="panel-title">{content.cv.contactTitle}</h2>
                <div className="contact-list">
                  {content.cv.contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="contact-link"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <span>{contact.label}</span>
                      <span aria-hidden="true">-&gt;</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="sidebar-section stack-section">
                <h2 className="sidebar-title">{content.cv.stackTitle}</h2>

                <div className="stack-groups">
                  {content.cv.skills.map((group) => (
                    <div key={group.label} className="stack-group">
                      <p>{group.label}</p>
                      <div className="chip-row">
                        {group.items.map((item) => (
                          <span key={`${group.label}-${item}`} className="chip chip--dense">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="sidebar-card sidebar-card--soft">
              <div className="sidebar-section sidebar-section--flush">
                <h2 className="panel-title panel-title--muted">{content.cv.bioTitle}</h2>

                <div className="bio-list">
                  {content.cv.bio.map((item) => (
                    <article key={item.label} className="bio-item">
                      <p>{item.label}</p>
                      {item.value ? <strong>{item.value}</strong> : null}
                      {item.tags ? (
                        <div className="chip-row">
                          {item.tags.map((tag) => (
                            <span key={`${item.label}-${tag}`} className="outline-chip">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}

function Footer({ footer }: { footer: HomePageData['footer'] }) {
  return (
    <footer className="terminal-home-footer">
      <div className="container terminal-home-footer-row">
        <p>{footer.statusText}</p>

        <div className="terminal-home-footer-links">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <div className="terminal-home-network">
          <span aria-hidden="true" />
          <p>{footer.networkLabel}</p>
        </div>
      </div>
    </footer>
  )
}

export default App
