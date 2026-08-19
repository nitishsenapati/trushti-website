"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <button
        className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
      />
      <div
        className={`absolute right-0 top-0 h-full w-[84%] max-w-xs bg-surface shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-border">
          <span className="font-display text-lg font-semibold text-navy">Menu</span>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-powder-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 gap-1" aria-label="Mobile primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-3 text-base font-medium text-ink border-b border-border/70 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={onClose} className="py-3 text-base font-medium text-ink">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
