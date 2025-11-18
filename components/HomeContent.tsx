'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import HorizontalScrollSection from '@/components/HorizontalScrollSection'
import ImageLoader from '@/components/ImageLoader'

interface Collection {
  title: string
  description: string
  image: string
  slug: string
}

interface HomeContentProps {
  parallaxImage: string
  collections: Collection[]
  campaignVideoUrl: string
  atelierImage: string
}

export default function HomeContent({ parallaxImage, collections, campaignVideoUrl, atelierImage }: HomeContentProps) {
  const parallaxRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  })

  // Reduced parallax effect for better mobile compatibility
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.6])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <>
      {/* Introduction */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimationWrapper>
              <h2 className="heading-lg mb-8">Luxury Body Care for Champions</h2>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <p className="body-lg text-primary/80 mb-12 max-w-4xl mx-auto">
                Just Cream is luxury body care designed to sculpt, nourish, and elevate your skin.
                Championship-grade formulas crafted by London fitness influencer Just Geen. Transform
                your routine into a moment of refined perfection.
              </p>
            </AnimationWrapper>
          </div>

          {/* Product Grid - Carousel on Mobile, Grid on Desktop */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Premium Exfoliating Scrub',
                description: 'Premium body care.',
                image: '/luxury-cream-1.webp',
              },
              {
                title: "Athlete's Recovery Balm",
                description: 'Premium body care.',
                image: '/luxury-cream-2.webp',
              },
              {
                title: 'Radiance Body Cream',
                description: 'Premium body care.',
                image: '/luxury-cream-3.webp',
              },
              {
                title: 'Essence Luxury Lotion',
                description: 'Premium body care.',
                image: '/luxury-cream-4.webp',
              },
              {
                title: 'Premium Exfoliating Scrub',
                description: 'Premium body care.',
                image: '/Generated Image November 17, 2025 - 6_39AM.webp',
              },
            ].map((product, index) => (
              <AnimationWrapper key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="group flex flex-col h-full">
                  <div className="relative aspect-square overflow-hidden mb-4 bg-white">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-bold mb-2 line-clamp-2 text-accent font-serif">{product.title}</h3>
                  <p className="body-sm text-primary/70 mb-4 flex-grow">{product.description}</p>
                  <Link
                    href="/collections"
                    className="inline-block text-accent hover:text-primary text-xs elegant-transition mt-auto"
                  >
                    Shop Now →
                  </Link>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 snap-x snap-mandatory px-6">
            {[
              {
                title: 'Premium Exfoliating Scrub',
                description: 'Premium body care.',
                image: '/luxury-cream-1.webp',
              },
              {
                title: "Athlete's Recovery Balm",
                description: 'Premium body care.',
                image: '/luxury-cream-2.webp',
              },
              {
                title: 'Radiance Body Cream',
                description: 'Premium body care.',
                image: '/luxury-cream-3.webp',
              },
              {
                title: 'Essence Luxury Lotion',
                description: 'Premium body care.',
                image: '/luxury-cream-4.webp',
              },
              {
                title: 'Premium Exfoliating Scrub',
                description: 'Premium body care.',
                image: '/Generated Image November 17, 2025 - 6_39AM.webp',
              },
            ].map((product, index) => (
              <div key={index} className="flex-shrink-0 w-72 snap-center">
                <div className="group flex flex-col h-full">
                  <div className="relative aspect-square overflow-hidden mb-4 bg-white">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-bold mb-2 line-clamp-2 text-accent font-serif">{product.title}</h3>
                  <p className="body-sm text-primary/70 mb-4 flex-grow">{product.description}</p>
                  <Link
                    href="/collections"
                    className="inline-block text-accent hover:text-primary text-xs elegant-transition mt-auto"
                  >
                    Shop Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-accent text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimationWrapper>
            <h2 className="heading-lg mb-8 text-white">Sculpt Your Luxury Routine</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-white/90 mb-12">
              Discover the Just Cream collection designed for those who demand excellence.
              Championship-grade formulas to nourish, firm, and sculpt your skin with refined luxury.
            </p>
          </AnimationWrapper>
          <AnimationWrapper delay={0.4}>
            <Link
              href="/collections"
              className="inline-block px-12 py-6 bg-white text-accent hover:bg-transparent hover:border-2 hover:border-white hover:text-white label-text elegant-transition text-lg font-semibold border-2 border-white"
            >
              Shop The Collection
            </Link>
          </AnimationWrapper>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimationWrapper animation="slideRight">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="/Generated Image November 18, 2025 - 9_44AM (1).webp"
                  alt="Just Geen - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper animation="fadeUp">
                <p className="label-text text-accent mb-4">Just Geen</p>
                <h2 className="heading-lg mb-8">Meet the Founder</h2>
              </AnimationWrapper>
              <AnimationWrapper animation="fadeUp" delay={0.2}>
                <p className="body-md text-primary/80 mb-6">
                  Just Geen is a renowned London-based fitness influencer who built a community passionate about
                  championship-grade performance and refined luxury. After years of helping thousands transform
                  their fitness journeys, Just Geen created Just Cream — luxury body care formulated for athletes
                  and champions.
                </p>
                <p className="body-md text-primary/80 mb-8">
                  Every product is crafted with the same dedication as championship training, using only
                  premium ingredients and advanced formulation techniques. Just Cream transforms your daily
                  routine into a moment of refined perfection, proving that luxury and performance are
                  not mutually exclusive.
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="fadeUp" delay={0.4}>
                <Link
                  href="/bespoke"
                  className="inline-block px-10 py-5 border-2 border-accent text-accent hover:bg-accent hover:text-white label-text elegant-transition"
                >
                  Learn More
                </Link>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship - Duplicate */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimationWrapper>
              <p className="label-text text-accent mb-4">Recovery Care</p>
              <h2 className="heading-lg mb-8">Post-Workout Relief</h2>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <p className="body-lg text-primary/80 max-w-4xl mx-auto">
                Restore your body after every workout.
              </p>
            </AnimationWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
            <AnimationWrapper animation="slideLeft">
              <div className="flex justify-center gap-6">
                <div className="w-80 h-80 relative overflow-hidden">
                  <img
                    src="/luxury-cream-5.webp"
                    alt="Craftsmanship detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-80 h-80 relative overflow-hidden">
                  <img
                    src="/luxury-cream-6.webp"
                    alt="Premium ingredients"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper animation="fadeUp">
                <p className="body-md text-primary/80 mb-6">
                  Our recovery creams are specifically formulated to target muscle tension and support post-workout recovery.
                  Infused with premium botanical extracts and advanced active ingredients, each application soothes tired muscles
                  and promotes deep tissue relief for optimal athletic performance.
                </p>
                <p className="body-md text-primary/80 mb-8">
                  Whether you're an athlete pushing limits or someone seeking everyday muscle care, our luxury formulations
                  deliver fast-absorbing relief that nourishes your skin while providing the muscle recovery support champions demand.
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="fadeUp" delay={0.2}>
                <Link
                  href="/collections"
                  className="inline-block px-10 py-5 border-2 border-accent text-accent hover:bg-accent hover:text-white label-text elegant-transition"
                >
                  Discover Recovery
                </Link>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Image Card */}
            <AnimationWrapper animation="slideRight">
              <div className="group relative aspect-square overflow-hidden cursor-pointer">
                <img
                  src="/post-workout-1.webp"
                  alt="Just Cream product"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="/collections"
                    className="px-8 py-3 bg-white text-accent hover:bg-accent hover:text-white label-text elegant-transition font-semibold"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </AnimationWrapper>

            {/* Right Image Card */}
            <AnimationWrapper animation="slideLeft">
              <div className="group relative aspect-square overflow-hidden cursor-pointer">
                <img
                  src="/post-workout-2.webp"
                  alt="Recovery cream application"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="/collections"
                    className="px-8 py-3 bg-white text-accent hover:bg-accent hover:text-white label-text elegant-transition font-semibold"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
