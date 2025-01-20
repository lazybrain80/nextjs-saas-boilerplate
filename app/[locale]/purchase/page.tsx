import { useTranslations } from 'next-intl'
import React from 'react'
import {
  Pricing,
  FAQ,
} from '@/design/templates'
import { Section } from '@/design/components'

const PurchasePage = () => {
  const t = useTranslations('PurchasePage')
  return (
    <>
      <Pricing />
      
      <Section>
        <hr className='container' />
      </Section>
      
      <FAQ />
    </>
  )
}

export default PurchasePage