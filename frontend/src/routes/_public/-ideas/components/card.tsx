import { dateFormat } from '@/utils/date'
import type { IdeasResponse } from '../types'

const Card = ({ title, published_at, small_image }: IdeasResponse) => (
  <div className="border-secondary-200 shadow-card flex flex-col items-center justify-center overflow-hidden rounded-md border">
    <div className="bg-secondary-100 aspect-video h-auto w-full">
      <img src={small_image?.[0]?.url} alt={title} />
    </div>
    <div className="w-full flex-1 space-y-1.5 p-5">
      <p className="text-sm text-gray-500">{dateFormat(published_at)}</p>
      <h3 className="line-clamp-3 text-xl leading-tight font-semibold">{title}</h3>
    </div>
  </div>
)

export default Card
