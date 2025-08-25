'use client'

import { Paintbrush, Hammer, Palette, Brush, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: 'دهانات داخلية وخارجية',
      description: 'نقدم أفضل خدمات الدهانات باستخدام أجود المواد وأحدث التقنيات للحصول على نتائج مثالية ومتينة',
      image: '/ic-cephe.jpg',
      alt: 'دهانات داخلية وخارجية عالية الجودة',
      url: '/services/interior-exterior-painting'
    },
    {
      icon: Hammer,
      title: 'ترميم المباني',
      description: 'ترميم شامل للمباني القديمة واستعادة جمالها ووظائفها مع الحفاظ على الطابع المعماري الأصيل',
      image: '/resterasyon.jpg',
      alt: 'ترميم وإصلاح المباني القديمة',
      url: '/services/building-restoration'
    },
    {
      icon: Palette,
      title: 'ديكورات مميزة',
      description: 'تصميم وتنفيذ ديكورات عصرية وأنيقة تناسب جميع الأذواق وتضفي لمسة جمالية راقية',
      image: '/suslemeler.jpg',
      alt: 'ديكورات وتصاميم داخلية مميزة',
      url: '/services/distinctive-decorations'
    },
    {
      icon: Brush,
      title: 'تنفيذ كافة أنواع الدهانات',
      description: 'دهانات عادية، جل، ملمس، ديكوباج، ومختلف الأنواع الحديثة والمتخصصة',
      image: '/herturlu-boya-uygulamasi.jpg',
      alt: 'جميع أنواع تطبيقات الدهانات',
      url: '/services/all-paint-types'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Background Elements */}
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-50 rounded-full blur-3xl opacity-40"></div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 rounded-full px-6 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full ml-2 animate-pulse"></div>
              <span className="text-primary-700 font-semibold text-sm">خدمات متكاملة</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
                خدماتنا المتميزة
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              نقدم مجموعة شاملة من الخدمات عالية الجودة في مجال المقاولات والدهانات
              <br />
              <span className="text-primary-600 font-semibold">مع ضمان الجودة والإتقان في كل مشروع</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center space-x-4 space-x-reverse"
            >
              <div className="w-16 h-0.5 bg-gradient-to-l from-primary-500 to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-gold-500 to-primary-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-gold-500 to-primary-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-l from-gold-500 to-primary-500 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary-600">4</div>
                <div className="text-xs text-gray-600">خدمات رئيسية</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-gold-600">100%</div>
                <div className="text-xs text-gray-600">ضمان الجودة</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-xs text-gray-600">مشروع منجز</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">دعم العملاء</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)'
              }}
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gold-100/50 to-transparent rounded-tr-3xl"></div>

              {/* Service Image */}
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden rounded-t-3xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-gold-500/10 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Service Icon Overlay */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/30">
                  <service.icon className="w-8 h-8 text-primary-600 group-hover:text-gold-600 transition-colors duration-300" />
                </div>

                {/* Number Badge */}
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-7 lg:p-8 text-center">
                {/* Content Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Call to Action - Mobile Friendly */}
                  <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500">
                    <Link 
                      href={service.url}
                      className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full lg:w-auto"
                    >
                      <span>اعرف المزيد</span>
                      <svg className="w-4 h-4 mr-2 hover:transform hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Advanced Hover Effects */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-gold-500/5 rounded-3xl"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-full -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl max-w-6xl mx-auto overflow-hidden">
            {/* Glass morphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              {/* Section Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-gold-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-3 mb-6"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full ml-3 animate-pulse"></div>
                  <span className="text-primary-700 font-bold text-sm">التميز في الخدمة</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
                    لماذا نتميز في خدماتنا؟
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                  نحن نقدم أعلى معايير الجودة والاحترافية في كل مشروع
                </motion.p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🏆",
                    title: "مواد عالية الجودة",
                    description: "نستخدم أفضل المواد المستوردة والمحلية مع ضمان الجودة",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: "👥",
                    title: "فريق متخصص",
                    description: "عمال مهرة وفنيين ذوو خبرة طويلة في جميع التخصصات",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: "🛡️",
                    title: "ضمان شامل",
                    description: "ضمان على جميع الأعمال مع خدمة ما بعد البيع المتكاملة",
                    color: "from-purple-500 to-purple-600"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                    className="group relative p-6 text-center"
                  >
                    {/* Feature Card Background */}
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                        <span className="text-3xl">{feature.icon}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-800 transition-colors duration-300">
                        {feature.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Hover Decoration */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500"></div>
                    </div>

                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2 }}
                className="text-center mt-12"
              >
                <a
                  href="tel:0573677385"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg">اتصل الآن: 0573677385</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
