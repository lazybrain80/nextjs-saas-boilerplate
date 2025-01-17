import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Logo, Section } from '@/design/components'
import { CenteredFooter } from '@/design/features/landing'
import { AppConfig } from '@/utils/AppConfig'
import {
  GitHub,
  Meta,
  TwitterX,
  Youtube,
  LinkedIn,
  RSS
} from '@/design/icons'

export const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <Section className='pb-16 pt-0'>
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
        iconList={(
          <>
            <li>
              <Link href='/'>
                <GitHub />
              </Link>
            </li>

            <li>
              <Link href='/'>
                <Meta />
              </Link>
            </li>

            <li>
              <Link href='/'>
                <TwitterX />
              </Link>
            </li>

            <li>
              <Link href='/'>
                <Youtube />
              </Link>
            </li>

            <li>
              <Link href='/'>
                <LinkedIn />
              </Link>
            </li>

            <li>
              <Link href='/'>
                <RSS />
              </Link>
            </li>
          </>
        )}
        legalLinks={(
          <>
            <li>
              <Link href='/sign-up'>{t('terms_of_service')}</Link>
            </li>
            <li>
              <Link href='/sign-up'>{t('privacy_policy')}</Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href='/sign-up'>{t('product')}</Link>
        </li>

        <li>
          <Link href='/sign-up'>{t('docs')}</Link>
        </li>

        <li>
          <Link href='/sign-up'>{t('blog')}</Link>
        </li>

        <li>
          <Link href='/sign-up'>{t('community')}</Link>
        </li>

        <li>
          <Link href='/sign-up'>{t('company')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  )
}
