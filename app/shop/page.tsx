import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ShopGrid from "@/components/shop/ShopGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Shop — TRUSHTI",
  description: "Thoughtfully chosen products for everyday living, from TRUSHTI.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Shop TRUSHTI"
        description="Thoughtfully chosen products for everyday living."
        crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <ShopGrid />
        </div>
      </section>
    </>
  );
}
