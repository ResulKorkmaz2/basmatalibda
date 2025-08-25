'use client'

import Image from 'next/image'
import { Phone, MapPin, Clock, ArrowUp, Star, Heart, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="container section-padding">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Company Info - Enhanced */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="relative">
                {/* Background Glass Effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
                
                <div className="relative z-10 p-8">
                  {/* Logo and Company Name */}
                  <div className="flex items-center space-x-4 space-x-reverse mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-gold-500/20 rounded-full blur-xl"></div>
                      <Image
                        src="/logo.png"
                        alt="بصمة لابداع"
                        width={80}
                        height={80}
                        className="relative rounded-full border-2 border-white/20 bg-white p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        بصمة لابداع
                      </h3>
                      <p className="text-gold-300 font-semibold">اشراف ابو باسل</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-300 mr-2">+500 عميل راضي</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    شركة رائدة في مجال المقاولات العامة والدهانات في الرياض. نقدم خدمات عالية الجودة 
                    مع التزام تام بالمواعيد والمعايير العالمية.
                  </p>

                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-primary-400">10+</div>
                      <div className="text-xs text-gray-300">سنوات خبرة</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-gold-400">500+</div>
                      <div className="text-xs text-gray-300">مشروع منجز</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-green-400">24/7</div>
                      <div className="text-xs text-gray-300">خدمة العملاء</div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex items-center space-x-4 space-x-reverse">
                    {/* Phone */}
                    <a
                      href="tel:0573677385"
                      className="group bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                      title="Phone: 0573677385"
                    >
                      <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    </a>
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/966573677385"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                      title="WhatsApp: 0573677385"
                    >
                      <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/mqwlt4823"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                      title="Instagram: @mqwlt4823"
                    >
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    
                    {/* TikTok */}
                    <a
                      href="https://www.tiktok.com/@user31262616554342"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                      title="TikTok: @user31262616554342"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                    
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/profile.php?id=61563031801396"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                      title="Facebook: بصمة لابداع"
                    >
                      <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    
                    {/* Snapchat */}
                    <a
                      href="https://www.snapchat.com/add/bwbsllsyd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                      title="Snapchat: @bwbsllsyd"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c-2.5 0-3 2.2-3 3.8 0 3-1.5 4.2-3 4.2-.8 0-1 .3-1 .6s.2.6 1 .6c.8 0 1.8.8 1.8 1.6 0 1.2-2 1.2-2 2.4 0 .8.8 1.8 2.4 1.8.8 0 1.6-.2 2-.4.2.4.6.8 1.2.8.6 0 1-.4 1.2-.8.4.2 1.2.4 2 .4 1.6 0 2.4-1 2.4-1.8 0-1.2-2-1.2-2-2.4 0-.8 1-1.6 1.8-1.6.8 0 1-.3 1-.6s-.2-.6-1-.6c-1.5 0-3-1.2-3-4.2 0-1.6-.5-3.8-3-3.8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
                <div className="relative z-10 p-6">
                  <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-gold-300 bg-clip-text text-transparent">
                    روابط سريعة
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'الرئيسية', id: 'home', icon: '🏠' },
                      { name: 'خدماتنا', id: 'services', icon: '🛠️' },
                      { name: 'من نحن', id: 'about', icon: '👥' },
                      { name: 'لماذا نحن', id: 'why-us', icon: '⭐' },
                      { name: 'تواصل معنا', id: 'contact', icon: '📞' }
                    ].map((link, index) => (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="group flex items-center space-x-3 space-x-reverse text-gray-300 hover:text-primary-300 transition-all duration-300 transform hover:translate-x-2"
                        >
                          <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                          <span className="group-hover:text-white transition-colors duration-300">{link.name}</span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
                <div className="relative z-10 p-6">
                  <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-gold-300 bg-clip-text text-transparent">
                    معلومات التواصل
                  </h4>
                  <ul className="space-y-6">
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 space-x-reverse p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm font-semibold">اتصل بنا</p>
                          <a href="tel:0573677385" className="text-white hover:text-primary-300 transition-colors duration-200 font-bold" dir="ltr">
                            0573677385
                          </a>
                        </div>
                      </div>
                    </motion.li>

                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 space-x-reverse p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm font-semibold">الموقع</p>
                          <p className="text-white font-bold">الرياض، السعودية</p>
                        </div>
                      </div>
                    </motion.li>

                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 space-x-reverse p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm font-semibold">ساعات العمل</p>
                          <p className="text-white font-bold" dir="ltr">8 AM - 8 PM</p>
                        </div>
                      </div>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Services Grid - Modern Design */}
          <motion.div
            variants={itemVariants}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
            <div className="relative z-10 p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-gold-300 bg-clip-text text-transparent">
                  خدماتنا الرئيسية
                </h4>
                <p className="text-gray-300">نحن متخصصون في تقديم أفضل الخدمات بجودة عالية</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'دهانات داخلية', icon: '🎨', color: 'from-blue-500 to-blue-600' },
                  { name: 'دهانات خارجية', icon: '🏠', color: 'from-green-500 to-green-600' },
                  { name: 'ترميم المباني', icon: '🔧', color: 'from-orange-500 to-orange-600' },
                  { name: 'ديكورات مميزة', icon: '✨', color: 'from-purple-500 to-purple-600' }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
                    <div className="relative z-10 p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <p className="text-white font-semibold group-hover:text-primary-300 transition-colors duration-300">
                        {service.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar - Enhanced */}
      <div className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative z-10 py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-4 space-x-reverse mb-4 md:mb-0"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-gray-300">&copy; 2024</span>
                  <span className="bg-gradient-to-r from-primary-400 to-gold-400 bg-clip-text text-transparent font-bold">
                    بصمة لابداع
                  </span>
                  <span className="text-gray-300">جميع الحقوق محفوظة.</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-6 space-x-reverse text-sm"
              >
                <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
                  <span>مطور بواسطة</span>
                  <a 
                    href="https://www.falconprodigital.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300 hover:underline"
                  >
                    Falcon Pro Digital
                  </a>
                </div>
                <div className="w-1 h-4 bg-gray-600 rounded-full"></div>
                <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                  <span>مصمم بحب في الرياض</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 group bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 border border-primary-400/30"
        aria-label="العودة للأعلى"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full group-hover:animate-ping"></div>
        <ArrowUp className="relative w-6 h-6 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  )
}

export default Footer