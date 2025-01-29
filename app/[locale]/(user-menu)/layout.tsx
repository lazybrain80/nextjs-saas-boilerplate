import '@/styles/globals.css'
import { Suspense } from 'react'
import { Section } from '@/design/components'
import { SidebarNav } from '@/design/features/user-menu'
import { Navbar, Footer } from '@/design/templates'
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
      <main className='relative flex-1'>
        <div className='relative h-full'>
          <div className='flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10'>
            <aside className='fixed z-30 hidden h-screen w-full shrink-0 overflow-y-auto py-2 pr-2 md:sticky md:block'>
              <SidebarNav items={navMenu.sidebarNav} />
            </aside>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
