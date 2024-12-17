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
          isPopular={plan.isPopular}
        >
          <PricingFeature>
            {t('feature_common_team_member', {
              number: plan.features.common.teamMember,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_common_website', {
              number: plan.features.common.website,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_common_storage', {
              number: plan.features.common.storage,
            })}
          </PricingFeature>

          <PricingFeature>
            {t('feature_common_transfer', {
              number: plan.features.common.transfer,
            })}
          </PricingFeature>

          {plan.features.individual.map((feature, index) => (
            <PricingFeature key={index}>{t(feature)}</PricingFeature>
          ))}

        </PricingCard>
      ))}
    </div>
  );
};
