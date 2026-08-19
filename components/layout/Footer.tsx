import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const shopLinks = [
  { label: "Panda Spark", href: "/products/panda-spark" },
  { label: "All Products", href: "/shop" },
  { label: "Home Décor", href: "/collections/home-decor" },
  { label: "Kitchen Essentials", href: "/collections/kitchen-essentials" },
  { label: "Daily Utility", href: "/collections/daily-utility" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/products/panda-spark#faq" },
];

const supportLinks = [
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns & Refunds", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function SocialIcon({ type }: { type: "instagram" | "facebook" | "youtube" }) {
  const paths: Record<typeof type, JSX.Element> = {
    instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </>
    ),
    facebook: (
      <path
        d="M14 8.5h2V5.3c-.4-.05-1.5-.15-2.7-.15-2.7 0-4.4 1.6-4.4 4.5v2.1H6.4v3.5h2.5V21h3.6v-5.75h2.6l.4-3.5h-3V9.9c0-1 .3-1.4 1.5-1.4Z"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="currentColor"
      />
    ),
    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
      </>
    ),
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function Footer() {
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="inline-flex items-center justify-center rounded-2xl bg-white p-2.5">
              <Image
                src={siteConfig.logoCompact}
                alt="TRUSHTI — Products you desire"
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
              />
            </span>
            <p className="mt-5 max-w-[220px] text-sm leading-relaxed text-white/65">
              Thoughtfully designed products for everyday living — starting with Panda Spark.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-navy transition-colors"
                  >
                    <SocialIcon type={key as "instagram" | "facebook" | "youtube"} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="About" links={aboutLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TRUSHTI. All rights reserved.</p>
          <p className="tracking-wide uppercase text-white/40">Products you desire.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-white/75 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
