import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-[#505938] h-screen">
      <Image
        className="lg:pl-[20px] lg:w-auto lg:h-auto my-[30px]"
        src="/image/logo.jpg"
        width={120}
        height={120}
        alt="おこげのロゴ"
      ></Image>
      <div className="flex flex-col w-full mb-[50px]">
        <Link
          href="/menu"
          locale="ja"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[25px] rounded-md hover:bg-white/20 transition-colors mb-[20px]"
        >
          日本語
        </Link>
        <Link
          href="/survey"
          locale="en"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[25px] rounded-md hover:bg-white/20 transition-colors mb-[20px]"
        >
          ENGLISH
        </Link>
        <Link
          href="/survey"
          locale="zh"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[25px] rounded-md hover:bg-white/20 transition-colors mb-[20px]"
        >
          中文
        </Link>
        <Link
          href="/survey"
          locale="ko"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[25px] rounded-md hover:bg-white/20 transition-colors mb-[20px]"
        >
          한국어
        </Link>
      </div>
    </div>
  );
}
