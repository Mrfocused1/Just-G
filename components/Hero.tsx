'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface HeroProps {
  videoSrc?: string
  imageSrc?: string
  mobileImageSrc?: string
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
  mobileImageSrc,
  title,
  subtitle,
  label,
  height = 'h-screen',
  totalSlides = 1,
  currentSlide = 0
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Use mobile image on mobile, desktop image on desktop
  const displayImage = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc

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
        ) : displayImage ? (
          <img
            src={displayImage}
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
            className="label-text text-white/80 mb-4 flex items-center gap-3"
          >
            <span className="w-12 h-px bg-white/60" />
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="heading-md md:heading-lg text-white mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="body-lg text-white/90"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Slide Indicators */}
        {totalSlides && totalSlides > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mt-12"
          >
            <span className="text-white/60 text-sm">
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
