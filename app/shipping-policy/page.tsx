import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Shipping Policy — TRUSHTI",
  description: "Shipping timelines and coverage for TRUSHTI orders.",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Shipping" title="Shipping Policy" crumbs={[{ label: "Home", href: "/" }, { label: "Shipping Policy" }]} />
      <section className="py-12 md:py-16">
        <div className="container-wide max-w-prose space-y-6 text-sm leading-relaxed text-slate-600">
          <p className="rounded-xl border border-dashed border-border bg-surface p-4 text-slate-500">
            Shipping timelines, coverage areas and courier details will be confirmed and published here
            once TRUSHTI&apos;s logistics partner is finalized.
          </p>
          <div>
            <h2 className="text-lg font-medium text-ink">Estimated Delivery</h2>
            <p className="mt-2 text-slate-400">{siteConfig.shipping.domesticEstimate ?? "To be announced."}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-ink">Cash on Delivery</h2>
            <p className="mt-2 text-slate-400">
              {siteConfig.shipping.codAvailable == null ? "To be announced." : siteConfig.shipping.codAvailable ? "Available." : "Not available."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
