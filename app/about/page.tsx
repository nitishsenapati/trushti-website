import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/layout/Reveal";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "About TRUSHTI",
  description: "TRUSHTI creates thoughtfully designed products for everyday living — starting with Panda Spark.",
  path: "/about",
});

const values = [
  { title: "Thoughtfully Designed", description: "Products created with everyday usability in mind." },
  { title: "Made for Everyday Life", description: "Practical products designed around real routines." },
  { title: "Simple by Design", description: "Less complexity. More usefulness." },
  { title: "Built on Trust", description: "Quality and transparency, central to everything we make." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A little more thought in everything you use."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Image
              src={siteConfig.logo}
              alt="TRUSHTI — Products you desire"
              width={480}
              height={450}
              className="h-auto w-full max-w-sm object-contain"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-slate-600">
              TRUSHTI creates thoughtfully designed products for everyday living — combining usefulness,
              simplicity and design to bring more confidence to the things you use every day.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We started with Panda Spark, a simple glass cleaner made to be genuinely easy to use.
              It&apos;s the first product in a growing collection that will expand across home décor,
              kitchen essentials and daily utility — all built on the same idea: trust in every product.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink">What we stand for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="card p-6">
                <h3 className="font-medium text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink">
            Panda Spark is just the beginning.
          </h2>
          <div className="mt-6">
            <Button href="/shop" variant="spark">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
