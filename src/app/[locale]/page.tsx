import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-green-400">
      <h1 className="text-red-600">{t("title")}</h1>
      <h1 className="text-yellow-500">{t("title1")}</h1>
    </div>
  );
}
