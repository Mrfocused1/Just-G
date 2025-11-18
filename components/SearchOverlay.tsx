'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import ImageLoader from './ImageLoader'

interface SearchResult {
  name: string
  collection: string
  image: string
  slug: string
}

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  // Just Cream Product Collection
  const allDresses: SearchResult[] = [
    { name: 'Premium Exfoliating Scrub', collection: 'Body Care', image: '/luxury-cream-1.webp', slug: 'premium-exfoliating-scrub' },
    { name: "Athlete's Recovery Balm", collection: 'Premium Body Care', image: '/luxury-cream-2.webp', slug: 'athletes-recovery-balm' },
    { name: 'Radiance Body Cream', collection: 'Premium Body Care', image: '/luxury-cream-3.webp', slug: 'radiance-body-cream' },
    { name: 'Essence Luxury Lotion', collection: 'Body Care', image: '/luxury-cream-1.webp', slug: 'essence-luxury-lotion' },
    { name: 'Velvet Radiance', collection: 'Body Cream', image: '/luxury-cream-2.webp', slug: 'velvet-radiance' },
    { name: 'Sculptured Glow', collection: 'Premium Body Cream', image: '/luxury-cream-4.webp', slug: 'sculptured-glow' },
  ]

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = allDresses.filter(dress =>
      dress.name.toLowerCase().includes(query) ||
      dress.collection.toLowerCase().includes(query)
    )
    setSearchResults(filtered)
  }, [searchQuery])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setSearchQuery('')
      setSearchResults([])
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-md"
        >
          <div className="h-full overflow-y-auto">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
              {/* Header */}
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-3xl font-serif tracking-wider text-primary/40">JUST CREAM</h2>
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-primary/60 hover:text-accent elegant-transition label-text"
                >
                  Close
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search Input */}
              <div className="mb-12">
                <label className="label-text text-primary/60 mb-4 block">SEARCH (TYPE ENG ONLY)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder=""
                    autoFocus
                    className="w-full text-5xl md:text-6xl font-light text-primary bg-transparent border-none outline-none placeholder:text-primary/20"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20" />
                </div>
                {searchResults.length > 0 && (
                  <div className="flex items-center justify-end gap-3 mt-4">
                    <span className="label-text text-primary/60">{searchResults.length} Results</span>
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setSearchResults([])
                      }}
                      className="text-primary/40 hover:text-accent elegant-transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Search Results */}
              <div className="space-y-0">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={result.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/collection/${result.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-6 py-8 border-b border-primary/10 hover:bg-secondary/50 elegant-transition px-6 group"
                    >
                      {/* Thumbnail */}
                      <div className="flex-shrink-0 w-20 h-28 overflow-hidden">
                        {result.image ? (
                          <ImageLoader
                            src={result.image}
                            alt={result.name}
                            className="group-hover:scale-105 elegant-transition"
                            aspectRatio="portrait"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-primary mb-1 group-hover:text-accent elegant-transition">
                          {result.name}
                        </h3>
                        <p className="label-text text-primary/60">{result.collection}</p>
                      </div>

                      {/* Plus Icon */}
                      <div className="flex-shrink-0 text-primary/30 group-hover:text-accent elegant-transition">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Empty State */}
              {searchQuery && searchResults.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="body-lg text-primary/40">No results found for &quot;{searchQuery}&quot;</p>
                  <p className="body-md text-primary/30 mt-2">Try searching with different keywords</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
