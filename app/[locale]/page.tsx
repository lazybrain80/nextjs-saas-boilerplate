import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { MainBody } from '@/design/templates/MainBody';

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

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <MainBody />
    </>
  );
}