import React from 'react'
import { Section } from '@/design/components'
import { MdxDoc } from '@/design/features/docs'

type TermsOfServiceParamsType = Promise<{ locale: string }>
type TermsOfServicePageProps = Readonly<{
  params: TermsOfServiceParamsType
}>

const TermsOfServicePage = async ({
  params,
}: TermsOfServicePageProps) => {
  const { locale } = await params

  return (
    <>
      <Section
        title='Terms of Service'
        subtitle='Last updated: 2025-01-01'
        description='Please read these Terms of Service carefully before using our website.'
      >
        <MdxDoc locale={locale} filePath={'terms'} />
      </Section>
    </>
  )
}

export default TermsOfServicePage