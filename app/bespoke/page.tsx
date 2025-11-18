'use client'

import AboutContent from '@/components/AboutContent'

export default function AboutPage() {
  const designerImage = '/Generated Image November 18, 2025 - 9_44AM (1).webp'
  const philosophyImage = '/luxury-cream-3.webp'
  const atelierVideoUrl = '/atelier-video.mp4'

  return (
    <main className="pt-32">
      <AboutContent
        designerImage={designerImage}
        philosophyImage={philosophyImage}
        atelierVideoUrl={atelierVideoUrl}
      />
    </main>
  )
}
