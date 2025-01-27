import { getTranslations, getLocale } from 'next-intl/server';
import type { UserMenuConfig } from "@/types";

export const getUserMenuConfig = async (): Promise<UserMenuConfig> => {
  const t = await getTranslations('UserSideNav');
  const locale = await getLocale()
  return {
    sidebarNav: [
      {
        id: "dashboard",
        title: t('dashboard'),
        href: `/${locale}/dashboard`,
      },
      {
        id: "profile",
        title: t('profile'),
        href: `/${locale}/profile`,
      },
    ],
  };
};
