'use client'

import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const stats = [
    { number: '+500', label: 'مشروع مكتمل', color: 'text-blue-600' },
    { number: '10+', label: 'سنوات خبرة', color: 'text-green-600' },
    { number: '100%', label: 'رضا العملاء', color: 'text-yellow-600' },
    { number: '24/7', label: 'خدمة العملاء', color: 'text-red-600' }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
              <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-50 rounded-full blur-3xl opacity-40"></div>
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
              <span className="text-primary-700 font-semibold text-sm">قصة نجاحنا</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
                من نحن؟
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
              تعرف على قصة نجاحنا وخبرتنا في مجال المقاولات والدهانات
              <br />
              <span className="text-primary-600 font-semibold">أكثر من 10 سنوات من التميز والإبداع</span>
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

            {/* Mini Preview Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-xs text-gray-600">سنوات خبرة</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-gold-600">500+</div>
                <div className="text-xs text-gray-600">مشروع منجز</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-600">رضا العملاء</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Company Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-100/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl max-w-6xl mx-auto overflow-hidden">
            {/* Glass morphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/95 to-primary-800/90 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-12 text-center text-white">
              {/* Company Logo/Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-3 mb-8"
              >
                <div className="w-3 h-3 bg-gold-400 rounded-full ml-3 animate-pulse"></div>
                <span className="text-white font-bold text-lg">الشركة الرائدة</span>
              </motion.div>

              {/* Company Name */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  بصمة لابداع
                </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-5xl mx-auto mb-8"
              >
                نحن شركة متخصصة في مجال المقاولات العامة والدهانات بالرياض، نتميز بخبرة تزيد عن 10 سنوات 
                في تقديم أفضل الخدمات لعملائنا الكرام. نعمل بفريق محترف ومتخصص لضمان الجودة والإتقان في كل مشروع.
              </motion.p>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gold-300">10+</div>
                  <div className="text-sm text-blue-200">سنوات خبرة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gold-300">500+</div>
                  <div className="text-sm text-blue-200">مشروع ناجح</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gold-300">100%</div>
                  <div className="text-sm text-blue-200">ضمان الجودة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-gold-300">24/7</div>
                  <div className="text-sm text-blue-200">دعم العملاء</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-300/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl"></div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              {/* Video Container with Glass Effect */}
              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/50 to-gold-200/50 rounded-3xl blur-xl opacity-60"></div>
                
                <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-4 border border-white/30 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <video
                      ref={videoRef}
                      className="w-full h-[356px] sm:h-[420px] md:h-[484px] lg:h-[550px] object-cover"
                      style={{ aspectRatio: '9/16' }}
                      poster="/hero1.jpg"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      متصفحك لا يدعم تشغيل الفيديو
                    </video>
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/20 group-hover:to-black/10 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={handlePlayPause}
                          className="w-20 h-20 bg-white/95 backdrop-blur-lg hover:bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 border border-white/50 group-hover:shadow-3xl"
                        >
                          {isPlaying ? (
                            <Pause className="w-10 h-10 text-primary-600" />
                          ) : (
                            <Play className="w-10 h-10 text-primary-600 mr-1" />
                          )}
                        </button>
                      </div>
                      
                      {/* Volume Control */}
                      <div className="absolute bottom-6 right-6">
                        <button
                          onClick={handleMuteToggle}
                          className="w-12 h-12 bg-white/95 backdrop-blur-lg hover:bg-white rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 border border-white/30"
                        >
                          {isMuted ? (
                            <VolumeX className="w-6 h-6 text-gray-600" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Play Status Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-lg border transition-all duration-300 ${
                          isPlaying 
                            ? 'bg-red-500/90 text-white border-red-400/50' 
                            : 'bg-white/90 text-gray-700 border-white/50'
                        }`}>
                          {isPlaying ? '⏸ مشغل' : '▶ اضغط للتشغيل'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Description with Modern Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 text-center"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg max-w-xs sm:max-w-sm mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-center">
                    <span className="w-2 h-2 bg-gold-500 rounded-full ml-2 animate-pulse"></span>
                    شاهد أعمالنا من قرب
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    لقطات حصرية من مشاريعنا ونماذج من أعمالنا الاحترافية والمتميزة
                  </p>
                  
                  {/* Video Stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-primary-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-primary-600">HD</div>
                      <div className="text-xs text-primary-700">جودة عالية</div>
                    </div>
                    <div className="bg-gold-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-gold-600">2024</div>
                      <div className="text-xs text-gold-700">أحدث الأعمال</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Stats Grid - Modern Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Section Header */}
              <div className="text-center lg:text-right mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-gold-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-2 mb-4"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full ml-2 animate-pulse"></div>
                  <span className="text-primary-700 font-bold text-sm">الإنجازات</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-2xl md:text-3xl font-bold mb-2"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
                    إنجازاتنا بالأرقام
                  </span>
                </motion.h3>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-50/30 rounded-full blur-3xl"></div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="group relative"
                  >
                    {/* Card Background with Glass Effect */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 text-center">
                      {/* Icon Circle */}
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 ${
                        index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                        index === 2 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                        'bg-gradient-to-br from-red-500 to-red-600'
                      }`}>
                        <span className="text-white text-xl font-bold">
                          {index === 0 ? '📊' : index === 1 ? '⏱️' : index === 2 ? '😊' : '📞'}
                        </span>
                      </div>

                      {/* Number */}
                      <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${stat.color} group-hover:scale-110 transform transition-transform duration-300`}>
                        {stat.number}
                      </div>

                      {/* Label */}
                      <div className="text-sm text-gray-600 font-semibold group-hover:text-gray-800 transition-colors duration-300">
                        {stat.label}
                      </div>

                      {/* Progress Bar Effect */}
                      <div className="mt-3 w-0 group-hover:w-full h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500 mx-auto"></div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-green-500' :
                      index === 2 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision, Mission, Values - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-1/3 w-64 h-64 bg-gold-100/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary-100/15 rounded-full blur-3xl"></div>
              </div>

              {/* Section Header */}
              <div className="text-center lg:text-right mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-flex items-center bg-gradient-to-r from-gold-100/80 to-primary-100/80 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-2 mb-4"
                >
                  <div className="w-2 h-2 bg-gold-500 rounded-full ml-2 animate-pulse"></div>
                  <span className="text-gold-700 font-bold text-sm">الهوية المؤسسية</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-2xl md:text-3xl font-bold mb-2"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-gold-800 to-gray-900 bg-clip-text text-transparent">
                    قيمنا ورؤيتنا
                  </span>
                </motion.h3>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "👁",
                    title: "رؤيتنا",
                    description: "أن نكون الخيار الأول للعملاء في مجال المقاولات والدهانات بالمملكة",
                    gradient: "from-purple-500 to-purple-600",
                    bgGradient: "from-purple-50 to-purple-100"
                  },
                  {
                    icon: "🎯",
                    title: "مهمتنا", 
                    description: "تقديم خدمات عالية الجودة وحلول مبتكرة تفوق توقعات عملائنا",
                    gradient: "from-blue-500 to-blue-600",
                    bgGradient: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: "💎",
                    title: "قيمنا",
                    description: "الأمانة، الجودة، الالتزام بالمواعيد، ورضا العملاء",
                    gradient: "from-gold-500 to-gold-600",
                    bgGradient: "from-gold-50 to-gold-100"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                    className="group relative"
                  >
                    {/* Background Card */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 text-center">
                      {/* Decorative Background */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.bgGradient} rounded-bl-3xl opacity-20`}></div>
                      
                      {/* Icon Container */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                        <span className="text-3xl">{item.icon}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-800 transition-colors duration-300">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>

                      {/* Hover Line */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Highlights - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 relative overflow-hidden">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/20 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Section Header */}
                  <div className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="inline-flex items-center bg-gradient-to-r from-green-100/80 to-primary-100/80 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-2 mb-4"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
                      <span className="text-green-700 font-bold text-sm">التخصصات</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-xl md:text-2xl font-bold mb-2"
                    >
                      <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                        خبرتنا المتميزة
                      </span>
                    </motion.h3>
                  </div>

                  {/* Experience Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "🏠",
                        title: "مشاريع سكنية",
                        description: "فلل، شقق، استراحات",
                        color: "from-green-500 to-green-600",
                        bgColor: "bg-green-50"
                      },
                      {
                        icon: "🏢",
                        title: "مشاريع تجارية",
                        description: "مكاتب، محلات، شركات",
                        color: "from-blue-500 to-blue-600",
                        bgColor: "bg-blue-50"
                      },
                      {
                        icon: "🔧",
                        title: "ترميم شامل",
                        description: "إعادة تأهيل المباني",
                        color: "from-orange-500 to-orange-600",
                        bgColor: "bg-orange-50"
                      },
                      {
                        icon: "✨",
                        title: "ديكورات فاخرة",
                        description: "تصاميم حديثة وعصرية",
                        color: "from-purple-500 to-purple-600",
                        bgColor: "bg-purple-50"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                        className="group flex items-center space-x-4 space-x-reverse p-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                          <span className="text-2xl">{item.icon}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-800 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {item.description}
                          </p>
                          
                          {/* Progress indicator */}
                          <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500 mt-2"></div>
                        </div>

                        {/* Check mark */}
                        <div className={`w-8 h-8 ${item.bgColor} rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                          <span className="text-green-600 font-bold text-sm">✓</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary-200/30 to-transparent rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gold-200/30 to-transparent rounded-tl-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Section - Ultra Modern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-100/25 rounded-full blur-3xl"></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center bg-gradient-to-r from-primary-100/80 to-gold-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-8 py-3 mb-6"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full ml-3 animate-pulse"></div>
              <span className="text-primary-700 font-bold text-base">الفريق المتميز</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
                فريق العمل المتميز
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              نحن نفتخر بفريق من المحترفين ذوي الخبرة والمهارة العالية
            </motion.p>
          </div>

          {/* Team Cards Container */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl max-w-6xl mx-auto overflow-hidden">
            {/* Glass morphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20 rounded-3xl"></div>
            
            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    icon: "👨‍💼",
                    initial: "أب",
                    name: "ابو باسل",
                    role: "المشرف العام",
                    description: "خبرة +10 سنوات في إدارة المشاريع",
                    gradient: "from-primary-500 to-primary-600",
                    bgPattern: "from-primary-50 to-primary-100"
                  },
                  {
                    icon: "👷‍♂️",
                    initial: "فني",
                    name: "الفريق الفني",
                    role: "مختصون ومهرة",
                    description: "عمال مدربون على أعلى المستويات",
                    gradient: "from-gold-500 to-gold-600",
                    bgPattern: "from-gold-50 to-gold-100"
                  },
                  {
                    icon: "📞",
                    initial: "24",
                    name: "خدمة العملاء",
                    role: "متاح 24/7",
                    description: "دعم فني ومتابعة مستمرة",
                    gradient: "from-green-500 to-green-600",
                    bgPattern: "from-green-50 to-green-100"
                  }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                    className="group text-center relative"
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/40 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Background Pattern */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${member.bgPattern} rounded-bl-3xl opacity-30`}></div>
                      
                      {/* Avatar with 3D Effect */}
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 transform group-hover:rotate-3`}>
                          <span className="text-3xl">{member.icon}</span>
                        </div>
                        
                        {/* Floating badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg group-hover:animate-bounce">
                          {member.initial}
                        </div>
                      </div>

                      {/* Name */}
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-800 transition-colors duration-300">
                        {member.name}
                      </h4>

                      {/* Role */}
                      <p className="text-primary-600 font-semibold mb-3 text-lg group-hover:text-primary-700 transition-colors duration-300">
                        {member.role}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {member.description}
                      </p>

                      {/* Animated Underline */}
                      <div className="mt-4 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500 mx-auto"></div>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-200/20 to-transparent rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold-200/20 to-transparent rounded-tl-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About