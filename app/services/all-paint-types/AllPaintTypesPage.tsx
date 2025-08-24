'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Brush, Droplets, Layers, Zap, Star, Phone } from 'lucide-react'

const AllPaintTypesPage = () => {
  const features = [
    {
      icon: '🎨',
      title: 'تنوع شامل',
      description: 'جميع أنواع الدهانات من التقليدية إلى الحديثة'
    },
    {
      icon: '🖌️',
      title: 'تقنيات متقدمة',
      description: 'أحدث تقنيات التطبيق والتشطيب المهني'
    },
    {
      icon: '✨',
      title: 'تأثيرات فنية',
      description: 'تأثيرات بصرية مميزة وفنية راقية'
    },
    {
      icon: '💎',
      title: 'جودة عالية',
      description: 'دهانات مستوردة ومحلية بأعلى معايير الجودة'
    }
  ]

  const paintTypes = [
    {
      name: 'دهانات عادية',
      description: 'الدهانات التقليدية للاستخدام العام',
      features: ['سهلة التطبيق', 'اقتصادية', 'متوفرة بألوان متعددة'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'دهانات الجل',
      description: 'قوام كثيف لتغطية ممتازة',
      features: ['تغطية فائقة', 'لا تنقط', 'لمعان جميل'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'دهانات الملمس',
      description: 'تأثيرات ملمسية ثلاثية الأبعاد',
      features: ['ملمس فريد', 'إخفاء العيوب', 'تأثير بصري مميز'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'ديكوباج',
      description: 'فن الدهان الديكوري الراقي',
      features: ['تشطيب فني', 'تأثيرات كلاسيكية', 'مقاومة عالية'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'دهانات مضادة للبكتيريا',
      description: 'حماية صحية متقدمة',
      features: ['مضاد للبكتيريا', 'آمن للأطفال', 'مقاوم للرطوبة'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'دهانات مقاومة للحريق',
      description: 'حماية إضافية من الحرائق',
      features: ['مقاوم للحريق', 'أمان إضافي', 'معتمد دولياً'],
      color: 'from-red-500 to-red-600'
    }
  ]

  const techniques = [
    { name: 'التدرج اللوني', description: 'انتقال سلس بين الألوان' },
    { name: 'الرسم الجداري', description: 'لوحات فنية على الجدران' },
    { name: 'التأثير المعدني', description: 'لمعان معدني فاخر' },
    { name: 'النقش والزخرفة', description: 'أنماط وزخارف مميزة' },
    { name: 'التأثير الخشبي', description: 'محاكاة ملمس الخشب الطبيعي' },
    { name: 'التأثير الرخامي', description: 'محاكاة عروق الرخام الطبيعي' }
  ]

  const applications = [
    { area: 'غرف النوم', technique: 'ألوان هادئة ومريحة', duration: '2-3 أيام' },
    { area: 'الصالات', technique: 'تأثيرات فاخرة وجذابة', duration: '3-4 أيام' },
    { area: 'المكاتب', technique: 'ألوان محفزة للإنتاجية', duration: '2-3 أيام' },
    { area: 'المطاعم', technique: 'ديكورات تفتح الشهية', duration: '3-5 أيام' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
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
                <Link href="/" className="text-emerald-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <Link href="/#services" className="text-emerald-300 hover:text-white transition-colors">
                  خدماتنا
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <span className="text-gray-300">تنفيذ كافة أنواع الدهانات</span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                  كافة أنواع الدهانات
                </span>
              </h1>

              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                دهانات عادية، جل، ملمس، ديكوباج، ومختلف الأنواع الحديثة والمتخصصة
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">+50 نوع دهان</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">تقنيات متقدمة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">فريق متخصص</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">ضمان شامل</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0573677385"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-2xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اطلب استشارة مجانية
                </a>
                <a
                  href="https://wa.me/966573677385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  اعرض مشروعك
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
                  src="/herturlu-boya-uygulamasi.jpg"
                  alt="جميع أنواع تطبيقات الدهانات"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[400px]"
                />
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Brush className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">+50</div>
                      <div className="text-sm text-gray-600">نوع دهان</div>
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
              لماذا نتميز في تنفيذ جميع أنواع الدهانات؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة وتقنيات متطورة في جميع أنواع الدهانات التقليدية والحديثة
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
              أنواع الدهانات المتخصصة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة شاملة من الدهانات لكل احتياج ومناسبة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintTypes.map((paint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${paint.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg text-center">{paint.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{paint.description}</p>
                  <div className="space-y-2">
                    {paint.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
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
              تقنيات التطبيق المتقدمة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتقن أحدث تقنيات الدهان والتشطيب للحصول على نتائج استثنائية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{technique.name}</h3>
                      <p className="text-gray-600 text-sm">{technique.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
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
              التطبيقات والاستخدامات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              دهانات مخصصة لكل مساحة وغرض
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{application.area}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>التقنية: {application.technique}</div>
                      <div>مدة التنفيذ: {application.duration}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              تحتاج نوع دهان مخصص؟
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              تحدث مع خبرائنا لاختيار أفضل نوع دهان يناسب مشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0573677385"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-bold rounded-2xl hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-5 h-5 ml-2" />
                استشارة مجانية: 0573677385
              </a>
              <a
                href="https://wa.me/966573677385"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                تحدث مع خبير
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AllPaintTypesPage
