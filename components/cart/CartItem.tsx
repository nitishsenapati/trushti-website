"use client";

import Image from "next/image";
import { CartLine, useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/format";

export default function CartItem({ line }: { line: CartLine }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-powder-50">
        {line.image && <Image src={line.image} alt={line.name} fill className="object-contain p-1.5" />}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-ink">{line.name}</p>
            <p className="text-xs text-slate-500">{line.brandLine}</p>
          </div>
          <button
            onClick={() => removeItem(line.slug)}
            aria-label={`Remove ${line.name} from cart`}
            className="text-xs text-slate-400 hover:text-spark transition-colors"
          >
            Remove
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-full border border-border">
            <button
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center text-sm text-slate-600 hover:text-navy"
              onClick={() => updateQuantity(line.slug, line.quantity - 1)}
            >
              −
            </button>
            <span className="w-6 text-center text-xs font-semibold">{line.quantity}</span>
            <button
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center text-sm text-slate-600 hover:text-navy"
              onClick={() => updateQuantity(line.slug, line.quantity + 1)}
            >
              +
            </button>
          </div>
          <span className="text-sm font-semibold text-ink">
            {line.price != null ? formatINR(line.price * line.quantity) : "Price TBA"}
          </span>
        </div>
      </div>
    </div>
  );
}
