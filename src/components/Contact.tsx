import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const { links } = siteConfig;

  const contactMethods = [
    {
      label: "Email",
      value: links.email,
      href: `mailto:${links.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "View profile",
      href: links.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "View profile",
      href: links.github,
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-paper-50 dark:bg-ink-950/40">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="04" label="Contact" title="Let's work together" align="center" />
        </Reveal>

        <Reveal delayMs={100}>
          <p className="mt-4 max-w-xl mx-auto text-center text-slate-600 dark:text-paper-100/70">
            I'm open to software engineering opportunities. Reach out through any of the channels
            below.
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer noopener"}
                className="card-surface flex flex-col items-center gap-3 p-6 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cobalt-500/10 text-cobalt-500">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-ink-900 dark:text-paper-50">{label}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 break-all">{value}</span>
              </a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
