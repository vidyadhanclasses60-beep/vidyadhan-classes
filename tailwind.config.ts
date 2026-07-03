import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Vidyadhan Classes brand palette (derived from the logo)
        brand: {
          DEFAULT: "#0A2E8A", // primary navy
          50: "#eef2fc",
          100: "#d6e0f7",
          200: "#aec1ef",
          300: "#7e9be4",
          400: "#4f73d6",
          500: "#2b50c0",
          600: "#1c3aa0",
          700: "#0A2E8A",
          800: "#0a2670",
          900: "#0b2059",
        },
        crimson: {
          DEFAULT: "#B30000",
          50: "#fdecec",
          100: "#fbd0d0",
          200: "#f5a3a3",
          300: "#ec6b6b",
          400: "#df3a3a",
          500: "#c41414",
          600: "#B30000",
          700: "#8f0202",
          800: "#760808",
          900: "#620d0d",
        },
        gold: {
          DEFAULT: "#FFC107",
          50: "#fff9e6",
          100: "#fff0bf",
          200: "#ffe488",
          300: "#ffd64d",
          400: "#ffca21",
          500: "#FFC107",
          600: "#d99e00",
          700: "#a87a02",
          800: "#7d5b06",
          900: "#5e4509",
        },
        ink: "#222222",
        success: "#16A34A",
        line: "#E5E7EB",
        surface: "#F7F9FC",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ['"Kaushan Script"', "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 46, 138, 0.18)",
        card: "0 4px 24px -8px rgba(10, 46, 138, 0.14)",
        gold: "0 10px 30px -10px rgba(255, 193, 7, 0.5)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0A2E8A 0%, #1c3aa0 55%, #0b2059 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFC107 0%, #ffd64d 100%)",
        "crimson-gradient": "linear-gradient(135deg, #B30000 0%, #df3a3a 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
