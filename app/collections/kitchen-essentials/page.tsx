import { Metadata } from "next";
import CollectionView from "@/components/category/CollectionView";
import { getCategoryBySlug } from "@/data/categories";
import { buildMetadata } from "@/lib/metadata";

const category = getCategoryBySlug("kitchen-essentials")!;

export const metadata: Metadata = buildMetadata({
  title: category.seoTitle,
  description: category.seoDescription,
  path: "/collections/kitchen-essentials",
});

export default function KitchenEssentialsPage() {
  return <CollectionView category={category} />;
}
