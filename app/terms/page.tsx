import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions — TRUSHTI",
  description: "The terms and conditions for using the TRUSHTI website and purchasing TRUSHTI products.",
  path: "/terms",
});

const sections = [
  "Use of This Website",
  "Product Information & Pricing",
  "Orders & Acceptance",
  "Intellectual Property",
  "Limitation of Liability",
  "Governing Law",
];

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <section className="py-12 md:py-16">
        <div className="container-wide max-w-prose space-y-6 text-sm leading-relaxed text-slate-600">
          <p className="rounded-xl border border-dashed border-border bg-surface p-4 text-slate-500">
            This page is a placeholder. Final terms and conditions will be added here before launch.
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
