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
        forest: "#1F4E3D",
        offwhite: "#F7F5EF",
        ink: "#1C1C1C",
        ember: "#C66D3E",
        stone: "#6B6B5E",
      },
      fontFamily: {
        serif: [
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
    },
  },
  plugins: [],
};
export default config;
