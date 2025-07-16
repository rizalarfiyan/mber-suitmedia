import { PAGE_SIZES, SORTS } from '@/constants'
import { createFileRoute } from '@tanstack/react-router'
import type { SortType, PageSizeType } from '@/types'

export const Route = createFileRoute('/_public/ideas')({
  validateSearch: (search: Record<string, unknown>) => {
    let sort = search['sort'] as SortType | undefined
    if (sort && !SORTS.includes(sort)) {
      sort = undefined
    }

    let page = search['page'] as number | undefined
    if (page !== undefined && (typeof page !== 'number' || page < 1)) {
      page = undefined
    }

    let perPage = search['perPage'] as PageSizeType | undefined
    if (perPage !== undefined && (typeof perPage !== 'number' || perPage < 1) && !PAGE_SIZES.includes(perPage)) {
      perPage = undefined
    }

    return {
      sort,
      page,
      perPage,
    }
  },
})
