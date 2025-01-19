import {getTranslations} from 'next-intl/server';
import { LandingConfig } from '@/types';

export const getLandingNavbarConfig = async (): Promise<LandingConfig>  => {
  const t = await getTranslations('Navbar');
  return {
    mainNav: [
      {
        title: t("functions"),
        href: `/functions`,
      },
      {
        title: t("product"),
        href: `/product`,
      },
      {
        title: t("docs"),
        href: `/docs`,
      },
      {
        title: t("purchase"),
        href: `/purchase`,
      },
    ],
  };
};
