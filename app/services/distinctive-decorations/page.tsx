import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DistinctiveDecorationsPage from './DistinctiveDecorationsPage'

export const metadata: Metadata = {
  title: 'ديكورات مميزة - بصمة لابداع | تصميم وتنفيذ ديكورات عصرية في الرياض',
  description: 'تصميم وتنفيذ ديكورات عصرية وأنيقة تناسب جميع الأذواق وتضفي لمسة جمالية راقية على منزلك أو مكتبك.',
  keywords: 'ديكورات مميزة, تصميم ديكور, ديكورات داخلية, ديكورات عصرية, بصمة لابداع, ديكورات الرياض',
  authors: [{ name: 'بصمة لابداع' }],
  openGraph: {
    title: 'ديكورات مميزة - بصمة لابداع',
    description: 'تصميم وتنفيذ ديكورات عصرية وأنيقة تناسب جميع الأذواق وتضفي لمسة جمالية راقية',
    url: 'https://basmatalibda.com/services/distinctive-decorations',
    siteName: 'بصمة لابداع',
    images: [
      {
        url: '/suslemeler.jpg',
        width: 1200,
        height: 630,
        alt: 'ديكورات وتصاميم داخلية مميزة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ديكورات مميزة - بصمة لابداع',
    description: 'تصميم وتنفيذ ديكورات عصرية وأنيقة تناسب جميع الأذواق',
    images: ['/suslemeler.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://basmatalibda.com/services/distinctive-decorations',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <DistinctiveDecorationsPage />
      <Footer />
    </main>
  )
}
