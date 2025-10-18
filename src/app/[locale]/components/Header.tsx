"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="flex flex-col justify-center lg:w-full bg-[#505938]">
      <div className="flex justify-between w-full">
        <div className="flex justify-center items-center m-[15px] text-white text-lg">
          <Image
            className="mr-[10px]"
            src="/image/logo.jpg"
            width={40}
            height={40}
            alt="おこげのロゴ"
          ></Image>
          <h2>{t("restaurantName")}</h2>
        </div>
        <details
          open
          className="flex flex-col justify-center items-center dropdown dropdown-end m-[15px] relative"
        >
          <summary className="list-none [&::-webkit-details-marker]:hidden">
            <Image
              className="mr-[10px]"
              src="/image/tikyugi.jpg"
              width={40}
              height={40}
              alt="地球儀マーク"
            ></Image>
          </summary>
          <ul className="dropdown-content menu bg-gray-100 text-black z-[1] w-[100px] p-2 shadow absolute right-0 mt-2">
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/" locale="ja">
                {t("button22")}
              </Link>
            </li>
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/" locale="en">
                {t("button21")}
              </Link>
            </li>
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/" locale="zh">
                {t("button23")}
              </Link>
            </li>
            <li onClick={() => setLangMenuOpen(false)}>
              <Link href="/" locale="ko">
                {t("button24")}
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
}
