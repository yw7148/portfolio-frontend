import { ProjectCard } from "@/components/project-card";
import type { ProjectItem } from "@/content/schema";

export default function ProjectsSection({ items, title, description }: {
  items: ProjectItem[];
  title: string;
  description: string;
}) {
  return (
    <section id="public-projects" aria-labelledby="public-projects-title" className="space-y-6">
      <div className="space-y-3">
        <h2 id="public-projects-title" className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {items.map((project) => <ProjectCard key={project.title} {...project} />)}
    </section>
  );
}
