import Card from './card'
import CardSkeleton from './card-skeleton'
import usePage from '../use-page'

const ListCard = () => {
  const { data, perPage, isLoading } = usePage()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading
        ? Array.from({ length: perPage }).map((_, index) => <CardSkeleton key={index} />)
        : data.map(idea => <Card key={idea.id} {...idea} />)}
    </div>
  )
}

export default ListCard
