/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import WorkSection from "@/components/section/work-section";
import { Badge } from "@/components/ui/badge";
import { getPortfolio } from "@/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getPortfolio(locale);

  return {
    title: data.labels.cvTitle,
    description: data.labels.cvSubtitle,
    alternates: {
      canonical: `/${locale}/cv`,
      languages: {
        en: "/en/cv",
        ko: "/ko/cv",
      },
    },
  };
}

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getPortfolio(locale);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="cv-hero">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Badge variant="outline" className="rounded-xl px-3 py-1">
              {data.description}
            </Badge>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-3xl font-semibold sm:text-5xl">
              {data.labels.cvTitle}
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground md:text-lg">
              {data.labels.cvSubtitle}
            </p>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">{data.labels.work}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <WorkSection items={data.work} />
          </BlurFade>
        </div>
      </section>

      <section id="impact">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">{data.labels.impact}</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.impacts.map((impact, index) => (
              <BlurFade
                key={impact.title}
                delay={BLUR_FADE_DELAY * 7 + index * 0.05}
                className="h-full"
              >
                <article className="flex h-full flex-col gap-3 rounded-xl border bg-card/80 p-5 backdrop-blur-3xl transition-all duration-200 hover:ring-2 hover:ring-muted">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">
                      {impact.period}
                    </p>
                    <h3 className="font-semibold">
                      {impact.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {impact.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1">
                    {impact.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="h-6 rounded-lg text-[11px] font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">{data.labels.skills}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 11 + id * 0.03}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt=""
                      className="size-4 rounded overflow-hidden object-contain"
                    />
                  ) : null}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">{data.labels.education}</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {data.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 13 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
