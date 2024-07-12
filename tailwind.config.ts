import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        "primary-100": "#c1ffff",
        "primary-200": "#55ccc9",
        "primary-300": "#019b98",
        "accent-100": "#ffbfab",
        "accent-200": "#dd0025",
        "text-100": "#3f7a8d",
        "text-200": "#014e60",
        "bg-100": "#fbfbfb",
        "bg-200": "#f1f1f1",
        "bg-300": "#c8c8c8",
        dark: "#343947",
      },
    },
  },
  plugins: [],
};
export default config;
