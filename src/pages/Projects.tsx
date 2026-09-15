import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="05" label="Projects" title="Selected work" />
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-paper-100/70">
            A mix of applied software engineering and research-oriented work. 
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
