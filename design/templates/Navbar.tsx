import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher, Logo } from '@/design/components';
import {
  buttonVariants,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/design/components/ui';
import { CenteredMenu, Section } from '@/design/features/landing';

export const Navbar = ({
  lang
}:{
  lang: string;
}) => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            <li data-fade>
              <LocaleSwitcher />
            </li>
            <li className="ml-1 mr-2.5" data-fade>
              <Link href={`/${lang}/signin`}>
                {t('sign_in')}
              </Link>
            </li>
            <li>
              <Link className={buttonVariants()} href={`/${lang}/signup`}>
                {t('sign_up')}
              </Link>
            </li>
          </>
        )}
      >
        <NavigationMenu>
          <NavigationMenuList
            className='space-x-10 text-xl'
          >
            <NavigationMenuItem
              className='hover:text-blue-700'
            >
              <NavigationMenuLink
                href={`/${lang}/functions`}
              >
                {t('functions')}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className='hover:text-blue-700'
            >
              <NavigationMenuLink
                href={`/${lang}/product`}
              >
                {t('product')}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className='hover:text-blue-700'
            >
              <NavigationMenuLink
                href={`/${lang}/docs`}
              >
                {t('docs')}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className='hover:text-blue-700'
            >
              <NavigationMenuLink
                href={`/${lang}/purchase`}
              >
                {t('purchase')}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className='hover:text-blue-700'
            >
              <NavigationMenuLink
                href={`/${lang}/support`}
              >
                {t('support')}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </CenteredMenu>
    </Section>
  );
};
