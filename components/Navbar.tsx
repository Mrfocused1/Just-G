'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import SearchOverlay from './SearchOverlay'
import { useCart } from '@/contexts/CartContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const { itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Set initial mobile state
    setIsMobile(window.innerWidth < 1024)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isLanguageOpen && !target.closest('.language-dropdown')) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isLanguageOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Shop' },
    { href: '/bespoke', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'ES', name: 'Español' },
    { code: 'IT', name: 'Italiano' },
    { code: 'DE', name: 'Deutsch' },
  ]

  // Check if we're on Shop, About, Contact, or Product pages
  const isSpecialPage = pathname === '/collections' || pathname === '/bespoke' || pathname === '/contact' || pathname.startsWith('/collections/')

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 elegant-transition ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              className={`text-3xl md:text-4xl font-serif tracking-wider elegant-transition hover:text-accent ${
                isSpecialPage && isMobile ? 'text-primary' : isScrolled ? 'text-primary' : 'text-white'
              }`}
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              <img src="/logo.svg" alt="Just Cream" className={`h-14 md:h-16 w-auto elegant-transition`} style={{
                filter: (isSpecialPage && isMobile) || isScrolled ? 'brightness(0.8) saturate(1)' : 'brightness(2.5) saturate(0)'
              }} />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`label-text elegant-transition relative group ${
                  pathname === link.href ? 'text-accent' : isSpecialPage ? 'text-primary hover:text-accent' : isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-px bg-accent elegant-transition origin-left ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}

            {/* Language Selector & Search - Grouped */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative language-dropdown">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`label-text elegant-transition relative group flex items-center gap-1 ${isSpecialPage ? 'text-primary hover:text-accent' : isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'}`}
                >
                  {selectedLanguage}
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full right-0 mt-4 bg-white/70 backdrop-blur-2xl shadow-2xl border border-white/60 rounded-lg overflow-hidden min-w-[150px] z-50"
                      style={{
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 pointer-events-none" />
                      {languages.map((language, index) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            setSelectedLanguage(language.code)
                            setIsLanguageOpen(false)
                          }}
                          className={`relative w-full text-left px-5 py-3.5 text-sm elegant-transition ${
                            selectedLanguage === language.code
                              ? 'bg-accent/30 text-accent font-medium'
                              : 'text-primary/90 hover:bg-white/50 hover:text-primary'
                          } ${index !== languages.length - 1 ? 'border-b border-white/30' : ''}`}
                        >
                          {language.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 hover:text-accent elegant-transition ${isSpecialPage ? 'text-primary' : isScrolled ? 'text-primary' : 'text-white'}`}
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Cart Icon */}
              <Link
                href="/cart"
                className={`relative p-2 hover:text-accent elegant-transition ${isSpecialPage ? 'text-primary' : isScrolled ? 'text-primary' : 'text-white'}`}
                aria-label="Shopping cart"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 elegant-transition ${
              isSpecialPage && isMobile ? 'text-primary' : isScrolled ? 'text-primary' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current elegant-transition ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current elegant-transition ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current elegant-transition ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-secondary overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block label-text text-xl ${
                      pathname === link.href ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </motion.nav>
  )
}
