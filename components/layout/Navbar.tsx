"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { useCart } from "@/lib/cart-context";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Home Décor", href: "/collections/home-decor" },
  { label: "Kitchen Essentials", href: "/collections/kitchen-essentials" },
  { label: "Daily Utility", href: "/collections/daily-utility" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled ? "bg-surface/90 backdrop-blur border-border" : "bg-surface/60 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container-wide flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="TRUSHTI home">
          <Image
            src={siteConfig.logoCompact}
            alt="TRUSHTI — Products you desire"
            width={56}
            height={56}
            className="h-16 w-16 object-contain"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-navy hidden xs:inline">
            TRUSHTI
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-navy ${
                  active ? "text-navy" : "text-slate-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            aria-label="Search"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-powder-100 hover:text-navy transition-colors"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
              <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/contact"
            aria-label="Account"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-powder-100 hover:text-navy transition-colors"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.7" />
              <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </Link>
          <button
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-powder-100 hover:text-navy transition-colors"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-spark px-1 text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-powder-100 hover:text-navy transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </header>
  );
}
