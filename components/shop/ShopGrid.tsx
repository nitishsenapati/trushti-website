"use client";

import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import EmptyState from "@/components/ui/EmptyState";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const filters = [{ id: "all", label: "All" }, ...categories.map((c) => ({ id: c.id, label: c.name }))];

export default function ShopGrid() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === f.id
                ? "border-navy bg-navy text-white"
                : "border-border text-slate-600 hover:border-navy hover:text-navy"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <EmptyState
            title="Something useful is coming."
            description="More products are being thoughtfully developed for your home, kitchen and everyday life."
          />
        </div>
      )}

      {active === "all" && (
        <p className="mt-10 text-center text-sm text-slate-400">
          More products are coming soon across Home Décor, Kitchen Essentials and Daily Utility.
        </p>
      )}
    </div>
  );
}
