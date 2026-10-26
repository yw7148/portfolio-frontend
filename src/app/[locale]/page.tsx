/* eslint-disable @next/next/no-img-element */
import CaseStudiesSection from "@/components/section/case-studies-section";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { getPortfolio } from "@/content";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = getPortfolio(locale);
  const copy = locale === "ko" ? {
    title: "문제를 깊이 이해하고, 선택의 결과까지 생각합니다",
    contact: "연락하기", cases: "대표 사례 보기", skills: "주로 사용하는 기술",
  } : {
    title: "Understanding the problem. Thinking through the consequences.",
    contact: "Get in touch", cases: "Explore project cases", skills: "Core technologies",
  };

  return (
    <main className="relative flex min-h-dvh flex-col gap-16 sm:gap-20">
      <section id="hero" className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">{data.name} · Backend Engineer</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{copy.title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{data.summary}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              {copy.cases}<ArrowRight className="size-4" aria-hidden />
            </a>
            <a href={`mailto:${data.contact.email}`} className="rounded-md border px-4 py-3 font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">{copy.contact}</a>
          </div>
        </div>
        <img src={data.avatarUrl} alt={data.name} width={96} height={96} className="hidden size-24 rounded-full border object-cover sm:block" />
      </section>

      <CaseStudiesSection caseStudies={data.caseStudies} labels={data.labels} />

      <section id="writing" aria-labelledby="writing-title" className="space-y-6 scroll-mt-24">
        <div className="space-y-3">
          <h2 id="writing-title" className="text-2xl font-semibold">{data.labels.writing}</h2>
          <p className="max-w-2xl text-muted-foreground">{data.labels.writingDescription}</p>
        </div>
        <div className="divide-y rounded-xl border bg-card px-5 sm:px-6">
          {data.writing.map((post) => (
            <article key={post.href} className="py-5">
              <h3 className="font-semibold">
                <a href={post.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {post.label}<ArrowUpRight className="mt-0.5 size-4 shrink-0" aria-hidden />
                </a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
            </article>
          ))}
        </div>
        <a href="https://blog.youngwon.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{data.labels.blog}<ArrowUpRight className="size-4" aria-hidden /></a>
      </section>

      <ProjectsSection items={data.projects} title={data.labels.projects} description={data.labels.projectsDescription} />

      <section id="skills" aria-labelledby="skills-title" className="space-y-4">
        <h2 id="skills-title" className="text-2xl font-semibold">{copy.skills}</h2>
        <ul className="flex flex-wrap gap-2">
          {data.skills.map((skill) => <li key={skill.name} className="rounded-md border px-3 py-2 text-sm">{skill.name}</li>)}
        </ul>
      </section>

      <section id="contact">
        <ContactSection label={data.labels.contact} title={data.labels.contactTitle} description={data.labels.contactDescription} email={data.contact.email} />
      </section>
    </main>
  );
}
