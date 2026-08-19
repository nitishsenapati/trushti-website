"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatINR } from "@/lib/format";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const mainImage = product.images.find((img) => !img.isPlaceholder);

  return (
    <div className="card group overflow-hidden transition-shadow duration-300 hover:shadow-lift">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-powder-50">
          {mainImage && (
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              sizes="(min-width: 1024px) 320px, 50vw"
              className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-105"
            />
          )}
          {product.stockStatus === "coming-soon" && (
            <span className="absolute left-3 top-3 rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              Launching soon
            </span>
          )}
        </div>
      </Link>
      <div className="p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Daily Utility
        </span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 text-lg font-medium text-ink hover:text-navy transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-slate-500">{product.brandLine}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-semibold text-ink">
            {product.price != null ? formatINR(product.price) : "Price coming soon"}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            {product.rating != null ? (
              <>★ {product.rating.toFixed(1)}</>
            ) : (
              "No ratings yet"
            )}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <Link href={`/products/${product.slug}`} className="btn-outline flex-1 !py-2.5 text-xs">
            Quick View
          </Link>
          <button
            onClick={() => addItem(product)}
            className="btn-spark flex-1 !py-2.5 text-xs"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
