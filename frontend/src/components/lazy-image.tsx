import { cn } from '@/utils/class-name'
import { useState, useEffect, useRef } from 'react'

const DEFAULT_IMAGE_NOT_FOUND = '/assets/images/image-not-found.svg'
const DEFAULT_IMAGE_BROKEN = '/assets/images/image-broken.svg'

interface LazyImageProps {
  srcSmall?: string
  srcMedium?: string
  alt: string
  className?: string
}

const LazyImage = ({ srcSmall, srcMedium, alt, className }: LazyImageProps) => {
  const initialSrc = srcSmall ?? srcMedium ?? DEFAULT_IMAGE_NOT_FOUND
  const targetSrc = srcMedium ?? initialSrc

  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(initialSrc === targetSrc)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (isLoaded || hasError) return

    const element = imageRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          const img = new Image()
          img.src = targetSrc
          img.onload = () => setIsLoaded(true)
          img.onerror = () => setHasError(true)
          observer.unobserve(element)
        }
      },
      { rootMargin: '100px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isLoaded, hasError, targetSrc])

  const handleError = () => {
    if (hasError) return
    setHasError(true)
  }

  const currentSrc = hasError ? DEFAULT_IMAGE_BROKEN : isLoaded ? targetSrc : initialSrc

  return (
    <img
      ref={imageRef}
      src={currentSrc}
      alt={alt}
      className={cn(
        'transition-filter h-auto w-full duration-500',
        {
          'blur-md filter': !isLoaded && !hasError && srcSmall,
          'blur-0 filter': isLoaded || hasError,
        },
        className,
      )}
      onError={handleError}
      loading="lazy"
    />
  )
}

export default LazyImage
