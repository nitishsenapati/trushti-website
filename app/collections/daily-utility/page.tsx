import { Metadata } from "next";
import CollectionView from "@/components/category/CollectionView";
import { getCategoryBySlug } from "@/data/categories";
import { buildMetadata } from "@/lib/metadata";

const category = getCategoryBySlug("daily-utility")!;

export const metadata: Metadata = buildMetadata({
  title: category.seoTitle,
  description: category.seoDescription,
  path: "/collections/daily-utility",
});

export default function DailyUtilityPage() {
  return <CollectionView category={category} />;
}
