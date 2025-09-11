'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full blur-xl opacity-15"></div>

            {/* Close Button (5 saniye sonra görünür) */}
            <AnimatePresence>
              {showCloseButton && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 20, stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 relative"
              >
                <Sparkles className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur opacity-50 animate-pulse"></div>
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
              >
                مرحباً بك! 👋
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
              >
                هذا الموقع تم تطويره وتصميمه بواسطة
              </motion.p>
            </div>

            {/* Developer Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6 border border-blue-100"
            >
              <div className="flex items-center space-x-3 space-x-reverse mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Falcon Pro Digital</h4>
                  <p className="text-xs text-gray-500">Web Development & Design</p>
                </div>
              </div>
              
              <button
                onClick={handleWebsite}
                className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors duration-300 hover:underline"
              >
                www.falconprodigital.com
              </button>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-center text-gray-700 text-sm sm:text-base font-medium">
                للتواصل والاستفسار
              </p>
              
              <button
                onClick={handleWhatsApp}
                className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <div className="text-right">
                  <div className="text-base sm:text-lg">WhatsApp</div>
                  <div className="text-sm opacity-90">+1 (505) 373‑6924</div>
                </div>
              </button>
            </motion.div>

            {/* Bottom Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-xs text-gray-500 mt-4"
            >
              {!showCloseButton && "سيظهر زر الإغلاق خلال 5 ثوان..."}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DeveloperPopup
