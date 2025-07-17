import LazyImage from '@/components/lazy-image'
import { dateFormat } from '@/utils/date'
import type { IdeasItem } from '../types'

const Card = ({ slug, title, published_at, image }: IdeasItem) => (
  <div className="border-secondary-200 shadow-card group flex flex-col items-center justify-center overflow-hidden rounded-md border">
    <div className="bg-secondary-100 relative flex aspect-video h-auto w-full items-center justify-center overflow-hidden">
      <div className="bg-primary-600/20 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <LazyImage
        className="transition-transform duration-300 group-hover:scale-105"
        srcSmall={image?.small}
        srcMedium={image?.medium}
        alt={title}
      />
    </div>
    <div className="w-full flex-1 space-y-1.5 p-5">
      <p className="text-secondary-500 text-sm">{dateFormat(published_at)}</p>
      <a href={`/ideas/${slug}`} target="_blank" rel="noopener noreferrer">
        <h3 className="hover:text-primary-600 decoration-primary-600 line-clamp-3 text-xl leading-tight font-semibold underline-offset-2 transition-colors duration-300 group-hover:underline hover:underline">
          {title}
        </h3>
      </a>
    </div>
  </div>
)

export default Card
