'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function EssenceLuxuryLotionPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimationWrapper animation="slideRight">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src="/luxury-cream-1.webp"
                  alt="Essence Luxury Lotion"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper>
                <p className="label-text text-accent mb-4">Body Care</p>
                <h1 className="heading-lg mb-6">Essence Luxury Lotion</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <p className="body-lg text-primary/80 mb-8">
                  Experience the essence of golden luxury with our lightweight Essence Luxury Lotion. Infused with
                  warm citrus and honeyed vanilla notes, this silky formula absorbs instantly while enveloping your
                  senses in warmth and comfort.
                </p>
              </AnimationWrapper>

              <AnimationWrapper delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="heading-sm mb-4">Scent Profile</h3>
                    <p className="body-md text-primary/80">
                      Warm citrus with honey, vanilla, and subtle amber for a comforting, golden luxury feel
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4">Key Benefits</h3>
                    <ul className="space-y-2 body-md text-primary/80">
                      <li>• Lightweight, fast-absorbing formula</li>
                      <li>• Deep hydration without heaviness</li>
                      <li>• Warm, comforting honey-vanilla scent</li>
                      <li>• Perfect for daily luxury care</li>
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
            <h2 className="heading-lg mb-8">Lightweight Luxury Daily Ritual</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80">
              Our Essence Luxury Lotion proves that luxury doesn't have to be heavy. With its championship-grade
              formula and warm honey-vanilla fragrance, this lotion is your daily companion for soft, hydrated skin
              wrapped in comfort.
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
