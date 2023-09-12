import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: "#6AAA64",
        yellow: "#CEB02C",
        gray: "#939B9F",
        darkBg: "#262B3C",
        darkBgKeys: "#565F7E",
        lightBgKeys: "rgba(211, 214, 218, 1)",
        darkBgKeyboard: "rgba(218, 220, 224, 0.03)",
        lightBgKeyboard: "rgba(243, 243, 243, 1)",
        darkText: "#202537",
        lightText: "#DADCE0",
      },
      fontFamily: {
        sans: ["Roboto"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
