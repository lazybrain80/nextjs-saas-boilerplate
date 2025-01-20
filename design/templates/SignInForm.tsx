'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils'
import { signInWithOAuth } from '@/auth'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { buttonVariants } from '@/design/components/ui/button'
import { ChevronLeft } from '@/design/icons'
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io5'
import { toast } from '@/design/components/ui/use-toast'

export const SignInForm = () => {
  const locale = useLocale()
  const t = useTranslations('SignInPage')

  const [pending, setPending] = useState(false)

  async function handleOAuthClick(provider: 'google' | 'github') {
    setPending(true)
    const response = await signInWithOAuth(locale, provider)

    if (response?.error) {
      toast({
        variant: 'destructive',
        description: 'An error occurred while authenticating. Please try again.',
      })
      setPending(false)
    }
  }

  return(
    <>
      <Link
        href={`/${locale}`}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}
      >
        <>
          <ChevronLeft className='mr-2 h-4 w-4' />
          {t('leavePage')}
        </>
      </Link>
      <div className='p-20 px-30 rounded-3xl shadow-2xl'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <Image
              src='/icon_logo.svg'
              className='mx-auto mb-10'
              width={80}
              height={80}
              alt=''
            />
            <h1 className='text-2xl font-semibold tracking-tight'>
              {t('welcome_back')}
            </h1>
            <p className='text-sm text-muted-foreground'>
              {t('signin_title')}
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <button
              className='flex items-center justify-center gap-2 rounded-md bg-slate-300 py-4 font-medium text-black transition-all hover:bg-slate-100 disabled:text-slate-50'
              onClick={() => handleOAuthClick('google')}
              disabled={pending}
            >
              <IoLogoGoogle size={20} />
              {t('google_signin')}
            </button>
            <button
              className='flex items-center justify-center gap-2 rounded-md bg-slate-300 py-4 font-medium text-black transition-all hover:bg-slate-100 disabled:text-slate-50'
              onClick={() => handleOAuthClick('github')}
              disabled={pending}
            >
              <IoLogoGithub size={20} />
              {t('github_signin')}
            </button>
          </div>
        </div>
      </div>
      <Image
        src='/images/signin/bg-left.png'
        className='absolute bottom-0 left-0'
        width={320}
        height={320}
        alt=''
      />
      <Image
        src='/images/signin/bg-right.png'
        className='absolute bottom-0 right-0'
        width={320}
        height={320}
        alt=''
      />
    </>
  )
}