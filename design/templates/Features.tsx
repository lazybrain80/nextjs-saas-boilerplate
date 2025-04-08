import { useTranslations } from 'next-intl'

import { Background, Section } from '@/design/components'
import { FeatureCard } from '@/design/features/landing'
import { Box, Circle, Nextjs, React, Tailwind, Typescript } from '@/design/icons'

export const Features = () => {
  const t = useTranslations('Features')

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard icon={<Nextjs className="size-8" />} title={t('feature1_title')}>
            {t('feature1_description')}
          </FeatureCard>

          <FeatureCard icon={<React className="size-8" />} title={t('feature2_title')}>
            {t('feature2_description')}
          </FeatureCard>

          <FeatureCard icon={<Tailwind className="size-8" />} title={t('feature3_title')}>
            {t('feature3_description')}
          </FeatureCard>

          <FeatureCard icon={<Typescript className="size-8" />} title={t('feature4_title')}>
            {t('feature4_description')}
          </FeatureCard>

          <FeatureCard icon={<Box className="size-8" />} title={t('feature5_title')}>
            {t('feature5_description')}
          </FeatureCard>

          <FeatureCard icon={<Circle className="size-8" />} title={t('feature6_title')}>
            {t('feature6_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  )
}
