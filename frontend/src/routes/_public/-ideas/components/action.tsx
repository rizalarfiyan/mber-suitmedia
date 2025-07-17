import usePage from '../use-page'
import Select from '@/components/select'
import { PAGE_SIZE_LIST, SORT_LIST } from '@/constants'
import { Route } from '@/routes/_public/ideas'
import { useNavigate } from '@tanstack/react-router'

const Action = () => {
  const { page, perPage, totalPage, sort, isLoading } = usePage()
  const navigate = useNavigate({ from: Route.fullPath })

  const updateQuery = (name: string, value: unknown) => {
    navigate({
      search: prev => {
        if (name === 'perPage') prev.page = 1
        return { ...prev, [name]: value }
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      {isLoading ? (
        <div className="bg-secondary-200 h-6 w-full max-w-60 animate-pulse rounded-md"></div>
      ) : (
        <div>
          Showing {page} - {Math.ceil(totalPage / perPage) || 0} of {totalPage}
        </div>
      )}
      <div className="flex flex-col items-end justify-center gap-4 sm:flex-row sm:items-center">
        <Select
          onValueChange={val => updateQuery('perPage', val)}
          defaultValue={perPage}
          disabled={isLoading}
          className="w-36"
          label="Show per page"
          options={PAGE_SIZE_LIST}
        />
        <Select
          onValueChange={val => updateQuery('sort', val)}
          defaultValue={sort}
          disabled={isLoading}
          className="w-36"
          label="Short by"
          options={SORT_LIST}
        />
      </div>
    </div>
  )
}

export default Action
