interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className={`eyebrow mb-3 block ${light ? "text-powder-200" : ""}`}>{eyebrow}</span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
