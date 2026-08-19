import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cart", "/checkout"],
      },
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
