'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, RotateCcw, Loader } from 'lucide-react'

const VideoSection = () => {
  const [videoStates, setVideoStates] = useState([
    { isPlaying: false, isMuted: true, isEnded: false, isLoaded: false, isInView: false, isLoading: false, hasError: false, showControls: false },
    { isPlaying: false, isMuted: true, isEnded: false, isLoaded: false, isInView: false, isLoading: false, hasError: false, showControls: false }
  ])
  
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)]
  const containerRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

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

  // Intersection Observer for lazy loading + autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = containerRefs.findIndex(ref => ref.current === entry.target)
          if (index !== -1) {
            if (entry.isIntersecting && !videoStates[index].isLoaded) {
              setVideoStates(prev => prev.map((state, i) => 
                i === index ? { ...state, isInView: true, isLoading: true } : state
              ))
              loadVideo(index)
            } else if (entry.isIntersecting && videoStates[index].isLoaded) {
              // Video yüklenmişse otomatik başlat (sessiz modda)
              const video = videoRefs[index].current
              if (video && video.paused) {
                video.muted = true
                video.play().catch(() => {
                  console.log('Autoplay prevented for video', index)
                })
              }
              setVideoStates(prev => prev.map((state, i) => 
                i === index ? { ...state, isInView: true } : state
              ))
            } else if (!entry.isIntersecting) {
              // Video viewport'tan çıkınca duraklat (performans için)
              const video = videoRefs[index].current
              if (video && !video.paused) {
                video.pause()
              }
              setVideoStates(prev => prev.map((state, i) => 
                i === index ? { ...state, isInView: false } : state
              ))
            }
          }
        })
      },
      {
        threshold: 0.4, // Video %40'ı görününce yükle/oynat
        rootMargin: '100px 0px' // Yukarıdan aşağıdan 100px margin
      }
    )

    containerRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      containerRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  // Video yükleme fonksiyonu
  const loadVideo = useCallback(async (index: number) => {
    const video = videoRefs[index].current
    if (!video || videoStates[index].isLoaded) return

    try {
      setVideoStates(prev => prev.map((state, i) => 
        i === index ? { ...state, isLoading: true, hasError: false } : state
      ))

      // Video kaynağını ayarla
      const videoSrc = videos[index].src
      video.src = videoSrc
      video.preload = 'metadata' // Sadece metadata yükle
      
      // Video metadata yüklenince
      video.addEventListener('loadedmetadata', () => {
        setVideoStates(prev => prev.map((state, i) => 
          i === index ? { ...state, isLoaded: true, isLoading: false } : state
        ))
        
        // Viewport'ta ise otomatik başlat (sessiz modda)
        if (videoStates[index].isInView) {
          setTimeout(() => {
            video.muted = true // Sessiz modda başlat
            video.play().catch(() => {
              // Autoplay engellenmişse sessizce devam et
              console.log('Autoplay prevented for video', index)
            })
          }, 300) // Daha hızlı başlatma
        }
      })

      // Error handling
      video.addEventListener('error', () => {
        setVideoStates(prev => prev.map((state, i) => 
          i === index ? { ...state, hasError: true, isLoading: false } : state
        ))
        console.error('Video loading error for video', index)
      })

      // Video tamamen yüklenince
      video.addEventListener('canplaythrough', () => {
        setVideoStates(prev => prev.map((state, i) => 
          i === index ? { ...state, isLoading: false } : state
        ))
      })

    } catch (error) {
      console.error('Video loading failed:', error)
      setVideoStates(prev => prev.map((state, i) => 
        i === index ? { ...state, hasError: true, isLoading: false } : state
      ))
    }
  }, [videoStates])

  // Video play handling with performance optimization
  const handlePlayPauseOptimized = useCallback((index: number) => {
    const video = videoRefs[index].current
    if (!video || !videoStates[index].isLoaded) {
      // Video henüz yüklenmemişse, yükle ve sonra oynat
      if (!videoStates[index].isLoading) {
        loadVideo(index)
      }
      return
    }

    if (video.paused) {
      video.play().catch(() => {
        console.log('Play failed for video', index)
      })
    } else {
      video.pause()
    }
  }, [videoStates, loadVideo])

  // Video container click handler - toggle controls visibility
  const handleVideoClick = (index: number) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, showControls: !state.showControls } : state
    ))
    
    // 3 saniye sonra controls'ı gizle (eğer video oynatılıyorsa)
    if (!videoStates[index].showControls) {
      setTimeout(() => {
        setVideoStates(prev => prev.map((state, i) => 
          i === index && state.isPlaying ? { ...state, showControls: false } : state
        ))
      }, 3000)
    }
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
              ref={containerRefs[index]}
            >
              {/* Video Container */}
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 rounded-3xl"></div>
                
                {/* Video */}
                <div className="relative z-10 p-6">
                  <div 
                    className="relative rounded-2xl overflow-hidden group/video cursor-pointer"
                    onClick={() => handleVideoClick(index)}
                    onMouseEnter={() => {
                      // Mouse hover ile de otomatik başlat (sadece yüklenmişse)
                      const video = videoRefs[index].current
                      if (video && videoStates[index].isLoaded && video.paused) {
                        video.muted = true
                        video.play().catch(() => {
                          console.log('Hover play prevented for video', index)
                        })
                      }
                    }}
                  >
                    {/* Loading State */}
                    {videoStates[index].isLoading && (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-20">
                        <div className="text-center">
                          <Loader className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
                          <p className="text-gray-600 text-sm">جاري تحميل الفيديو...</p>
                        </div>
                      </div>
                    )}

                    {/* Error State */}
                    {videoStates[index].hasError && (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-20">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">⚠️</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">خطأ في تحميل الفيديو</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              loadVideo(index)
                            }}
                            className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                          >
                            إعادة المحاولة
                          </button>
                        </div>
                      </div>
                    )}

                    <video
                      ref={videoRefs[index]}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster="/hero1.jpg"
                      onPlay={() => handleVideoPlay(index)}
                      onPause={() => handleVideoPause(index)}
                      onEnded={() => handleVideoEnded(index)}
                      onLoadedData={() => {
                        // Video tamamen yüklendiğinde viewport'taysa otomatik başlat
                        if (videoStates[index].isInView) {
                          const video = videoRefs[index].current
                          if (video && video.paused) {
                            video.muted = true
                            video.play().catch(() => {
                              console.log('Auto-play on load failed for video', index)
                            })
                          }
                        }
                      }}
                    >
                      {/* Video source sadece lazy loading ile yüklenecek */}
                      متصفحك لا يدعم تشغيل الفيديو
                    </video>

                    {/* Video Controls Overlay - Only show when clicked */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 transition-all duration-300 ${
                      videoStates[index].showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          {/* Play/Pause Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handlePlayPauseOptimized(index)
                            }}
                            disabled={videoStates[index].isLoading}
                            className="w-16 h-16 bg-white/95 backdrop-blur-lg hover:bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {videoStates[index].isLoading ? (
                              <Loader className="w-8 h-8 text-red-600 animate-spin" />
                            ) : videoStates[index].isPlaying ? (
                              <Pause className="w-8 h-8 text-red-600" />
                            ) : (
                              <Play className="w-8 h-8 text-red-600 mr-1" />
                            )}
                          </button>

                          {/* Restart Button (only show when ended) */}
                          {videoStates[index].isEnded && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleRestart(index)
                              }}
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
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMuteToggle(index)
                          }}
                          className="w-12 h-12 bg-white/95 backdrop-blur-lg hover:bg-white rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 border border-white/30"
                        >
                          {videoStates[index].isMuted ? (
                            <VolumeX className="w-6 h-6 text-gray-600" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-gray-600" />
                          )}
                        </button>
                      </div>

                      {/* Status Badge - Only show when needed */}
                      {(videoStates[index].isLoading || videoStates[index].hasError || videoStates[index].showControls || (!videoStates[index].isLoaded && !videoStates[index].isInView)) && (
                        <div className="absolute top-6 left-6">
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-lg border transition-all duration-300 ${
                            videoStates[index].isLoading
                              ? 'bg-yellow-500/90 text-white border-yellow-400/50'
                              : videoStates[index].hasError
                              ? 'bg-red-500/90 text-white border-red-400/50'
                              : videoStates[index].isPlaying && videoStates[index].showControls
                              ? 'bg-green-500/90 text-white border-green-400/50'
                              : videoStates[index].isEnded && videoStates[index].showControls
                              ? 'bg-blue-500/90 text-white border-blue-400/50'
                              : videoStates[index].isLoaded && videoStates[index].showControls
                              ? 'bg-white/90 text-gray-700 border-white/50'
                              : 'bg-gray-500/90 text-white border-gray-400/50'
                          }`}>
                            {videoStates[index].isLoading
                              ? '⏳ يتم التحميل'
                              : videoStates[index].hasError
                              ? '❌ خطأ'
                              : videoStates[index].isPlaying && videoStates[index].showControls
                              ? '⏸ مشغل تلقائياً'
                              : videoStates[index].isEnded && videoStates[index].showControls
                              ? '🔄 انتهى'
                              : videoStates[index].isLoaded && videoStates[index].showControls
                              ? '▶ اضغط للتحكم'
                              : '📱 اقترب للتحميل'
                            }
                          </div>
                        </div>
                      )}

                      {/* Sound Status - Only show when controls are visible */}
                      {videoStates[index].showControls && (
                        <div className="absolute top-6 right-6">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border transition-all duration-300 ${
                            videoStates[index].isMuted
                              ? 'bg-gray-500/90 text-white border-gray-400/50'
                              : 'bg-green-500/90 text-white border-green-400/50'
                          }`}>
                            {videoStates[index].isMuted ? '🔇 صامت' : '🔊 صوت'}
                          </div>
                        </div>
                      )}
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
                      <div className={`rounded-xl p-3 transition-colors duration-300 ${
                        videoStates[index].isLoaded ? 'bg-green-50' : 'bg-gray-50'
                      }`}>
                        <div className={`text-lg font-bold ${
                          videoStates[index].isLoaded ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {videoStates[index].isLoaded ? 'HD' : '⏳'}
                        </div>
                        <div className={`text-xs ${
                          videoStates[index].isLoaded ? 'text-green-700' : 'text-gray-500'
                        }`}>
                          {videoStates[index].isLoaded ? 'جودة عالية' : 'تحميل...'}
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3">
                        <div className="text-lg font-bold text-blue-600">2024</div>
                        <div className="text-xs text-blue-700">أحدث الأعمال</div>
                      </div>
                      <div className={`rounded-xl p-3 transition-colors duration-300 ${
                        videoStates[index].isInView ? 'bg-orange-50' : 'bg-gray-50'
                      }`}>
                        <div className={`text-lg font-bold ${
                          videoStates[index].isInView ? 'text-orange-600' : 'text-gray-400'
                        }`}>
                          {videoStates[index].isInView ? 'Live' : 'Soon'}
                        </div>
                        <div className={`text-xs ${
                          videoStates[index].isInView ? 'text-orange-700' : 'text-gray-500'
                        }`}>
                          {videoStates[index].isInView ? 'أعمال حقيقية' : 'قريباً'}
                        </div>
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
