'use client'

import { Medal, Compass, Clock, DollarSign, Users, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyUs = () => {
  const features = [
    {
      icon: Medal,
      title: 'جودة عالية وخامات متينة',
      description: 'نستخدم أفضل المواد والخامات المستوردة من أعرق الشركات العالمية',
    },
    {
      icon: Compass,
      title: 'تصميم وتنفيذ حسب طلب العميل',
      description: 'نلبي جميع متطلبات العملاء وتطلعاتهم مع تقديم استشارات مهنية',
    },
    {
      icon: Clock,
      title: 'تنفيذ سريع وفق أعلى المعايير',
      description: 'التزام تام بالمواعيد المحددة دون تأخير مع جودة لا تقبل المساومة',
    },
    {
      icon: DollarSign,
      title: 'أسعار تنافسية تناسب الجميع',
      description: 'أفضل الأسعار في السوق مع جودة عالية وخدمة متميزة',
    },
    {
      icon: Users,
      title: 'خدمة احترافية من فريق متمكن',
      description: 'فريق عمل ذو خبرة وكفاءة عالية مع التدريب المستمر',
    },
    {
      icon: Shield,
      title: 'ضمان على جميع الأعمال',
      description: 'نضمن جودة العمل وصيانة مجانية لفترة محددة',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن نضع جودة العمل والرضا التام للعميل في المقدمة دائماً
          </p>
          <div className="w-24 h-1 gradient-bg mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 card-hover"
            >
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="feature-icon group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 gold-gradient rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              مؤشرات الثقة والجودة
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">100%</div>
                <div className="text-sm text-blue-100">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">+500</div>
                <div className="text-sm text-blue-100">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">5★</div>
                <div className="text-sm text-blue-100">تقييم العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">0</div>
                <div className="text-sm text-blue-100">شكاوى</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ماذا يقول عملاؤنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'أحمد المحمد',
                location: 'الرياض',
                review: 'خدمة ممتازة وجودة عالية، أنصح بهم بشدة'
              },
              {
                name: 'فاطمة العبدالله',
                location: 'الرياض',
                review: 'تم العمل في الوقت المحدد وبأعلى جودة'
              },
              {
                name: 'محمد العتيبي',
                location: 'الرياض',
                review: 'فريق محترف ونتائج تفوق التوقعات'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">"{testimonial.review}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
