"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Something went wrong</span>
      <h1 className="mt-4 max-w-md text-2xl md:text-3xl font-medium tracking-tight text-ink">
        We hit a snag loading this page.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-slate-500">
        Please try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex gap-3">
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
        <a href="/" className="btn-outline">
          Back to TRUSHTI
        </a>
      </div>
    </div>
  );
}
