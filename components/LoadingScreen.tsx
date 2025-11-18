'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  isLoading: boolean
  progress: number
}

export default function LoadingScreen({ isLoading, progress }: LoadingScreenProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    // Smooth progress animation
    const timer = setInterval(() => {
      setDisplayProgress(prev => {
        if (prev < progress) {
          return Math.min(prev + 1, progress)
        }
        return prev
      })
    }, 20)

    return () => clearInterval(timer)
  }, [progress])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <div className="text-center px-6">
            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <img
                src="/logo.svg"
                alt="Just Cream Logo"
                className="h-24 md:h-32 mx-auto"
              />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-md mx-auto"
            >
              {/* Percentage */}
              <div className="mb-6">
                <span className="text-2xl font-light text-primary/60 tracking-wider">
                  {displayProgress}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-[2px] w-full bg-primary/10 overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: '0%' }}
                  animate={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                  animate={{
                    x: [-128, 500],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <p className="label-text text-primary/40">
                  Loading your experience
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
