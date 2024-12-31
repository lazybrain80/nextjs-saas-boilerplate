import '@/styles/globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import { ThemeProvider } from '@/design/components/theme-provider'
import { cn } from '@/utils/helpers'
import { siteConfig } from '@/config/site'
import { TailwindIndicator } from '@/design/components'
import { Toaster } from '@/design/components/ui'

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
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "Radix-ui",
    "Sass",
    "Fast",
    "Simple",
    "Easy",
    "Cloud Native",
  ],
  authors: [
    {
      name: "lazybrain80",
    },
  ],
  creator: "Lazybrain80",
  icons: {
    icon: "/icon_logo.svg",
  },
};


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(
          'font-sans antialiased',
          montserrat.variable,
          montserratAlternates.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
