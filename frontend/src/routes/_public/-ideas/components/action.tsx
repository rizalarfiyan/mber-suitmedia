import usePage from '../use-page'
import Select from '@/components/select'
import { PAGE_SIZE_LIST, SORT_LIST } from '@/constants'
import { Route } from '@/routes/_public/ideas'
import { useNavigate } from '@tanstack/react-router'

const Action = () => {
  const { page, perPage, totalPage, sort, isLoading } = usePage()
  const navigate = useNavigate({ from: Route.fullPath })

  const updateQuery = (name: string, value: unknown) => {
    navigate({ search: prev => ({ ...prev, [name]: value }) })
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        Showing {page} - {Math.ceil(totalPage / perPage) || 0} of {totalPage}
      </div>
      <div className="flex items-center justify-center gap-4">
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
