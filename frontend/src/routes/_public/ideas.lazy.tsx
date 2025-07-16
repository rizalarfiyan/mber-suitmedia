import IdeasPage from './-ideas/page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/ideas')({
  component: IdeasPage,
})
