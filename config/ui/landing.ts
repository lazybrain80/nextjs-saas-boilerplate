import {getTranslations} from 'next-intl/server';
import { PageNavConfig } from '@/types';

export const getLandingNavbarConfig = async (): Promise<PageNavConfig>  => {
  const t = await getTranslations('Navbar');
  return {
    mainNav: [
      {
        title: t("about"),
        href: `/about`,
      },
      {
        title: t("docs"),
        href: `/docs`,
      },
      {
        title: t("blog"),
        href: `/blogs`,
      },
      {
        title: t("purchase"),
        href: `/purchase`,
      },
    ],
    sidebarNav: [],
  };
};
