import { useTranslations } from 'next-intl'
import { getMessages } from 'next-intl/server'
import {
  Lead,
  Features,
  CTA,
  FirstHero,
  SecondHero,
  Process,
  News
} from '@/design/templates'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = await params
  const messages: any = await getMessages({ locale })
  const title = messages.NavbarLinks.homeTitle

  return {
    title,
  }
}

export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <>
      <Lead />
      <Features />
      <FirstHero />
      <SecondHero />
      <Process />
      <News />
      <CTA />
    </>
  )
}