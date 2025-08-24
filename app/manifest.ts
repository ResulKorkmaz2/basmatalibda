import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'بصمة لابداع - خدمات المقاولات العامة والدهانات',
    short_name: 'بصمة لابداع',
    description: 'شركة بصمة لابداع لخدمات المقاولات العامة والدهانات في الرياض',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    orientation: 'portrait',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity'],
    shortcuts: [
      {
        name: 'خدماتنا',
        short_name: 'خدماتنا',
        description: 'تصفح جميع خدماتنا',
        url: '/#services',
        icons: [{ src: '/logo.png', sizes: '96x96' }],
      },
      {
        name: 'تواصل معنا',
        short_name: 'اتصال',
        description: 'تواصل معنا مباشرة',
        url: 'tel:0573677385',
        icons: [{ src: '/logo.png', sizes: '96x96' }],
      },
    ],
  }
}
