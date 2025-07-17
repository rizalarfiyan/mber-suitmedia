import { cn } from '@/utils/class-name'

const PaginationSkeleton = () => (
  <div className="flex justify-center gap-2">
    {Array.from({ length: 7 }).map((_, index) => (
      <div
        key={index}
        className={cn('bg-secondary-200 border-secondary-300 size-9 animate-pulse rounded-md border', {
          'hidden sm:block': index > 4,
        })}
      />
    ))}
  </div>
)

export default PaginationSkeleton
