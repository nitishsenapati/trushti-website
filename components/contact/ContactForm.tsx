"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire up to an email/form provider when ready.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="card p-8">
        <h2 className="text-lg font-medium text-ink">Message sent.</h2>
        <p className="mt-2 text-sm text-slate-500">Thanks for reaching out — we&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" type="text" required />
        <Field id="email" label="Email" type="email" required />
      </div>
      <Field id="subject" label="Subject" type="text" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-border bg-canvas px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus-visible:outline-2"
          placeholder="How can we help?"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}

function Field({ id, label, type, required }: { id: string; label: string; type: string; required?: boolean }) {
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
