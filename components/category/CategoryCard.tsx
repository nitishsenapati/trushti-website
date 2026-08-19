import Link from "next/link";
import { Category } from "@/data/categories";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/collections/${category.slug}`}
      className="card group relative flex min-h-[320px] flex-col justify-end overflow-hidden p-8 transition-shadow duration-300 hover:shadow-lift"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-powder-100 via-powder-50 to-surface transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-navy/[0.04] transition-transform duration-500 group-hover:scale-110"
      />
      <div className="relative">
        {category.status === "coming-soon" && (
          <span className="mb-4 inline-block rounded-full bg-navy/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy">
            Coming Soon
          </span>
        )}
        <h3 className="text-2xl font-medium tracking-tight text-ink">{category.name}</h3>
        <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-slate-500">{category.shortLine}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          Explore {category.name}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
