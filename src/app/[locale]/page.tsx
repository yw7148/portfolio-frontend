/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPortfolio } from "@/content";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Code2,
  Container,
  Database,
  HardDrive,
  Lock,
  Mail,
  Network,
  Server,
  Shield,
  Zap,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getPortfolio(locale);
  const copy =
    locale === "ko"
      ? {
          eyebrow: "Backend Engineer",
          title: "데이터가 어긋나지 않는 백엔드를 설계합니다",
          primaryCta: "CV 보기",
          secondaryCta: "프로젝트 보기",
          contactCta: "연락하기",
          strengthsTitle: "핵심 역량",
          strengthTitles: ["데이터 적합성", "멱등한 흐름", "엣지 케이스"],
          techStackTitle: "기술 스택",
          architectureTitle: "백엔드 설계 관점",
          architectureDescription:
            "요청, 상태, 데이터가 어긋나지 않도록 API 경계, 트랜잭션, 비동기 처리, 운영 관찰 지점을 함께 봅니다.",
          focusTitle: "현재 집중 분야",
          focusItems: ["데이터 적합성", "멱등한 처리", "엣지 케이스 대응"],
          architectureLayers: [
            {
              title: "Domain & API",
              items: ["Kotlin", "Spring Boot", "Validation"],
            },
            {
              title: "Data Layer",
              items: ["PostgreSQL", "Transactions", "Consistency"],
            },
            {
              title: "Async & Ops",
              items: ["Redis", "Kafka", "Observability"],
            },
          ],
          supportLayers: [
            { title: "데이터 적합성", value: "도메인 모델 / 제약 조건" },
            { title: "멱등성", value: "재시도 / 중복 요청" },
            { title: "엣지 케이스", value: "동시성 / 누락 데이터" },
          ],
        }
      : {
          eyebrow: "Backend Engineer",
          title: "Designing backends where data stays aligned",
          primaryCta: "View CV",
          secondaryCta: "View Projects",
          contactCta: "Contact",
          strengthsTitle: "Core Strengths",
          strengthTitles: [
            "Data Fitness",
            "Idempotent Flows",
            "Edge Cases",
          ],
          techStackTitle: "Tech Stack",
          architectureTitle: "Backend Design Lens",
          architectureDescription:
            "I look at API boundaries, transactions, async workflows, and observability together so requests, state, and data stay aligned.",
          focusTitle: "Current Focus",
          focusItems: [
            "Data fitness",
            "Idempotent handling",
            "Edge-case coverage",
          ],
          architectureLayers: [
            {
              title: "Domain & API",
              items: ["Kotlin", "Spring Boot", "Validation"],
            },
            {
              title: "Data Layer",
              items: ["PostgreSQL", "Transactions", "Consistency"],
            },
            {
              title: "Async & Ops",
              items: ["Redis", "Kafka", "Observability"],
            },
          ],
          supportLayers: [
            { title: "Data Fitness", value: "Domain model / constraints" },
            { title: "Idempotency", value: "Retries / duplicate requests" },
            { title: "Edge Cases", value: "Concurrency / missing data" },
          ],
        };
  const strengthIcons = [Server, Shield, Zap];
  const architectureIcons = [Server, Database, Network];
  const supportIcons = [HardDrive, Zap, Lock];

  return (
    <main className="min-h-dvh flex flex-col gap-20 relative">
      <section id="hero">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="order-1 flex flex-col gap-6">
            <div className="space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {copy.eyebrow}
                </p>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={copy.title}
              />
              <BlurFadeText
                className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
                delay={BLUR_FADE_DELAY * 3}
                text={data.summary}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {copy.primaryCta}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2.5 font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {copy.secondaryCta}
                </a>
                <a
                  href={`mailto:${data.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2.5 font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Mail className="size-4" aria-hidden />
                  {copy.contactCta}
                </a>
              </div>
            </BlurFade>
          </div>

          <BlurFade
            delay={BLUR_FADE_DELAY * 2}
            className="order-2"
          >
            <aside className="rounded-md border bg-card/90 p-4 shadow-sm backdrop-blur-3xl sm:p-5">
              <div className="flex items-center gap-4">
                <Avatar className="size-16 rounded-full border shadow-sm ring-4 ring-muted sm:size-20">
                  <AvatarImage alt={data.name} src={data.avatarUrl} />
                  <AvatarFallback>{data.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold">{data.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {data.location}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                <p className="text-sm font-medium">{copy.focusTitle}</p>
                <div className="grid gap-1.5 sm:gap-2">
                  {copy.focusItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-md bg-muted/60 px-2.5 py-1.5 text-xs text-muted-foreground sm:gap-3 sm:px-3 sm:py-2 sm:text-sm"
                    >
                      <Code2
                        className="size-3.5 text-foreground sm:size-4"
                        aria-hidden
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </BlurFade>
        </div>
      </section>

      <section id="strengths">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">{copy.strengthsTitle}</h2>
          </BlurFade>
          <div className="grid gap-4 md:grid-cols-3">
            {data.strengths.map((strength, index) => {
              const Icon = strengthIcons[index] ?? Server;
              return (
                <BlurFade
                  key={strength}
                  delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                  className="h-full"
                >
                  <article className="flex h-full flex-col gap-4 rounded-md border bg-card/80 p-5 backdrop-blur-3xl transition-all duration-200 hover:border-foreground/20">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-foreground">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">
                        {copy.strengthTitles[index]}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {strength}
                      </p>
                    </div>
                  </article>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">{copy.techStackTitle}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 8 + id * 0.03}
              >
                <div className="flex h-9 w-fit items-center gap-2 rounded-md border border-border bg-background px-3 ring-2 ring-border/20">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt=""
                      className="size-4 overflow-hidden rounded object-contain"
                    />
                  ) : (
                    <Container className="size-4 text-muted-foreground" aria-hidden />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="space-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-2xl font-bold">{copy.architectureTitle}</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <p className="max-w-2xl text-muted-foreground">
                {copy.architectureDescription}
              </p>
            </BlurFade>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {copy.architectureLayers.map((layer, index) => {
              const Icon = architectureIcons[index] ?? Server;
              return (
                <BlurFade
                  key={layer.title}
                  delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                >
                  <article className="h-full rounded-md border bg-card/80 p-5 backdrop-blur-3xl">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-md bg-muted">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <h3 className="font-semibold">{layer.title}</h3>
                    </div>
                    <div className="grid gap-2">
                      {layer.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-md bg-muted/60 px-3 py-2 text-sm text-muted-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </BlurFade>
              );
            })}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {copy.supportLayers.map((layer, index) => {
              const Icon = supportIcons[index] ?? Database;
              return (
                <BlurFade
                  key={layer.title}
                  delay={BLUR_FADE_DELAY * 11 + index * 0.04}
                >
                  <div className="flex items-center gap-3 rounded-md border bg-background p-4">
                    <Icon className="size-5 text-muted-foreground" aria-hidden />
                    <div>
                      <p className="text-sm font-medium">{layer.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {layer.value}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectsSection
        items={data.services}
        label={data.labels.services}
        title={data.labels.servicesTitle}
        description={data.labels.servicesDescription}
      />

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ContactSection
            label={data.labels.contact}
            title={data.labels.contactTitle}
            description={data.labels.contactDescription}
            email={data.contact.email}
            cvHref={`/${locale}/cv`}
          />
        </BlurFade>
      </section>
    </main>
  );
}
