import { useLocale } from 'next-intl'
import { Section } from '@/design/components'
import { SidebarNav } from '@/design/features/docs'
import { getDocsConfig } from '@/config/ui/docs'

type DocsLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function DocumentsLayout({
  children,
}: DocsLayoutProps) {
  const locale = useLocale()
  return (
    <Section className='py-0'>
      <div className='flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10'>
        <aside className='fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10'>
          <SidebarNav items={getDocsConfig(`${locale}`).sidebarNav} />
        </aside>
        {children}
      </div>
    </Section>
  )
}