"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import EmptyState from "@/components/ui/EmptyState";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/format";

export default function CheckoutPage() {
  const { lines, subtotal } = useCart();
  const [submitting, setSubmitting] = useState(false);

  if (lines.length === 0) {
    return (
      <>
        <PageHeader eyebrow="Checkout" title="Checkout" crumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]} />
        <section className="py-12 md:py-16">
          <div className="container-wide">
            <EmptyState
              title="Your cart is empty"
              description="Add Panda Spark to your cart before checking out."
              action={
                <Link href="/shop" className="btn-primary">
                  Shop Now
                </Link>
              }
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Checkout" title="Checkout" crumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]} />
      <section className="py-12 md:py-16">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_380px]">
          <form
            className="space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
            }}
          >
            <fieldset className="card space-y-4 p-6">
              <legend className="mb-1 px-1 font-medium text-ink">Contact Information</legend>
              <Input id="email" label="Email" type="email" required />
              <Input id="mobile" label="Mobile" type="tel" required />
            </fieldset>

            <fieldset className="card space-y-4 p-6">
              <legend className="mb-1 px-1 font-medium text-ink">Shipping Address</legend>
              <Input id="fullName" label="Full Name" type="text" required />
              <Input id="phone" label="Phone" type="tel" required />
              <Input id="address" label="Address" type="text" required />
              <div className="grid gap-4 sm:grid-cols-3">
                <Input id="city" label="City" type="text" required />
                <Input id="state" label="State" type="text" required />
                <Input id="pin" label="PIN Code" type="text" required />
              </div>
            </fieldset>

            <fieldset className="card space-y-3 p-6">
              <legend className="mb-1 px-1 font-medium text-ink">Payment</legend>
              <p className="text-sm text-slate-500">
                Payment collection isn&apos;t connected yet — a payment gateway will be integrated here before launch.
              </p>
              <div className="rounded-xl border border-dashed border-border bg-canvas p-4 text-sm text-slate-400">
                Payment gateway placeholder
              </div>
            </fieldset>

            <button type="submit" className="btn-primary w-full" disabled={submitting}>
              {submitting ? "Payment not yet available" : "Review Order"}
            </button>
            {submitting && (
              <p className="text-center text-sm text-slate-500">
                Checkout isn&apos;t live yet — this is a preview of the flow. Payment processing will be added
                before TRUSHTI launches.
              </p>
            )}
          </form>

          <div className="card h-fit space-y-4 p-6">
            <h2 className="font-medium text-ink">Order Summary</h2>
            <div className="space-y-3">
              {lines.map((line) => (
                <div key={line.slug} className="flex justify-between text-sm">
                  <span className="text-slate-600">
                    {line.name} × {line.quantity}
                  </span>
                  <span className="text-ink">
                    {line.price != null ? formatINR(line.price * line.quantity) : "TBA"}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 flex justify-between font-semibold text-ink">
              <span>Total</span>
              <span>{formatINR(subtotal)}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ id, label, type, required }: { id: string; label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-full border border-border bg-canvas px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus-visible:outline-2"
      />
    </div>
  );
}
