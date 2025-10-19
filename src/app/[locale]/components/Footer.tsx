import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex justify-center lg:w-full bg-[#505938] lg:p-2 lg:h-[350px] overflow-hidden">
      <div className="lg:flex">
        <div className="flex items-center justify-center">
          <Image
            className="lg:pl-[20px] lg:w-auto lg:h-auto my-[30px]"
            src="/image/logo.jpg"
            width={250}
            height={250}
            alt="おこげのロゴ"
          ></Image>
        </div>
        <div className="lg:pt-[55px] lg:pl-[5px] flex flex-col items-cenetr text-center">
          <h1 className="text-white  lg:pb-[10px]"> {t("title1")}</h1>
          <p className="text-white  lg:w-[330px] w-[290px]">{t("ex11")}</p>
        </div>
        <div className="lg:border-l  border-white lg:h-[280px]  lg:mt-[30px]  lg:ml-[70px]  lg:mr-[70px] h-[5px] border-t my-[20px] mx-[10px]" />
        <div className=" lg:pt-[55px]  lg:pl-[5px] flex flex-col items-cenetr text-center">
          <h1 className="text-white  lg:pb-[10px]">{t("title2")}</h1>
          <p className="text-white  lg:w-[530px]  w-[290px]">{t("ex21")}</p>
          <p className="text-white  lg:w-[530px]  w-[290px]">{t("ex22")}</p>
          <div className=" lg:ml-[290px] lg:mt-[20px] mt-[10px] mb-[80px]">
            <Link className="text-red-200 " href="https://kano-corp.tokyo/">
              {t("ex23")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
