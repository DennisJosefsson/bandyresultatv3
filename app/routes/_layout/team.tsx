import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/team')({
  component: () => <div>Hello /_layout/team!</div>
})