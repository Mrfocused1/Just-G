import { notFound } from 'next/navigation'
import CollectionSlider from '@/components/CollectionSlider'
import AnimationWrapper from '@/components/AnimationWrapper'
import { searchPexelsPhotos, pexelsQueries } from '@/lib/pexels'

const collectionDescriptions = {
  ethereal: {
    title: 'Ethereal',
    description: 'Delicate dreams captured in silk and lace. The Ethereal collection embodies romance and grace with flowing silhouettes, intricate lacework, and ethereal fabrics that dance with every movement.',
    query: pexelsQueries.collections.ethereal,
  },
  signature: {
    title: 'Signature',
    description: 'Timeless elegance for the modern bride. Our Signature collection features classic silhouettes reimagined with contemporary details, luxurious fabrics, and impeccable tailoring.',
    query: pexelsQueries.collections.signature,
  },
  timeless: {
    title: 'Timeless',
    description: 'Classic silhouettes with contemporary grace. The Timeless collection honors traditional bridal elegance while incorporating modern cuts and luxurious details for the discerning bride.',
    query: pexelsQueries.collections.timeless,
  },
}

const gownNames = {
  ethereal: ['Celestia', 'Aurora', 'Seraphina', 'Luna'],
  signature: ['Valentina', 'Isabella', 'Anastasia', 'Victoria'],
  timeless: ['Grace', 'Elizabeth', 'Catherine', 'Margaret'],
}

const gownDescriptions = {
  ethereal: [
    'A-line gown with hand-embroidered floral lace and flowing silk tulle train. Features delicate off-shoulder sleeves and pearl button detailing.',
    'Romantic ballgown with layers of soft tulle and Chantilly lace bodice. Adorned with crystal embellishments and a dramatic cathedral train.',
    'Ethereal sheath dress in silk chiffon with illusion neckline and hand-beaded floral appliqués cascading down the skirt.',
    'Flowing empire waist gown with draped silk organza and delicate flutter sleeves. Features an open back with pearl detailing.',
  ],
  signature: [
    'Structured mermaid gown in duchess satin with plunging V-neckline. Features architectural seaming and a dramatic chapel train.',
    'Classic A-line in mikado silk with modern bateau neckline and statement bow detail. Includes hidden pockets and buttons to train.',
    'Sophisticated column dress in crepe with cowl back and subtle train. Features long fitted sleeves and minimal embellishment.',
    'Regal ballgown with structured corset bodice and full silk taffeta skirt. Adorned with hand-placed lace appliqués.',
  ],
  timeless: [
    'Classic ballgown with sweetheart neckline and full organza skirt. Features hand-sewn pearl and crystal embroidery on bodice.',
    'Elegant fit-and-flare in Alençon lace over silk. Features illusion long sleeves and a dramatic lace-edged train.',
    'Refined A-line with bateau neckline and cap sleeves. Crafted in silk mikado with clean lines and subtle beading.',
    'Sophisticated trumpet gown in silk satin with portrait collar and long sleeves. Features covered buttons and chapel train.',
  ],
}

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const collectionInfo = collectionDescriptions[params.slug as keyof typeof collectionDescriptions]

  if (!collectionInfo) {
    notFound()
  }

  // Fetch gown images from Pexels
  const photos = await searchPexelsPhotos(collectionInfo.query, 4)

  const gowns = photos.slice(0, 4).map((photo, index) => ({
    id: String(index + 1),
    name: gownNames[params.slug as keyof typeof gownNames][index],
    description: gownDescriptions[params.slug as keyof typeof gownDescriptions][index],
    image: photo.src.large2x,
  }))

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <AnimationWrapper>
            <h1 className="heading-xl mb-8">{collectionInfo.title}</h1>
          </AnimationWrapper>
          <AnimationWrapper delay={0.2}>
            <p className="body-lg text-primary/80 max-w-3xl mx-auto">
              {collectionInfo.description}
            </p>
          </AnimationWrapper>
        </div>

        {/* Collection Slider */}
        <CollectionSlider gowns={gowns} />
      </div>
    </main>
  )
}
