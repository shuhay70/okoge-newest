/** @type {import('postcss-load-config').Config} */
const config = {
  // ← オブジェクトを 'config' という名前の変数に代入
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config; // ← 名前をつけた変数をエクスポート
