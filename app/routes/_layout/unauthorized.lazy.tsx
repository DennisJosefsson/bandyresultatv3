import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/unauthorized')({
  component: () => <div>Hello /_layout/unauthorized!</div>
})