import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 7s ease infinite",
      },
    },
    keyframes: {
      "gradient-x": {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
      },
    },
  },
  plugins: [],
};
export default config;
