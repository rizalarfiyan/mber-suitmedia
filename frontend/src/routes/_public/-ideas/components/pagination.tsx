import PaginationSkeleton from './pagination-skeleton'
import usePage from '../use-page'
import PaginationBase from '@/components/pagination'

const Pagination = () => {
  const { page, perPage, totalPage, isLoading } = usePage()

  return (
    <div className="flex justify-center">
      {totalPage === 0 && isLoading ? (
        <PaginationSkeleton />
      ) : (
        <PaginationBase to="/ideas" page={page} perPage={perPage} total={totalPage} isDisabled={isLoading} />
      )}
    </div>
  )
}

export default Pagination
