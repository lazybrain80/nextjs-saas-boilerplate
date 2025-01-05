import { useLocale, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { Section } from "@/design/components";
import { DocsSidebarNav } from "@/design/features/docs/sidebar-nav";
import { getDocsConfig } from "@/config/ui/docs";

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
  const locale = useLocale();
  return (
    <Section className="py-0">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
          <DocsSidebarNav items={getDocsConfig(`${locale}`).sidebarNav} />
        </aside>
        <div className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
          {t("title")}
        </div>
      </div>
    </Section>
  );
}