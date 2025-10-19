import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="items-center bg-[#505938] h-screen">
      <div className="flex flex-col h-[500px] pt-[120px] justify-between">
        <Link
          href="/menu"
          locale="ja"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[50px]"
        >
          日本語
        </Link>
        <Link
          href="/menu"
          locale="en"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[50px]"
        >
          ENGLISH
        </Link>
        <Link
          href="/menu"
          locale="zh"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[50px]"
        >
          中文
        </Link>
        <Link
          href="/menu"
          locale="ko"
          className="text-center text-2xl bg-white text-black mx-[40px] py-[35px] rounded-md hover:bg-white/20 transition-colors mb-[50px]"
        >
          한국어
        </Link>
      </div>
    </div>
  );
}
