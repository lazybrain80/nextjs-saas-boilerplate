import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher, Logo } from '@/design/components';
import { buttonVariants } from '@/design/components/ui';
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
        <li>
          <Link href={`/${lang}/sign-up`}>{t('product')}</Link>
        </li>

        <li>
          <Link href={`/${lang}/sign-up`}>{t('docs')}</Link>
        </li>

        <li>
          <Link href={`/${lang}/sign-up`}>{t('blog')}</Link>
        </li>

        <li>
          <Link href={`/${lang}/sign-up`}>{t('community')}</Link>
        </li>

        <li>
          <Link href={`/${lang}/sign-up`}>{t('company')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
