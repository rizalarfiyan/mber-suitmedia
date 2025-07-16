import type { SortType } from './types'
import type { Option } from '@/components/select'

export const APP_NAME = 'Suitmedia'

export const HEADER_VISIBILITY_THRESHOLD = 80
export const HEADER_BG_CHANGE_THRESHOLD = 50
export const DESKTOP_BREAKPOINT = 768

export const PAGE_SIZES = [8, 16, 32] as const

export const PAGE_SIZE_LIST: Option<number>[] = [
  {
    label: '8',
    value: PAGE_SIZES[0],
  },
  {
    label: '16',
    value: PAGE_SIZES[1],
  },
  {
    label: '32',
    value: PAGE_SIZES[2],
  },
]

export const SORTS = ['newest', 'oldest'] as const

export const SORT_LIST: Option<SortType>[] = [
  {
    label: 'Newest',
    value: SORTS[0],
  },
  {
    label: 'Oldest',
    value: SORTS[1],
  },
]

export const DEFAULT_PAGE_SIZE = PAGE_SIZE_LIST[0]
export const DEFAULT_SORT = SORT_LIST[0]

export const BASE_API_URL = 'https://suitmedia-backend.suitdev.com/api'

export const DEFAULT_DATE_FORMAT = 'D MMMM YYYY'
