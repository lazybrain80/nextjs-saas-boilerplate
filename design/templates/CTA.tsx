import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'
import { buttonVariants, Section } from '@/design/components'
import { CTABanner } from '@/design/features/landing'

export const CTA = () => {
  const t = useTranslations('CTA')

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <a className={buttonVariants({ variant: 'outline', size: 'lg' })} href="/signup">
            {t('button_text')}
          </a>
        }
      />
    </Section>
  )
}
