"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { GrLanguage } from "react-icons/gr";

export default function Header() {
  const t = useTranslations("Header");

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
      </div>
    </header>
  );
}
