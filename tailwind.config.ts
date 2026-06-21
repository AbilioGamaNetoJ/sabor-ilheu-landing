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
        "azul-mar": "#1B5E6B",
        "verde-agua": "#2D8F8F",
        "areia": "#F5EFE6",
        "terracota": "#D4744A",
      },
      fontFamily: {
        heading: ["var(--font-lato)", "sans-serif"],
        body: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
