import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/layout/Reveal";
import { siteConfig } from "@/data/site";

export default function BrandFuture() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${siteConfig.backgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "invert(1)",
        }}
      />
      <div className="container-wide relative flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow text-powder-200">Just the Beginning</span>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
            Panda Spark is just the beginning.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base md:text-lg leading-relaxed text-white/70">
            TRUSHTI is building a growing collection of thoughtfully chosen products across home, kitchen
            and everyday utility.
          </p>
          <div className="mt-9">
            <Button href="/about" variant="outline-light">
              Explore TRUSHTI
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
