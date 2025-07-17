import { DEFAULT_PAGE_SIZE, DEFAULT_SORT } from '@/constants'
import { useAxios } from '@/libs/axios'
import { Route } from '@/routes/_public/ideas'
import { createContext, useMemo } from 'react'
import type { IdeasItem, IdeasResponse } from './types'
import type { ListResponse, SortType } from '@/types'
import type { PropsWithChildren } from 'react'

interface PageContextProps {
  perPage: number
  page: number
  sort: SortType
  isLoading: boolean
  error?: string
  totalPage: number
  data: IdeasItem[]
}

const PageContext = createContext<PageContextProps | undefined>(undefined)

const parseSort = (sort: SortType): string => {
  switch (sort) {
    case 'oldest':
      return 'published_at'
    default:
      return '-published_at'
  }
}

const Provider = ({ children }: PropsWithChildren) => {
  const params = Route.useSearch()
  const { perPage, page, sort } = useMemo(
    () => ({
      perPage: params.perPage ?? DEFAULT_PAGE_SIZE.value,
      page: params.page ?? 1,
      sort: params.sort ?? DEFAULT_SORT.value,
    }),
    [params],
  )

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
      page,
      sort,
      isLoading: loading,
      error: error ? 'Failed to fetch ideas data' : undefined,
      totalPage: data?.meta?.total || 0,
      data: (data?.data || []).map(
        (val): IdeasItem => ({
          id: val.id,
          slug: val.slug,
          title: val.title,
          published_at: val.published_at,
          image: {
            small: val?.small_image?.[0].url,
            medium: val?.medium_image?.[0].url,
          },
        }),
      ),
    }),
    [perPage, page, sort, error, loading, data],
  )

  return <PageContext.Provider value={values}>{children}</PageContext.Provider>
}

export default Provider
export { PageContext }
export type { PageContextProps }
