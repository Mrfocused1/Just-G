import HomePageWrapper from '@/components/HomePageWrapper'

export default async function Home() {
  // Just Cream - Luxury Body Cream by Just Geen
  const heroImage = '/hero-image.webp'
  const mobileHeroImage = '/hero-mobile.png'
  const parallaxImage = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1920&q=80'
  const atelierImage = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1080&q=80'

  // Featured Just Cream Products
  const collections = [
    {
      title: 'Velvet Radiance',
      description: '£45.00',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1080&q=80',
      slug: 'velvet-radiance',
      type: 'Body Cream',
    },
    {
      title: 'Sculptured Glow',
      description: 'Premium - £65.00',
      image: 'https://images.unsplash.com/photo-1620876212784-ea3a2415e854?w=1080&q=80',
      slug: 'sculptured-glow',
      type: 'Premium Body Cream',
    },
    {
      title: 'Elite Renewal',
      description: 'Premium - £65.00',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1080&q=80',
      slug: 'elite-renewal',
      type: 'Premium Body Cream',
    },
  ]

  return (
    <HomePageWrapper
      heroVideoUrl={undefined}
      parallaxImage={heroImage}
      mobileHeroImage={mobileHeroImage}
      collections={collections}
      campaignVideoUrl={undefined}
      atelierImage={atelierImage}
    />
  )
}
