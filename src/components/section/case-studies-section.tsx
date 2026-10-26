import { Badge } from "@/components/ui/badge";
import type { PortfolioData } from "@/content/schema";
import { ArrowUpRight } from "lucide-react";

type Props = Pick<PortfolioData, "caseStudies" | "labels">;

export default function CaseStudiesSection({ caseStudies, labels }: Props) {
  return (
    <section id="projects" aria-labelledby="case-studies-title" className="space-y-8 scroll-mt-24">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-medium text-muted-foreground">{labels.cases}</p>
        <h2 id="case-studies-title" className="text-2xl font-semibold sm:text-3xl">{labels.casesTitle}</h2>
        <p className="text-muted-foreground">{labels.casesDescription}</p>
      </div>
      <div className="space-y-6">
        {caseStudies.map((study) => (
          <article key={study.id} id={study.id} className="scroll-mt-24 rounded-xl border bg-card p-5 sm:p-8">
            <p className="text-sm text-muted-foreground">{study.context}</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{study.title}</h3>
            <dl className="mt-6 grid gap-5 md:grid-cols-2 md:gap-x-8">
              {([
                [labels.role, study.role],
                [labels.problem, study.problem],
                [labels.decision, study.decision],
                [labels.outcome, study.outcome],
              ] as const).map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm font-semibold">{label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.technologies.map((technology) => <Badge key={technology} variant="outline">{technology}</Badge>)}
            </div>
            {study.article ? (
              <a href={study.article.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {study.article.label}<ArrowUpRight className="size-4" aria-hidden />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
