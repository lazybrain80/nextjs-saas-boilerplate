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
              {
                id: 'alert',
                title: 'Alert',
                href: `/${locale}/components/alert`
              },
              {
                id: 'avatar',
                title: 'Avatar',
                href: `/${locale}/components/avatar`
              },
              {
                id: 'badge',
                title: 'Badge',
                href: `/${locale}/components/badge`
              },
              {
                id: 'button',
                title: 'Button',
                href: `/${locale}/components/button`
              },
              {
                id: 'card',
                title: 'Card',
                href: `/${locale}/components/card`
              },
              {
                id: 'carousel',
                title: 'Carousel',
                href: `/${locale}/components/carousel`
              },
              {
                id: 'checkbox',
                title: 'Checkbox',
                href: `/${locale}/components/checkbox`
              },
              {
                id: 'chips-input',
                title: 'Chips Input',
                href: `/${locale}/components/chips-input`
              },
              {
                id: 'dialog',
                title: 'Dialog',
                href: `/${locale}/components/dialog`
              },
              {
                id: 'drawer',
                title: 'Drawer',
                href: `/${locale}/components/drawer`
              },
              {
                id: 'dropdown-menu',
                title: 'Dropdown Menu',
                href: `/${locale}/components/dropdown-menu`
              },
              {
                id: 'file-importer',
                title: 'File Importer',
                href: `/${locale}/components/file-importer`
              },
              {
                id: 'gradient-text',
                title: 'Gradient Text',
                href: `/${locale}/components/gradient-text`
              },
              {
                id: 'input',
                title: 'Input',
                href: `/${locale}/components/input`
              },
              {
                id: 'label',
                title: 'Label',
                href: `/${locale}/components/label`
              },
              {
                id: 'menubar',
                title: 'Menubar',
                href: `/${locale}/components/menubar`
              },
              {
                id: 'navigation-menu',
                title: 'Navigation Menu',
                href: `/${locale}/components/navigation-menu`
              },
              {
                id: 'popover',
                title: 'Popover',
                href: `/${locale}/components/popover`
              },
              {
                id: 'progress',
                title: 'Progress',
                href: `/${locale}/components/progress`
              },
              {
                id: 'radio',
                title: 'Radio',
                href: `/${locale}/components/radio`
              },
              {
                id: 'scroll-area',
                title: 'Scroll Area',
                href: `/${locale}/components/scroll-area`
              },
              {
                id: 'select',
                title: 'Select',
                href: `/${locale}/components/select`
              },
              {
                id: 'separator',
                title: 'Separator',
                href: `/${locale}/components/separator`
              },
              {
                id: 'sheet',
                title: 'Sheet',
                href: `/${locale}/components/sheet`
              },
              {
                id: 'slider',
                title: 'Slider',
                href: `/${locale}/components/slider`
              },
              {
                id: 'switch',
                title: 'Switch',
                href: `/${locale}/components/switch`
              },
              {
                id: 'table',
                title: 'Table',
                href: `/${locale}/components/table`
              },
              {
                id: 'tabs',
                title: 'Tabs',
                href: `/${locale}/components/tabs`
              },
              {
                id: 'text-editor',
                title: 'Text Editor',
                href: `/${locale}/components/text-editor`
              },
              {
                id: 'textarea',
                title: 'Textarea',
                href: `/${locale}/components/textarea`
              },
              {
                id: 'toast',
                title: 'Toast',
                href: `/${locale}/components/toast`
              },
              {
                id: 'toggle',
                title: 'Toggle',
                href: `/${locale}/components/toggle`
              },
              {
                id: 'tooltip',
                title: 'Tooltip',
                href: `/${locale}/components/tooltip`
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
