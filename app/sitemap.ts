import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/shop",
    "/categories",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/shipping-policy",
    "/refund-policy",
  ];

  const productPaths = products.map((p) => `/products/${p.slug}`);
  const collectionPaths = categories.map((c) => `/collections/${c.slug}`);

  return [...staticPaths, ...productPaths, ...collectionPaths].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
  }));
}
