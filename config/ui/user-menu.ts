import { getTranslations, getLocale } from 'next-intl/server';
import type { PageNavConfig } from "@/types";

export const getUserMenuConfig = async (): Promise<PageNavConfig> => {
  const t = await getTranslations('UserSideNav');
  const locale = await getLocale()
  return {
    mainNav: [],
    sidebarNav: [
      {
        id: "dashboard",
        title: t('dashboard'),
        href: `/${locale}/dashboard`,
        icon: 'home',
      },
      {
        id: "profile",
        title: t('profile'),
        href: `/${locale}/profile`,
      },
    ],
  };
};
