'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import type { SidebarNavItem } from '@/types'

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className='w-full'>
      {items.map((item) => (
        <div key={item.href + item.title} className={cn('pb-8')}>
          <Link
            key={item.title + item.href}
            href={item.href? item.href : ''}
            className={cn(
              'flex w-full rounded-md hover:bg-slate-200',
              {
                'bg-muted': pathname === item.href,
              },
            )}
          >
            <h4 className='mb-1 rounded-md px-2 py-1 text-sm font-bold '>
              {item.title}
            </h4>
          </Link>
          {item.items ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className='grid grid-flow-row auto-rows-max text-sm'>
      {items.map((item) =>
        !item.disabled && item.href ? (
          <Link
            key={item.title + item.href}
            href={item.href}
            className={cn(
              'flex w-full items-center rounded-md p-2 hover:bg-slate-200',
              {
                'bg-muted': pathname === item.href,
              },
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {item.title}
          </Link>
        ) : (
          <span
            key={item.title + item.href}
            className='flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60'
          >
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null
}
