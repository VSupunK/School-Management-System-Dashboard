import { Yellowtail } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        skyColor: "#c3ebfa",
        skyLightColor: "#edf9fd",
        PurpleColor: "#cfceff",
        PurpleLightColor: "#f1f0ff",
        YellowColor: "#fae27c",
        YellowLightColor: "#fefceb",

      }
    },
  },
  plugins: [],
};
export default config;
