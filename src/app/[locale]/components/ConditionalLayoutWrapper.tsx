"use client";

import { usePathname } from "@/i18n/routing";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function ConditionalLayoutWrapper({ children }: Props) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {!isHomePage && <Header />}
      {children}
      {!isHomePage && <Footer />}
    </>
  );
}
