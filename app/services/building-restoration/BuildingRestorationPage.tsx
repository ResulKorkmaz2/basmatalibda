'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Hammer, Building, Settings, Shield, Star, Phone } from 'lucide-react'

const BuildingRestorationPage = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'ترميم شامل',
      description: 'إعادة تأهيل كاملة للمباني مع الحفاظ على الهوية المعمارية'
    },
    {
      icon: '🔧',
      title: 'صيانة دورية',
      description: 'خدمات صيانة منتظمة للحفاظ على سلامة المبنى'
    },
    {
      icon: '🏛️',
      title: 'ترميم تراثي',
      description: 'ترميم المباني التراثية والتاريخية بعناية فائقة'
    },
    {
      icon: '⚡',
      title: 'حلول سريعة',
      description: 'إصلاح المشاكل العاجلة والطارئة بسرعة وفعالية'
    }
  ]

  const services = [
    { name: 'ترميم الجدران والأسقف', description: 'إصلاح التشققات والتلف الداخلي' },
    { name: 'تجديد الواجهات الخارجية', description: 'استعادة جمال واجهة المبنى' },
    { name: 'إصلاح السباكة والكهرباء', description: 'تحديث الأنظمة الداخلية' },
    { name: 'عزل الرطوبة والمياه', description: 'حماية دائمة ضد التسرب' },
    { name: 'ترميم الأرضيات', description: 'تجديد وإصلاح جميع أنواع الأرضيات' },
    { name: 'تحديث النوافذ والأبواب', description: 'استبدال وصيانة الفتحات' }
  ]

  const projects = [
    { type: 'فيلا تراثية', condition: 'ترميم شامل', duration: '45 يوم' },
    { type: 'مبنى تجاري', condition: 'تجديد واجهة', duration: '20 يوم' },
    { type: 'بيت شعبي', condition: 'ترميم كامل', duration: '30 يوم' },
    { type: 'مجمع سكني', condition: 'صيانة دورية', duration: '15 يوم' }
  ]

  const steps = [
    {
      step: '1',
      title: 'فحص وتقييم',
      description: 'فحص شامل لحالة المبنى وتحديد المشاكل'
    },
    {
      step: '2',
      title: 'تخطيط وتصميم',
      description: 'وضع خطة ترميم مفصلة مع الجدول الزمني'
    },
    {
      step: '3',
      title: 'التنفيذ',
      description: 'بدء أعمال الترميم بفريق متخصص ومعدات حديثة'
    },
    {
      step: '4',
      title: 'التسليم والضمان',
      description: 'تسليم المشروع مع ضمان شامل على الأعمال'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
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
                <Link href="/" className="text-orange-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <Link href="/#services" className="text-orange-300 hover:text-white transition-colors">
                  خدماتنا
                </Link>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                <span className="text-gray-300">ترميم المباني</span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                  ترميم المباني
                </span>
              </h1>

              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                ترميم شامل للمباني القديمة واستعادة جمالها ووظائفها مع الحفاظ على الطابع المعماري الأصيل
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">ضمان 3 سنوات</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">فحص مجاني</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">فريق متخصص</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">مواد عالية الجودة</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0573677385"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-2xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  احجز فحص مجاني
                </a>
                <a
                  href="https://wa.me/966573677385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  استشارة فورية
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
                  src="/resterasyon.jpg"
                  alt="ترميم وإصلاح المباني القديمة"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[400px]"
                />
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Hammer className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">+200</div>
                      <div className="text-sm text-gray-600">مبنى مُرمم</div>
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
              لماذا تختار خدمات الترميم لدينا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن متخصصون في إعادة الحياة للمباني القديمة بأحدث التقنيات والمعايير
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

      {/* Services Section */}
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
              خدمات الترميم التي نقدمها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة شاملة من خدمات الترميم والصيانة لجميع أنواع المباني
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              خطوات عملية الترميم
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية علمية مدروسة لضمان أفضل النتائج
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-orange-200 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
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
              نماذج من مشاريع الترميم
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مشاريع ترميم متنوعة نفخر بإنجازها وإعادة الحياة إليها
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{project.type}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>نوع العمل: {project.condition}</div>
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مبناك يحتاج ترميم؟
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              احصل على فحص مجاني واستشارة شاملة لحالة مبناك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0573677385"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-bold rounded-2xl hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-5 h-5 ml-2" />
                احجز فحص مجاني: 0573677385
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

export default BuildingRestorationPage
