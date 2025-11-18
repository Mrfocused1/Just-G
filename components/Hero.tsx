'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface HeroProps {
  videoSrc?: string
  imageSrc?: string
  title: string
  subtitle?: string
  label?: string
  height?: string
  totalSlides?: number
  currentSlide?: number
}

export default function Hero({
  videoSrc,
  imageSrc,
  title,
  subtitle,
  label,
  height = 'h-screen',
  totalSlides = 1,
  currentSlide = 0
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <section className={`relative ${height} flex items-end overflow-hidden`}>
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
            crossOrigin="anonymous"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary" />
        )}

        {/* Mobile Dim Overlay */}
        <div className="absolute inset-0 bg-black/30 md:bg-transparent z-5" />
      </div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-20 max-w-3xl w-full">
        {label && (
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xs uppercase tracking-widest text-white/80 mb-4 flex items-center gap-3"
          >
            <span className="w-12 h-px bg-white/60" />
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-sans font-light tracking-tight leading-none text-white mb-6 uppercase"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="body-md text-white/90 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Swipe Indicators - Right Side */}
      {totalSlides > 1 && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white h-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </motion.div>
      )}
    </section>
  )
}
