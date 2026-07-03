import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        ink: "#f5f5f7",
        muted: "#b5b5ba",
        subtle: "#8a8a8f",
        warm: "#e8a050",
        "warm-bright": "#f5b865",
        "warm-muted": "#d4924a",
        link: "#e8a050",
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
