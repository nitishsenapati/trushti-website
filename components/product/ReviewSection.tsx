import { Review } from "@/data/products";
import EmptyState from "@/components/ui/EmptyState";

export default function ReviewSection({ reviews, productName }: { reviews: Review[]; productName: string }) {
  if (reviews.length === 0) {
    return (
      <EmptyState
        title={`Be the first to review ${productName}`}
        description="No reviews yet — once Panda Spark ships, genuine customer reviews will appear here."
        icon={
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-powder-100 text-navy text-2xl">
            ★
          </span>
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.author + review.date} className="card p-6">
          <div className="flex items-center justify-between">
            <p className="font-medium text-ink">{review.author}</p>
            <span className="text-xs text-slate-400">{review.date}</span>
          </div>
          <div className="mt-1 text-spark" aria-hidden="true">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
