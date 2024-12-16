import { useTranslations } from 'next-intl';
import { PricingInformation } from '@/design/features/billing';
import { Section } from '@/design/features/landing';

export const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section
      title={t('section_title')}
      description={t('section_description')}
    >
      <PricingInformation />
    </Section>
  );
};
