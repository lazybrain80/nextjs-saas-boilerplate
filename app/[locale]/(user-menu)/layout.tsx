import '@/styles/globals.css'
import { SidebarNav } from '@/design/features/user-menu'
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
