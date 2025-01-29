'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import type { SidebarNavItem } from '@/types'
import * as Icons from '@/design/icons'
import { appName } from '@/config/site'

export interface SidebarNavProps {
  items: SidebarNavItem[]
}

const iconMap = new Map([
  ["home", Icons.Home],
]);

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return items.length ? (
    <div className={`${isSidebarOpen ? "w-full" : "w-20"} h-full bg-white shadow-lg transition-all duration-300 px-3`}>
      <div className="flex h-full flex-col">
        <div className={cn('flex items-center py-2 justify-between',
                            isSidebarOpen && 'px-2',
                            !isSidebarOpen && 'justify-center'
                          )}>
          {isSidebarOpen && (
            <div className="flex items-center space-x-2">
              <Image
                className='mr-1'
                src='/icon_logo.svg'
                width={24}
                height={24}
                priority
                quality={100}
                alt={appName}
              />
              <span className='font-alt text-xl text-black'>{appName}</span>
            </div>
          )}
          <button className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen? <Icons.ChevronLeft size={24} /> : <Icons.ChevronRight size={24} />}
          </button>
        </div>
        <nav className="flex-1 space-y-1 px-2 py-4">
          {items.map((item) => {
            const Icon = item.icon ? iconMap.get(item.icon) ?? Icons.Home : Icons.ArrowRight
            return (
            <div key={item.href + item.title} className={cn('mb-2')}>
              <Link
                key={item.title + item.href}
                href={item.href? item.href : ''}
                className={cn(
                  'flex items-center w-full rounded-md hover:bg-slate-200',
                  {
                    'bg-muted': pathname === item.href,
                  },
                )}
              >
                <span
                  className={cn(
                    "group flex items-center  rounded-md py-2 text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-80",
                    !isSidebarOpen && 'm-auto'
                  )}
                >
                  <Icon className={cn(isSidebarOpen && 'mr-2')} />
                  {isSidebarOpen &&
                    <span className='rounded-md px-2 py-1 text-sm font-bold '>
                      {item.title}
                    </span>}
                </span>
              </Link>
            </div>)
          })}
        </nav>
        {/* Footer */}
        <div className="border-t border-gray-700 p-4">
          {isSidebarOpen && (
            <div className="text-xs text-gray-400">
              <p>Version 0.0.0</p>
              <p>© 2025 LaunchX</p>
            </div>
          )}
        </div>
      </div>

    </div>
  ) : null
}