'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import { useEffect, useRef } from 'react'

interface AboutContentProps {
  designerImage: string
  philosophyImage: string
  atelierVideoUrl: string
}

export default function AboutContent({ designerImage, philosophyImage, atelierVideoUrl }: AboutContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <>
      {/* Story Section */}
      <section className="mb-24 lg:mb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <AnimationWrapper animation="slideRight">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                {designerImage && (
                  <img
                    src={designerImage}
                    alt="Erenti Designer"
                    className="w-full h-full object-cover min-w-full min-h-full"
                  />
                )}
              </div>
            </AnimationWrapper>

            {/* Content */}
            <div>
              <AnimationWrapper animation="fadeUp">
                <p className="label-text text-accent mb-4">Our Story</p>
                <h2 className="heading-lg mb-8">Luxury Crafted for Athletes</h2>
              </AnimationWrapper>

              <AnimationWrapper animation="fadeUp" delay={0.2}>
                <div className="space-y-6 body-md text-primary/80">
                  <p>
                    Just Cream was born from London fitness influencer Just Geen&apos;s vision to create
                    luxury body care that understands the demands of sculpted perfection. Every formula
                    is designed with championship-grade ingredients, celebrating those who demand
                    excellence both in and out of the gym.
                  </p>
                  <p>
                    Each product is meticulously crafted with the finest botanical extracts, nourishing
                    oils, and cutting-edge skincare technology. From post-workout recovery to daily
                    indulgence, our collections are formulated exclusively to elevate your skin&apos;s
                    firmness, glow, and vitality.
                  </p>
                  <p>
                    We believe luxury skincare should be accessible to everyone pursuing their best self.
                    Our commitment to premium ingredients, sustainable practices, and transformative results
                    means every application is a moment of refined self-care that truly makes a difference.
                  </p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section className="mb-24 lg:mb-32 bg-secondary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <AnimationWrapper animation="fadeUp">
                <p className="label-text text-accent mb-4">Our Philosophy</p>
                <h2 className="heading-lg mb-8">Sculpted Perfection, Refined Luxury</h2>
              </AnimationWrapper>

              <AnimationWrapper animation="fadeUp" delay={0.2}>
                <div className="space-y-6 body-md text-primary/80">
                  <p>
                    At Just Cream, we believe that luxury body care should be as powerful as your
                    dedication to fitness. Our philosophy merges high-performance skincare with
                    indulgent self-care, creating formulas that deliver visible results while
                    elevating your daily ritual.
                  </p>
                  <p>
                    Each product is formulated with championship-grade ingredients sourced from the
                    world&apos;s finest suppliers. We combine cutting-edge skincare science with timeless
                    botanical wisdom, ensuring every application nourishes, firms, and sculpts your
                    skin. Just Cream isn&apos;t just body care&mdash;it&apos;s a commitment to excellence in
                    everything you do.
                  </p>
                </div>
              </AnimationWrapper>
            </div>

            {/* Image */}
            <AnimationWrapper animation="slideLeft">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                {philosophyImage && (
                  <img
                    src={philosophyImage}
                    alt="Erenti craftsmanship detail"
                    className="w-full h-full object-cover min-w-full min-h-full"
                  />
                )}
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimationWrapper>
              <h2 className="heading-lg mb-6">Our Values</h2>
            </AnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: 'Performance',
                description:
                  'Championship-grade formulas designed to deliver visible results. Every product is rigorously tested to sculpt, firm, and elevate your skin.',
              },
              {
                title: 'Purity',
                description:
                  'Sourced from the world\'s finest suppliers, our ingredients are clean, effective, and ethically selected for your skin\'s health.',
              },
              {
                title: 'Excellence',
                description:
                  'Crafted for champions. Every detail reflects our commitment to luxury, transforming daily rituals into moments of refined perfection.',
              },
            ].map((value, index) => (
              <AnimationWrapper key={value.title} delay={index * 0.15}>
                <div className="text-center">
                  <h3 className="heading-sm mb-4">{value.title}</h3>
                  <p className="body-md text-primary/70">{value.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimationWrapper>
            <h2 className="heading-lg mb-8">Discover Your Just Cream Collection</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80 mb-12">
              Explore luxury body care formulated for those who demand excellence.
              Find the perfect cream to sculpt, nourish, and elevate your skin.
            </p>
          </AnimationWrapper>
          <AnimationWrapper delay={0.4}>
            <a
              href="/collections"
              className="inline-block px-12 py-6 bg-accent text-white hover:bg-primary hover:text-white label-text elegant-transition text-lg"
            >
              Shop Just Cream
            </a>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}
