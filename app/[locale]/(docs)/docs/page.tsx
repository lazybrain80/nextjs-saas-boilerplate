import { useLocale, useTranslations } from "next-intl";

export default function DocumentsPage() {
  const t = useTranslations("DocumentsPage");
  const locale = useLocale();
  return (
        <div className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
          {t("title")}
        </div>
  );
}