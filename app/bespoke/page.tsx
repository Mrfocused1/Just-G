import AnimationWrapper from '@/components/AnimationWrapper'

export default async function AboutPage() {
  const founderImage = '/founder-image.png'

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimationWrapper>
              <h1 className="heading-xl mb-8">Meet Just Geen</h1>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <p className="body-lg text-primary/80 max-w-3xl mx-auto">
                London-based fitness influencer and founder of Just Cream — redefining luxury body care for athletes and champions.
              </p>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Image */}
            <AnimationWrapper animation="slideRight">
              <div className="space-y-6">
                {founderImage && (
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                    <img
                      src={founderImage}
                      alt="Just Geen - Founder of Just Cream"
                      className="w-full h-full object-cover min-w-full min-h-full"
                    />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    <img
                      src="/founder-detail-1.png"
                      alt="Just Cream detail"
                      className="w-full h-full object-cover min-w-full min-h-full"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    <img
                      src="/founder-detail-2.png"
                      alt="Just Cream detail"
                      className="w-full h-full object-cover min-w-full min-h-full"
                    />
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Content */}
            <AnimationWrapper animation="slideLeft">
              <div className="space-y-8">
                <div>
                  <p className="label-text text-accent mb-4">Just Geen</p>
                  <h2 className="heading-lg mb-8">The Founder</h2>
                  <p className="body-md text-primary/80 mb-6">
                    Just Geen is a renowned London-based fitness influencer who built a community passionate about championship-grade performance and refined luxury. After years of helping thousands transform their fitness journeys, Just Geen created Just Cream — luxury body care formulated for athletes and champions.
                  </p>
                  <p className="body-md text-primary/80 mb-6">
                    Every product is crafted with the same dedication as championship training, using only premium ingredients and advanced formulation techniques. Just Cream transforms your daily routine into a moment of refined perfection, proving that luxury and performance are not mutually exclusive.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

    </main>
  )
}
