import '@/styles/globals.css'
import { Suspense } from 'react'
import { useLocale } from 'next-intl'
import { Section } from '@/design/components'
import { Navbar, Footer } from '@/design/templates'
import { DocsSidebarNav } from '@/design/features/docs'
import { getLandingNavbarConfig } from '@/config/ui/landing'
import { getMessages } from 'next-intl/server'
import { getUserMenuConfig } from '@/config/ui/user-menu'

type MetaProps = Promise<{ locale: string }>
type AboutLayoutProps = Readonly<{
  children: React.ReactNode
}>

export async function generateMetadata({
  params,
}: {
  params: MetaProps
}) {
  const { locale } = await params
  const messages: any = await getMessages({ locale })
  const title = messages.AboutPage.title

  return {
    title,
  }
}


export default async function DashboardLayout({
  children
}: AboutLayoutProps ) {
  // const locale = useLocale()
  return (
    <>
      <Suspense fallback='...'>
        <Navbar
          items={(await getLandingNavbarConfig()).mainNav}
        />
      </Suspense>
      <main className='relative flex-1'>
        <div className='relative h-full'>
          <Section className='py-0'>
            <div className='flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10'>
              <aside className='fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10'>
                <DocsSidebarNav items={(await getUserMenuConfig()).sidebarNav} />
              </aside>
              {children}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
