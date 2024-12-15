import { useTranslations } from 'next-intl';

import { Background } from '@/design/components';
import { Section, FeatureCard } from '@/design/features/landing';
import { Box } from '@/design/icons';

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={<Box className="size-8" />}
            title={t('feature1_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Box className="size-8" />}
            title={t('feature2_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Box className="size-8" />}
            title={t('feature3_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Box className="size-8" />}
            title={t('feature4_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Box className="size-8" />}
            title={t('feature5_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Box className="size-8" />}
            title={t('feature6_title')}
          >
            {t('feature_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};
