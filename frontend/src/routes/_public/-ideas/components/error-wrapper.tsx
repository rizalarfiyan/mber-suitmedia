import usePage from '../use-page'
import { TriangleAlert } from 'lucide-react'
import type { PropsWithChildren } from 'react'

const ErrorWrapper = ({ children }: PropsWithChildren) => {
  const { error } = usePage()

  if (!error) return children

  return (
    <div className="flex h-full min-h-96 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1">
        <TriangleAlert className="size-32 text-red-600" />
        <h1 className="text-secondary-800 text-2xl font-bold">{error}</h1>
        <p className="text-secondary-600">Please try again later.</p>
      </div>
    </div>
  )
}

export default ErrorWrapper
