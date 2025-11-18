'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CustomCursor from './CustomCursor'
import ImageLoader from './ImageLoader'

interface Collection {
  title: string
  description: string
  image: string
  slug: string
  type?: string
}

interface HorizontalScrollSectionProps {
  collections: Collection[]
}

export default function HorizontalScrollSection({ collections }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showCustomCursor, setShowCustomCursor] = useState(false)
  const [calculatedHeight, setCalculatedHeight] = useState(280)

  // Calculate proper section height based on scroll dimensions
  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const calculateHeight = () => {
      const scrollWidth = scrollElement.scrollWidth
      const clientWidth = scrollElement.clientWidth
      const scrollableDistance = scrollWidth - clientWidth

      // Match section height to scrollable distance for 1:1 free scrolling feel
      // Factor ensures carousel completes within section height
      const optimalHeight = (scrollableDistance / clientWidth) * 100 * 1.5

      setCalculatedHeight(optimalHeight)
    }

    // Wait a moment for layout to settle
    setTimeout(calculateHeight, 100)

    // Recalculate on window resize
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const scrollElement = scrollRef.current
    if (!container || !scrollElement) return

    const handleScroll = () => {
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const scrollY = window.scrollY

      // The horizontal scroll range we need to cover
      const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth

      // Section enters when you reach it, exits when you scroll past it completely
      const sectionEntersView = containerTop
      const sectionLeavesView = containerTop + containerHeight

      // Calculate progress based on position within the section
      // 0 = at section start, 1 = at section end
      let progress = (scrollY - sectionEntersView) / containerHeight

      // Clamp to 0-1
      progress = Math.max(0, Math.min(1, progress))

      // Smoothly map progress to horizontal scroll position
      // This ensures carousel reaches its end no matter scroll speed
      const targetScrollLeft = progress * scrollWidth

      // Apply the scroll position
      scrollElement.scrollLeft = targetScrollLeft
      setScrollProgress(progress)
    }

    const scrollListener = () => handleScroll()
    window.addEventListener('scroll', scrollListener, { passive: true })

    // Initial call
    handleScroll()

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  // Use calculated height that automatically adjusts based on actual scroll dimensions
  const sectionHeight = `${calculatedHeight}vh`

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="relative" style={{ height: sectionHeight }}>
        <CustomCursor isVisible={showCustomCursor} />

        <div className="sticky top-[85px] h-[calc(100vh-85px)] overflow-hidden bg-secondary">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex h-full items-start overflow-x-hidden"
            style={{ scrollBehavior: 'smooth', paddingTop: '2rem' }}
          >
            {/* Collection Images */}
            {collections.map((collection, index) => (
              <Link
                key={collection.slug}
                href="/collections"
                className="group flex-shrink-0 w-[90%] sm:w-[85%] md:w-[70vw] lg:w-[55vw] h-[calc(100%-14px)] mx-auto md:mx-3"
                onMouseEnter={() => setShowCustomCursor(true)}
                onMouseLeave={() => setShowCustomCursor(false)}
              >
                <div className="relative w-full h-full overflow-hidden bg-white shadow-2xl cursor-none">
                  {/* Image with Luxury Loading */}
                  {collection.image && (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <ImageLoader
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-contain"
                        aspectRatio="auto"
                      />
                    </div>
                  )}

                  {/* Overlay with Text at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="label-text mb-3 block opacity-70">{collection.type} Collection</span>
                    <h3 className="heading-md mb-3 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      {collection.title}
                    </h3>
                    <p className="body-md opacity-90 max-w-md">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-[33px] left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-2">
              {collections.map((_, index) => (
                <div
                  key={index}
                  className="h-1 bg-white/30 transition-all duration-300"
                  style={{
                    width: scrollProgress >= index / collections.length && scrollProgress < (index + 1) / collections.length
                      ? '48px'
                      : '12px',
                    backgroundColor: scrollProgress > (index + 1) / collections.length
                      ? 'rgba(45, 80, 22, 1)'
                      : scrollProgress >= index / collections.length
                      ? 'rgba(255, 255, 255, 0.8)'
                      : 'rgba(255, 255, 255, 0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
