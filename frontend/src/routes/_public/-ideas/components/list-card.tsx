import usePage from '../use-page'

const ListCard = () => {
  const { data } = usePage()

  return (
    <div>
      {data.map(idea => (
        <div key={idea.id} className="mb-4 rounded border p-4">
          <h3 className="text-lg font-semibold">{idea.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ListCard
