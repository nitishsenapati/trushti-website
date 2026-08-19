import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
}

export default function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <div className="card flex flex-col items-center gap-4 px-8 py-16 text-center">
      {icon ?? (
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-powder-100 text-navy">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3v6m0 0 8.5 4.9M12 9 3.5 13.9M12 9v12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      <h3 className="text-xl font-medium text-ink">{title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-slate-500">{description}</p>
      {action}
    </div>
  );
}
