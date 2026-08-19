import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import VisualStory from "@/components/sections/VisualStory";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyTrushti from "@/components/sections/WhyTrushti";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BrandFuture from "@/components/sections/BrandFuture";
import Newsletter from "@/components/sections/Newsletter";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "TRUSHTI — Everyday Products, Made to Be Trusted",
  description:
    "Discover TRUSHTI — thoughtfully designed products for everyday living across home décor, kitchen essentials and daily utility.",
  path: "/",
});

export default function HomePage() {
  const pandaSpark = products[0];

  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProduct product={pandaSpark} />
      <VisualStory />
      <HowItWorks />
      <WhyTrushti />
      <CategoriesSection />
      <BrandFuture />
      <Newsletter />
    </>
  );
}
