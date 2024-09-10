import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
  loader: ({ context }) => {
    return context
  },
})

function Home() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Button onClick={() => console.log('click click')}>Klick klick</Button>
    </div>
  )
}
