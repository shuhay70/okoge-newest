"use client";

import { useTranslations, useMessages } from "next-intl"; // useMessages を追加
import Link from "next/link";
import { useState } from "react";
import { FaBook } from "react-icons/fa";

// --- メニュー項目の型定義 ---
interface MenuItem {
  name: string;
  price: number;
  description?: string; // description はオプションにする場合
}

export default function MenuPage() {
  const t = useTranslations("HomePage"); // ページタイトル用
  const tCategory = useTranslations("Categories"); // カテゴリ名表示用
  const tMenu = useTranslations("Menu"); // メニュー項目取得用
  const messages = useMessages(); // 全メッセージを取得

  // --- カテゴリキーのリストを動的に取得 ---
  // messages.Categories が存在し、オブジェクトであることを確認
  const categoryKeys =
    messages.Categories && typeof messages.Categories === "object"
      ? Object.keys(messages.Categories)
      : [];

  // --- 選択中のカテゴリキーを管理する状態 ---
  // 初期値として最初のカテゴリキーを設定
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>(
    categoryKeys[0] || ""
  );

  // --- 表示するメニュー項目を取得 ---
  // tMenu(selectedCategoryKey) はJSON文字列を返すのでパースする
  let currentMenuItems: MenuItem[] = [];
  try {
    // 選択されたカテゴリキーに対応するメニューデータを取得・パース
    currentMenuItems = tMenu.raw(selectedCategoryKey) as MenuItem[];
    // tMenu.raw() が配列でない場合のエラーハンドリング
    if (!Array.isArray(currentMenuItems)) {
      console.error(
        `Menu data for category "${selectedCategoryKey}" is not an array.`
      );
      currentMenuItems = [];
    }
  } catch (error) {
    console.error(
      `Error parsing menu data for category "${selectedCategoryKey}":`,
      error
    );
    currentMenuItems = []; // エラー時は空配列にする
  }

  return (
    <div className="pt-[30px]">
      {/* --- 既存の「もんじゃの歴史・焼き方」ボタン (変更なし) --- */}
      <div className="flex justify-center">
        <Link
          className="flex justify-center text-lg border-[3px] border-[#97B486] rounded-[20px] py-[20px] px-[60px]"
          href={"/history"} // リンク先を history に変更
        >
          <FaBook className="mr-[10px] mt-[5px]" />
          {t("title")}
        </Link>
      </div>
      <p className="border-[1px] border-[#97B486] mt-[30px]"></p>

      {/* --- カテゴリスクロール --- */}
      <div className="h-[80px] flex items-center overflow-x-auto whitespace-nowrap px-[15px] space-x-[10px]">
        {/* categoryKeys を使ってボタンを生成 */}
        {categoryKeys.map((categoryKey) => (
          <button
            key={categoryKey}
            // クリックされたら selectedCategoryKey を更新
            onClick={() => setSelectedCategoryKey(categoryKey)}
            className={`flex-shrink-0 text-black px-[25px] py-[15px] text-base transition-colors rounded-full ${
              selectedCategoryKey === categoryKey
                ? "bg-[#97B486] font-bold text-white" // 選択中のスタイル
                : "bg-gray-100 hover:bg-gray-300" // 通常のスタイル
            }`}
          >
            {/* tCategory を使って表示名を翻訳 */}
            {tCategory(categoryKey)}
          </button>
        ))}
      </div>
      <p className="border-[1px] border-[#97B486]"></p>

      {/* --- メニュー一覧表示 --- */}
      <h2 className="text-2xl font-bold text-center py-6 bg-[#f4f5f2]">
        {/* 選択中のカテゴリ名を表示 (翻訳) */}
        {tCategory(selectedCategoryKey)}
      </h2>

      <div className="px-4 space-y-4 pb-[50px] bg-[#f4f5f2]">
        {currentMenuItems.length > 0 ? (
          currentMenuItems.map((item) => (
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
          <p className="text-center text-gray-500">
            このカテゴリには現在メニューがありません。
          </p>
        )}
      </div>
    </div>
  );
}
