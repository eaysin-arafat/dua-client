import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgWhiteColor: "#FFFFFF",
        bgColor: "#F7F8FA",
        // bgColor: "#D1D5DB",
        bgGrayColor: "#E8F0F5",
        primaryColor: "#1FA45B",
        textColor: "#454545",
        textGrayColor: "#B0B1B2",
      },
    },
  },
  plugins: [],
};
export default config;
