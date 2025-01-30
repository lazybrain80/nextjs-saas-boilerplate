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
      <main className='flex h-screen'>
        <SidebarNav items={navMenu.sidebarNav} />
        {children}
      </main>
    </>
  )
}
