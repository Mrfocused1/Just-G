import AnimationWrapper from '@/components/AnimationWrapper'
import AboutContent from '@/components/AboutContent'

export default function AboutPage() {
  const brandImage = 'https://www.erenti.co.uk/cdn/shop/products/085A9824.jpg?v=1634560462&width=1080'
  const craftsmanshipImage = 'https://www.erenti.co.uk/cdn/shop/files/Mtemi_2.png?v=1743681088&width=1080'

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="mb-24 lg:mb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimationWrapper>
              <h1 className="heading-xl mb-8">About Just Cream</h1>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <p className="body-lg text-primary/80 max-w-3xl mx-auto">
                Luxury body care designed by fitness influencer Just Geen. Every product is crafted
                to sculpt, nourish, and elevate your skin with championship-grade ingredients.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <AboutContent
        designerImage={brandImage}
        philosophyImage={craftsmanshipImage}
        atelierVideoUrl=""
      />
    </main>
  )
}
