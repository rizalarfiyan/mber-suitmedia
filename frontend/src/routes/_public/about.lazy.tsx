import Dummy from '@/components/dummy'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/about')({
  component: () => <Dummy title="About Page!" />,
})
