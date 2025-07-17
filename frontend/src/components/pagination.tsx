import usePagination, { DOTS } from '@/hooks/use-pagination'
import { cn } from '@/utils/class-name'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import type { FileRouteTypes } from '@/routeTree.gen'

interface PaginationProps {
  to: FileRouteTypes['fullPaths']
  page: number
  perPage: number
  total: number
  isDisabled?: boolean
}

const Pagination = ({ to, page, perPage, total, isDisabled }: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage)
  const paginationRange = usePagination({ currentPage: page, total, perPage })

  if (totalPages <= 1) {
    return null
  }

  const buttonClasses = cn(
    'flex size-9 items-center justify-center border border-secondary-200 bg-white rounded-md text-sm font-medium text-secondary-700 transition-colors',
    'hover:bg-secondary-100',
  )

  const disabledClasses = 'border-secondary-200 bg-secondary-100 text-secondary-400 cursor-not-allowed'
  const activeClasses = 'border-primary-600 bg-primary-600 text-white hover:bg-primary-700'

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center gap-2 text-sm">
        <li>
          <Link
            to={to}
            search={prev => ({ ...prev, page: 1 })}
            className={cn(buttonClasses, {
              [disabledClasses]: page === 1 || isDisabled,
            })}
            disabled={page === 1}
            aria-disabled={page === 1}>
            <ChevronsLeft className="size-4" />
          </Link>
        </li>
        <li>
          <Link
            to={to}
            search={prev => ({ ...prev, page: page - 1 })}
            className={cn(buttonClasses, {
              [disabledClasses]: page === 1 || isDisabled,
            })}
            disabled={page === 1}
            aria-disabled={page === 1}>
            <ChevronLeft className="size-4" />
          </Link>
        </li>
        <li className="block sm:hidden">
          <span className="text-secondary-500 flex h-9 items-center justify-center px-4">{DOTS}</span>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={`${DOTS}-${index}`} className="hidden sm:block">
                <span className="text-secondary-500 flex h-9 items-center justify-center px-4">{DOTS}</span>
              </li>
            )
          }
          return (
            <li key={pageNumber} className="hidden sm:flex">
              <Link
                to={to}
                search={prev => ({ ...prev, page: pageNumber })}
                className={cn(buttonClasses, {
                  [activeClasses]: page === pageNumber,
                  [disabledClasses]: isDisabled,
                })}>
                {pageNumber}
              </Link>
            </li>
          )
        })}
        <li>
          <Link
            to={to}
            search={prev => ({ ...prev, page: page + 1 })}
            className={cn(buttonClasses, {
              [disabledClasses]: page === totalPages || isDisabled,
            })}
            disabled={page === totalPages}
            aria-disabled={page === totalPages}>
            <ChevronRight className="size-4" />
          </Link>
        </li>
        <li>
          <Link
            to={to}
            search={prev => ({ ...prev, page: totalPages })}
            className={cn(buttonClasses, {
              [disabledClasses]: page === totalPages || isDisabled,
            })}
            disabled={page === totalPages}
            aria-disabled={page === totalPages}>
            <ChevronsRight className="size-4" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
