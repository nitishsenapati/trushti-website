export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
}

export interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandLine: string; // e.g. "Glass Cleaner"
  category: "home-decor" | "kitchen-essentials" | "daily-utility";
  tagline: string;
  description: string;
  shortDescription: string;
  /** Price in INR. Left null until pricing is finalized — never invented. */
  price: number | null;
  compareAtPrice: number | null;
  images: ProductImage[];
  sku: string | null;
  stockStatus: "in-stock" | "out-of-stock" | "coming-soon";
  features: string[];
  usageSteps: { title: string; description: string }[];
  specs: ProductSpec[];
  faqs: ProductFAQ[];
  reviews: Review[];
  /** Average rating, null until real reviews exist. */
  rating: number | null;
  ratingCount: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "panda-spark",
    slug: "panda-spark",
    name: "Panda Spark",
    brandLine: "Crystal Glass Cleaner Concentrate",
    category: "daily-utility",
    tagline: "A little sparkle for your everyday glass.",
    shortDescription:
      "A concentrated glass cleaner that mixes with water for a streak-free, crystal-clear shine — TRUSHTI's first product.",
    description:
      "Panda Spark is TRUSHTI's first product: a concentrated glass cleaner made for everyday household use. Just add water, shake, and spray your way to a clean, clear shine on windows, mirrors and glass surfaces around the home.",
    price: null,
    compareAtPrice: null,
    images: [
      {
        src: "/products/panda-spark-hero.jpg",
        alt: "Panda Spark Crystal Glass Cleaner Concentrate, 500ml bottle with trigger spray",
      },
      { src: "", alt: "", isPlaceholder: true, placeholderLabel: "Front packaging" },
      { src: "", alt: "", isPlaceholder: true, placeholderLabel: "Back packaging" },
      { src: "", alt: "", isPlaceholder: true, placeholderLabel: "Lifestyle shot" },
      { src: "", alt: "", isPlaceholder: true, placeholderLabel: "In use" },
    ],
    sku: null,
    stockStatus: "coming-soon",
    features: ["Streak-free shine", "Crystal clear results", "Safe & gentle formula"],
    usageSteps: [
      {
        title: "Add water",
        description: "Top up the bottle with water to dilute the concentrate.",
      },
      {
        title: "Shake",
        description: "Give the bottle a good shake to mix it through.",
      },
      {
        title: "Spray & sparkle",
        description: "Spray onto glass and wipe for a clear, streak-free finish.",
      },
    ],
    specs: [
      { label: "Product Type", value: "Glass Cleaner (Concentrate)" },
      { label: "Net Quantity", value: "500 ml" },
      { label: "Form", value: "Liquid concentrate — dilute with water" },
    ],
    faqs: [
      {
        question: "What is Panda Spark?",
        answer:
          "Panda Spark is a concentrated glass cleaner from TRUSHTI, designed to make everyday glass-cleaning simple and effective.",
      },
      {
        question: "How do I use Panda Spark?",
        answer: "Add water to the bottle, shake well, then spray and wipe glass surfaces for a clear finish.",
      },
      {
        question: "What size does Panda Spark come in?",
        answer: "Panda Spark is available in a 500 ml bottle.",
      },
      {
        question: "Where can I buy Panda Spark?",
        answer: "Panda Spark will be available to purchase directly from this website soon — join the newsletter to be notified at launch.",
      },
    ],
    reviews: [],
    rating: null,
    ratingCount: 0,
    tags: ["glass-cleaner", "daily-utility", "hero-product"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]) {
  return products.filter((p) => p.category === category);
}
