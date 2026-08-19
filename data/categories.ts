export interface Category {
  id: string;
  slug: string;
  name: string;
  shortLine: string;
  description: string;
  heroNote: string;
  seoTitle: string;
  seoDescription: string;
  status: "available" | "coming-soon";
}

export const categories: Category[] = [
  {
    id: "home-decor",
    slug: "home-decor",
    name: "Home Décor",
    shortLine: "Make your space feel like home.",
    description:
      "Products that improve the look, feel and atmosphere of a home — decorative pieces, organizers and everyday accessories, chosen with the same care as everything else TRUSHTI makes.",
    heroNote: "A growing collection, thoughtfully in progress.",
    seoTitle: "Home Décor — TRUSHTI",
    seoDescription:
      "TRUSHTI's Home Décor collection is on its way — thoughtfully designed pieces for everyday living.",
    status: "coming-soon",
  },
  {
    id: "kitchen-essentials",
    slug: "kitchen-essentials",
    name: "Kitchen Essentials",
    shortLine: "Thoughtful essentials for everyday kitchens.",
    description:
      "Practical, well-designed products for the way real kitchens work — organizers, tools and storage built around everyday routines.",
    heroNote: "A growing collection, thoughtfully in progress.",
    seoTitle: "Kitchen Essentials — TRUSHTI",
    seoDescription:
      "TRUSHTI's Kitchen Essentials collection is on its way — practical products for everyday kitchens.",
    status: "coming-soon",
  },
  {
    id: "daily-utility",
    slug: "daily-utility",
    name: "Daily Utility",
    shortLine: "Useful things for everyday life.",
    description:
      "Practical products that solve everyday problems simply and reliably. Panda Spark, TRUSHTI's first product, belongs here.",
    heroNote: "Home to Panda Spark, TRUSHTI's first product.",
    seoTitle: "Daily Utility — TRUSHTI",
    seoDescription:
      "Everyday convenience products from TRUSHTI, starting with Panda Spark.",
    status: "available",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
