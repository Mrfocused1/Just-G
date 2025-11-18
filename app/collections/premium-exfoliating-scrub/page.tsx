'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function PremiumExfoliatingScruPage() {
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
                  alt="Premium Exfoliating Scrub"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper>
                <p className="label-text text-accent mb-4">Body Care</p>
                <h1 className="heading-lg mb-6">Premium Exfoliating Scrub</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <p className="body-lg text-primary/80 mb-8">
                  Infused with the warm, citrus-forward scent of golden citrine and bergamot, our Premium Exfoliating
                  Scrub gently removes dead skin while invigorating your senses. The bright, energizing aroma uplifts
                  your mood as you buff away impurities.
                </p>
              </AnimationWrapper>

              <AnimationWrapper delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="heading-sm mb-4">Scent Profile</h3>
                    <p className="body-md text-primary/80">
                      Bright citrus with hints of lemon, sweet orange, and warm vanilla base
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4">Key Benefits</h3>
                    <ul className="space-y-2 body-md text-primary/80">
                      <li>• Gently exfoliates dead skin cells</li>
                      <li>• Reveals smoother, radiant skin</li>
                      <li>• Energizing citrus fragrance</li>
                      <li>• Championship-grade formula</li>
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
            <h2 className="heading-lg mb-8">Elevate Your Exfoliation Ritual</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80">
              Designed for champions who demand excellence, our Premium Exfoliating Scrub combines
              championship-grade ingredients with an uplifting citrus scent that energizes your daily routine.
              Perfect for post-workout skin recovery and renewal.
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
