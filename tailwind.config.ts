import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F2F7F4",
          DEFAULT: "#1F4E3D",
          800: "#174032",
        },
        offwhite: "#F7F5EF",
        ink: "#1C1C1C",
        ember: {
          DEFAULT: "#C66D3E",
          700: "#A85A32",
        },
        stone: "#6B6B5E",
      },
      fontFamily: {
        serif: [
          "var(--font-lora)",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-lg": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h1: ["2.25rem", { lineHeight: "1.2" }],
        h2: ["1.5rem", { lineHeight: "1.3" }],
        h3: ["1.25rem", { lineHeight: "1.35" }],
        lead: ["1.25rem", { lineHeight: "1.7" }],
        body: ["1.0625rem", { lineHeight: "1.75" }],
        small: ["0.9375rem", { lineHeight: "1.6" }],
        label: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        micro: ["0.75rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
export default config;
