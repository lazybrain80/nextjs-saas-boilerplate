import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'
import { buttonVariants } from '@/design/components/ui'

import type { BillingInterval } from '@/types/Subscription'

export const PricingCard = ({
  planId,
  href,
  btText,
  price,
  interval,
  children,
  isPopular = false,
}: {
  planId: string
  href: string
  btText: string
  price: number
  interval: BillingInterval
  children: React.ReactNode
  isPopular?: boolean
}) => {
  const t = useTranslations('PricingPlan')

  return (
    <div className={`relative rounded-xl overflow-hidden border border-border text-center ${isPopular ? 'border-primary' : ''}`}>
      <div className='px-6 py-8 bg-purple-100/70'>
        <div className='text-lg font-semibold'>
          {t(`${planId}_plan_name`)}
        </div>

        <div className='mt-3 flex items-center justify-center'>
          <div className='text-5xl font-bold'>
            {`$${price}`}
          </div>

          <div className='ml-1 text-muted-foreground'>
            {`/ ${t(`plan_interval_${interval}`)}`}
          </div>
        </div>

        <div className='mt-2 text-sm text-muted-foreground'>
          {t(`${planId}_plan_description`)}
        </div>
      </div>
      <div className='px-6 py-8'>
        <ul className='space-y-5'>{children}</ul>

        <Link
          className={buttonVariants({
            size: 'sm',
            className: 'absolute inset-x-0 bottom-5 m-auto w-11/12 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400',
          })}
          href={href}
        >
          {t(btText)}
        </Link>
      </div>
      
    </div>
  )
}
