'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function SculpturedGlowPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimationWrapper animation="slideRight">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src="/luxury-cream-4.webp"
                  alt="Sculptured Glow"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper>
                <p className="label-text text-accent mb-4">Premium Body Cream</p>
                <h1 className="heading-lg mb-6">Sculptured Glow</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <p className="body-lg text-primary/80 mb-8">
                  Command the room with Sculptured Glow, infused with deep ocean notes of sea salt, driftwood, and
                  indigo flowers. This championship-grade cream sculpts and firms while enveloping you in the cool,
                  sophisticated scent of the sea.
                </p>
              </AnimationWrapper>

              <AnimationWrapper delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="heading-sm mb-4">Scent Profile</h3>
                    <p className="body-md text-primary/80">
                      Cool oceanic with sea salt, driftwood, indigo flowers, and mineral musk
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4">Key Benefits</h3>
                    <ul className="space-y-2 body-md text-primary/80">
                      <li>• Sculpts and firms appearance</li>
                      <li>• Cool, oceanic fragrance</li>
                      <li>• Championship-grade formula</li>
                      <li>• Creates visible definition and glow</li>
                    </ul>
                  </div>

                </div>
              </AnimationWrapper>

              <AnimationWrapper delay={0.4}>
                <button
                  disabled
                  className="inline-block px-10 py-5 bg-accent/50 text-white cursor-not-allowed label-text font-semibold"
                >
                  Coming Soon
                </button>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-secondary py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <AnimationWrapper>
            <h2 className="heading-lg mb-8">Sculpt Your Luxury</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80">
              Sculptured Glow is the ultimate luxury cream for champions who demand visible results. With its
              sophisticated oceanic fragrance and championship-grade formula, this cream sculpts, firms, and
              delivers the glow that commands attention.
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
