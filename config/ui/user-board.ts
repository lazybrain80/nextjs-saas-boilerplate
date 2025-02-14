import { getTranslations, getLocale } from 'next-intl/server';
import type { PageNavConfig } from "@/types";

export const getUserBoardConfig = async (): Promise<PageNavConfig> => {
  const t = await getTranslations('UserSideNav');
  const locale = await getLocale()
  return {
    mainNav: [],
    sidebarNav: [
      {
        id: 'home',
        title: 'HOME',
        items: [
          {
            id: 'dashboard1',
            title: t('dashboard'),
            href: `/${locale}/dashboard`,
            icon: 'dashboard',
          },
          {
            id: 'dashboard2',
            title: t('dashboard2'),
            href: `/${locale}/dashboard2`,
            icon: 'dashboard2',
          },
          {
            id: 'front-page',
            title: 'Front pages',
            icon: 'laptop',
            items: [
              {
                id: 'home',
                title: 'Home',
                href: `/${locale}`,
                icon: 'home',
              },
              {
                id: 'about',
                title: 'About',
                href: `/${locale}/about`,
                icon: 'page',
              },
              {
                id: 'docs',
                title: 'Docs',
                href: `/${locale}/docs`,
                icon: 'book',
              },
              {
                id: 'blogs',
                title: 'Blog',
                href: `/${locale}/blogs`,
                icon: 'post',
              },
              {
                id: 'purchase',
                title: 'Purchase',
                href: `/${locale}/purchase`,
                icon: 'cart',
              }
            ]
          }
        ]
      },
      {
        id: 'apps',
        title: 'APPS',
        items: [
          {
            id: 'users',
            title: 'Users',
            icon: 'user',
            items: [
              {
                id: 'profile',
                title: 'Profile',
                href: `/${locale}/profile`,
                icon: 'profile',
              },
              {
                id: 'teams',
                title: 'Teams',
                href: `/${locale}/teams`,
                icon: 'users',
              },
              {
                id: 'settings',
                title: 'Settings',
                href: `/${locale}/settings`,
                icon: 'settings',
              },
            ]
          }
        ]
      },
    ],
  };
};
