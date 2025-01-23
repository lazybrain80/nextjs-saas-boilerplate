import React from 'react'
import { Section } from '@/design/components'
import { MdxDoc } from '@/design/features/docs'

type PrivacyPolicyParamsType = Promise<{ locale: string }>
type PrivacyPolicyPageProps = Readonly<{
  params: PrivacyPolicyParamsType
}>

const PrivacyPolicyPage = async ({
  params,
}: PrivacyPolicyPageProps) => {
  const { locale } = await params
  
  return (
    <>
      <Section
        title='Privacy Policy'
        subtitle='Last updated: 2025-01-01'
        description='Please read our Privacy Policy carefully before using our website.'
      >
        <MdxDoc locale={locale} filePath={'privacy'} />
      </Section>
    </>
  )
}

export default PrivacyPolicyPage