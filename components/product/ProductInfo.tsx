"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { formatINR } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import QuantitySelector from "./QuantitySelector";

export default function ProductInfo({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();
  const priceKnown = product.price != null;

  return (
    <div>
      <span className="eyebrow">{product.brandLine}</span>
      <h1 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-ink">{product.name}</h1>

      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
        {product.rating != null ? (
          <>
            <span className="text-spark" aria-hidden="true">
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span>
              {product.rating.toFixed(1)} ({product.ratingCount} reviews)
            </span>
          </>
        ) : (
          <>
            <span className="text-slate-300" aria-hidden="true">
              ☆☆☆☆☆
            </span>
            <span>Be the first to review</span>
          </>
        )}
      </div>

      <p className="mt-5 text-2xl font-semibold text-ink">
        {priceKnown ? formatINR(product.price as number) : "Price coming soon"}
      </p>

      <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">{product.shortDescription}</p>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <QuantitySelector quantity={quantity} onChange={setQuantity} />

        {priceKnown ? (
          <>
            <button onClick={() => addItem(product, quantity)} className="btn-spark">
              Add to Cart
            </button>
            <button
              onClick={() => {
                addItem(product, quantity);
                router.push("/checkout");
              }}
              className="btn-outline"
            >
              Buy Now
            </button>
          </>
        ) : (
          <button className="btn-spark" disabled aria-disabled="true">
            Notify Me at Launch
          </button>
        )}
      </div>

      {product.features.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-spark shrink-0">
                <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
