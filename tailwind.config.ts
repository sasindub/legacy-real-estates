import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#8d479e",
          light: "#a85cba",
          dark: "#5e2c6b",
          deep: "#3d1c47",
        },
        gold: {
          DEFAULT: "#f39223",
          light: "#ffb04d",
          dark: "#d97a12",
        },
        ink: {
          DEFAULT: "#14111c",
          800: "#1c1828",
          700: "#241f33",
          600: "#2e2840",
        },
        cream: {
          DEFAULT: "#faf7f2",
          200: "#f3ede4",
          300: "#ece3d6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        kenburns: {
          from: { transform: "scale(1.05)" },
          to: { transform: "scale(1.18)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        kenburns: "kenburns 12s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
