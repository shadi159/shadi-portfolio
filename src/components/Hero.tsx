import { Github, Linkedin, Mail, FileDown, User } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  const { name, role, heroIntro, links, cvPath, profileImage } = siteConfig;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Signature background: coordinate grid, referencing the "applied mathematics" side of the brief */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="container-page relative grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-paper-50 leading-tight">
            {name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-mono text-cobalt-600 dark:text-cobalt-400">
            {role}
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-paper-100/70">
            {heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
            <a
              href={cvPath}
              download
              className="btn-secondary"
              aria-label="Download CV (PDF)"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-2xl border border-ink-900/10 dark:border-paper-100/15 bg-white dark:bg-ink-800 shadow-xl shadow-ink-900/5 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt={`Portrait of ${name}`}
                className="h-full w-full object-cover object-center"
                style={{ objectPosition: "center 18%" }}
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                <User className="h-14 w-14" aria-hidden="true" />
                <span className="font-mono text-[11px] text-center px-4">
                  [Add profile photo]
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
