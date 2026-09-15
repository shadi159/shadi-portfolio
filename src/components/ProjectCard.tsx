import { Link } from "react-router-dom";
import { Github, ArrowUpRight, ImageOff } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5">
      <div className="aspect-[16/9] w-full bg-paper-200 dark:bg-ink-700 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
            <ImageOff className="h-8 w-8" aria-hidden="true" />
            <span className="font-mono text-[11px]">[Add screenshot]</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="section-label">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-ink-900 dark:text-paper-50">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-paper-100/70">
          {project.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded border border-ink-900/10 dark:border-paper-100/15 px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary flex-1 !py-2 text-xs"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="btn-primary flex-1 !py-2 text-xs"
            aria-label={`View details for ${project.title}`}
          >
            View Project
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
