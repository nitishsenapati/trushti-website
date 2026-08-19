import { Metadata } from "next";
import CollectionView from "@/components/category/CollectionView";
import { getCategoryBySlug } from "@/data/categories";
import { buildMetadata } from "@/lib/metadata";

const category = getCategoryBySlug("home-decor")!;

export const metadata: Metadata = buildMetadata({
  title: category.seoTitle,
  description: category.seoDescription,
  path: "/collections/home-decor",
});

export default function HomeDecorPage() {
  return <CollectionView category={category} />;
}
