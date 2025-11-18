'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageLoaderProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto'
  priority?: boolean
}

export default function ImageLoader({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  priority = false
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    auto: '',
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {/* Luxury Skeleton Loader */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 bg-secondary"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 luxury-shimmer">
              <div className="shimmer-gradient" />
            </div>

            {/* Elegant Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="luxury-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="currentColor" className="text-accent" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#luxury-pattern)" />
              </svg>
            </div>

            {/* Center Logo/Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="text-accent/30"
              >
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Loading Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Image */}
      {src && !hasError && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`w-full h-full object-cover ${className}`}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
          <div className="text-center text-primary/40">
            <svg className="w-12 h-12 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs uppercase tracking-wider">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  )
}
