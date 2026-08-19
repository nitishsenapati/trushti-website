"use client";

import { useState } from "react";
import { ProductFAQ } from "@/data/products";

export default function FAQ({ items }: { items: ProductFAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : i)}
            >
              <span className="text-base font-medium text-ink">{item.question}</span>
              <span
                className={`shrink-0 text-xl text-slate-400 transition-transform duration-300 ${
                  expanded ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                expanded ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-slate-500">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
