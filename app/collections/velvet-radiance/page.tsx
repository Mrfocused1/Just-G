'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function VelvetRadiancePage() {
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
                  alt="Velvet Radiance"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper>
                <p className="label-text text-accent mb-4">Body Cream</p>
                <h1 className="heading-lg mb-6">Velvet Radiance</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <p className="body-lg text-primary/80 mb-8">
                  Envelop yourself in the fresh, herbal elegance of Velvet Radiance. With its soothing green notes
                  of lavender and sage, this luxurious cream creates a velvety smooth finish while calming your senses
                  with timeless botanical sophistication.
                </p>
              </AnimationWrapper>

              <AnimationWrapper delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="heading-sm mb-4">Scent Profile</h3>
                    <p className="body-md text-primary/80">
                      Fresh lavender with sage, green tea, and soft musk for a calming, sophisticated aroma
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4">Key Benefits</h3>
                    <ul className="space-y-2 body-md text-primary/80">
                      <li>• Velvet-soft, luxurious texture</li>
                      <li>• Calming lavender and sage blend</li>
                      <li>• Soothes and nourishes skin</li>
                      <li>• Botanical sophistication in every application</li>
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
            <h2 className="heading-lg mb-8">Herbal Elegance Meets Luxury</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80">
              Velvet Radiance transforms your body care routine into a moment of botanical sophistication.
              With its championship-grade formula and calming lavender-sage fragrance, this cream delivers
              visible radiance while soothing both skin and spirit.
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
