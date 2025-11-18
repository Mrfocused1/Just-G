'use client'

import { usePreloadAssets } from '@/hooks/usePreloadAssets'
import LoadingScreen from './LoadingScreen'
import Hero from './Hero'
import HomeContent from './HomeContent'

interface Collection {
  title: string
  description: string
  image: string
  slug: string
}

interface HomePageWrapperProps {
  heroVideoUrl?: string
  parallaxImage?: string
  mobileHeroImage?: string
  collections: Collection[]
  campaignVideoUrl?: string
  atelierImage?: string
}

export default function HomePageWrapper({
  heroVideoUrl,
  parallaxImage,
  mobileHeroImage,
  collections,
  campaignVideoUrl,
  atelierImage,
}: HomePageWrapperProps) {
  // Collect all assets to preload
  const imagesToPreload = [
    parallaxImage,
    mobileHeroImage,
    atelierImage,
    ...collections.map(c => c.image),
  ].filter((url): url is string => Boolean(url))

  const videosToPreload = [
    heroVideoUrl,
    campaignVideoUrl,
  ].filter((url): url is string => Boolean(url))

  const { progress, isLoading } = usePreloadAssets({
    images: imagesToPreload,
    videos: videosToPreload,
  })

  return (
    <>
      <LoadingScreen isLoading={isLoading} progress={progress} />

      <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {/* Hero Section */}
        <Hero
          videoSrc={heroVideoUrl}
          imageSrc={!heroVideoUrl ? parallaxImage : undefined}
          mobileImageSrc={!heroVideoUrl ? mobileHeroImage : undefined}
          title="SCULPTED PERFECTION. REFINED LUXURY."
          subtitle="Just Cream. Luxury body care designed for champions. Nourish, sculpt, and glow."
          label="BY JUST GEEN"
          totalSlides={1}
          currentSlide={0}
        />

        <HomeContent
          parallaxImage={parallaxImage || ''}
          collections={collections}
          campaignVideoUrl={campaignVideoUrl || ''}
          atelierImage={atelierImage || ''}
        />
      </main>
    </>
  )
}
