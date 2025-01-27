'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useAuthClient } from '@/auth/provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/design/components/ui'
import { UserAvatar } from '@/design/components'
import { UserMetaData } from '@/types'

export function UserAccountNav() {

  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('Navbar')

  const authClient = useAuthClient()
  const supaClient = authClient?.supaClient
  const { user_metadata } = authClient?.supaUser || {}
  const user = user_metadata as UserMetaData

  async function signOut() {
    if (supaClient) {
      const { error } = await supaClient.auth.signOut()
      console.log('signOut error:', error)
      router.refresh()
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {user && (
          <UserAvatar
            user={user}
            className='h-8 w-8'
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user?.user_name && <p className='font-medium'>{user.user_name}</p>}
            {user?.email && (
              <p className='w-[200px] truncate text-sm text-muted-foreground'>
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/${locale}/about`}>{t('about')}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${locale}/purchase`}>{t('purchase')}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${locale}/docs`}>{t('docs')}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onSelect={signOut}
        >
          {t('sign_out')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
