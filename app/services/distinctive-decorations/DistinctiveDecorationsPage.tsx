'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Palette, Sparkles, Eye, Lightbulb, Star, Phone } from 'lucide-react'

const DistinctiveDecorationsPage = () => {
  const features = [
    {
      icon: '🎨',
      title: 'تصميم مخصص',
      description: 'تصاميم فريدة تناسب ذوقك الشخصي ومتطلباتك الخاصة'
    },
    {
      icon: '✨',
      title: 'لمسات عصرية',
      description: 'أحدث صيحات الديكور العالمي مع لمسة محلية مميزة'
    },
    {
      icon: '🏡',
      title: 'ديكور شامل',
      description: 'من التصميم إلى التنفيذ، نقدم حلول ديكور متكاملة'
    },
    {
      icon: '💎',
      title: 'جودة فاخرة',
      description: 'استخدام أفضل المواد والخامات لضمان نتائج راقية'
    }
  ]

  const decorationTypes = [
    { name: 'ديكورات الجبس', description: 'أشكال وتصاميم جبسية مبتكرة للأسقف والجدران' },
    { name: 'ورق الجدران', description: 'تشكيلة واسعة من أوراق الحائط العصرية والكلاسيكية' },
    { name: 'الإضاءة الديكورية', description: 'أنظمة إضاءة مبتكرة تبرز جمال التصميم' },
    { name: 'الأرضيات الفنية', description: 'باركيه وسيراميك وأرضيات ثلاثية الأبعاد' },
    { name: 'الستائر والمفروشات', description: 'ستائر وأقمشة تكمل التصميم العام' },
    { name: 'الديكورات الخشبية', description: 'تصاميم خشبية مصنوعة خصيصاً لمساحتك' }
  ]

  const projects = [
    { type: 'صالة معيشة عصرية', style: 'مودرن', rooms: '3 غرف' },
    { type: 'مكتب فاخر', style: 'كلاسيكي', rooms: '2 غرف' },
    { type: 'غرفة نوم رومانسية', style: 'رومانسي', rooms: '1 غرفة' },
    { type: 'مطعم تراثي', style: 'تراثي', rooms: '4 أقسام' }
  ]

  const styles = [
    {
      name: 'مودرن',
      description: 'خطوط نظيفة وألوان محايدة مع لمسات عصرية',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'كلاسيكي',
      description: 'أناقة تقليدية مع تفاصيل فاخرة وألوان دافئة',
      color: 'from-gold-500 to-gold-600'
    },
    {
      name: 'مينيمال',
      description: 'بساطة مدروسة مع التركيز على الوظائف والراحة',
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'بوهيمي',
      description: 'ألوان زاهية وأنماط متنوعة لأجواء مريحة ومرحة',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'صناعي',
      description: 'مواد خام وتشطيبات معدنية لمظهر عصري جريء',
      color: 'from-slate-500 to-slate-600'
    },
    {
      name: 'اسكندنافي',
      description: 'ألوان فاتحة وخشب طبيعي لأجواء هادئة ومريحة',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
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
                <Link href="/" className="text-purple-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <Link href="/#services" className="text-purple-300 hover:text-white transition-colors">
                  خدماتنا
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <span className="text-gray-300">ديكورات مميزة</span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                  ديكورات مميزة
                </span>
              </h1>

              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                تصميم وتنفيذ ديكورات عصرية وأنيقة تناسب جميع الأذواق وتضفي لمسة جمالية راقية
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">تصميم مجاني</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">ضمان سنتين</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">تنفيذ سريع</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">خامات فاخرة</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0573677385"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-2xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  احصل على تصميم مجاني
                </a>
                <a
                  href="https://wa.me/966573677385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  تحدث مع مصمم
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
                  src="/suslemeler.jpg"
                  alt="ديكورات وتصاميم داخلية مميزة"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[400px]"
                />
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">+300</div>
                      <div className="text-sm text-gray-600">تصميم مميز</div>
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
              لماذا تختار ديكوراتنا المميزة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نحول أحلامك إلى واقع مع تصاميم مبتكرة وتنفيذ احترافي
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

      {/* Decoration Types Section */}
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
              أنواع الديكورات التي نقدمها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة شاملة من الديكورات لجميع المساحات والأذواق
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decorationTypes.map((decoration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{decoration.name}</h3>
                      <p className="text-gray-600 text-sm">{decoration.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Section */}
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
              أساليب التصميم المتاحة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر الأسلوب الذي يناسب شخصيتك ومساحتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((style, index) => (
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${style.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{style.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              نماذج من تصاميمنا المميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مشاريع ديكور متنوعة تعكس إبداعنا وخبرتنا
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
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{project.type}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>الأسلوب: {project.style}</div>
                      <div>المساحة: {project.rooms}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لتحويل مساحتك؟
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية وتصميم أولي لمساحتك
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
                تحدث مع مصمم
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DistinctiveDecorationsPage
