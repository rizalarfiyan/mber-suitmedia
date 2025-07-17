import usePage from '../use-page'

const Metadata = () => {
  const { page, perPage, totalPage, isLoading } = usePage()

  if (isLoading) {
    return <div className="bg-secondary-200 h-6 w-full max-w-60 animate-pulse rounded-md"></div>
  }

  return (
    <div>
      Showing {page} - {Math.ceil(totalPage / perPage) || 0} of {totalPage}
    </div>
  )
}

export default Metadata
