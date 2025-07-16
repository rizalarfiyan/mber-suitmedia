import { HEADER_BG_CHANGE_THRESHOLD, HEADER_VISIBILITY_THRESHOLD } from '@/constants'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const useHeaderVisibility = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY.current && currentScrollY > HEADER_VISIBILITY_THRESHOLD) {
      setHeaderVisible(false)
    } else {
      setHeaderVisible(true)
    }
    lastScrollY.current = currentScrollY
    setScrollY(currentScrollY)
  }, [])

  useEffect(() => {
    const memoizedHandleScroll = handleScroll
    window.addEventListener('scroll', memoizedHandleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', memoizedHandleScroll)
    }
  }, [handleScroll])

  return useMemo(
    () => ({
      isHeaderVisible,
      shouldChangeBg: scrollY > HEADER_BG_CHANGE_THRESHOLD,
    }),
    [isHeaderVisible, scrollY],
  )
}

export default useHeaderVisibility
