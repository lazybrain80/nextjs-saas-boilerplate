import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

import { Logo, Section } from '@/design/components'
import { CenteredFooter } from '@/design/features/landing'
import { AppConfig } from '@/utils/AppConfig'
import { GitHub, Meta, TwitterX, Youtube, LinkedIn } from '@/design/icons'

export const Footer = () => {
  const t = useTranslations('Footer')
  const locale = useLocale()

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
        iconList={
          <>
            <li>
              <Link href={`/${locale}`}>
                <GitHub />
              </Link>
            </li>

            <li>
              <Link href={`/${locale}`}>
                <Meta />
              </Link>
            </li>

            <li>
              <Link href={`/${locale}`}>
                <TwitterX />
              </Link>
            </li>

            <li>
              <Link href={`/${locale}`}>
                <Youtube />
              </Link>
            </li>

            <li>
              <Link href={`/${locale}`}>
                <LinkedIn />
              </Link>
            </li>
          </>
        }
        legalLinks={
          <>
            <li>
              <Link href={`/${locale}/terms`}>{t('terms_of_service')}</Link>
            </li>
            <li>
              <Link href={`/${locale}/privacy`}>{t('privacy_policy')}</Link>
            </li>
          </>
        }
      >
        <li>
          <Link href="/sign-up">{t('about')}</Link>
        </li>
        <li>
          <Link href="/sign-up">{t('docs')}</Link>
        </li>
        <li>
          <Link href="/sign-up">{t('blog')}</Link>
        </li>
        <li>
          <Link href="/sign-up">{t('purchase')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  )
}
