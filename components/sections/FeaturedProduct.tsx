import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/layout/Reveal";
import { Product } from "@/data/products";
import { formatINR } from "@/lib/format";

export default function FeaturedProduct({ product }: { product: Product }) {
  const image = product.images.find((img) => !img.isPlaceholder);

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28 text-white">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/[0.04]"
      />
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow text-powder-200">TRUSHTI's First Product</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight">
            Meet Panda Spark
          </h2>
          <p className="mt-4 text-lg text-white/70">{product.tagline}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">{product.shortDescription}</p>

          <div className="mt-8 flex items-center gap-6">
            <span className="text-xl font-semibold">
              {product.price != null ? formatINR(product.price) : "Price coming soon"}
            </span>
            <span className="text-sm text-white/50">
              {product.rating != null ? `★ ${product.rating.toFixed(1)}` : "No ratings yet"}
            </span>
          </div>

          <div className="mt-8">
            <Button href={`/products/${product.slug}`} variant="spark">
              Shop Panda Spark
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-powder-200/25 to-transparent"
            />
            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-contain p-6 drop-shadow-2xl"
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
