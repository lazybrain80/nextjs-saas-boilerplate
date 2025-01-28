'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import type { SidebarNavItem } from '@/types'
import * as Icons from '@/design/icons'

export interface SidebarNavProps {
  items: SidebarNavItem[]
}

const iconMap = new Map([
  ["home", Icons.Home],
]);

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()
  return items.length ? (
    <div className='w-full'>
      {items.map((item) => {
        const Icon = item.icon ? iconMap.get(item.icon) ?? Icons.Home : Icons.ArrowRight
        return (<div key={item.href + item.title} className={cn('mb-1')}>
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
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              <Icon className='w-4 h-4 mr-2' />
              <span className='rounded-md px-2 py-1 text-sm font-bold '>
                {item.title}
              </span>
            </span>
          </Link>
          {item.items ? (
            <SidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>)
    })}
    </div>
  ) : null
}

interface SidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function SidebarNavItems({
  items,
  pathname,
}: SidebarNavItemsProps) {
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
