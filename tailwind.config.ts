const {nextui} = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui()],
  theme:{
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
      }
    }
  }
};
export default config;
