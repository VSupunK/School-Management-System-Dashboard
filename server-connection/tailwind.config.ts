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
      // colors:{
      //   skyColor: "#c3ebfa",
      //   skyLightColor: "#edf9fd",
      //   PurpleColor: "#cfceff",
      //   PurpleLightColor: "#f1f0ff",
      //   YellowColor: "#fae27c",
      //   YellowLightColor: "#fefceb",
      //   lightGray: "#939393",

      // }

      colors:{
        skyColor: "#89ceae",
        skyLightColor: "#ace2c9",
        PurpleColor: "#aea7e8",
        PurpleLightColor: "#d2d0ec",
        YellowColor: "#cbce89",
        YellowLightColor: "#e5e8a2",
        redLightColor: "#da83a6",
        darkGray: "#a6b1c9",
        lightGray: "#dbe0e9",
      }
    },
  },
  plugins: [],
};
export default config;
