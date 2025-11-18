const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || '8sLoMXg5fX4DKdmX8sSFxebcYNbdcwU6VizqTp4YRdrJ7a3MVlwc9qpp'

interface PexelsPhoto {
  id: number
  width: number
  height: number
  url: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
  }
}

interface PexelsVideo {
  id: number
  width: number
  height: number
  duration: number
  video_files: Array<{
    id: number
    quality: string
    file_type: string
    width: number
    height: number
    link: string
  }>
}

export async function searchPexelsPhotos(query: string, perPage: number = 15): Promise<PexelsPhoto[]> {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=portrait`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Pexels')
    }

    const data = await response.json()
    return data.photos || []
  } catch (error) {
    console.error('Pexels API error:', error)
    return []
  }
}

export async function searchPexelsVideos(query: string, perPage: number = 5): Promise<PexelsVideo[]> {
  try {
    const response = await fetch(
      `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch videos from Pexels')
    }

    const data = await response.json()
    return data.videos || []
  } catch (error) {
    console.error('Pexels video API error:', error)
    return []
  }
}

export function getPexelsVideoUrl(video: PexelsVideo, quality: 'hd' | 'sd' = 'hd'): string {
  const videoFile = video.video_files.find(
    (file) => file.quality === quality && file.file_type === 'video/mp4'
  ) || video.video_files[0]

  return videoFile?.link || ''
}

// Curated collections for specific use cases
export const pexelsQueries = {
  heroVideo: 'luxury wedding dress elegant',
  campaignVideo: 'bridal fashion runway',
  galleryVideo: 'wedding dress elegant',
  atelierVideo: 'fashion designer sewing',

  heroImage: 'luxury wedding dress',
  bridalPortrait: 'bride elegant portrait',
  weddingDress: 'wedding dress white elegant',
  atelierCraftsmanship: 'fashion designer working',
  boutiqueInterior: 'luxury boutique interior',
  designerPortrait: 'fashion designer portrait',

  collections: {
    ethereal: 'ethereal wedding dress romantic',
    signature: 'luxury wedding gown elegant',
    timeless: 'classic wedding dress sophisticated',
  },

  gallery: 'bridal fashion luxury wedding',
}
