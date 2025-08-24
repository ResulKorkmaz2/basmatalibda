import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorExteriorPaintingPage from './InteriorExteriorPaintingPage'

export const metadata: Metadata = {
  title: 'دهانات داخلية وخارجية - بصمة لابداع | خدمات الدهانات المتميزة في الرياض',
  description: 'نقدم أفضل خدمات الدهانات الداخلية والخارجية في الرياض باستخدام أجود المواد وأحدث التقنيات. فريق متخصص وضمان جودة عالية.',
  keywords: 'دهانات داخلية, دهانات خارجية, دهانات الرياض, بصمة لابداع, دهانات عالية الجودة, خدمات الدهانات',
  authors: [{ name: 'بصمة لابداع' }],
  openGraph: {
    title: 'دهانات داخلية وخارجية - بصمة لابداع',
    description: 'نقدم أفضل خدمات الدهانات الداخلية والخارجية في الرياض باستخدام أجود المواد وأحدث التقنيات',
    url: 'https://basmatalibda.com/services/interior-exterior-painting',
    siteName: 'بصمة لابداع',
    images: [
      {
        url: '/ic-cephe.jpg',
        width: 1200,
        height: 630,
        alt: 'دهانات داخلية وخارجية عالية الجودة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دهانات داخلية وخارجية - بصمة لابداع',
    description: 'نقدم أفضل خدمات الدهانات الداخلية والخارجية في الرياض',
    images: ['/ic-cephe.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://basmatalibda.com/services/interior-exterior-painting',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <InteriorExteriorPaintingPage />
      <Footer />
    </main>
  )
}
