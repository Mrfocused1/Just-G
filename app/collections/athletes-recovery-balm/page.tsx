'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function AthletesRecoveryBalmPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimationWrapper animation="slideRight">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src="/luxury-cream-2.webp"
                  alt="Athlete's Recovery Balm"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper>
                <p className="label-text text-accent mb-4">Premium Body Care</p>
                <h1 className="heading-lg mb-6">Athlete&apos;s Recovery Balm</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <p className="body-lg text-primary/80 mb-8">
                  Wrapped in the cool, refreshing scent of eucalyptus and peppermint, our Athlete&apos;s Recovery Balm
                  targets muscle tension and post-workout soreness. The invigorating green fragrance cools and soothes,
                  providing the relief champions deserve.
                </p>
              </AnimationWrapper>

              <AnimationWrapper delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="heading-sm mb-4">Scent Profile</h3>
                    <p className="body-md text-primary/80">
                      Cool menthol with eucalyptus, peppermint, and a hint of camphor for that authentic recovery feel
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4">Key Benefits</h3>
                    <ul className="space-y-2 body-md text-primary/80">
                      <li>• Targets muscle tension and soreness</li>
                      <li>• Cooling sensation for post-workout relief</li>
                      <li>• Menthol and eucalyptus blend</li>
                      <li>• Fast-absorbing recovery formula</li>
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
            <h2 className="heading-lg mb-8">Your Post-Workout Essential</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80">
              Every athlete knows the importance of proper recovery. Our Athlete's Recovery Balm combines
              championship-grade muscle-relief ingredients with a refreshing menthol-eucalyptus scent that
              invigorates and soothes tired muscles.
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
