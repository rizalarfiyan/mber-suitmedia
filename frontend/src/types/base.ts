import type { PAGE_SIZES, SORTS } from '@/constants'

export type SortType = (typeof SORTS)[number]
export type PageSizeType = (typeof PAGE_SIZES)[number]

export type ImageSize = {
  small: string
  medium: string
}
