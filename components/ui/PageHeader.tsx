import { ReactNode } from "react";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, crumbs, children }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-wide py-10 md:py-14">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && <span className="eyebrow mb-2 block">{eyebrow}</span>}
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-ink">{title}</h1>
            {description && (
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-500">{description}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
