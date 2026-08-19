import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `url(${siteConfig.backgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-canvas via-canvas/70 to-canvas"
      />

      {/* signature sparkle-dot motif, echoing the mark beside the wordmark in the logo */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[6%] top-24 hidden md:block">
        <SparkleCluster />
      </div>

      <div className="container-wide relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-spark animate-sparkle" />
            Introducing TRUSHTI
          </span>
          <Image
            src={siteConfig.logo}
            alt="TRUSHTI — Products you desire"
            width={520}
            height={490}
            priority
            className="h-[110px] w-auto md:h-[150px] object-contain object-left"
          />
          <p className="mt-6 max-w-lg text-lg md:text-xl leading-relaxed text-slate-600">
            {siteConfig.brandStatement}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/products/panda-spark" variant="spark">
              Explore Panda Spark
            </Button>
            <Button href="/about" variant="outline">
              Discover TRUSHTI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkleCluster() {
  const dots = [
    { cx: 70, cy: 12, r: 7, delay: "0s" },
    { cx: 20, cy: 40, r: 5, delay: "0.4s" },
    { cx: 46, cy: 30, r: 6, delay: "0.8s" },
    { cx: 62, cy: 55, r: 5, delay: "1.2s" },
    { cx: 30, cy: 68, r: 6.5, delay: "1.6s" },
  ];
  return (
    <svg width="110" height="90" viewBox="0 0 90 80" fill="none" aria-hidden="true">
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          className="fill-navy-400 animate-sparkle motion-reduce:animate-none"
          style={{ animationDelay: d.delay, transformOrigin: `${d.cx}px ${d.cy}px` }}
        />
      ))}
    </svg>
  );
}
