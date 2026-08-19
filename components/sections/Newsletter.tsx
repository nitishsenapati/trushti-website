"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire up to an email provider (Mailchimp, Klaviyo, etc.) when ready.
    setStatus("submitted");
  }

  return (
    <section className="bg-canvas py-16 md:py-20">
      <div className="container-wide">
        <div className="card mx-auto flex max-w-2xl flex-col items-center gap-3 px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink">Stay in the loop.</h2>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500">
            Be the first to know about new products, launches and everything happening at TRUSHTI.
          </p>

          {status === "submitted" ? (
            <p className="mt-3 text-sm font-medium text-navy">You&apos;re on the list — thank you.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm text-ink placeholder:text-slate-400 focus-visible:outline-2"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
