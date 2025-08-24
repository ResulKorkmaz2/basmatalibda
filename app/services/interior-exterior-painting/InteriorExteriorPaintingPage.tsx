'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Paintbrush, Home, Building, Shield, Star, Phone } from 'lucide-react'

const InteriorExteriorPaintingPage = () => {
  const features = [
    {
      icon: '🎨',
      title: 'دهانات عالية الجودة',
      description: 'استخدام أفضل أنواع الدهانات المستوردة والمحلية المعتمدة'
    },
    {
      icon: '🏠',
      title: 'دهانات داخلية متميزة',
      description: 'تشطيبات داخلية راقية تضفي جمالاً وأناقة على منزلك'
    },
    {
      icon: '🏢',
      title: 'دهانات خارجية مقاومة',
      description: 'حماية فائقة ضد العوامل الجوية والرطوبة والحرارة'
    },
    {
      icon: '⚡',
      title: 'تطبيق سريع ومتقن',
      description: 'فريق متخصص ينجز العمل في الوقت المحدد بأعلى جودة'
    }
  ]

  const paintTypes = [
    { name: 'دهانات بلاستيك', description: 'مقاومة للرطوبة وسهلة التنظيف' },
    { name: 'دهانات زيتية', description: 'متانة عالية ولمعان جذاب' },
    { name: 'دهانات جيل', description: 'ملمس ناعم وتغطية ممتازة' },
    { name: 'دهانات ملمس', description: 'تأثيرات بصرية مميزة' },
    { name: 'دهانات مائية', description: 'صديقة للبيئة وسريعة الجفاف' },
    { name: 'دهانات ديكوباج', description: 'تشطيبات فنية راقية' }
  ]

  const projects = [
    { type: 'فيلا سكنية', area: '400 م²', duration: '5 أيام' },
    { type: 'مجمع تجاري', area: '800 م²', duration: '10 أيام' },
    { type: 'مبنى إداري', area: '1200 م²', duration: '15 يوم' },
    { type: 'استراحة', area: '200 م²', duration: '3 أيام' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 space-x-reverse text-sm mb-6">
                <Link href="/" className="text-blue-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <Link href="/#services" className="text-blue-300 hover:text-white transition-colors">
                  خدماتنا
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <span className="text-gray-300">دهانات داخلية وخارجية</span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  دهانات داخلية وخارجية
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                نقدم أفضل خدمات الدهانات باستخدام أجود المواد وأحدث التقنيات للحصول على نتائج مثالية ومتينة
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">ضمان 5 سنوات</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">مواد عالية الجودة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">فريق متخصص</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">أسعار تنافسية</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0573677385"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-2xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اطلب عرض سعر مجاني
                </a>
                <a
                  href="https://wa.me/966573677385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20">
                <Image
                  src="/ic-cephe.jpg"
                  alt="دهانات داخلية وخارجية عالية الجودة"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[400px]"
                />
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">+500</div>
                      <div className="text-sm text-gray-600">مشروع منجز</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              لماذا تختار خدمات الدهانات لدينا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نجمع بين الخبرة والجودة لنقدم لك أفضل خدمات الدهانات في الرياض
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Types Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              أنواع الدهانات التي نقدمها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة متنوعة من الدهانات عالية الجودة لتناسب جميع احتياجاتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paintTypes.map((paint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Paintbrush className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{paint.name}</h3>
                      <p className="text-gray-600 text-sm">{paint.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              نماذج من مشاريعنا المنجزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مشاريع متنوعة نفخر بإنجازها بأعلى معايير الجودة والاحترافية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{project.type}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>المساحة: {project.area}</div>
                      <div>مدة التنفيذ: {project.duration}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لبدء مشروع الدهانات؟
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0573677385"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-bold rounded-2xl hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل الآن: 0573677385
              </a>
              <a
                href="https://wa.me/966573677385"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InteriorExteriorPaintingPage
