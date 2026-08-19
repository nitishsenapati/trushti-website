import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/product/ProductCard";
import EmptyState from "@/components/ui/EmptyState";
import { Category } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export default function CollectionView({ category }: { category: Category }) {
  const items = getProductsByCategory(category.id as any);

  return (
    <>
      <PageHeader
        eyebrow="Collection"
        title={category.name}
        description={category.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="container-wide">
          {items.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Something useful is coming."
              description={`More products are being thoughtfully developed for ${category.name.toLowerCase()}.`}
            />
          )}
        </div>
      </section>
    </>
  );
}
