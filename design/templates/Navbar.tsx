import * as React from "react"
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher, Logo } from '@/design/components';
import {
  buttonVariants,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/design/components/ui';
import { CenteredMenu, Section } from '@/design/features/landing';
import { cn } from "@/libs/utils"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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
              <NavigationMenuTrigger
                className='text-xl font-normal'
              >
                {t('product')}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="gap-3 p-6 md:w-[10rem] lg:w-[20rem] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/project/intro" title="Intro">
                    Introduction to the project
                  </ListItem>
                  <ListItem href="/project/install" title="Install">
                    How to install the project
                  </ListItem>
                </ul>
              </NavigationMenuContent>
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
