'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  src: string
  alt?: string
  aspectRatio?: 'portrait' | 'landscape' | 'square'
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {items.map((item, index) => (
        <GalleryItemComponent key={index} item={item} index={index} />
      ))}
    </div>
  )
}

function GalleryItemComponent({ item, index }: { item: GalleryItem; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (inView && videoRef.current && item.type === 'video') {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [inView, item.type])

  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
  }

  if (!item.src) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="break-inside-avoid mb-8"
    >
      <div className={`relative ${aspectClasses[item.aspectRatio || 'portrait']} overflow-hidden bg-secondary group`}>
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt || 'Gallery image'}
            className="w-full h-full object-cover hover-scale min-w-full min-h-full"
          />
        ) : (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
            crossOrigin="anonymous"
          >
            <source src={item.src} type="video/mp4" />
          </video>
        )}
      </div>
    </motion.div>
  )
}
