import { PAGE_SIZES, SORTS } from '@/constants'
import { createFileRoute } from '@tanstack/react-router'
import type { PageSizeType, SortType } from '@/types'

export const Route = createFileRoute('/_public/ideas')({
  validateSearch: (search: Record<string, string>): undefined | object => {
    let sort = search['sort'] as SortType | undefined
    if (sort && !SORTS.includes(sort)) {
      sort = undefined
    }

    const parseNum = (value: string): number | undefined => {
      const val = parseInt(value)
      if (isNaN(val) || val < 0) return undefined
      return val
    }

    const page = parseNum(search['page'])
    let perPage = parseNum(search['perPage'])
    if (!PAGE_SIZES.includes(perPage as PageSizeType)) {
      perPage = undefined
    }

    return {
      sort,
      page,
      perPage,
    }
  },
})
