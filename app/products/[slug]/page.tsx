import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import FAQ from "@/components/product/FAQ";
import ReviewSection from "@/components/product/ReviewSection";
import Reveal from "@/components/layout/Reveal";
import { products, getProductBySlug } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} ${product.brandLine} | TRUSHTI`,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: `${siteConfig.domain}${product.images[0]?.src}`,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: siteConfig.brandName },
    image: `${siteConfig.domain}${product.images[0]?.src}`,
    ...(product.price != null && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price,
        availability: "https://schema.org/PreOrder",
      },
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.domain },
      { "@type": "ListItem", position: 2, name: "Shop", item: `${siteConfig.domain}/shop` },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container-wide py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: product.name },
          ]}
        />
      </div>

      <section className="container-wide pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 md:py-20">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight text-ink">Why Panda Spark?</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{product.description}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-medium tracking-tight text-ink">How to Use</h2>
            <ol className="mt-4 space-y-4">
              {product.usageSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-powder-100 text-sm font-semibold text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{step.title}</p>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {product.specs.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-wide max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight text-ink">Product Details</h2>
            <dl className="mt-6 divide-y divide-border border-t border-b border-border">
              {product.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-2 gap-4 py-4">
                  <dt className="text-sm font-medium text-slate-500">{spec.label}</dt>
                  <dd className="text-sm text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section id="faq" className="border-t border-border bg-surface py-16 md:py-20">
        <div className="container-wide max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-ink">Frequently Asked Questions</h2>
          <div className="mt-6">
            <FAQ items={product.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-ink">Reviews</h2>
          <div className="mt-6">
            <ReviewSection reviews={product.reviews} productName={product.name} />
          </div>
        </div>
      </section>
    </>
  );
}
