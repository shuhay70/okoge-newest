import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const categories = [
    "もんじゃ",
    "お好み焼き",
    "季節のおすすめ",
    "ドリンク",
    "一品料理",
    "鉄板焼き",
    "デザート",
    "ランチ",
  ];

  return (
    <div className="h-screen pt-[30px]">
      <div className="flex justify-center">
        <Link
          className="flex justify-center text-lg border-[3px] border-[#97B486] rounded-[20px] hover:bg-gray-600 py-[20px] px-[110px]"
          href={"/menu"}
        >
          {t("title")}
        </Link>
      </div>
      <p className="border-[1px] border-[#97B486] mt-[30px]"></p>

      <div className="h-[80px] flex items-center overflow-x-auto whitespace-nowrap px-[15px] space-x-[10px]">
        {/* 3. カテゴリのリストをボタンとして表示 */}
        {categories.map((category) => (
          <button
            key={category}
            className="flex-shrink-0 bg-gray-100 text-black px-[25px] py-[15px] text-base hover:bg-gray-300 transition-colors"
          >
            {/*
              flex-shrink-0: 要素が縮むのを防ぎます (スクロールに必須)
              bg-gray-100 text-black: 背景色と文字色
              px-5 py-2 rounded-full: 見た目を丸い「チップ」形状にします
            */}
            {category}
          </button>
        ))}
      </div>
      <p className="border-[1px] border-[#97B486]"></p>
    </div>
  );
}
