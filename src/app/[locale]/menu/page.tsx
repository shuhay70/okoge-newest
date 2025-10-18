import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <p>{t("title")}</p>
    </div>
  );
}
