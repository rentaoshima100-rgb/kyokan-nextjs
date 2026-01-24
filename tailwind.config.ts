import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Corporate Navy
        primary: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d2d9e5",
          300: "#aab8ce",
          400: "#7c92b2",
          500: "#5b7499",
          600: "#475d80",
          700: "#3a4c68",
          800: "#334157",
          900: "#1a2640",
          950: "#0f1729",
        },
        // Accent - Professional Blue
        accent: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc5fb",
          400: "#36a7f5",
          500: "#0c8be6",
          600: "#006dc4",
          700: "#01579f",
          800: "#064a83",
          900: "#0a3e6c",
          950: "#072848",
        },
        // Gold for awards (more muted)
        gold: {
          300: "#e8d48a",
          400: "#d4bc5e",
          500: "#b8a03c",
          600: "#9a8432",
        },
        // Neutral grays
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          '"Noto Sans JP"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-lg": ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-md": ["2.25rem", { lineHeight: "1.25", letterSpacing: "0" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "0" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "1.5rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.08)",
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
        elevated: "0 8px 24px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(180deg, #0f1729 0%, #1a2640 100%)",
        "accent-gradient": "linear-gradient(135deg, #0c8be6 0%, #006dc4 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
