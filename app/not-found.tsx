import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 max-w-md text-2xl md:text-3xl font-medium tracking-tight text-ink">
        Looks like you&apos;ve wandered somewhere unexpected.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to TRUSHTI
      </Link>
    </div>
  );
}
