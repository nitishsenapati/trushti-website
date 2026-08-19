/**
 * Centralized configuration for information supplied outside the codebase.
 * Update these values — nothing else in the app needs to change.
 * Fields left `null` are intentionally unset; the UI renders a clearly
 * marked placeholder/coming-soon state instead of inventing data.
 */

export const siteConfig = {
  brandName: "TRUSHTI",
  brandTagline: "Products you desire.",
  brandStatement: "Everyday products. Made to be trusted.",
  domain: "https://www.trushti.com", // update once the domain is live
  logo: "/brand/trushti-logo.png",
  logoCompact: "/brand/trushti-logo-512.png",
  backgroundTexture: "/brand/background-pattern.png",

  contactEmail: "soonatan@tobeupdate.com", // e.g. " null as string | null,"
  contactPhone: "+91 90000 00000", // e.g. "+91 90000 00000"
  contactAddress: "TRUSHTI TRADERS\nAT/PO - Baunsadina, Kamarda,\nBalasore, 756003, Odisha, India",

  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
  },

  shipping: {
    // Populate once a courier/policy partner is finalized.
    domesticEstimate: null as string | null,
    codAvailable: null as boolean | null,
  },

  business: {
    legalName: "Trushti Traders",
    gstin: null as string | null,
  },
};

export type SiteConfig = typeof siteConfig;
