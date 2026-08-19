import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Refund & Return Policy — TRUSHTI",
  description: "TRUSHTI's return and refund policy.",
  path: "/refund-policy",
});

const sections = ["Eligibility for Returns", "How to Start a Return", "Refund Timelines", "Non-Returnable Items"];

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Returns" title="Refund & Return Policy" crumbs={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]} />
      <section className="py-12 md:py-16">
        <div className="container-wide max-w-prose space-y-6 text-sm leading-relaxed text-slate-600">
          <p className="rounded-xl border border-dashed border-border bg-surface p-4 text-slate-500">
            This page is a placeholder. TRUSHTI&apos;s return and refund terms will be added here before launch.
          </p>
          {sections.map((title) => (
            <div key={title}>
              <h2 className="text-lg font-medium text-ink">{title}</h2>
              <p className="mt-2 text-slate-400">Content to be added.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
