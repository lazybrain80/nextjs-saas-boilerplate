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
            href: `/${locale}/apps/dashboard`,
            icon: 'dashboard',
          },
          {
            id: 'dashboard2',
            title: t('dashboard2'),
            href: `/${locale}/apps/dashboard2`,
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
                href: `/${locale}/apps/user-boards/profile`,
                icon: 'profile',
              },
              {
                id: 'teams',
                title: 'Teams',
                href: `/${locale}/apps/user-boards/teams`,
                icon: 'users',
              },
              {
                id: 'projects',
                title: 'Projects',
                href: `/${locale}/apps/user-boards/projects`,
                icon: 'projects',
              },
              {
                id: 'connections',
                title: 'Connections',
                href: `/${locale}/apps/user-boards/connections`,
                icon: 'connections',
              }
            ]
          },
          {
            id: 'notes',
            title: 'Notes',
            href: `/${locale}/apps/notes`,
            icon: 'notes',
          },
          {
            id: 'calendar',
            title: 'Calendar',
            href: `/${locale}/apps/calendar`,
            icon: 'calendar',
          },
          {
            id: 'invoice',
            title: 'Invoice',
            href: `/${locale}/apps/invoice`,
            icon: 'invoice',
          },
          {
            id: 'ecommerce',
            title: 'Ecommerce',
            icon: 'ecommerce',
            items: [
              {
                id: 'shopping',
                title: 'Shopping',
                href: `/${locale}/apps/ecommerce`,
                icon: 'shopping',
              },
              {
                id: 'inventory',
                title: 'Inventory',
                href: `/${locale}/apps/ecommerce/inventory`,
                icon: 'items-search',
              },
            ]
          },
          {
            id: 'settings',
            title: 'Settings',
            href: `/${locale}/apps/settings`,
            icon: 'settings',
          },
        ]
      },
      {
        id: 'ui',
        title: 'UI',
        items: [
          {
            id: 'components',
            title: 'Components',
            icon: 'components',
            items: [
              {
                id: 'accordion',
                title: 'Accordion',
                href: `/${locale}/components/accordion`
              },
            ]
          },
          {
            id: 'forms',
            title: 'Forms',
            icon: 'forms',
            items: []
          },
          {
            id: 'charts',
            title: 'Charts',
            icon: 'charts',
            items: []
          },
          {
            id: 'tables',
            title: 'Tables',
            icon: 'tables',
            items: []
          },
        ]
      }
    ],
  };
};
