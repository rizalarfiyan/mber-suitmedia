const CardSkeleton = () => (
  <div className="border-secondary-200 shadow-card flex flex-col items-center justify-center overflow-hidden rounded-md border">
    <div className="bg-secondary-100 aspect-video h-auto w-full">
      <div className="bg-secondary-200 h-full w-full animate-pulse rounded-md"></div>
    </div>
    <div className="w-full flex-1 p-5">
      <div className="bg-secondary-200 mb-3 h-4 w-full max-w-32 animate-pulse rounded-md"></div>
      <div className="bg-secondary-200 mb-1.5 h-6 w-full animate-pulse rounded-md"></div>
      <div className="bg-secondary-200 h-6 w-full max-w-3/4 animate-pulse rounded-md"></div>
    </div>
  </div>
)

export default CardSkeleton
