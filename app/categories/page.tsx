import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CategoryGrid from "@/components/category/CategoryGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Categories — TRUSHTI",
  description: "Explore TRUSHTI's growing world of products across Home Décor, Kitchen Essentials and Daily Utility.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Categories"
        title="A growing world of TRUSHTI"
        description="One brand. Many things for everyday living."
        crumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}
      />
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <CategoryGrid />
        </div>
      </section>
    </>
  );
}
