'use client'

import { useEffect } from 'react'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-red-100/50 rounded-full mx-auto animate-ping"></div>
        </div>

        {/* Error Content */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">عذراً، حدث خطأ!</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          حدث خطأ غير متوقع. نعتذر عن الإزعاج، يرجى المحاولة مرة أخرى.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <RefreshCw className="w-5 h-5 ml-2" />
            حاول مرة أخرى
          </button>
          
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl border border-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100">
          <p className="text-sm text-gray-600 mb-2">
            إذا استمر هذا الخطأ، يرجى التواصل معنا:
          </p>
          <a 
            href="tel:0573677385" 
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            0573677385
          </a>
        </div>
      </div>
    </div>
  )
}
