import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { xl: "1280px", "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Master-brand palette — drawn from the TRUSHTI logo (powder-blue mark,
        // charcoal wordmark, slate sparkle dots) and the ivory background texture.
        canvas: "#F8F8F6", // page background, from the supplied background texture
        surface: "#FFFFFF", // cards / panels
        ink: "#13161D", // primary text
        slate: {
          DEFAULT: "#5B6672", // secondary text — the logo's sparkle-dot grey
          50: "#F4F5F6",
          100: "#E7E9EB",
          200: "#D3D7DB",
          300: "#AEB6BF",
          400: "#84909C",
          500: "#5B6672",
          600: "#465059",
          700: "#333B42",
        },
        navy: {
          DEFAULT: "#0C2247", // TRUSHTI primary — trust, confidence
          50: "#EEF2F7",
          100: "#D6DFEA",
          400: "#1B3A6B",
          500: "#0C2247",
          600: "#091A37",
          700: "#061226",
        },
        powder: {
          DEFAULT: "#C9DDF0", // the logo's filled circle — soft accent surfaces
          50: "#F2F7FC",
          100: "#E4EEF8",
          200: "#C9DDF0",
          300: "#A9C7E3",
        },
        border: "#E4E7EA",
        // Panda Spark carries its own accent within the family — the bright
        // cobalt from its packaging — used only in Panda Spark contexts.
        spark: {
          DEFAULT: "#1657CE",
          50: "#EAF1FD",
          600: "#124AAD",
          700: "#0E3B8A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12,34,71,0.04), 0 8px 24px -8px rgba(12,34,71,0.10)",
        lift: "0 4px 8px rgba(12,34,71,0.05), 0 16px 40px -12px rgba(12,34,71,0.16)",
      },
      maxWidth: {
        prose: "62ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        sparkle: "sparkle 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
