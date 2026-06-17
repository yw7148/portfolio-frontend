import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import type { ServiceItem } from "@/content/schema";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection({
  items,
  label,
  title,
  description,
}: {
  items: ServiceItem[];
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="text-balance text-muted-foreground md:text-lg/relaxed">
            {description}
          </p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
