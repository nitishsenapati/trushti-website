"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductImage } from "@/data/products";

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const realImages = images.filter((img) => !img.isPlaceholder);
  const [active, setActive] = useState(0);
  const current = realImages[active];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-powder-50">
        {current && (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain p-6 md:p-10 transition-transform duration-500 ease-out hover:scale-105"
          />
        )}
      </div>

      <div className="mt-4 grid grid-cols-5 gap-3">
        {realImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}: ${img.alt}`}
            className={`relative aspect-square overflow-hidden rounded-xl bg-powder-50 border-2 transition-colors ${
              active === i ? "border-navy" : "border-transparent hover:border-powder-300"
            }`}
          >
            <Image src={img.src} alt="" fill className="object-contain p-1.5" />
          </button>
        ))}
        {images
          .filter((img) => img.isPlaceholder)
          .slice(0, Math.max(0, 5 - realImages.length))
          .map((img, i) => (
            <div
              key={`placeholder-${i}`}
              className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border bg-slate-50 px-1 text-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-slate-300">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
                <path d="m5 17 4.5-4.5L13 16l2.5-2.5L21 18" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <span className="text-[9px] leading-tight text-slate-400">{img.placeholderLabel}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
