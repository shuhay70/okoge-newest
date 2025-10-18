import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center bg-[#505938] h-screen">
      <img
        className="h-[220px] w-[220px] my-[30px]"
        src="/image/logo.jpg"
        alt="logo"
      />
      <div className="flex flex-col w-full">
        <Link
          href="/menu"
          locale="ja"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[30px]"
        >
          日本語
        </Link>
        <Link
          href="/menu"
          locale="en"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[30px]"
        >
          ENGLISH
        </Link>
        <Link
          href="/menu"
          locale="zh"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[30px]"
        >
          中文
        </Link>
        <Link
          href="/menu"
          locale="ko"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[30px]"
        >
          한국어
        </Link>
      </div>
    </div>
  );
}
