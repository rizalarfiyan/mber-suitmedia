import Metadata from './metadata'
import usePage from '../use-page'
import Select from '@/components/select'
import { PAGE_SIZE_LIST, SORT_LIST } from '@/constants'
import { Route } from '@/routes/_public/ideas'
import { useNavigate } from '@tanstack/react-router'

const Action = () => {
  const { perPage, sort, isLoading } = usePage()
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
      <div className="hidden w-full md:flex">
        <Metadata />
      </div>
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
