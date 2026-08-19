"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/format";
import CartItem from "./CartItem";
import EmptyState from "@/components/ui/EmptyState";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <button className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={closeCart} aria-label="Close cart" />
      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-display text-lg font-semibold text-ink">Your cart</h2>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-powder-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <div className="pt-10">
              <EmptyState
                title="Your cart is empty"
                description="Explore Panda Spark, TRUSHTI's first product, and add it to your cart."
                action={
                  <Link href="/shop" onClick={closeCart} className="btn-primary">
                    Shop Now
                  </Link>
                }
              />
            </div>
          ) : (
            <div className="divide-y divide-border">
              {lines.map((line) => (
                <CartItem key={line.slug} line={line} />
              ))}
            </div>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border px-6 py-6">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span className="text-base font-semibold text-ink">{formatINR(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">Shipping and taxes calculated at checkout.</p>
            <Link href="/checkout" onClick={closeCart} className="btn-primary mt-4 w-full">
              Proceed to Checkout
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="mt-2 block text-center text-sm text-slate-500 hover:text-navy transition-colors"
            >
              View full cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
