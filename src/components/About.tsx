import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="01" label="About" title="A quick introduction" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <Reveal delayMs={80} className="space-y-5">
            {siteConfig.aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-paper-100/75"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delayMs={160}>
            <dl className="grid grid-cols-2 gap-4">
              {siteConfig.aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-surface p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 text-lg font-semibold text-ink-900 dark:text-paper-50 font-mono">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
