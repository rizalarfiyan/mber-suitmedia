import { createLazyFileRoute } from '@tanstack/react-router'

const RouteComponent = () => (
  <div className="flex h-full flex-1 items-center justify-center">
    <h1 className="text-4xl font-semibold text-slate-800">Contact Page!</h1>
  </div>
)

export const Route = createLazyFileRoute('/_public/contact')({
  component: RouteComponent,
})
