import Card from './card'
import usePage from '../use-page'

const ListCard = () => {
  const { data } = usePage()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map(idea => (
        <Card key={idea.id} {...idea} />
      ))}
    </div>
  )
}

export default ListCard
