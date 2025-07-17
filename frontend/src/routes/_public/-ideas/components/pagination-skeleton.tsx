const PaginationSkeleton = () => (
  <div className="flex justify-center gap-2">
    {Array.from({ length: 7 }).map((_, index) => (
      <div key={index} className="bg-secondary-200 border-secondary-300 size-9 animate-pulse rounded-md border" />
    ))}
  </div>
)

export default PaginationSkeleton
