'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react'

const VideoSection = () => {
  const [videoStates, setVideoStates] = useState([
    { isPlaying: false, isMuted: true, isEnded: false },
    { isPlaying: false, isMuted: true, isEnded: false }
  ])
  
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)]

  const handlePlayPause = (index: number) => {
    const video = videoRefs[index].current
    if (!video) return

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  const handleMuteToggle = (index: number) => {
    const video = videoRefs[index].current
    if (!video) return

    video.muted = !video.muted
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isMuted: video.muted } : state
    ))
  }

  const handleRestart = (index: number) => {
    const video = videoRefs[index].current
    if (!video) return

    video.currentTime = 0
    video.play()
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isEnded: false, isPlaying: true } : state
    ))
  }

  const handleVideoPlay = (index: number) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isPlaying: true, isEnded: false } : state
    ))
  }

  const handleVideoPause = (index: number) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isPlaying: false } : state
    ))
  }

  const handleVideoEnded = (index: number) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isPlaying: false, isEnded: true } : state
    ))
  }

  const videos = [
    {
      src: '/video2.mp4',
      title: 'أعمالنا المتميزة - الجزء الأول',
      description: `🔹 مقاول ترميم وبناء وتشطيب متكامل 🔹
نقدم جميع الأعمال بجودة عالية وأسعار تنافسية:

✅ أعمال الدهانات: داخلية وخارجية – تنفيذ جميع الألوان والدهانات الحديثة.
✅ ترميم وتشطيب: معالجة الشقوق، تجديد المباني، رفع كفاءة العقارات.
✅ ديكورات داخلية: تصميم وتنفيذ أسقف جبس بورد، قواطع، وديكورات حديثة.`
    },
    {
      src: '/video3.mp4',
      title: 'أعمالنا المتميزة - الجزء الثاني',
      description: `🔹 مقاول ترميم وبناء وتشطيب متكامل 🔹
نقدم جميع الأعمال بجودة عالية وأسعار تنافسية:

✅ عوازل: تركيب جبس بورد عازل، ساندوتش بنل، وصوف صخري لعزل حراري وصوتي.
✅ بناء وصيانة: إنشاءات جديدة وصيانة شاملة.`
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-red-100 to-red-50 border border-red-200 rounded-full px-6 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full ml-2 animate-pulse"></div>
              <span className="text-red-700 font-semibold text-sm">معرض أعمالنا</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent">
                شاهد أعمالنا المتميزة
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
              تعرف على نماذج من أعمالنا الاحترافية في المقاولات والدهانات
              <br />
              <span className="text-red-600 font-semibold">أعمال حقيقية لعملاء راضين</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center space-x-4 space-x-reverse"
            >
              <div className="w-16 h-0.5 bg-gradient-to-l from-red-500 to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-blue-500 to-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-l from-blue-500 to-red-500 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="group relative"
            >
              {/* Video Container */}
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 rounded-3xl"></div>
                
                {/* Video */}
                <div className="relative z-10 p-6">
                  <div className="relative rounded-2xl overflow-hidden group/video">
                    <video
                      ref={videoRefs[index]}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/hero1.jpg"
                      onPlay={() => handleVideoPlay(index)}
                      onPause={() => handleVideoPause(index)}
                      onEnded={() => handleVideoEnded(index)}
                    >
                      <source src={video.src} type="video/mp4" />
                      متصفحك لا يدعم تشغيل الفيديو
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover/video:opacity-100 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          {/* Play/Pause Button */}
                          <button
                            onClick={() => handlePlayPause(index)}
                            className="w-16 h-16 bg-white/95 backdrop-blur-lg hover:bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/50"
                          >
                            {videoStates[index].isPlaying ? (
                              <Pause className="w-8 h-8 text-red-600" />
                            ) : (
                              <Play className="w-8 h-8 text-red-600 mr-1" />
                            )}
                          </button>

                          {/* Restart Button (only show when ended) */}
                          {videoStates[index].isEnded && (
                            <button
                              onClick={() => handleRestart(index)}
                              className="w-14 h-14 bg-white/95 backdrop-blur-lg hover:bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 border border-white/50"
                            >
                              <RotateCcw className="w-6 h-6 text-blue-600" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Volume Control */}
                      <div className="absolute bottom-6 right-6">
                        <button
                          onClick={() => handleMuteToggle(index)}
                          className="w-12 h-12 bg-white/95 backdrop-blur-lg hover:bg-white rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 border border-white/30"
                        >
                          {videoStates[index].isMuted ? (
                            <VolumeX className="w-6 h-6 text-gray-600" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-lg border transition-all duration-300 ${
                          videoStates[index].isPlaying
                            ? 'bg-red-500/90 text-white border-red-400/50'
                            : videoStates[index].isEnded
                            ? 'bg-blue-500/90 text-white border-blue-400/50'
                            : 'bg-white/90 text-gray-700 border-white/50'
                        }`}>
                          {videoStates[index].isPlaying
                            ? '⏸ مشغل'
                            : videoStates[index].isEnded
                            ? '🔄 انتهى'
                            : '▶ اضغط للتشغيل'
                          }
                        </div>
                      </div>

                      {/* Sound Status */}
                      <div className="absolute top-6 right-6">
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border transition-all duration-300 ${
                          videoStates[index].isMuted
                            ? 'bg-gray-500/90 text-white border-gray-400/50'
                            : 'bg-green-500/90 text-white border-green-400/50'
                        }`}>
                          {videoStates[index].isMuted ? '🔇 صامت' : '🔊 صوت'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full ml-2 animate-pulse"></span>
                      {video.title}
                    </h3>
                    
                    {/* Description */}
                    <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                      <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-line font-sans text-right">
                        {video.description}
                      </pre>
                    </div>

                    {/* Video Stats */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="bg-red-50 rounded-xl p-3">
                        <div className="text-lg font-bold text-red-600">HD</div>
                        <div className="text-xs text-red-700">جودة عالية</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3">
                        <div className="text-lg font-bold text-blue-600">2024</div>
                        <div className="text-xs text-blue-700">أحدث الأعمال</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-3">
                        <div className="text-lg font-bold text-green-600">Live</div>
                        <div className="text-xs text-green-700">أعمال حقيقية</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-red-200/20 to-transparent rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-tl-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl max-w-2xl mx-auto p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                مُعجب بأعمالنا؟
              </h4>
              <p className="text-gray-600 mb-6">
                تواصل معنا الآن واحصل على استشارة مجانية لمشروعك
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="text-lg">اتصل الآن: 0573677385</span>
                <svg className="w-6 h-6 mr-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
