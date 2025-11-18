'use client'

import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function RadianceBodyCreamPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimationWrapper animation="slideRight">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src="/luxury-cream-3.webp"
                  alt="Radiance Body Cream"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper>
                <p className="label-text text-accent mb-4">Premium Body Care</p>
                <h1 className="heading-lg mb-6">Radiance Body Cream</h1>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <p className="body-lg text-primary/80 mb-8">
                  Indulge in the luxurious scent of deep berries and rose, our Radiance Body Cream elevates your
                  skin with a rich, velvety formula. The sophisticated berry-floral fragrance evokes elegance and
                  refinement, perfect for those who demand luxury in every ritual.
                </p>
              </AnimationWrapper>

              <AnimationWrapper delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="heading-sm mb-4">Scent Profile</h3>
                    <p className="body-md text-primary/80">
                      Deep berry with rose, plum, and warm amber for a sophisticated, luxurious experience
                    </p>
                  </div>

                  <div>
                    <h3 className="heading-sm mb-4">Key Benefits</h3>
                    <ul className="space-y-2 body-md text-primary/80">
                      <li>• Rich, velvety formula</li>
                      <li>• Nourishes and hydrates deeply</li>
                      <li>• Sophisticated berry-rose fragrance</li>
                      <li>• Elevates your daily luxury ritual</li>
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
            <h2 className="heading-lg mb-8">Sculpted Beauty Meets Luxury</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80">
              Our Radiance Body Cream transforms your skin care routine into a moment of refined elegance.
              With a championship-grade formula infused with berry and rose notes, every application delivers
              visible radiance and the luxury you deserve.
            </p>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  )
}
