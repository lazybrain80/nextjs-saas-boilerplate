import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import {
  MainBody,
  Features,
  Pricing,
  FAQ
} from '@/design/templates';

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
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
}