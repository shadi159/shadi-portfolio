import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-paper-50 dark:bg-ink-950/40">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="02" label="Skills" title="Technologies I work with" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delayMs={i * 80}>
              <div className="card-surface p-6 h-full">
                <h3 className="font-mono text-sm font-semibold text-cobalt-600 dark:text-cobalt-400 uppercase tracking-wide">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex items-center rounded-md border border-ink-900/10 dark:border-paper-100/15 bg-paper-100 dark:bg-ink-700 px-3 py-1.5 text-sm font-medium text-ink-900 dark:text-paper-100">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
