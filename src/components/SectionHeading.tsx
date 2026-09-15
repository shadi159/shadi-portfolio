interface SectionHeadingProps {
  index: string; // e.g. "01"
  label: string; // e.g. "About"
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({ index, label, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="section-label">{`// ${index} ${label}`}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-ink-900 dark:text-paper-50">
        {title}
      </h2>
    </div>
  );
}
