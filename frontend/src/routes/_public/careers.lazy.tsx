import Dummy from '@/components/dummy'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/careers')({
  component: () => <Dummy title="Careers Page!" />,
})
