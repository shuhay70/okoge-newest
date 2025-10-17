import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // srcフォルダ内のappとcomponentsを対象にする
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headercolor: "#0D3858",
        headercolor2: "#092137",
        footercolor: "#0D3657",
        logocolor: "#0c3957",
        selectbgcolor: "#585960",
      },
    },
  },
  plugins: [],
};

export default config;
