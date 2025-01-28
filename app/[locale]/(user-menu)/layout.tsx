import '@/styles/globals.css'
import { Suspense } from 'react'
import { Section } from '@/design/components'
import { Navbar, Footer } from '@/design/templates'
import { SidebarNav } from '@/design/features/docs'
import { getUserMenuConfig } from '@/config/ui/user-menu'

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function DashboardLayout({
  children
}: DashboardLayoutProps ) {
  const navMenu = await getUserMenuConfig()
  return (
    <>
      <Suspense fallback='...'>
        <Navbar
          items={navMenu.mainNav}
        />
      </Suspense>
      <main className='relative flex-1'>
        <div className='relative h-full'>
          <Section className='py-0'>
            <div className='flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10'>
              <aside className='fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10'>
                <SidebarNav items={navMenu.sidebarNav} />
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
