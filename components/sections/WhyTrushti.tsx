import Reveal from "@/components/layout/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Thoughtfully Designed",
    description: "Products created with everyday usability in mind.",
  },
  {
    title: "Made for Everyday Life",
    description: "Practical products designed around real routines.",
  },
  {
    title: "Simple by Design",
    description: "Less complexity. More usefulness.",
  },
  {
    title: "Built on Trust",
    description: "Quality and transparency, central to everything TRUSHTI makes.",
  },
];

export default function WhyTrushti() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading eyebrow="Why TRUSHTI" title="Trust in every product" align="left" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 90} className="bg-surface p-8">
              <span className="text-xs font-semibold text-slate-300">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-medium text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
