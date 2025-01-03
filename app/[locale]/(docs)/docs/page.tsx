import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function DocumentsPage() {
  const t = useTranslations("DocumentsPage");
  return (
    <>
      <div>
        {t("title")}
      </div>
    </>
  );
}