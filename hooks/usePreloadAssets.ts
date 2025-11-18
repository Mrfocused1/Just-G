'use client'

import { useState, useEffect } from 'react'

interface UsePreloadAssetsProps {
  images?: string[]
  videos?: string[]
}

export function usePreloadAssets({ images = [], videos = [] }: UsePreloadAssetsProps = {}) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const totalAssets = images.length + videos.length

    if (totalAssets === 0) {
      setProgress(100)
      setIsLoading(false)
      return
    }

    let loadedCount = 0

    const updateProgress = () => {
      loadedCount++
      const newProgress = Math.round((loadedCount / totalAssets) * 100)
      setProgress(newProgress)

      if (loadedCount === totalAssets) {
        // Add a small delay before hiding the loading screen
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }

    // Preload images
    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          updateProgress()
          resolve()
        }
        img.onerror = () => {
          updateProgress()
          resolve()
        }
        img.src = src
      })
    })

    // Preload videos
    const videoPromises = videos.map((src) => {
      return new Promise<void>((resolve) => {
        const video = document.createElement('video')
        video.onloadeddata = () => {
          updateProgress()
          resolve()
        }
        video.onerror = () => {
          updateProgress()
          resolve()
        }
        video.preload = 'auto'
        video.src = src
      })
    })

    // Start loading all assets
    Promise.all([...imagePromises, ...videoPromises]).catch((error) => {
      console.error('Error preloading assets:', error)
      setIsLoading(false)
    })

    // Fallback timeout - ensure loading screen doesn't stay forever
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 15000) // 15 seconds max

    return () => clearTimeout(timeout)
  }, [images, videos])

  return { progress, isLoading }
}
