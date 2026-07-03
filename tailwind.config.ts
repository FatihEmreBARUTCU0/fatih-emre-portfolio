import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        ink: "#f5f5f7",
        muted: "#a1a1a6",
        subtle: "#6e6e73",
        link: "#d4a574",
        warm: "#d4a574",
        "warm-bright": "#e8c080",
        live: "#30d158",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Display'", "'Inter'", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.04em" },
    },
  },
  plugins: [],
};

export default config;
