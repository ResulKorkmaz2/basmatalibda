'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyInfo from '@/components/CompanyInfo'
import Services from '@/components/Services'
import VideoSection from '@/components/VideoSection'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Hash ile gelindiğinde scroll yap
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CompanyInfo />
      <Services />
      <VideoSection />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
