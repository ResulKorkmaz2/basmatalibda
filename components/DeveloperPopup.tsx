'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Globe, Check, Rocket } from 'lucide-react'

const DeveloperPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showCloseButton, setShowCloseButton] = useState(false)

  useEffect(() => {
    // Popup'ı 1 saniye sonra göster
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // 5 saniye sonra kapatma butonunu göster
    const closeButtonTimer = setTimeout(() => {
      setShowCloseButton(true)
    }, 6000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(closeButtonTimer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/15053736924', '_blank')
  }

  const handleWebsite = () => {
    window.open('https://www.falconprodigital.com', '_blank')
  }

  const features = [
    'تصميم حديث',
    'SEO محسن', 
    'متجاوب مع الجوال',
    'سريع التحميل'
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <AnimatePresence>
              {showCloseButton && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Header with Gradient Background */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white p-6 text-center relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", damping: 20, stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-3 relative"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold mb-2"
              >
                Falcon Pro Digital
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/90 text-sm"
              >
                فرع من Aptiro LLC
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3"
              >
                <p className="text-sm font-medium">🏆 أكبر شركة رقمية في الخليج</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="p-6">
              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center mb-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center justify-center">
                  💻 تصميم وتطوير هذا الموقع
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  تم تصميم وتطوير موقع مؤسسة مكارم الجنوب بواسطة فريق{' '}
                  <span className="font-bold text-blue-600">Falcon Pro Digital</span>
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-3 mb-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center space-x-2 space-x-reverse text-sm"
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Question */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center mb-4"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  🌟 هل تريد موقعاً مثل هذا؟
                </h4>
                <p className="text-gray-600 text-sm">
                  احصل على موقع احترافي يليق بعلامتك التجارية
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="space-y-3"
              >
                <button
                  onClick={handleWhatsApp}
                  className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse"
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  <div>
                    <div className="text-base">تواصل واتساب</div>
                    <div className="text-sm opacity-90">+1 (505) 373-6924</div>
                  </div>
                </button>

                <button
                  onClick={handleWebsite}
                  className="w-full flex items-center justify-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 font-medium py-3 transition-colors duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>falconprodigital.com</span>
                </button>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-center mt-4 pt-4 border-t border-gray-100"
              >
                <p className="text-xs text-gray-500 flex items-center justify-center space-x-1 space-x-reverse">
                  <span>🇺🇸</span>
                  <span>فرع من شركة Aptiro LLC الأمريكية</span>
                </p>
                {!showCloseButton && (
                  <p className="text-xs text-gray-400 mt-2">
                    سيظهر زر الإغلاق خلال 5 ثوان...
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DeveloperPopup