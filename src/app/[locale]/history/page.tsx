import { useTranslations } from "next-intl";

import type { Metadata } from "next";

// generateMetadata関数を追加
// generateMetadata関数の中でクライアントサイド専用のフック（Hook）であるuseTranslationsを呼び出すことはできない。
export async function generateMetadata({}): Promise<Metadata> {
  return {
    title: "もんじゃの歴史", // 例として「明太子もちもんじゃ」
    description: `もんじゃの歴史を紹介するページです。`,
  };
}

export default function HomePage() {
  const t = useTranslations("History");

  return (
    <main>
      <div
        className="pt-[95px] scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white"
        style={{
          backgroundImage: "url('/image/backimg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto mt-[30px]">
          <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pb-[0px] pb-[10px]">
            {t("title1")}
          </p>
          <div className="lg:flex">
            <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH1")}</p>
          </div>

          <div className="lg:w-[1100px] border-t border-gray-300 lg:my-[40px] my-[25px]"></div>
          <div className="lg:flex">
            <div className="lg:flex lg:flex-col">
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pb-[0px] pb-[10px]">
                {t("title2")}{" "}
              </p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH2")}</p>
            </div>
          </div>
          <div className="lg:w-[1100px] border-t border-gray-300 lg:my-[40px] my-[25px]"></div>

          <div className="lg:flex lg:items-center">
            <div className="lg:flex lg:flex-col ">
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pb-[0px] pb-[10px]">
                {t("title3")}
              </p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH3")}</p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH4")} </p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH5")} </p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH6")}</p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH7")}</p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH8")}</p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH9")}</p>
              <p className="lg:px-[25px]">{t("EXPLANATION_PARAGRAPH10")}</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
