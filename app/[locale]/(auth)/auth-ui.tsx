'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGoogle } from 'react-icons/io5';
import { toast } from '@/design/components/ui/use-toast';
import { ActionResponse } from '@/types/action-response';

const titleMap = {
  login: 'Login to UPDATE_THIS_WITH_YOUR_APP_DISPLAY_NAME',
  signup: 'Join UPDATE_THIS_WITH_YOUR_APP_DISPLAY_NAME and start generating banners for free',
} as const;

export function AuthUI({
  mode,
  signInWithOAuth,
  locale
}: {
  mode: 'login' | 'signup';
  signInWithOAuth: (locale:string, provider: 'github' | 'google') => Promise<ActionResponse>;
  locale: string;
}) {
  const [pending, setPending] = useState(false);

  async function handleOAuthClick(provider: 'google' | 'github') {
    setPending(true);
    const response = await signInWithOAuth(locale, provider);

    if (response?.error) {
      toast({
        variant: 'destructive',
        description: 'An error occurred while authenticating. Please try again.',
      });
      setPending(false);
    }
  }

  return (
    <section className='mt-16 flex w-full flex-col gap-16 rounded-lg bg-white p-10 px-4 text-center'>
      <div className='flex flex-col gap-4'>
        <Image src='/icon_logo.svg' width={80} height={80} alt='' className='m-auto' />
        <h1 className='text-lg'>{titleMap[mode]}</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <button
          className='flex items-center justify-center gap-2 rounded-md bg-cyan-500 py-4 font-medium text-black transition-all hover:bg-cyan-400 disabled:bg-neutral-700'
          onClick={() => handleOAuthClick('google')}
          disabled={pending}
        >
          <IoLogoGoogle size={20} />
          Continue with Google
        </button>
      </div>
      {mode === 'signup' && (
        <span className='text-neutral5 m-auto max-w-sm text-sm'>
          By clicking continue, you agree to our{' '}
          <Link href='/terms' className='underline'>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href='/privacy' className='underline'>
            Privacy Policy
          </Link>
          .
        </span>
      )}
    </section>
  );
}
