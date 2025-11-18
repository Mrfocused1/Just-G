'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Gown {
  id: string
  name: string
  description: string
  image: string
}

interface CollectionSliderProps {
  gowns: Gown[]
}

export default function CollectionSlider({ gowns }: CollectionSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = gowns.length - 1
      if (nextIndex >= gowns.length) nextIndex = 0
      return nextIndex
    })
  }

  if (!gowns || gowns.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="body-lg text-primary/60">Loading collection...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      {/* Main Slider */}
      <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-secondary">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0"
          >
            <img
              src={gowns[currentIndex].image}
              alt={gowns[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center elegant-transition backdrop-blur-sm"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center elegant-transition backdrop-blur-sm"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {gowns.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full elegant-transition ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Gown Info */}
      <div className="mt-8 lg:mt-12 text-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="heading-sm mb-4">{gowns[currentIndex].name}</h3>
            <p className="body-md text-primary/70 mb-8">{gowns[currentIndex].description}</p>
            <Link
              href="/book"
              className="inline-block px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white label-text elegant-transition"
            >
              Book a Fitting
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
