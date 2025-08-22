import { useState, useEffect, useRef } from 'react'

export const useLazyImage = (src, alt) => {
  const [imageSrc, setImageSrc] = useState('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"/%3E')
  const [imageRef, setImageRef] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const observerRef = useRef()

  useEffect(() => {
    if (imageRef) {
      if (IntersectionObserver) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsInView(true)
                observerRef.current.disconnect()
              }
            })
          },
          {
            rootMargin: '50px'
          }
        )
        observerRef.current.observe(imageRef)
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setIsInView(true)
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [imageRef])

  useEffect(() => {
    if (isInView) {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
      }
      img.onerror = () => {
        setImageSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"/%3E')
        setIsLoaded(false)
      }
    }
  }, [src, isInView])

  return {
    imageSrc,
    imageRef: setImageRef,
    isLoaded,
    alt
  }
} 