'use client'

import { useState, useEffect } from 'react'
import { Phone, ArrowDown, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const images = [
    { src: '/hero1.jpg', alt: 'مشروع دهانات متميز' },
    { src: '/hero2.jpg.jpeg', alt: 'أعمال المقاولات الاحترافية' }
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="home" className="min-h-[85vh] bg-white pt-16 lg:pt-20">
      <div className="container mx-auto px-4 flex items-center" style={{ minHeight: 'calc(85vh - 5rem)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
          
          {/* Image Slideshow - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 sm:h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl order-1 bg-gradient-to-br from-gray-50 to-gray-100"
          >
            {/* Main Image */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
              
              {/* Light Overlay for controls visibility */}
              <div className="absolute inset-0 bg-black/5"></div>
              
              {/* Navigation Arrows - Mobile Optimized */}
              <button
                onClick={prevSlide}
                className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-white/50"
              >
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-white/50"
              >
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
              </button>
              
              {/* Slide Indicators - Mobile Optimized */}
              <div className="absolute bottom-2 lg:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 space-x-reverse bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right order-2 px-2 lg:px-0"
          >
            {/* Rating Badge - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center bg-gradient-to-r from-yellow-50 to-gold-50 border border-yellow-200 rounded-full px-4 py-2 mb-4 lg:mb-6 shadow-sm"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-2" />
              <span className="text-base font-medium text-yellow-800">أفضل خدمة في الرياض</span>
            </motion.div>

            {/* Main Title - Mobile First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-4 lg:mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 lg:mb-4 text-gray-900 leading-tight">
                بصمة لابداع
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-600 font-semibold mb-4 lg:mb-5">
                اشراف ابو باسل • خدمات المقاولات والدهانات
              </p>
            </motion.div>

            {/* Description - Mobile Optimized */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0"
            >
              جودة عالية وإتقان في العمل مع أفضل المواد والخبرة العملية
            </motion.p>

            {/* Action Buttons - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse mb-6 lg:mb-8"
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto btn-primary flex items-center justify-center space-x-2 space-x-reverse px-6 py-4 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن: 0573677385</span>
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-lg"
              >
                تصفح خدماتنا
              </button>
            </motion.div>

            {/* Compact Stats - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 text-center max-w-sm mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-start lg:space-x-6 lg:space-x-reverse lg:text-sm lg:text-gray-600"
            >
              <div className="flex flex-col lg:flex-row items-center lg:space-x-1 lg:space-x-reverse p-2 lg:p-0 bg-primary-50 lg:bg-transparent rounded-lg lg:rounded-none">
                <span className="w-3 h-3 lg:w-2 lg:h-2 bg-primary-500 rounded-full mb-1 lg:mb-0"></span>
                <span className="text-xs lg:text-sm font-medium lg:font-normal text-primary-700 lg:text-gray-600">+500 مشروع</span>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:space-x-1 lg:space-x-reverse p-2 lg:p-0 bg-gold-50 lg:bg-transparent rounded-lg lg:rounded-none">
                <span className="w-3 h-3 lg:w-2 lg:h-2 bg-gold-500 rounded-full mb-1 lg:mb-0"></span>
                <span className="text-xs lg:text-sm font-medium lg:font-normal text-gold-700 lg:text-gray-600">10+ سنوات</span>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:space-x-1 lg:space-x-reverse p-2 lg:p-0 bg-green-50 lg:bg-transparent rounded-lg lg:rounded-none">
                <span className="w-3 h-3 lg:w-2 lg:h-2 bg-green-500 rounded-full mb-1 lg:mb-0"></span>
                <span className="text-xs lg:text-sm font-medium lg:font-normal text-green-700 lg:text-gray-600">خدمة 24/7</span>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default Hero
