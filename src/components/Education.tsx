import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { degree, relevantCourses } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="03" label="Education" title="Academic background" />
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10 card-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cobalt-500/10 text-cobalt-500">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-ink-900 dark:text-paper-50">
                {degree.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400">{degree.institution}</p>
            </div>
            <div className="flex gap-6 font-mono text-sm">
              <div>
                <p className="text-slate-400 dark:text-slate-500 text-xs uppercase">GPA</p>
                <p className="font-semibold text-ink-900 dark:text-paper-50">{degree.gpa}</p>
              </div>
              <div>
                <p className="text-slate-400 dark:text-slate-500 text-xs uppercase">Graduation</p>
                <p className="font-semibold text-ink-900 dark:text-paper-50">{degree.graduationYear}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="mt-8">
            <h4 className="font-mono text-sm uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-3">
              Relevant courses
            </h4>
            <div className="card-surface overflow-hidden">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">Relevant coursework and grades</caption>
                <thead>
                  <tr className="border-b border-ink-900/10 dark:border-paper-100/10 bg-paper-50 dark:bg-ink-700/50">
                    <th scope="col" className="px-5 py-3 text-sm font-semibold text-ink-900 dark:text-paper-50">
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-semibold text-ink-900 dark:text-paper-50 text-right"
                    >
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {relevantCourses.map((course) => (
                    <tr
                      key={course.name}
                      className="border-b border-ink-900/5 dark:border-paper-100/5 last:border-0"
                    >
                      <td className="px-5 py-3 text-sm text-slate-600 dark:text-paper-100/80">
                        {course.name}
                      </td>
                      <td className="px-5 py-3 text-sm text-right font-mono text-slate-500 dark:text-slate-400">
                        {course.grade === "XX" ? (
                          <span className="placeholder-tag">XX</span>
                        ) : (
                          course.grade
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
