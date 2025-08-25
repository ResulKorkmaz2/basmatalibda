'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Send, Clock, Mail, CheckCircle, Star, Shield, Award, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `
مرحباً، أود طلب خدمة من بصمة لابداع:

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
نوع الخدمة: ${formData.service}
تفاصيل المشروع: ${formData.message}

أرجو التواصل معي في أقرب وقت ممكن.
شكراً لكم.
    `.trim()

    const whatsappURL = `https://wa.me/966573677385?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      value: '0573677385',
      link: 'tel:0573677385',
      description: 'متاح 24/7 لخدمتكم'
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      value: '0573677385',
      link: 'https://wa.me/966573677385',
      description: 'راسلنا على الواتساب'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'الرياض، المملكة العربية السعودية',
      link: '#',
      description: 'نخدم جميع أنحاء الرياض'
    }
  ]

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شريككم المتميز في تحويل أحلامكم إلى واقع. نقدم لكم استشارة مجانية شاملة وعرض أسعار مخصص لجميع احتياجاتكم
          </p>
          <div className="flex items-center justify-center mt-8 space-x-8 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>استجابة فورية</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>خدمة موثوقة</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
              <Award className="w-5 h-5 text-yellow-500" />
              <span>جودة عالية</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                معلومات التواصل
              </h3>
              <p className="text-gray-600 text-lg">
                نحن متاحون دائماً لخدمتكم عبر القنوات التالية
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                    <div className="relative flex items-center space-x-6 space-x-reverse p-8 bg-white/70 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <info.icon className="w-8 h-8" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white shadow-sm animate-bounce"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-blue-600 font-semibold text-lg mb-1" dir="ltr">
                          {info.value}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                      <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-orange-100/50 rounded-3xl"></div>
              <div className="relative bg-white/70 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl">
                <div className="flex items-center space-x-4 space-x-reverse mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">ساعات العمل</h4>
                    <p className="text-gray-600">نحن متاحون لخدمتكم</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50/80 rounded-xl">
                    <span className="font-semibold text-gray-800">السبت - الخميس</span>
                    <span className="font-mono text-blue-600 font-semibold" dir="ltr">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50/80 rounded-xl">
                    <span className="font-semibold text-gray-800">الجمعة</span>
                    <span className="font-mono text-blue-600 font-semibold" dir="ltr">2:00 PM - 8:00 PM</span>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-700 font-semibold">خدمة الطوارئ متاحة 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 p-10 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg mb-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  احصل على عرض أسعار مجاني
                </h3>
                <p className="text-gray-600 text-lg">
                  املأ النموذج وسنتواصل معك خلال دقائق
                </p>
              </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 space-x-reverse text-sm font-semibold text-gray-700 mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>الاسم الكامل</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400"
                    placeholder="أدخل اسمك الكامل"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 space-x-reverse text-sm font-semibold text-gray-700 mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>رقم الهاتف</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 space-x-reverse text-sm font-semibold text-gray-700 mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>نوع الخدمة المطلوبة</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg appearance-none cursor-pointer"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    <option value="دهانات داخلية">🏠 دهانات داخلية</option>
                    <option value="دهانات خارجية">🏢 دهانات خارجية</option>
                    <option value="ترميم المباني">🔨 ترميم المباني</option>
                    <option value="ديكورات مميزة">✨ ديكورات مميزة</option>
                    <option value="مقاولات عامة">🏗️ مقاولات عامة</option>
                    <option value="خدمات أخرى">🛠️ خدمات أخرى</option>
                  </select>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 space-x-reverse text-sm font-semibold text-gray-700 mb-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span>وصف المشروع</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400 resize-none"
                    placeholder="اكتب تفاصيل المشروع المطلوب، المساحة، المواد المفضلة، والميزانية التقريبية..."
                  ></textarea>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
                <button
                  type="submit"
                  className="relative w-full px-8 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 space-x-reverse"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                    <Send className="w-5 h-5" />
                  </div>
                  <span>إرسال الطلب عبر الواتساب</span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                </button>
              </div>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center space-x-4 space-x-reverse p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-green-800">استجابة فورية</p>
                  <p className="text-sm text-green-600">سنرد على طلبكم خلال 15 دقيقة</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-6 space-x-reverse text-sm text-gray-500">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Shield className="w-4 h-4" />
                  <span>بيانات آمنة</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>تقييم ممتاز</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>خدمة موثوقة</span>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                  حساباتنا على وسائل التواصل
                </h3>
                
                <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  فريقنا المتخصص متاح على مدار الساعة لتقديم الاستشارة الفورية والإجابة على جميع استفساراتكم
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-6 space-x-reverse mb-8">
                  <div className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold text-sm">متاح الآن</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-semibold text-sm">رد خلال دقائق</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700 font-semibold text-sm">خدمة مميزة</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {/* Instagram */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <a
                    href="https://www.instagram.com/mqwlt4823"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block p-6 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Instagram className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">Instagram</h4>
                      <p className="text-white/80 text-xs">@mqwlt4823</p>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                  </a>
                </motion.div>

                {/* TikTok */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <a
                    href="https://www.tiktok.com/@user31262616554342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">TikTok</h4>
                      <p className="text-white/80 text-xs">@user31262...</p>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                  </a>
                </motion.div>

                {/* Facebook */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=61563031801396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Facebook className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">Facebook</h4>
                      <p className="text-white/80 text-xs">بصمة لابداع</p>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </a>
                </motion.div>

                {/* Snapchat */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <a
                    href="https://www.snapchat.com/add/bwbsllsyd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block p-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c-2.5 0-3 2.2-3 3.8 0 3-1.5 4.2-3 4.2-.8 0-1 .3-1 .6s.2.6 1 .6c.8 0 1.8.8 1.8 1.6 0 1.2-2 1.2-2 2.4 0 .8.8 1.8 2.4 1.8.8 0 1.6-.2 2-.4.2.4.6.8 1.2.8.6 0 1-.4 1.2-.8.4.2 1.2.4 2 .4 1.6 0 2.4-1 2.4-1.8 0-1.2-2-1.2-2-2.4 0-.8 1-1.6 1.8-1.6.8 0 1-.3 1-.6s-.2-.6-1-.6c-1.5 0-3-1.2-3-4.2 0-1.6-.5-3.8-3-3.8z"/>
                        </svg>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">Snapchat</h4>
                      <p className="text-white/80 text-xs">@bwbsllsyd</p>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                  </a>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center space-x-3 space-x-reverse px-6 py-3 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 font-semibold">شاهدوا مشاريعنا المتميزة والعروض الحصرية</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
