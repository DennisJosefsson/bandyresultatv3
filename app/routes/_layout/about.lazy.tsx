import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/about')({
  component: () => <div>Hello /_layout/about!</div>
})