import usePage from '../use-page'
import PaginationBase from '@/components/pagination'

const Pagination = () => {
  const { page, perPage, totalPage } = usePage()

  return (
    <div className="flex justify-center">
      <PaginationBase to="/ideas" page={page} perPage={perPage} total={totalPage} />
    </div>
  )
}

export default Pagination
