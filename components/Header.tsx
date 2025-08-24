'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Eğer ana sayfada değilsek, önce ana sayfaya git
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      setIsMenuOpen(false)
      return
    }
    
    // Ana sayfadaysak normal scroll yap
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo and Brand */}
          <button 
            onClick={() => router.push('/')}
            className="flex items-center space-x-3 space-x-reverse group cursor-pointer"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="بصمة لابداع"
                width={44}
                height={44}
                className="rounded-full ring-2 ring-primary-100 group-hover:ring-primary-200 transition-all duration-300"
              />
              <div className="absolute -inset-1 bg-primary-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                بصمة لابداع
              </h2>
              <p className="text-xs text-gray-500 font-medium">اشراف ابو باسل</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="relative px-4 py-2 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 group"
              >
                <span className="relative z-10">الرئيسية</span>
                <div className="absolute inset-0 bg-primary-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="relative px-4 py-2 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 group"
              >
                <span className="relative z-10">خدماتنا</span>
                <div className="absolute inset-0 bg-primary-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="relative px-4 py-2 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 group"
              >
                <span className="relative z-10">من نحن</span>
                <div className="absolute inset-0 bg-primary-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('why-us')}
                className="relative px-4 py-2 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 group"
              >
                <span className="relative z-10">لماذا نحن</span>
                <div className="absolute inset-0 bg-primary-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-4 py-2 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 group"
              >
                <span className="relative z-10">تواصل معنا</span>
                <div className="absolute inset-0 bg-primary-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:0573677385"
              className="group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 space-x-reverse"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>0573677385</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-primary-600 transition-all duration-300 group"
          >
            <div className="w-6 h-6 relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 px-2 bg-white/80 backdrop-blur-sm rounded-b-2xl border-t border-gray-100">
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="group w-full text-right px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300 flex items-center justify-between"
                >
                  <span>الرئيسية</span>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="group w-full text-right px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300 flex items-center justify-between"
                >
                  <span>خدماتنا</span>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="group w-full text-right px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300 flex items-center justify-between"
                >
                  <span>من نحن</span>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="group w-full text-right px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300 flex items-center justify-between"
                >
                  <span>لماذا نحن</span>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group w-full text-right px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300 flex items-center justify-between"
                >
                  <span>تواصل معنا</span>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
            </ul>
            
            <div className="px-2 pt-4 mt-4 border-t border-gray-100">
              <a
                href="tel:0573677385"
                className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse w-full"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>0573677385</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
