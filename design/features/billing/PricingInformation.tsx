import { useTranslations } from 'next-intl';

import { PricingCard } from './PricingCard';
import { PricingFeature } from './PricingFeature';
import { PricingPlanList } from '@/config/ui/pricing';

export const PricingInformation = ({
}: {
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {Object.values(PricingPlanList).map(plan => (
        <PricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          href={plan.href}
          btText={plan.btText}
        >
          <PricingFeature>
            {t('feature_team_member', {
              number: plan.features.teamMember,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_website', {
              number: plan.features.website,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_storage', {
              number: plan.features.storage,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_transfer', {
              number: plan.features.transfer,
            })}
          </PricingFeature>

          <PricingFeature>{t('feature_email_support')}</PricingFeature>
        </PricingCard>
      ))}
    </div>
  );
};
