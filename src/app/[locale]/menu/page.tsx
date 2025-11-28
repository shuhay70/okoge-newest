"use client";

import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { FaBook, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/contexts/CartContext";

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface DrinkSubCategory {
  title: string;
  items: MenuItem[];
}

interface DrinkCategory {
  [subCategoryKey: string]: DrinkSubCategory;
}

export default function MenuPage() {
  const t = useTranslations("HomePage");
  const tCategory = useTranslations("Categories");
  const tMenu = useTranslations("Menu");
  const messages = useMessages();
  const { addToCart, totalItems } = useCart();

  const categoryKeys =
    messages.Categories && typeof messages.Categories === "object"
      ? Object.keys(messages.Categories)
      : [];

  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>(
    categoryKeys[0] || ""
  );

  const menuData =
    messages.Menu && typeof messages.Menu === "object" ? messages.Menu : {};
  const selectedMenuData = menuData[selectedCategoryKey] as
    | MenuItem[]
    | DrinkCategory
    | undefined;

  const isDrinkCategory = selectedCategoryKey === "drink";

  const handleAddToCart = (item: MenuItem) => {
    addToCart({ name: item.name, price: item.price });
    alert(`${item.name} ${tMenu("added")}`);
  };

  return (
    <div className="pt-[18px]">
      {/* カートアイコン */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/cart" className="relative">
          <div className="bg-[#507938] text-white p-4 rounded-full shadow-lg hover:bg-[#505938]/90 transition-colors">
            <FaShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* 既存のコンテンツ */}
      <div className="flex justify-center">
        <Link
          className="flex justify-center text-lg border-[3px] border-[#97B486] rounded-[20px] py-[15px] px-[20px] mb-[15px] w-[320px]"
          href={"/history"}
        >
          <FaBook className="mr-[10px] mt-[5px]" />
          {t("title")}
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          className="flex justify-center text-lg border-[3px] border-[#97B486] rounded-[20px] py-[15px] px-[20px] w-[320px]"
          href={"/HowToMake"}
        >
          <FaBook className="mr-[10px] mt-[5px]" />
          {t("title1")}
        </Link>
      </div>
      <p className="border-[1px] border-[#97B486] mt-[18px]"></p>

      {/* カテゴリスクロール */}
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

      {/* メニュー表示 */}
      <h2 className="text-2xl font-bold text-center py-[15px] bg-[#f4f5f2]"></h2>

      <div className="px-4 space-y-4 pb-[50px] bg-[#f4f5f2]">
        {isDrinkCategory &&
        typeof selectedMenuData === "object" &&
        selectedMenuData !== null ? (
          Object.entries(selectedMenuData as DrinkCategory).map(
            ([subCategoryKey, subCategoryData]) => (
              <div key={subCategoryKey} className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-center text-[#505938]">
                  {subCategoryData.title}
                </h3>
                <div className="space-y-4">
                  {subCategoryData.items.map((item) => (
                    <div
                      key={item.name}
                      className="border border-gray-300 p-4 rounded-lg shadow bg-white"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <div className="flex items-center space-x-2">
                          <p className="text-md text-white font-medium py-[5px] px-[10px] rounded-[15px] bg-[#505938]">
                            ¥{item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                      )}
                      <div className="flex justify-between mt-[20px]">
                        <p></p>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#505938] text-white px-4 py-2 rounded-lg hover:bg-[#505938]/90 transition-colors text-sm">
                          {tMenu("addToCart")}
                      </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )
        ) : Array.isArray(selectedMenuData) && selectedMenuData.length > 0 ? (
          selectedMenuData.map((item) => (
            <div
              key={item.name}
              className="border border-gray-300 p-4 rounded-lg shadow bg-white"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-md text-white font-medium py-[5px] px-[10px] rounded-[15px] bg-[#505938]">
                    ¥{item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              {item.description && (
                <p className="text-gray-600 text-sm">{item.description}</p>
              )}
              <div className="flex justify-between mt-[20px]">
                <p></p>
                <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#505938] text-white px-4 py-2 rounded-lg hover:bg-[#505938]/90 transition-colors text-sm"
                  >
                    {tMenu("addToCart")}
                  </button>
              </div>
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