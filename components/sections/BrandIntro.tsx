import Reveal from "@/components/layout/Reveal";

export default function BrandIntro() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <p className="max-w-3xl text-2xl md:text-4xl font-medium leading-[1.25] tracking-tight text-ink">
            A little more thought in{" "}
            <span className="text-navy">everything you use.</span>
          </p>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-500">
            TRUSHTI creates thoughtfully designed products for everyday living — combining usefulness,
            simplicity and design to bring more confidence to the things you use every day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
