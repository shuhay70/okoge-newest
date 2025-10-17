/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // appディレクトリ内のすべてのサブフォルダとファイルを対象にします
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // もしcomponentsフォルダなどがあれば、それも追加します
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
