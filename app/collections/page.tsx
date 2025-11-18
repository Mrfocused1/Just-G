import AnimationWrapper from '@/components/AnimationWrapper'
import Link from 'next/link'

export default function CollectionsPage() {
  // Just Cream Collection - 5 Products
  const justCreamProducts = [
    {
      slug: 'premium-exfoliating-scrub',
      title: 'Premium Exfoliating Scrub',
      type: 'Body Care',
      image: '/luxury-cream-1.webp',
    },
    {
      slug: 'athletes-recovery-balm',
      title: "Athlete's Recovery Balm",
      type: 'Premium Body Care',
      image: '/luxury-cream-2.webp',
    },
    {
      slug: 'radiance-body-cream',
      title: 'Radiance Body Cream',
      type: 'Premium Body Care',
      image: '/luxury-cream-3.webp',
    },
    {
      slug: 'essence-luxury-lotion',
      title: 'Essence Luxury Lotion',
      type: 'Body Care',
      image: '/luxury-cream-4.webp',
    },
    {
      slug: 'sculptured-glow',
      title: 'Sculptured Glow',
      type: 'Premium Body Cream',
      image: '/Generated Image November 17, 2025 - 6_39AM.webp',
    },
  ]

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimationWrapper>
            <h1 className="heading-xl mb-8">Just Cream Collection</h1>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80 max-w-3xl mx-auto">
              Discover our championship-grade luxury body care collection. Each product is meticulously
              formulated with premium ingredients to sculpt, nourish, and elevate your skin.
            </p>
          </AnimationWrapper>
        </div>

        {/* Just Cream Collection */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {justCreamProducts.map((product, index) => (
              <AnimationWrapper key={product.slug} delay={index * 0.1}>
                <Link href={`/collections/${product.slug}`} className="group block cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-white mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-w-full min-h-full"
                    />
                  </div>
                  <div>
                    <p className="label-text text-accent text-xs mb-2">{product.type}</p>
                    <h3 className="heading-sm text-xl mb-2 group-hover:text-accent elegant-transition">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              </AnimationWrapper>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <AnimationWrapper>
            <h2 className="heading-lg mb-6">Luxury Body Care for Champions</h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80 mb-8 max-w-2xl mx-auto">
              Just Cream is luxury body care designed to sculpt, nourish, and elevate your skin. Championship-grade formulas crafted by London fitness influencer Just Geen.
            </p>
          </AnimationWrapper>
        </section>
      </div>
    </main>
  )
}
