import Link from 'next/link'
import { Search, Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  const popularPages = [
    { name: 'دهانات داخلية وخارجية', href: '/services/interior-exterior-painting' },
    { name: 'ترميم المباني', href: '/services/building-restoration' },
    { name: 'ديكورات مميزة', href: '/services/distinctive-decorations' },
    { name: 'جميع أنواع الدهانات', href: '/services/all-paint-types' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl font-bold text-primary-200 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center animate-bounce">
              <Search className="w-8 h-8 text-primary-600" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Link>
          
          <a
            href="tel:0573677385"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl border border-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            تواصل معنا: 0573677385
          </a>
        </div>

        {/* Popular Pages */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            صفحات مفيدة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:shadow-md group"
              >
                <span className="font-medium text-gray-900 group-hover:text-primary-700">
                  {page.name}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 rotate-180 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">بصمة لابداع</h3>
          <p className="text-gray-600">
            خدمات المقاولات العامة والدهانات | اشراف ابو باسل
          </p>
        </div>
      </div>
    </div>
  )
}
