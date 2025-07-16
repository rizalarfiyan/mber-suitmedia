import { DEFAULT_PAGE_SIZE, DEFAULT_SORT } from '@/constants'
import { useAxios } from '@/libs/axios'
import { createContext, useMemo, useState } from 'react'
import type { IdeasResponse } from './types'
import type { ListResponse, SortType } from '@/types'
import type { PropsWithChildren } from 'react'

interface PageContextProps {
  perPage: number
  setPerPage: (perPage: number) => void
  page: number
  setPage: (page: number) => void
  sort: SortType
  setSort: (sort: SortType) => void
  isLoading: boolean
  error?: string
  totalPage: number
  data: IdeasResponse[]
}

const PageContext = createContext<PageContextProps | undefined>(undefined)

const parseSort = (sort: SortType): string => {
  switch (sort) {
    case 'oldest':
      return '-published_at'
    default:
      return 'published_at'
  }
}

const Provider = ({ children }: PropsWithChildren) => {
  const [perPage, setPerPage] = useState(DEFAULT_PAGE_SIZE.value)
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState<SortType>(DEFAULT_SORT.value)

  const [{ data, error, loading }] = useAxios<ListResponse<IdeasResponse>>({
    url: '/ideas',
    params: {
      page: {
        number: page,
        size: perPage,
      },
      sort: parseSort(sort),
      append: ['small_image', 'medium_image', 'large_image'],
    },
  })

  const values = useMemo(
    () => ({
      perPage,
      setPerPage,
      page,
      setPage,
      sort,
      setSort,
      isLoading: loading,
      error: error ? 'Failed to fetch ideas data' : undefined,
      totalPage: data?.meta?.total || 0,
      data: data?.data || [],
    }),
    [perPage, page, sort, error, loading, data],
  )

  return <PageContext.Provider value={values}>{children}</PageContext.Provider>
}

export default Provider
export { PageContext }
export type { PageContextProps }
