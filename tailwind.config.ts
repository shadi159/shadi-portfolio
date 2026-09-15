import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E1A",
          900: "#0B1220",
          800: "#111A2E",
          700: "#182339",
          600: "#26324A",
          500: "#3C4A66",
        },
        paper: {
          50: "#FBFBFC",
          100: "#F5F6F8",
          200: "#ECEEF2",
          300: "#DDE1E8",
        },
        cobalt: {
          400: "#6E88F2",
          500: "#3E63DD",
          600: "#2F4FC0",
          700: "#26409E",
        },
        amber: {
          300: "#F3C374",
          400: "#EDAE4F",
          500: "#E8A33D",
        },
        slate: {
          400: "#8792A6",
          500: "#6B7690",
          600: "#525E78",
        },
      },
      fontFamily: {
        display: ["'IBM Plex Sans'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, #E4E7ED 1px, transparent 1px), linear-gradient(to bottom, #E4E7ED 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, #1B2537 1px, transparent 1px), linear-gradient(to bottom, #1B2537 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
