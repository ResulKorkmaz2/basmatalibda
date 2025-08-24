import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BuildingRestorationPage from './BuildingRestorationPage'

export const metadata: Metadata = {
  title: 'ترميم المباني - بصمة لابداع | خدمات الترميم الشامل في الرياض',
  description: 'ترميم شامل للمباني القديمة واستعادة جمالها ووظائفها مع الحفاظ على الطابع المعماري الأصيل. فريق متخصص في الترميم والصيانة.',
  keywords: 'ترميم المباني, صيانة المباني, ترميم البيوت, ترميم الفلل, بصمة لابداع, ترميم شامل الرياض',
  authors: [{ name: 'بصمة لابداع' }],
  openGraph: {
    title: 'ترميم المباني - بصمة لابداع',
    description: 'ترميم شامل للمباني القديمة واستعادة جمالها ووظائفها مع الحفاظ على الطابع المعماري الأصيل',
    url: 'https://basmatalibda.com/services/building-restoration',
    siteName: 'بصمة لابداع',
    images: [
      {
        url: '/resterasyon.jpg',
        width: 1200,
        height: 630,
        alt: 'ترميم وإصلاح المباني القديمة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ترميم المباني - بصمة لابداع',
    description: 'ترميم شامل للمباني القديمة واستعادة جمالها ووظائفها',
    images: ['/resterasyon.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://basmatalibda.com/services/building-restoration',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <BuildingRestorationPage />
      <Footer />
    </main>
  )
}
