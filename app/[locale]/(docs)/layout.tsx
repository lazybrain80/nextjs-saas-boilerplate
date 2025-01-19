import '@/styles/globals.css'
import { Suspense } from "react";
import { Navbar, Footer } from '@/design/templates'
import { getLandingNavbarConfig } from "@/config/ui/landing";
import { createSupabaseServerClient } from "@/libs/supabase/serverClient";

export default async function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const supabase = createSupabaseServerClient()
  const {data, error} = await (await supabase).auth.getUser()

  return (
    <>
      <Suspense fallback="...">
        <Navbar
          items={(await getLandingNavbarConfig()).mainNav}
          userData={data}
        />
      </Suspense>
      <main className='relative flex-1'>
        <div className='relative h-full'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
