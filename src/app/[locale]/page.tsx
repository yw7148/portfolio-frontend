/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPortfolio } from "@/content";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getPortfolio(locale);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={
                  locale === "ko"
                    ? `${data.name}입니다`
                    : `Hi, I'm ${data.name.split(" ")[0]}`
                }
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap gap-3 pt-4 text-sm">
                  <Link
                    href="/cv"
                    className="inline-flex items-center gap-2 rounded-full border bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {data.labels.cvTitle}
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {data.labels.contact}
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={data.name} src={data.avatarUrl} />
                <AvatarFallback>{data.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{data.labels.about}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{data.summary}</Markdown>
            </div>
          </BlurFade>
          <div className="grid gap-3 pt-2">
            {data.strengths.map((strength, index) => (
              <BlurFade
                key={strength}
                delay={BLUR_FADE_DELAY * 5 + index * 0.05}
              >
                <div className="rounded-xl border bg-card/80 p-4 text-sm text-muted-foreground backdrop-blur-3xl">
                  {strength}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{data.labels.skills}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 8 + id * 0.03}
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
