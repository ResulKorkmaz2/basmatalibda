import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://basmatalibda.com'),
  title: {
    default: 'بصمة لابداع - خدمات المقاولات العامة والدهانات',
    template: '%s | بصمة لابداع'
  },
  description: 'شركة بصمة لابداع لخدمات المقاولات العامة والدهانات في الرياض. نقدم أفضل خدمات الدهانات الداخلية والخارجية وترميم المباني.',
  keywords: 'دهانات, مقاولات, ترميم, ديكورات, الرياض, السعودية, بصمة لابداع',
  authors: [{ name: 'بصمة لابداع' }],
  creator: 'بصمة لابداع',
  publisher: 'بصمة لابداع',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://basmatalibda.com',
    title: 'بصمة لابداع - خدمات المقاولات العامة والدهانات',
    description: 'شركة بصمة لابداع لخدمات المقاولات العامة والدهانات في الرياض',
    siteName: 'بصمة لابداع',
    images: [
      {
        url: '/hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'بصمة لابداع - خدمات المقاولات والدهانات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بصمة لابداع - خدمات المقاولات العامة والدهانات',
    description: 'شركة بصمة لابداع لخدمات المقاولات العامة والدهانات في الرياض',
    images: ['/hero1.jpg'],
  },
  alternates: {
    canonical: 'https://basmatalibda.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
