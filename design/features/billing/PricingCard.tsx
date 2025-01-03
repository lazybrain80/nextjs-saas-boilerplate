import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { buttonVariants } from '@/design/components/ui';

import type { BillingInterval } from '@/types/Subscription';

export const PricingCard = ({
  planId,
  href,
  btText,
  price,
  interval,
  children,
  isPopular = false,
}: {
  planId: string;
  href: string;
  btText: string;
  price: number;
  interval: BillingInterval;
  children: React.ReactNode;
  isPopular?: boolean;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className={`rounded-xl border border-border px-6 py-8 text-center ${isPopular ? 'border-primary' : ''}`}>
      <div className="text-lg font-semibold">
        {t(`${planId}_plan_name`)}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <div className="text-5xl font-bold">
          {`$${price}`}
        </div>

        <div className="ml-1 text-muted-foreground">
          {`/ ${t(`plan_interval_${interval}`)}`}
        </div>
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {t(`${planId}_plan_description`)}
      </div>

      <Link
        className={buttonVariants({
          size: 'sm',
          className: 'mt-5 w-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400',
        })}
        href={href}
      >
        {t(btText)}
      </Link>

      <ul className="mt-8 space-y-3">{children}</ul>
    </div>
  );
};
