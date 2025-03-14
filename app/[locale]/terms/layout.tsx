import '@/styles/globals.css'
import { Suspense } from 'react'
import { Navbar, Footer } from '@/design/templates'
import { getLandingNavbarConfig } from '@/config/ui/landing'
import { getMessages } from 'next-intl/server'

type MetaProps = Promise<{ locale: string }>
type TermsLayoutProps = Readonly<{
  children: React.ReactNode
}>

export async function generateMetadata({
  params,
}: {
  params: MetaProps
}) {
  const { locale } = await params
  const messages: any = await getMessages({ locale })
  const title = messages.TermsOfServicePage.title

  return {
    title,
  }
}

export default async function TermsLayout({
  children
}: TermsLayoutProps ) {

  return (
    <>
      <Suspense fallback='...'>
        <Navbar
          items={(await getLandingNavbarConfig()).mainNav}
        />
      </Suspense>
      <main className='relative flex-1'>
        <div className='relative h-full'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
