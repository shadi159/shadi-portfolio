import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Reveal from "@/components/Reveal";

const DETAIL_SECTIONS = [
  { key: "overview", title: "Overview" },
  { key: "problem", title: "Problem" },
  { key: "solution", title: "Solution" },
  { key: "contribution", title: "My Contribution" },
  { key: "challenges", title: "Challenges & Solutions" },
  { key: "results", title: "Results" },
] as const;

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div className="container-page max-w-4xl">
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-cobalt-600 dark:text-cobalt-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>

          <p className="section-label mt-6">{project.category}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-paper-50">
            {project.title}
          </h1>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-ink-900/10 dark:border-paper-100/15 px-3 py-1 font-mono text-xs text-slate-500 dark:text-slate-400"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer noopener" className="btn-primary mt-6">
              <Github className="h-4 w-4" aria-hidden="true" />
              View Repository
            </a>
          )}
        </Reveal>

        <div className="mt-12 space-y-10">
          {DETAIL_SECTIONS.map(({ key, title }, i) => (
            <Reveal key={key} delayMs={i * 60}>
              <section>
                <h2 className="text-xl font-semibold text-ink-900 dark:text-paper-50">{title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-paper-100/75">
                  {project[key]}
                </p>
              </section>
            </Reveal>
          ))}

        </div>
      </div>
    </article>
  );
}
