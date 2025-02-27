import '@/styles/globals.css'

export default function SignupLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <>
      <main className='relative flex-1'>
        <div className='relative h-full'>
          {children}
        </div>
      </main>
    </>
  );
}
