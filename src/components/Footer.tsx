import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const { name, role, links } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 dark:border-paper-100/10 py-10">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-mono font-semibold text-ink-900 dark:text-paper-50">{name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-slate-500 dark:text-slate-400 hover:text-cobalt-500 dark:hover:text-cobalt-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-slate-500 dark:text-slate-400 hover:text-cobalt-500 dark:hover:text-cobalt-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${links.email}`}
            aria-label="Email"
            className="text-slate-500 dark:text-slate-400 hover:text-cobalt-500 dark:hover:text-cobalt-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <p className="mt-6 text-center font-mono text-xs text-slate-400 dark:text-slate-600">
        © {year} {name}. All rights reserved.
      </p>
    </footer>
  );
}
