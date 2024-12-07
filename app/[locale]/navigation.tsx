import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import { AccountMenu } from '@/design/components/account-menu';
import { Logo } from '@/design/components/logo';
import { Button } from '@/design/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/design/components/ui/sheet';
import { getSession } from '@/design/features/account/controllers/get-session';

import { signOut } from './(auth)/auth-actions';

export async function Navigation({
  lang
}:{
  lang: string;
}) {
  const session = await getSession();

  return (
    <div className='relative flex items-center gap-6'>
      {session ? (
        <AccountMenu signOut={signOut} />
      ) : (
        <>
          <Button variant='default' className='hidden flex-shrink-0 lg:flex'>
            <Link href={`/${lang}/signup`}>Get started for free</Link>
          </Button>
          <Sheet>
            <SheetTrigger className='block lg:hidden'>
              <IoMenu size={28} />
            </SheetTrigger>
            <SheetContent className='w-full bg-black'>
              <SheetHeader>
                <Logo />
                <SheetDescription className='py-8'>
                  <Button variant='default' className='flex-shrink-0'>
                    <Link href={`/${lang}/signin`}>Get started for free</Link>
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  );
}
