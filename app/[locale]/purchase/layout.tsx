import '@/styles/globals.css'
import { Suspense } from 'react'
import { Navbar, Footer } from '@/design/templates'
import { getLandingNavbarConfig } from '@/config/ui/landing'
import { getMessages } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = await params
  const messages: any = await getMessages({ locale })
  const title = messages.PurchasePage.title

  return {
    title,
  }
}

export default async function ProductLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

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
