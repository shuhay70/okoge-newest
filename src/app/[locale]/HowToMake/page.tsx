import { useTranslations } from "next-intl";
import {
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
  Bs4CircleFill,
  Bs5CircleFill,
} from "react-icons/bs";
import { FaFire } from "react-icons/fa6";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("History");

  return (
    <main className="bg-[#f4f5f2] flex  justify-center">
      <div className="flex flex-col">
        <Link href="/menu" className="font-bold mt-[20px]">
          {t("backToLang")}
        </Link>

        <div className="w-[330px]">
          <div className="bg-white rounded-[40px] my-[50px]">
            <p className="flex items-center font-bold text-xl pt-[30px] pl-[25px] pb-[15px]">
              <FaFire className="mx-[10px] w-[25px] h-[25px] text-[#505938]" />
              {t("title4")}
            </p>

            <div className="flex flex-col">
              <Bs1CircleFill className="w-[20px] h-[20px] my-[8px] mx-[20px] text-[#505938]" />
              <p className="px-[25px]">{t("EXPLANATION_PARAGRAPH12")} </p>
            </div>
            <div className="flex flex-col">
              <Bs2CircleFill className="w-[20px] h-[20px] my-[8px] mx-[20px] text-[#505938]" />
              <p className="px-[25px]">{t("EXPLANATION_PARAGRAPH13")} </p>
            </div>
            <div className="flex flex-col">
              <Bs3CircleFill className="w-[20px] h-[20px] my-[8px] mx-[20px] text-[#505938]" />
              <p className="px-[25px]">{t("EXPLANATION_PARAGRAPH14")} </p>
            </div>
            <div className="flex flex-col">
              <Bs4CircleFill className="w-[20px] h-[20px] my-[8px] mx-[20px] text-[#505938]" />
              <p className="px-[25px]">{t("EXPLANATION_PARAGRAPH15")} </p>
            </div>
            <div className="flex flex-col pb-[25px]">
              <Bs5CircleFill className="w-[20px] h-[20px] my-[8px] mx-[20px] text-[#505938]" />
              <p className="px-[25px]">{t("EXPLANATION_PARAGRAPH16")} </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
