import Reveal from "@/components/layout/Reveal";

const beats = [
  { word: "Clean", detail: "Designed for everyday glass surfaces." },
  { word: "Simple", detail: "Easy to use and convenient." },
  { word: "Sparkling", detail: "Leaves glass looking fresh and clear." },
];

export default function VisualStory() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="container-wide">
        <div className="divide-y divide-border border-t border-b border-border">
          {beats.map((beat, i) => (
            <Reveal key={beat.word} delay={i * 100}>
              <div className="grid items-baseline gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-8 md:py-10">
                <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-navy">
                  {beat.word}
                </h3>
                <p className="text-base md:text-lg text-slate-500">{beat.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
