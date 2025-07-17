import Metadata from './metadata'
import PaginationSkeleton from './pagination-skeleton'
import usePage from '../use-page'
import PaginationBase from '@/components/pagination'

const Pagination = () => {
  const { page, perPage, totalPage, isLoading } = usePage()

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex w-full items-center justify-center md:hidden">
        <Metadata />
      </div>
      {totalPage === 0 && isLoading ? (
        <PaginationSkeleton />
      ) : (
        <PaginationBase to="/ideas" page={page} perPage={perPage} total={totalPage} isDisabled={isLoading} />
      )}
    </div>
  )
}

export default Pagination
