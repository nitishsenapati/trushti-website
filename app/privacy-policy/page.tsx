import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — TRUSHTI",
  description: "How TRUSHTI collects, uses and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="py-12 md:py-16">
        <div className="container-wide max-w-prose space-y-6 text-sm leading-relaxed text-slate-600">
          <p className="rounded-xl border border-dashed border-border bg-surface p-4 text-slate-500">
            This page is a placeholder. Final privacy policy content — covering what data TRUSHTI collects,
            how it is used, and your rights — will be added here before launch.
          </p>
          <PolicySection title="Information We Collect" />
          <PolicySection title="How We Use Your Information" />
          <PolicySection title="Cookies" />
          <PolicySection title="Third-Party Sharing" />
          <PolicySection title="Your Rights" />
          <PolicySection title="Contact Us" />
        </div>
      </section>
    </>
  );
}

function PolicySection({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-lg font-medium text-ink">{title}</h2>
      <p className="mt-2 text-slate-400">Content to be added.</p>
    </div>
  );
}
