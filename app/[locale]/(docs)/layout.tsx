import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Suspense } from "react";
import { getMessages } from "next-intl/server"
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import { Navbar, Footer } from '@/design/templates'
import { getLandingNavbarConfig } from "@/config/ui/landing";

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const montserratAlternates = Montserrat_Alternates({
  variable: '--font-montserrat-alternates',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};


export default async function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='m-auto flex h-full w-full flex-col'>
      <Suspense fallback="...">
        <Navbar
          items={getLandingNavbarConfig().mainNav}
        />
      </Suspense>
        <main className='relative flex-1'>
          <div className='relative h-full'>
            {children}
          </div>
        </main>
      <Footer />
    </div>
  );
}
