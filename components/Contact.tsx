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

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `
السلام عليكم ورحمة الله وبركاته

أود الحصول على عرض سعر للخدمة التالية:

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
نوع الخدمة: ${formData.service}
تفاصيل المشروع: ${formData.message}

شكراً لكم
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/966573677385?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '0573677385',
      link: 'tel:0573677385',
      description: 'اتصل بنا مباشرة'
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

  const socialMedia = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/mqwlt4823',
      username: '@mqwlt4823',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61563031801396',
      username: 'بصمة لابداع',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'TikTok',
      icon: (props: any) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@user31262616554342',
      username: '@user31262616554342',
      color: 'from-gray-900 to-black'
    },
    {
      name: 'Snapchat',
      icon: (props: any) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-2.5 0-3 2.2-3 3.8 0 3-1.5 4.2-3 4.2-.8 0-1 .3-1 .6s.2.6 1 .6c.8 0 1.8.8 1.8 1.6 0 1.2-2 1.2-2 2.4 0 .8.8 1.8 2.4 1.8.8 0 1.6-.2 2-.4.2.4.6.8 1.2.8.6 0 1-.4 1.2-.8.4.2 1.2.4 2 .4 1.6 0 2.4-1 2.4-1.8 0-1.2-2-1.2-2-2.4 0-.8 1-1.6 1.8-1.6.8 0 1-.3 1-.6s-.2-.6-1-.6c-1.5 0-3-1.2-3-4.2 0-1.6-.5-3.8-3-3.8z"/>
        </svg>
      ),
      url: 'https://www.snapchat.com/add/bwbsllsyd',
      username: '@bwbsllsyd',
      color: 'from-yellow-400 to-yellow-500'
    }
  ]

  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50 to-transparent opacity-60"></div>
      </div>

      <div className="container relative z-10 section-padding">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 rounded-full px-6 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full ml-2 animate-pulse"></div>
            <span className="text-primary-700 font-semibold text-sm">تواصل معنا</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
              نحن هنا لخدمتكم
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تواصلوا معنا للحصول على استشارة مجانية وعرض سعر مخصص لمشروعكم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 space-x-reverse p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group-hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <info.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 text-lg">
                          {info.title}
                        </h4>
                        <p className="text-primary-600 font-semibold mb-1" dir={info.title === 'الهاتف' || info.title === 'واتساب' ? 'ltr' : 'rtl'}>
                          {info.value}
                        </p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 text-primary-500 transition-opacity duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                تابعونا على وسائل التواصل
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-gray-900 text-sm">{social.name}</h5>
                        <p className="text-gray-500 text-xs truncate">{social.username}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">ساعات العمل</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">السبت - الخميس</span>
                  <span className="text-primary-600 font-semibold" dir="ltr">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">الجمعة</span>
                  <span className="text-primary-600 font-semibold" dir="ltr">2:00 PM - 8:00 PM</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2 space-x-reverse text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">متاحون الآن للرد على استفساراتكم</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                احصل على عرض أسعار مجاني
              </h3>
              <p className="text-gray-600">
                املأ النموذج وسنتواصل معك عبر الواتساب خلال دقائق
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="05XXXXXXXX"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  نوع الخدمة المطلوبة *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="دهانات داخلية">دهانات داخلية</option>
                  <option value="دهانات خارجية">دهانات خارجية</option>
                  <option value="ترميم المباني">ترميم المباني</option>
                  <option value="ديكورات مميزة">ديكورات مميزة</option>
                  <option value="تنفيذ كافة أنواع الدهانات">تنفيذ كافة أنواع الدهانات</option>
                  <option value="مقاولات عامة">مقاولات عامة</option>
                  <option value="خدمات أخرى">خدمات أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  تفاصيل المشروع
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  placeholder="اكتب تفاصيل المشروع، المساحة، والميزانية التقريبية..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 space-x-reverse shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>تم الإرسال بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>إرسال عبر الواتساب</span>
                  </>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-xs text-gray-600">بيانات آمنة</span>
                </div>
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-yellow-500 mb-2" />
                  <span className="text-xs text-gray-600">تقييم ممتاز</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-xs text-gray-600">خدمة موثوقة</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact