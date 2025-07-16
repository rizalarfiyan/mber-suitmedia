import { useMemo } from 'react'

const DOTS = '...'

type UsePaginationProps = {
  total: number
  perPage: number
  currentPage: number
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

const usePagination = ({ total, perPage, currentPage }: UsePaginationProps): (string | number)[] =>
  useMemo(() => {
    const totalPages = Math.ceil(total / perPage)

    if (totalPages <= 5) {
      return range(1, totalPages)
    }

    if (currentPage < 3) {
      return [1, 2, 3, DOTS, totalPages]
    }

    if (currentPage > totalPages - 2) {
      return [1, DOTS, totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, totalPages]
  }, [total, perPage, currentPage])

export default usePagination
export { DOTS }
