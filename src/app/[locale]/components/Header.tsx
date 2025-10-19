"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";

export default function Header() {
  const t = useTranslations("Header");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="flex flex-col justify-center lg:w-full bg-[#505938]">
      <div className="flex justify-between w-full">
        <Link href={"/"}>
          <div className="flex justify-center items-center mx-[15px] my-[25px] text-white text-lg">
            <Image
              className="mr-[10px]"
              src="/image/logo.jpg"
              width={55}
              height={55}
              alt="おこげのロゴ"
            ></Image>
            <h2 className="text-[22px]">{t("restaurantName")}</h2>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="flex justify-center items-center ml-[15px] mr-[25px] my-[35px] text-white text-lg">
            <GrLanguage className="h-[40px] w-[40px] text-white" />
          </div>
        </Link>

        {/* <details className="flex flex-col justify-center items-center dropdown dropdown-end m-[15px] relative">
          <summary className="list-none [&::-webkit-details-marker]:hidden">
          </summary>
          <ul className="dropdown-content menu bg-gray-300 font-bold text-black z-[1] px-[40px] py-[30px] rounded-[30px] p-2 shadow absolute right-0 mt-2 space-y-[20px]">
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/menu" locale="ja">
                {t("button22")}
              </Link>
            </li>
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/menu" locale="en">
                {t("button21")}
              </Link>
            </li>
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/menu" locale="zh">
                {t("button23")}
              </Link>
            </li>
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/menu" locale="ko">
                {t("button24")}
              </Link>
            </li>
          </ul>
        </details> */}
      </div>
    </header>
  );
}
