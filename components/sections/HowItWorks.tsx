import Reveal from "@/components/layout/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/data/products";

const icons = [
  // water drop
  <path key="1" d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  // shake / motion
  <path key="2" d="M8 4h8v4l2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10l2-2V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  // sparkle
  <path key="3" d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
];

export default function HowItWorks() {
  const product = products[0];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading eyebrow="How It Works" title="Ready in three simple steps" align="center" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {product.usageSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-powder-100 text-navy">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {icons[i]}
                </svg>
              </div>
              <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Step 0{i + 1}
              </span>
              <h3 className="mt-1 text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
