'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CustomCursorProps {
  isVisible: boolean
}

export default function CustomCursor({ isVisible }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-[200]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            {/* Main cursor circle */}
            <div className="w-36 h-36 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
              {/* Content */}
              <div className="relative text-center px-5 z-10">
                {/* Icon */}
                <svg
                  className="w-6 h-6 mx-auto mb-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>

                {/* Text */}
                <p className="text-[9px] leading-tight text-white font-medium uppercase tracking-wider">
                  View<br />Collection
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/60 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/60 rounded-bl" />
            </div>

            {/* Outer ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
