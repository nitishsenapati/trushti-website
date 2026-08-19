export default function Loading() {
  return (
    <div className="container-wide flex min-h-[50vh] items-center justify-center py-24">
      <div className="flex items-center gap-3 text-slate-400">
        <span className="h-2 w-2 animate-sparkle rounded-full bg-navy" style={{ animationDelay: "0s" }} />
        <span className="h-2 w-2 animate-sparkle rounded-full bg-navy" style={{ animationDelay: "0.2s" }} />
        <span className="h-2 w-2 animate-sparkle rounded-full bg-navy" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}
