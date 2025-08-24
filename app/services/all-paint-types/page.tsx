import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AllPaintTypesPage from './AllPaintTypesPage'

export const metadata: Metadata = {
  title: 'تنفيذ كافة أنواع الدهانات - بصمة لابداع | جميع أنواع تطبيقات الدهانات',
  description: 'دهانات عادية، جل، ملمس، ديكوباج، ومختلف الأنواع الحديثة والمتخصصة. فريق خبير في جميع تقنيات الدهان.',
  keywords: 'كافة أنواع الدهانات, دهانات جل, دهانات ملمس, ديكوباج, دهانات متخصصة, بصمة لابداع, دهانات الرياض',
  authors: [{ name: 'بصمة لابداع' }],
  openGraph: {
    title: 'تنفيذ كافة أنواع الدهانات - بصمة لابداع',
    description: 'دهانات عادية، جل، ملمس، ديكوباج، ومختلف الأنواع الحديثة والمتخصصة',
    url: 'https://basmatalibda.com/services/all-paint-types',
    siteName: 'بصمة لابداع',
    images: [
      {
        url: '/herturlu-boya-uygulamasi.jpg',
        width: 1200,
        height: 630,
        alt: 'جميع أنواع تطبيقات الدهانات',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنفيذ كافة أنواع الدهانات - بصمة لابداع',
    description: 'دهانات عادية، جل، ملمس، ديكوباج، ومختلف الأنواع الحديثة والمتخصصة',
    images: ['/herturlu-boya-uygulamasi.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://basmatalibda.com/services/all-paint-types',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <AllPaintTypesPage />
      <Footer />
    </main>
  )
}
