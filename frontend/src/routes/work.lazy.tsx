import { createLazyFileRoute } from '@tanstack/react-router'

const RouteComponent = () => (
  <div className="flex h-full min-h-screen w-full items-center justify-center">
    <h1 className="text-4xl font-semibold text-slate-800">Work Page!</h1>
  </div>
)

export const Route = createLazyFileRoute('/work')({
  component: RouteComponent,
})
