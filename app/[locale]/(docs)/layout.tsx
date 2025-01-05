import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Suspense } from "react";

import { Navbar, Footer } from '@/design/templates'
import { getLandingNavbarConfig } from "@/config/ui/landing";


export default function DocumentsLayout({
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
