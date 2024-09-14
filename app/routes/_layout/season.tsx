import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/season')({
  component: () => <div>Hello /_layout/season!</div>
})