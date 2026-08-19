"use client";

import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import EmptyState from "@/components/ui/EmptyState";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/format";

export default function CartPage() {
  const { lines, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      <PageHeader
        eyebrow="Cart"
        title="Your Cart"
        crumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-wide">
          {lines.length === 0 ? (
            <EmptyState
              title="Your cart is empty"
              description="Explore Panda Spark, TRUSHTI's first product, and add it to your cart."
              action={
                <Link href="/shop" className="btn-primary">
                  Shop Now
                </Link>
              }
            />
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
              <div className="card divide-y divide-border p-2">
                {lines.map((line) => (
                  <div key={line.slug} className="flex gap-4 p-4">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-powder-50">
                      {line.image && (
                        <Image src={line.image} alt={line.name} fill className="object-contain p-2" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-ink">{line.name}</p>
                          <p className="text-sm text-slate-500">{line.brandLine}</p>
                        </div>
                        <button
                          onClick={() => removeItem(line.slug)}
                          className="text-xs text-slate-400 hover:text-spark transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            aria-label="Decrease quantity"
                            className="flex h-9 w-9 items-center justify-center text-slate-600 hover:text-navy"
                            onClick={() => updateQuantity(line.slug, line.quantity - 1)}
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-sm font-semibold">{line.quantity}</span>
                          <button
                            aria-label="Increase quantity"
                            className="flex h-9 w-9 items-center justify-center text-slate-600 hover:text-navy"
                            onClick={() => updateQuantity(line.slug, line.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <span className="font-semibold text-ink">
                          {line.price != null ? formatINR(line.price * line.quantity) : "Price TBA"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card h-fit p-6">
                <h2 className="font-medium text-ink">Order Summary</h2>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span className="text-ink">{formatINR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between border-t border-border pt-4 text-base font-semibold text-ink">
                  <span>Total</span>
                  <span>{formatINR(subtotal)}</span>
                </div>
                <Link href="/checkout" className="btn-primary mt-6 w-full">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
