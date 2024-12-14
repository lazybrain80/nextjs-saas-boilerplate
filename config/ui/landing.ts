import { useTranslations } from 'next-intl';
import { LandingConfig } from '@/types';

export const getLandingNavbarConfig = (): LandingConfig  => {
  const t = useTranslations('Navbar');
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
