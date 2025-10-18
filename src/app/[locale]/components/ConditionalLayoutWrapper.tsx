"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function ConditionalLayoutWrapper({ children }: Props) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const isHomePage = pathSegments.length === 1;

  return (
    <>
      {!isHomePage && <Header />}
      {children}
      {!isHomePage && <Footer />}
    </>
  );
}
