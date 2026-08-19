import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact — TRUSHTI",
  description: "Get in touch with TRUSHTI.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about Panda Spark or TRUSHTI? We'd love to hear from you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="py-12 md:py-16">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-lg font-medium text-ink">Reach us directly</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-slate-400">Email</dt>
                <dd className="mt-0.5 text-ink">{siteConfig.contactEmail ?? "Coming soon"}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Phone</dt>
                <dd className="mt-0.5 text-ink">{siteConfig.contactPhone ?? "Coming soon"}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Address</dt>
                <dd className="mt-0.5 text-ink">{siteConfig.contactAddress ?? "Coming soon"}</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
