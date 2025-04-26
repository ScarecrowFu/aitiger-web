"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { label: '首页', href: '/' },
  { label: 'AI风向智创', href: '/business' },
  { label: 'AI编程', href: '/code' },
  { label: '科虎AI工具箱', href: '/tools' },
  { label: '科虎AI应用', href: '/apps' },
  // { label: '资料分享', href: '/resources' },
  { label: '关于科虎AI', href: '/about' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors ml-auto"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="科虎AI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span>科虎AI</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-6 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <div className="flex flex-col items-end space-y-1.5">
              <span 
                className={`block bg-current transition-all duration-300 ${
                  isOpen ? 'w-6 h-0.5 rotate-45 translate-y-2' : 'w-6 h-0.5'
                }`} 
              />
              <span 
                className={`block bg-current transition-all duration-300 ${
                  isOpen ? 'w-6 h-0.5 opacity-0' : 'w-4 h-0.5'
                }`} 
              />
              <span 
                className={`block bg-current transition-all duration-300 ${
                  isOpen ? 'w-6 h-0.5 -rotate-45 -translate-y-2' : 'w-6 h-0.5'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-base text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 