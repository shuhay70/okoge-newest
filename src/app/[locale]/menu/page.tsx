"use client";

import { useTranslations, useMessages } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaBook } from "react-icons/fa";

// --- メニュー項目の型定義 ---
interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

// --- ドリンクサブカテゴリの型定義 ---
interface DrinkSubCategory {
  title: string;
  items: MenuItem[];
}

// --- ドリンクカテゴリ全体の型定義 ---
interface DrinkCategory {
  [subCategoryKey: string]: DrinkSubCategory;
}

export default function MenuPage() {
  const t = useTranslations("HomePage"); // ページタイトル用
  const tCategory = useTranslations("Categories"); // カテゴリ名表示用
  const messages = useMessages(); // 全メッセージを取得

  // --- カテゴリキーのリストを動的に取得 ---
  const categoryKeys =
    messages.Categories && typeof messages.Categories === "object"
      ? Object.keys(messages.Categories)
      : [];

  // --- 選択中のカテゴリキーを管理する状態 ---
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>(
    categoryKeys[0] || ""
  );

  // --- 表示するメニュー項目またはドリンクサブカテゴリを取得 ---
  // messages.Menu が存在し、オブジェクトであることを確認
  const menuData =
    messages.Menu && typeof messages.Menu === "object" ? messages.Menu : {};
  // 選択されたカテゴリのデータを取得
  const selectedMenuData = menuData[selectedCategoryKey] as
    | MenuItem[]
    | DrinkCategory
    | undefined;

  // --- ドリンクカテゴリかどうかを判定 ---
  const isDrinkCategory = selectedCategoryKey === "drink";

  return (
    <div className="pt-[30px]">
      {/* --- 既存の「もんじゃの歴史・焼き方」ボタン (変更なし) --- */}
      <div className="flex justify-center">
        <Link
          className="flex justify-center text-lg border-[3px] border-[#97B486] rounded-[20px] py-[20px] px-[60px]"
          href={"/history"}
        >
          <FaBook className="mr-[10px] mt-[5px]" />
          {t("title")}
        </Link>
      </div>
      <p className="border-[1px] border-[#97B486] mt-[30px]"></p>

      {/* --- カテゴリスクロール --- */}
      <div className="h-[80px] flex items-center overflow-x-auto whitespace-nowrap px-[15px] space-x-[10px]">
        {categoryKeys.map((categoryKey) => (
          <button
            key={categoryKey}
            onClick={() => setSelectedCategoryKey(categoryKey)}
            className={`flex-shrink-0 text-black px-[25px] py-[15px] text-base transition-colors rounded-full ${
              selectedCategoryKey === categoryKey
                ? "bg-[#97B486] font-bold text-white"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {tCategory(categoryKey)}
          </button>
        ))}
      </div>
      <p className="border-[1px] border-[#97B486]"></p>

      {/* --- メニュー一覧表示 --- */}
      <h2 className="text-2xl font-bold text-center py-6 bg-[#f4f5f2]">
        {tCategory(selectedCategoryKey)}
      </h2>

      <div className="px-4 space-y-4 pb-[50px] bg-[#f4f5f2]">
        {/* --- ドリンクカテゴリの場合の表示 --- */}
        {isDrinkCategory &&
        typeof selectedMenuData === "object" &&
        selectedMenuData !== null ? (
          Object.entries(selectedMenuData as DrinkCategory).map(
            ([subCategoryKey, subCategoryData]) => (
              <div key={subCategoryKey} className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-center text-[#505938]">
                  {subCategoryData.title} {/* サブカテゴリタイトルを表示 */}
                </h3>
                <div className="space-y-4">
                  {subCategoryData.items.map((item) => (
                    <div
                      key={item.name}
                      className="border border-gray-300 p-4 rounded-lg shadow bg-white"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <p className="text-md text-white font-medium py-[5px] px-[10px] rounded-[15px] bg-[#505938]">
                          ¥{item.price.toLocaleString()}
                        </p>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          )
        ) : // --- ドリンク以外のカテゴリの場合の表示 (従来のロジック) ---
        Array.isArray(selectedMenuData) && selectedMenuData.length > 0 ? (
          selectedMenuData.map((item) => (
            <div
              key={item.name}
              className="border border-gray-300 p-4 rounded-lg shadow bg-white"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-md text-white font-medium py-[5px] px-[10px] rounded-[15px] bg-[#505938]">
                  ¥{item.price.toLocaleString()}
                </p>
              </div>
              {item.description && (
                <p className="text-gray-600 text-sm">{item.description}</p>
              )}
            </div>
          ))
        ) : (
          // --- データがない場合の表示 ---
          <p className="text-center text-gray-500">
            このカテゴリには現在メニューがありません。
          </p>
        )}
      </div>
    </div>
  );
}
