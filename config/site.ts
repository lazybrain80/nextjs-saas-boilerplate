export const appName = 'LaunchX'
export const appUrl = 'http://localhost:3000'
export const appDesc = 'We are providing an easier and faster way to get started with SaaS applications.'
export const siteMeta = {
  title: {
    template: `${appName}: %s`,
    default: `${appName}`,
  },
  description: appDesc,
  url: appUrl,
  keywords: [
    "Next.js",
    "Radix-ui",
    "Sass",
    "Fast",
    "Simple",
    "Easy",
    "Cloud Native",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: appUrl,
    locale: "en_US, ko_KR",
    title: appName,
    description: appDesc,
    siteName: appName,
    images: [{
      url: `${appUrl}/icon_logo.svg`,
      alt: `${appName} Logo`,
      type: 'image/svg+xml',
      width: 1200,
      height: 630,
    }],
  },
  authors: [
    {
      name: 'lazybrain80',
    },
  ],
  creator: 'Lazybrain80',
  icons: {
    icon: '/icon_logo.svg',
  },
};
