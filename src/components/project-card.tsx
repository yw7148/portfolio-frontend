import { Badge } from "@/components/ui/badge";
import type { ProjectItem } from "@/content/schema";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ title, description, technologies, links }: ProjectItem) {
  return (
    <article className="space-y-4 rounded-xl border bg-card p-5 sm:p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => <Badge key={technology} variant="outline">{technology}</Badge>)}
      </div>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {link.label}<ArrowUpRight className="size-4" aria-hidden />
          </a>
        ))}
      </div>
    </article>
  );
}
