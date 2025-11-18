import AnimationWrapper from '@/components/AnimationWrapper'
import GalleryGrid from '@/components/GalleryGrid'
import { searchPexelsPhotos, searchPexelsVideos, pexelsQueries, getPexelsVideoUrl } from '@/lib/pexels'

export default async function GalleryPage() {
  // Fetch gallery content from Pexels
  const [photos, videos] = await Promise.all([
    searchPexelsPhotos(pexelsQueries.gallery, 12),
    searchPexelsVideos(pexelsQueries.galleryVideo, 2),
  ])

  // Mix photos and videos for gallery
  const galleryItems = [
    { type: 'image' as const, src: photos[0]?.src.large2x || '', alt: 'Bridal fashion', aspectRatio: 'portrait' as const },
    { type: 'image' as const, src: photos[1]?.src.large2x || '', alt: 'Wedding dress', aspectRatio: 'landscape' as const },
    { type: 'video' as const, src: videos[0] ? getPexelsVideoUrl(videos[0], 'sd') : '', aspectRatio: 'portrait' as const },
    { type: 'image' as const, src: photos[2]?.src.large2x || '', alt: 'Luxury bridal', aspectRatio: 'square' as const },
    { type: 'image' as const, src: photos[3]?.src.large2x || '', alt: 'Elegant gown', aspectRatio: 'portrait' as const },
    { type: 'image' as const, src: photos[4]?.src.large2x || '', alt: 'Bridal couture', aspectRatio: 'landscape' as const },
    { type: 'image' as const, src: photos[5]?.src.large2x || '', alt: 'Wedding fashion', aspectRatio: 'portrait' as const },
    { type: 'video' as const, src: videos[1] ? getPexelsVideoUrl(videos[1], 'sd') : '', aspectRatio: 'landscape' as const },
    { type: 'image' as const, src: photos[6]?.src.large2x || '', alt: 'Bridal elegance', aspectRatio: 'portrait' as const },
    { type: 'image' as const, src: photos[7]?.src.large2x || '', alt: 'Wedding style', aspectRatio: 'square' as const },
    { type: 'image' as const, src: photos[8]?.src.large2x || '', alt: 'Luxury wedding', aspectRatio: 'portrait' as const },
    { type: 'image' as const, src: photos[9]?.src.large2x || '', alt: 'Bridal collection', aspectRatio: 'landscape' as const },
  ]

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimationWrapper>
            <h1 className="heading-xl mb-8">Gallery</h1>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80 max-w-3xl mx-auto">
              Immerse yourself in the artistry of Erenti. Explore our latest campaign imagery,
              editorial shoots, and behind-the-scenes moments from our London atelier.
            </p>
          </AnimationWrapper>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid items={galleryItems} />
      </div>
    </main>
  )
}
