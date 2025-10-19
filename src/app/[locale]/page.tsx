import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-[#505938] h-screen">
      <Image
        className="lg:pl-[20px] lg:w-auto lg:h-auto my-[30px]"
        src="/image/logo.jpg"
        width={220}
        height={220}
        alt="おこげのロゴ"
      ></Image>
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
